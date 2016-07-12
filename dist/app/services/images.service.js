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
var Rx_1 = require('rxjs/Rx');
var hat_api_service_1 = require('./hat-api.service');
var ImagesService = (function () {
    function ImagesService(_http, _hat) {
        var _this = this;
        this._http = _http;
        this._hat = _hat;
        this._authBearer = "Bearer Ntiog9K4PcsAAAAAAAAFwpbDzzEsJTTSl_ot1nMF4jjY-kxuKmzhwCk_qaeQ6CnN";
        this._dataLoaded = false;
        this._store = { images: [] };
        this.images$ = new Rx_1.Observable(function (observer) { return _this._imagesObserver = observer; }).share();
        this.dropbox$ = new Rx_1.Observable(function (observer) { return _this._dropboxObserver = observer; }).share();
    }
    ImagesService.prototype.loadAll = function () {
        var _this = this;
        if (this._dataLoaded)
            return Rx_1.Observable.of(this._store.images);
        this._hat.getAllValuesOf('photos', 'dropbox')
            .map(function (data) { return data.map(_this.imgMap); })
            .subscribe(function (newImages) {
            _this._dataLoaded = true;
            _this._store.images = newImages;
            _this.downloadImages();
        }, function (err) { return console.log('There was an error loading images from HAT', err); });
    };
    ImagesService.prototype.imgMap = function (image) {
        return {
            source: image.path_lower,
            url: null,
            start: image.media_info.metadata.time_taken
        };
    };
    ImagesService.prototype.downloadImages = function () {
        var boundDownload = this.downloadThumbnail.bind(this);
        this._store.images.forEach(function (image) {
            boundDownload(image, 'w640h480');
        });
    };
    ImagesService.prototype.downloadThumbnail = function (image, size) {
        if (size === void 0) { size = "w128h128"; }
        var dropboxApiArg = "{\"path\":\"" + image.source + "\",\"size\":{\".tag\":\"" + size + "\"}}";
        var xhr = new XMLHttpRequest();
        var decoder = this.base64ArrayBuffer.bind(this);
        var obs = this._imagesObserver;
        xhr.open("GET", "https://content.dropboxapi.com/2/files/get_thumbnail", true); // method, url, async
        xhr.responseType = 'arraybuffer';
        xhr.setRequestHeader("Authorization", this._authBearer);
        xhr.setRequestHeader('Dropbox-API-Arg', dropboxApiArg);
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState == 4) {
                // Construct a response object similar to a regular $http call
                //
                // data – {string|Object} – The response body transformed with the transform functions.
                // status – {number} – HTTP status code of the response.
                // headers – {function([headerName])} – Header getter function.
                // config – {Object} – The configuration object that was used to generate the request.
                var r = {
                    data: { path: image.source, content: 'data: image/jpg;base64,' + decoder(xhr.response) },
                    status: xhr.status,
                    headers: xhr.getResponseHeader,
                    config: {}
                };
                image.url = r.data.content;
                obs.next(image);
            }
        };
        // This is only available in XHR2, provide multipart fallback
        // if necessary
        xhr.send();
        return obs;
    };
    ImagesService.prototype.base64ArrayBuffer = function (arrayBuffer) {
        var base64 = '';
        var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        var bytes = new Uint8Array(arrayBuffer);
        var byteLength = bytes.byteLength;
        var byteRemainder = byteLength % 3;
        var mainLength = byteLength - byteRemainder;
        var a, b, c, d;
        var chunk;
        // Main loop deals with bytes in chunks of 3
        for (var i = 0; i < mainLength; i = i + 3) {
            // Combine the three bytes into a single integer
            chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
            // Use bitmasks to extract 6-bit segments from the triplet
            a = (chunk & 16515072) >> 18; // 16515072 = (2^6 - 1) << 18
            b = (chunk & 258048) >> 12; // 258048   = (2^6 - 1) << 12
            c = (chunk & 4032) >> 6; // 4032     = (2^6 - 1) << 6
            d = chunk & 63; // 63       = 2^6 - 1
            // Convert the raw binary segments to the appropriate ASCII encoding
            base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
        }
        // Deal with the remaining bytes and padding
        if (byteRemainder == 1) {
            chunk = bytes[mainLength];
            a = (chunk & 252) >> 2; // 252 = (2^6 - 1) << 2
            // Set the 4 least significant bits to zero
            b = (chunk & 3) << 4; // 3   = 2^2 - 1
            base64 += encodings[a] + encodings[b] + '==';
        }
        else if (byteRemainder == 2) {
            chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];
            a = (chunk & 64512) >> 10; // 64512 = (2^6 - 1) << 10
            b = (chunk & 1008) >> 4; // 1008  = (2^6 - 1) << 4
            // Set the 2 least significant bits to zero
            c = (chunk & 15) << 2; // 15    = 2^4 - 1
            base64 += encodings[a] + encodings[b] + encodings[c] + '=';
        }
        return base64;
    };
    ImagesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, hat_api_service_1.HatApiService])
    ], ImagesService);
    return ImagesService;
}());
exports.ImagesService = ImagesService;
//# sourceMappingURL=images.service.js.map