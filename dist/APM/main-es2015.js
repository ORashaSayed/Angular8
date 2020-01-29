(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"fa fa-spinner spinner\"\n      *ngIf=\"loading\"></span>\n\n<nav class=\"navbar navbar-expand navbar-light bg-light\">\n  <a class=\"navbar-brand\">{{pageTitle}}</a>\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\"\n         [routerLink]=\"['/welcome']\"\n         routerLinkActive=\"active\">Home</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\"\n         [routerLink]=\"['/products']\"\n         routerLinkActive=\"active\"\n         [routerLinkActiveOptions]=\"{ exact : true}\">Product List</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\"\n         [routerLink]=\"['/products', 0, 'edit']\"\n         routerLinkActive=\"active\">Add Product</a>\n    </li>\n  </ul>\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\"\n        *ngIf=\"isLoggedIn\">\n      <a class=\"nav-link\">Welcome {{ userName }}</a>\n    </li>\n    <li class=\"nav-item\"\n        *ngIf=\"!isMessageDisplayed\">\n      <a class=\"nav-link\"\n         (click)=\"displayMessages()\">Show Messages</a>\n    </li>\n    <li class=\"nav-item\"\n        *ngIf=\"isMessageDisplayed\">\n      <a class=\"nav-link\"\n         (click)=\"hideMessages()\">Hide Messages</a>\n    </li>\n    <li class=\"nav-item\"\n        *ngIf=\"!isLoggedIn\">\n      <a class=\"nav-link\"\n         [routerLink]=\"['/login']\">Log In</a>\n    </li>\n    <li class=\"nav-item\"\n        *ngIf=\"isLoggedIn\">\n      <a class=\"nav-link\"\n         (click)=\"logOut()\">Log Out</a>\n    </li>\n  </ul>\n</nav>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-10\"\n         [@slideInAnimation]=\"o.isActivated ? o.activatedRoute : ''\">\n      <router-outlet #o=\"outlet\"></router-outlet>\n    </div>\n    <div class=\"col-md-2\">\n      <router-outlet name=\"popup\"></router-outlet>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/welcome.component.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/welcome.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    {{pageTitle}}\r\n  </div>\r\n \r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/messages/message.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/messages/message.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">Messages\r\n    <button class=\"btn btn-light btn-sm float-right\"\r\n            (click)=\"close()\">\r\n      X\r\n    </button>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div *ngFor=\"let message of messages; let i=index\">\r\n      <div *ngIf=\"i<10\"\r\n           class=\"message-row\">\r\n        {{ message }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/star.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/star.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crop\"\r\n     [style.width.px]=\"starWidth\"\r\n     [title]=\"rating\"\r\n     (click)=\"onClick()\">\r\n  <div style=\"width: 75px\">\r\n    <span class=\"fa fa-star\"></span>\r\n    <span class=\"fa fa-star\"></span>\r\n    <span class=\"fa fa-star\"></span>\r\n    <span class=\"fa fa-star\"></span>\r\n    <span class=\"fa fa-star\"></span>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/login.component.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/login.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    {{pageTitle}}\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n    <form novalidate\r\n          (ngSubmit)=\"login(loginForm)\"\r\n          #loginForm=\"ngForm\"\r\n          autocomplete=\"off\">\r\n      <fieldset>\r\n\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-2 col-form-label\"\r\n                 for=\"userNameId\">User Name</label>\r\n          <div class=\"col-md-8\">\r\n            <input class=\"form-control\"\r\n                   id=\"userNameId\"\r\n                   type=\"text\"\r\n                   placeholder=\"User Name (required)\"\r\n                   required\r\n                   ngModel\r\n                   name=\"userName\"\r\n                   #userNameVar=\"ngModel\"\r\n                   [ngClass]=\"{'is-invalid': (userNameVar.touched || userNameVar.dirty) && !userNameVar.valid }\" />\r\n            <span class=\"invalid-feedback\">\r\n              <span *ngIf=\"userNameVar.errors?.required\">\r\n                User name is required.\r\n              </span>\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-2 col-form--label\"\r\n                 for=\"passwordId\">Password</label>\r\n\r\n          <div class=\"col-md-8\">\r\n            <input class=\"form-control\"\r\n                   id=\"passwordId\"\r\n                   type=\"password\"\r\n                   placeholder=\"Password (required)\"\r\n                   required\r\n                   ngModel\r\n                   name=\"password\"\r\n                   #passwordVar=\"ngModel\"\r\n                   [ngClass]=\"{'is-invalid': (passwordVar.touched || passwordVar.dirty) && !passwordVar.valid }\" />\r\n            <span class=\"invalid-feedback\">\r\n              <span *ngIf=\"passwordVar.errors?.required\">\r\n                Password is required.\r\n              </span>\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4 offset-md-2\">\r\n            <button class=\"btn btn-primary mr-3\"\r\n                    type=\"submit\"\r\n                    style=\"width:80px\"\r\n                    [disabled]=\"!loginForm.valid\">\r\n              Log In\r\n            </button>\r\n            <button class=\"btn btn-outline-secondary\"\r\n                    type=\"button\"\r\n                    style=\"width:80px\"\r\n                    [routerLink]=\"['/welcome']\">\r\n              Cancel\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"alert alert-danger\"\r\n       *ngIf=\"errorMessage\">{{errorMessage}}\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/welcome.component */ "./src/app/home/welcome.component.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found.component.ts");
/* harmony import */ var _user_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/auth.guard */ "./src/app/user/auth.guard.ts");
/* harmony import */ var _selective_strategy_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selective-strategy.service */ "./src/app/selective-strategy.service.ts");







