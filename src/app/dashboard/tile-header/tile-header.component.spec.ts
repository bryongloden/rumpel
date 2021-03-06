/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TileHeaderComponent } from './tile-header.component';

describe('Component: TileHeader', () => {
  it('should create an instance', () => {
    let component = new TileHeaderComponent();
    expect(component).toBeTruthy();
  });
});
