/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './app.module';
import * as import2 from './components/masker/masker.module';
import * as import3 from '@angular/core/src/di/injector';
class AppMaskerModuleInjector extends import0.NgModuleInjector<import1.AppMaskerModule> {
  _MaskerModule_0:import2.MaskerModule;
  _AppMaskerModule_1:import1.AppMaskerModule;
  constructor(parent:import3.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  createInternal():import1.AppMaskerModule {
    this._MaskerModule_0 = new import2.MaskerModule();
    this._AppMaskerModule_1 = new import1.AppMaskerModule();
    return this._AppMaskerModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.MaskerModule)) { return this._MaskerModule_0; }
    if ((token === import1.AppMaskerModule)) { return this._AppMaskerModule_1; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const AppMaskerModuleNgFactory:import0.NgModuleFactory<import1.AppMaskerModule> = new import0.NgModuleFactory(AppMaskerModuleInjector,import1.AppMaskerModule);