let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                { path: 'welcome', component: _home_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] },
                {
                    path: 'products',
                    canActivate: [_user_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                    data: { preload: false },
                    loadChildren: () => __webpack_require__.e(/*! import() | products-product-module */ "products-product-module").then(__webpack_require__.bind(null, /*! ./products/product.module */ "./src/app/products/product.module.ts")).then(m => m.ProductModule)
                },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', component: _page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
            ], { preloadingStrategy: _selective_strategy_service__WEBPACK_IMPORTED_MODULE_6__["SelectiveStrategy"] }) // , { enableTracing: true, preloadingStrategy: SelectiveStrategy }
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.animation.ts":
/*!**********************************!*\
  !*** ./src/app/app.animation.ts ***!
  \**********************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");

const slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInAnimation', [
    // Transition between any two states
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        // Events to apply
        // Defined style and animation function to apply
        // Config object with optional set to true to handle when element not yet added to the DOM
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%', zIndex: 2 }), { optional: true }),
        // group block executes in parallel
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true })
        ])
    ])
]);


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link {\r\n  font-size: large;\r\n  cursor: pointer;\r\n}\r\n\r\n.navbar-light .navbar-nav .nav-link.active {\r\n  color: #007ACC\r\n}\r\n\r\n/* Spinner */\r\n\r\n.spinner {\r\n  font-size:300%;\r\n  position:absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  z-index:10\r\n}\r\n\r\n.fa-spinner {\r\n    -webkit-animation: spin 1000ms infinite linear;\r\n    animation: spin 1000ms infinite linear;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        transform: rotate(359deg);\r\n    }\r\n}\r\n\r\n@keyframes spin {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        transform: rotate(359deg);\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUEsWUFBWTs7QUFDWjtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsUUFBUTtFQUNSLFNBQVM7RUFDVDtBQUNGOztBQUVBO0lBQ0ksOENBQThDO0lBQzlDLHNDQUFzQztBQUMxQzs7QUFDQTtJQUNJO1FBRUksdUJBQXVCO0lBQzNCO0lBQ0E7UUFFSSx5QkFBeUI7SUFDN0I7QUFDSjs7QUFDQTtJQUNJO1FBRUksdUJBQXVCO0lBQzNCO0lBQ0E7UUFFSSx5QkFBeUI7SUFDN0I7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1saW5rIHtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsuYWN0aXZlIHtcclxuICBjb2xvcjogIzAwN0FDQ1xyXG59XHJcblxyXG4vKiBTcGlubmVyICovXHJcbi5zcGlubmVyIHtcclxuICBmb250LXNpemU6MzAwJTtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgei1pbmRleDoxMFxyXG59XHJcblxyXG4uZmEtc3Bpbm5lciB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAxMDAwbXMgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgYW5pbWF0aW9uOiBzcGluIDEwMDBtcyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcclxuICAgIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/auth.service */ "./src/app/user/auth.service.ts");
/* harmony import */ var _app_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.animation */ "./src/app/app.animation.ts");
/* harmony import */ var _messages_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages/message.service */ "./src/app/messages/message.service.ts");






