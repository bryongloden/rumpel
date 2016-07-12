"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var HAT_PORT = 8080;
var HatApiService = (function () {
    function HatApiService(_http) {
        this._http = _http;
    }
    HatApiService.prototype.getUrl = function () {
        return this._baseUrl;
    };
    HatApiService.prototype.updateCredentials = function (domain, token) {
        this._baseUrl = 'http://' + domain + ':' + HAT_PORT;
        this._token = token;
        this._headers = new http_1.Headers();
        this._headers.append('Content-Type', 'application/json');
        this._headers.append('X-Auth-Token', this._token);
    };
    HatApiService.prototype.validateToken = function (domain, token) {
        this.updateCredentials(domain, token);
        var url = this._baseUrl + '/users/access_token/validate';
        return this._http.get(url, { headers: this._headers }).map(function (res) { return res.json(); });
    };
    HatApiService.prototype.getDataSources = function () {
        var url = this._baseUrl + '/data/sources';
        return this._http.get(url, { headers: this._headers });
    };
    HatApiService.prototype.getAllValuesOf = function (name, source) {
        var _this = this;
        return this.getTable(name, source)
            .flatMap(function (table) { return _this.getValues(table.id); });
    };
    HatApiService.prototype.getTable = function (name, source) {
        var url = this._baseUrl + '/data/table';
        var query = new http_1.URLSearchParams();
        query.append('name', name);
        query.append('source', source);
        console.log('Getting table values: ', name, source);
        return this._http.get(url, { headers: this._headers, search: query })
            .map(function (res) { return res.json(); });
    };
    HatApiService.prototype.getModel = function (tableId) {
        var url = this._baseUrl + '/data/table/' + tableId;
        return this._http.get(url, { headers: this._headers })
            .map(function (res) { return res.json(); });
    };
    HatApiService.prototype.getModelMapping = function (tableId) {
        var _this = this;
        return this.getModel(tableId)
            .map(function (rawModel) { return _this.mapDataSource(rawModel, rawModel.name); });
    };
    HatApiService.prototype.postModel = function (model) {
        var _this = this;
        var url = this._baseUrl + '/data/table';
        return this._http.post(url, model, { headers: this._headers })
            .map(function (res) { return res.json(); })
            .map(function (rawModel) { return _this.mapDataSource(rawModel, rawModel.name); });
    };
    HatApiService.prototype.postRecord = function (obj, hatIdMapping, prefix) {
        if (prefix === void 0) { prefix = 'default'; }
        var url = this._baseUrl + '/data/record/values';
        var hatFormattedObj = this.createRecord(obj, hatIdMapping, prefix);
        return this._http.post(url, hatFormattedObj, { headers: this._headers });
    };
    HatApiService.prototype.getValues = function (tableId) {
        var _this = this;
        var url = this._baseUrl + '/data/table/' + tableId + '/values';
        return this._http.get(url, { headers: this._headers })
            .map(function (res) { return res.json(); })
            .map(function (body) { return _this.transform(body); });
    };
    HatApiService.prototype.getDataDebit = function (uuid) {
        var url = this._baseUrl + '/dataDebit/' + uuid + '/values';
        return this._http.get(url, { headers: this._headers })
            .map(function (res) { return res.json(); });
    };
    HatApiService.prototype.updateDataDebit = function (uuid, state) {
        var url = this._baseUrl + '/directDebit/' + uuid + '/' + state;
        return this._http.put(url, {}, { headers: this._headers });
    };
    HatApiService.prototype.createRecord = function (obj, hatIdMapping, prefix) {
        var _this = this;
        if (Array.isArray(obj)) {
            return obj.map(function (record) {
                return {
                    record: { name: new Date() },
                    values: _this.createValue(record, hatIdMapping, prefix)
                };
            });
        }
        else {
            return [{
                    record: { name: new Date() },
                    values: this.createValue(obj, hatIdMapping, prefix)
                }];
        }
    };
    HatApiService.prototype.createValue = function (obj, hatIdMapping, prefix) {
        var _this = this;
        if (prefix === void 0) { prefix = 'default'; }
        return Object.keys(obj).reduce(function (acc, key) {
            if (typeof obj[key] === 'object') {
                var subTreeValues = _this.createValue(obj[key], hatIdMapping, prefix + '_' + key);
                acc = acc.concat(subTreeValues);
            }
            else {
                acc.push({
                    value: '' + obj[key],
                    field: {
                        id: hatIdMapping[prefix + '_' + key],
                        name: key
                    }
                });
            }
            return acc;
        }, []);
    };
    HatApiService.prototype.mapDataSource = function (table, prefix) {
        var _this = this;
        if (prefix === void 0) { prefix = 'default'; }
        var mapping = {};
        table.fields.reduce(function (acc, field) {
            acc[prefix + '_' + field.name] = field.id;
            return acc;
        }, mapping);
        if (table.subTables) {
            var mappedSubTables = table.subTables.reduce(function (acc, table) {
                var mappedTable = _this.mapDataSource(table, prefix + '_' + table.name);
                Object.assign(acc, mappedTable);
                return acc;
            }, mapping);
        }
        return mapping;
    };
    HatApiService.prototype.transform = function (raw) {
        var _this = this;
        return raw.map(function (record) {
            return _this.processNode(record.tables[0]);
        });
    };
    HatApiService.prototype.processNode = function (node) {
        var _this = this;
        var values = {};
        node.fields.reduce(function (acc, field) {
            if (field.values) {
                acc[field.name] = field.values[0].value;
            }
            else {
                acc[field.name] = null;
            }
            return acc;
        }, values);
        if (node.subTables) {
            node.subTables.reduce(function (acc, table) {
                acc[table.name] = _this.processNode(table);
                return acc;
            }, values);
        }
        return values;
    };
    HatApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HatApiService);
    return HatApiService;
}());
exports.HatApiService = HatApiService;
//# sourceMappingURL=hat-api.service.js.map