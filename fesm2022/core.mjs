import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class CoreService {
    constructor() { }
    testPackage() {
        console.log('The package works!');
    }
    static { this.ɵfac = function CoreService_Factory(t) { return new (t || CoreService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CoreService, factory: CoreService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CoreService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class CoreComponent {
    static { this.ɵfac = function CoreComponent_Factory(t) { return new (t || CoreComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CoreComponent, selectors: [["core-core"]], decls: 2, vars: 0, template: function CoreComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, " core works! ");
            i0.ɵɵelementEnd();
        } }, encapsulation: 2 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CoreComponent, [{
        type: Component,
        args: [{ selector: 'core-core', template: `
    <p>
      core works!
    </p>
  ` }]
    }], null, null); })();

class CoreModule {
    static { this.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CoreModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({}); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CoreModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    CoreComponent
                ],
                imports: [],
                exports: [
                    CoreComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CoreModule, { declarations: [CoreComponent], exports: [CoreComponent] }); })();

/*
 * Public API Surface of core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CoreComponent, CoreModule, CoreService };
//# sourceMappingURL=core.mjs.map