let AppComponent = class AppComponent {
    constructor(authService, router, messageService) {
        this.authService = authService;
        this.router = router;
        this.messageService = messageService;
        this.pageTitle = 'Acme Product Management';
        this.loading = true;
        router.events.subscribe((routerEvent) => {
            this.checkRouterEvent(routerEvent);
        });
    }
    get isLoggedIn() {
        return this.authService.isLoggedIn;
    }
    get isMessageDisplayed() {
        return this.messageService.isDisplayed;
    }
    get userName() {
        if (this.authService.currentUser) {
            return this.authService.currentUser.userName;
        }
        return '';
    }
    checkRouterEvent(routerEvent) {
        if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            this.loading = true;
        }
        if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] ||
            routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"] ||
            routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
            this.loading = false;
        }
    }
    displayMessages() {
        this.router.navigate([{ outlets: { popup: ['messages'] } }]);
        this.messageService.isDisplayed = true;
    }
    hideMessages() {
        this.router.navigate([{ outlets: { popup: null } }]);
        this.messageService.isDisplayed = false;
    }
    logOut() {
        this.authService.logout();
        this.router.navigateByUrl('/welcome');
    }
};
AppComponent.ctorParameters = () => [
    { type: _user_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _messages_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'pm-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        animations: [_app_animation__WEBPACK_IMPORTED_MODULE_4__["slideInAnimation"]],
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _products_product_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/product-data */ "./src/app/products/product-data.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_welcome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/welcome.component */ "./src/app/home/welcome.component.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found.component.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _messages_message_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./messages/message.module */ "./src/app/messages/message.module.ts");





// Imports for loading & configuring the in-memory web api






/* Feature Modules */


let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__["InMemoryWebApiModule"].forRoot(_products_product_data__WEBPACK_IMPORTED_MODULE_6__["ProductData"], { delay: 1000 }),
            _user_user_module__WEBPACK_IMPORTED_MODULE_11__["UserModule"],
            _messages_message_module__WEBPACK_IMPORTED_MODULE_12__["MessageModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _home_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"],
            _page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/welcome.component.ts":
/*!*******************************************!*\
  !*** ./src/app/home/welcome.component.ts ***!
  \*******************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WelcomeComponent = class WelcomeComponent {
    constructor() {
        this.pageTitle = 'Welcome';
    }
};
WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/welcome.component.html")
    })
], WelcomeComponent);



/***/ }),

/***/ "./src/app/messages/message.component.ts":
/*!***********************************************!*\
  !*** ./src/app/messages/message.component.ts ***!
  \***********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.service */ "./src/app/messages/message.service.ts");




let MessageComponent = class MessageComponent {
    constructor(messageService, router) {
        this.messageService = messageService;
        this.router = router;
    }
    get messages() {
        return this.messageService.messages;
    }
    close() {
        // Close the popup.
        this.router.navigate([{ outlets: { popup: null } }]);
        this.messageService.isDisplayed = false;
    }
};
MessageComponent.ctorParameters = () => [
    { type: _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./message.component.html */ "./node_modules/raw-loader/index.js!./src/app/messages/message.component.html"),
        styles: [".message-row { margin-bottom: 10px }"]
    })
], MessageComponent);



/***/ }),

/***/ "./src/app/messages/message.module.ts":
/*!********************************************!*\
  !*** ./src/app/messages/message.module.ts ***!
  \********************************************/
/*! exports provided: MessageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageModule", function() { return MessageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.component */ "./src/app/messages/message.component.ts");





let MessageModule = class MessageModule {
};
MessageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: 'messages',
                    component: _message_component__WEBPACK_IMPORTED_MODULE_4__["MessageComponent"],
                    outlet: 'popup'
                }
            ])
        ],
        declarations: [
            _message_component__WEBPACK_IMPORTED_MODULE_4__["MessageComponent"]
        ]
    })
], MessageModule);



/***/ }),

/***/ "./src/app/messages/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/messages/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MessageService = class MessageService {
    constructor() {
        this._messages = [];
        this.isDisplayed = false;
    }
    get messages() {
        return this._messages;
    }
    addMessage(message) {
        const currentDate = new Date();
        this.messages.unshift(message + ' at ' + currentDate.toLocaleString());
    }
};
MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MessageService);



/***/ }),

/***/ "./src/app/page-not-found.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page-not-found.component.ts ***!
  \*********************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: `
    <h1>This is not the page you were looking for!</h1>
    `
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/products/product-data.ts":
/*!******************************************!*\
  !*** ./src/app/products/product-data.ts ***!
  \******************************************/
/*! exports provided: ProductData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductData", function() { return ProductData; });
class ProductData {
    createDb() {
        const products = [
            {
                id: 1,
                productName: 'Leaf Rake',
                productCode: 'GDN-0011',
                releaseDate: 'March 19, 2018',
                description: 'Leaf rake with 48-inch wooden handle',
                price: 19.95,
                starRating: 3.2,
                imageUrl: 'assets/images/leaf_rake.png',
                category: 'Garden',
                tags: ['rake', 'leaf', 'yard', 'home']
            },
            {
                id: 2,
                productName: 'Garden Cart',
                productCode: 'GDN-0023',
                releaseDate: 'March 18, 2018',
                description: '15 gallon capacity rolling garden cart',
                price: 32.99,
                starRating: 4.2,
                imageUrl: 'assets/images/garden_cart.png',
                category: 'Garden'
            },
            {
                id: 5,
                productName: 'Hammer',
                productCode: 'TBX-0048',
                releaseDate: 'May 21, 2018',
                description: 'Curved claw steel hammer',
                price: 8.9,
                starRating: 4.8,
                imageUrl: 'assets/images/hammer.png',
                category: 'Toolbox',
                tags: ['tools', 'hammer', 'construction']
            },
            {
                id: 8,
                productName: 'Saw',
                productCode: 'TBX-0022',
                releaseDate: 'May 15, 2018',
                description: '15-inch steel blade hand saw',
                price: 11.55,
                starRating: 3.7,
                imageUrl: 'assets/images/saw.png',
                category: 'Toolbox'
            },
            {
                id: 10,
                productName: 'Video Game Controller',
                productCode: 'GMG-0042',
                releaseDate: 'October 15, 2018',
                description: 'Standard two-button video game controller',
                price: 35.95,
                starRating: 4.6,
                imageUrl: 'assets/images/xbox-controller.png',
                category: 'Gaming'
            }
        ];
        return { products };
    }
}


/***/ }),

/***/ "./src/app/selective-strategy.service.ts":
/*!***********************************************!*\
  !*** ./src/app/selective-strategy.service.ts ***!
  \***********************************************/
/*! exports provided: SelectiveStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectiveStrategy", function() { return SelectiveStrategy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let SelectiveStrategy = class SelectiveStrategy {
    preload(route, load) {
        if (route.data && route.data['preload']) {
            return load();
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    }
};
SelectiveStrategy = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SelectiveStrategy);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _star_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./star.component */ "./src/app/shared/star.component.ts");





let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        declarations: [
            _star_component__WEBPACK_IMPORTED_MODULE_4__["StarComponent"]
        ],
        exports: [
            _star_component__WEBPACK_IMPORTED_MODULE_4__["StarComponent"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/star.component.css":
/*!*******************************************!*\
  !*** ./src/app/shared/star.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crop {\r\n  overflow: hidden;\r\n}\r\ndiv {\r\n  cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N0YXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zdGFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JvcCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5kaXYge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/star.component.ts":
/*!******************************************!*\
  !*** ./src/app/shared/star.component.ts ***!
  \******************************************/
/*! exports provided: StarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarComponent", function() { return StarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StarComponent = class StarComponent {
    constructor() {
        this.rating = 0;
        this.starWidth = 0;
        this.ratingClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnChanges() {
        this.starWidth = this.rating * 75 / 5;
    }
    onClick() {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StarComponent.prototype, "rating", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], StarComponent.prototype, "ratingClicked", void 0);
StarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'pm-star',
        template: __webpack_require__(/*! raw-loader!./star.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/star.component.html"),
        styles: [__webpack_require__(/*! ./star.component.css */ "./src/app/shared/star.component.css")]
    })
], StarComponent);



/***/ }),

/***/ "./src/app/user/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/user/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/user/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        return this.checkLoggedIn(state.url);
    }
    canLoad(route) {
        return this.checkLoggedIn(route.path);
    }
    checkLoggedIn(url) {
        if (this.authService.isLoggedIn) {
            return true;
        }
        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/user/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/user/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _messages_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../messages/message.service */ "./src/app/messages/message.service.ts");



let AuthService = class AuthService {
    constructor(messageService) {
        this.messageService = messageService;
    }
    get isLoggedIn() {
        return !!this.currentUser;
    }
    login(userName, password) {
        if (!userName || !password) {
            this.messageService.addMessage('Please enter your userName and password');
            return;
        }
        if (userName === 'admin') {
            this.currentUser = {
                id: 1,
                userName: userName,
                isAdmin: true
            };
            this.messageService.addMessage('Admin login');
            return;
        }
        this.currentUser = {
            id: 2,
            userName: userName,
            isAdmin: false
        };
        this.messageService.addMessage(`User: ${this.currentUser.userName} logged in`);
    }
    logout() {
        this.currentUser = null;
    }
};
AuthService.ctorParameters = () => [
    { type: _messages_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/user/login.component.ts":
/*!*****************************************!*\
  !*** ./src/app/user/login.component.ts ***!
  \*****************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/user/auth.service.ts");




let LoginComponent = class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.pageTitle = 'Log In';
    }
    login(loginForm) {
        if (loginForm && loginForm.valid) {
            const userName = loginForm.form.value.userName;
            const password = loginForm.form.value.password;
            this.authService.login(userName, password);
            // Navigate to the Product List page after log in.
            if (this.authService.redirectUrl) {
                this.router.navigateByUrl(this.authService.redirectUrl);
            }
            else {
                this.router.navigate(['/products']);
            }
        }
        else {
            this.errorMessage = 'Please enter a user name and password.';
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/login.component.html")
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/user/login.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");





let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: 'login', component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
            ])
        ],
        declarations: [
            _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
        ]
    })
], UserModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrPRODUCTSodule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Rasha.Sayed\Downloads\angular-routing\12\demos\Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map