(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _service_route_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/route-guard.service */ "./src/app/service/route-guard.service.ts");
/* harmony import */ var _update_todo_update_todo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./update-todo/update-todo.component */ "./src/app/update-todo/update-todo.component.ts");










var routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'welcome/:name',
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_8__["RouteGuardService"]]
    },
    {
        path: 'todo',
        component: _todo_todo_component__WEBPACK_IMPORTED_MODULE_5__["TodoComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_8__["RouteGuardService"]]
    },
    {
        path: 'todo/:id',
        component: _update_todo_update_todo_component__WEBPACK_IMPORTED_MODULE_9__["UpdateTodoComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_8__["RouteGuardService"]]
    },
    {
        path: 'logout',
        component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_8__["RouteGuardService"]]
    },
    {
        path: '**',
        component: _error_error_component__WEBPACK_IMPORTED_MODULE_6__["ErrorComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<app-menu></app-menu>\n\n<div class=\"container\">\n<router-outlet></router-outlet>\n</div>\n\n<app-footer></app-footer>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Todo';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _update_todo_update_todo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./update-todo/update-todo.component */ "./src/app/update-todo/update-todo.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"],
                _todo_todo_component__WEBPACK_IMPORTED_MODULE_8__["TodoComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_12__["LogoutComponent"],
                _update_todo_update_todo_component__WEBPACK_IMPORTED_MODULE_14__["UpdateTodoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containetr\">\n  <br><br>\n    <div class=\"alert alert-danger\" >\n        <h4 class=\"alert-heading\">OOp's !</h4>\n        <p>Something went wrong ..!!</p>\n        <hr>\n        <p class=\"mb-0\">Please contact Ikhlas .</p>\n      </div>\n</div>"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\r\n   position: absolute;\r\n    margin-top: 50%;\r\n    width: 79%;\r\n    bottom: 0%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csa0JBQWtCO0lBQ2pCLGVBQWU7SUFDZixVQUFVO0lBQ1YsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcntcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogNTAlO1xyXG4gICAgd2lkdGg6IDc5JTtcclxuICAgIGJvdHRvbTogMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nav class=\"footer navbar navbar-expand-lg navbar-dark bg-dark\">\n <div class=\"text-muted\">\n  All rights reserved 2019 @ Ikhlas\n </div>\n    \n  </nav>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login{\r\n    margin-top: 50px;\r\n    margin-left: 35%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2lue1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNSU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n <div class=\"alert alert-danger\" *ngIf='invalidLogin'>\n    {{errormsg}}\n </div>\n  <div class=\"login\">\n  <div class=\"  form-row \">\n        <div class=\"col-md-6\">\n              <div class=\"card\">\n                        <div class=\"card-header\">\n                           Please Login!\n                       </div>\n                    <div class=\"card-body\">\n                         <label >Username</label>\n                              <input type=\"text\" class=\"form-control\" [(ngModel)]=username>\n                         <label >Password</label>\n                             <input type=\"password\" class=\"form-control\" [(ngModel)]=password>\n             <br>\n                         <div>\n                              <button class=\"btn btn-success\" (click)='handleLogin()'>Login</button>\n                          </div>\n                    </div>\n             </div>\n       </div>\n\n\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/hardcoded-authentication.service */ "./src/app/service/hardcoded-authentication.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, hardcodedAuthenticationService) {
        this.router = router;
        this.hardcodedAuthenticationService = hardcodedAuthenticationService;
        this.username = 'Ikhlas';
        this.password = '';
        this.invalidLogin = false;
        this.errormsg = 'Invalid Login !!';
    }
    LoginComponent.prototype.handleLogin = function () {
        if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
            this.invalidLogin = false;
            this.router.navigate(['welcome', this.username]);
        }
        else {
            this.invalidLogin = true;
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_3__["HardcodedAuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br><br>\n  <div>\n      <div class=\"alert alert-success\" role=\"alert\">\n          You have logged out Successfully !\n        </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/hardcoded-authentication.service */ "./src/app/service/hardcoded-authentication.service.ts");



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(hardcodedAuthenticationService) {
        this.hardcodedAuthenticationService = hardcodedAuthenticationService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.hardcodedAuthenticationService.logout();
    };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_2__["HardcodedAuthenticationService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"https://www.google.com/\">MY TODO!</a>\n  \n\n  <div class=\"collapse navbar-collapse\" >\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" *ngIf=\"hardcodedAuthenticationService.isUserLoggedIn()\" routerLink='welcome'>welcome </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" *ngIf=\"hardcodedAuthenticationService.isUserLoggedIn()\" routerLink='todo' >Todo</a>\n      </li>\n     \n    </ul>\n  \n      <!-- <a class=\"nav-link disabled\" href=\"#\">Disabled</a> -->\n    <a class=\"nav-link text-white\" *ngIf=\"!hardcodedAuthenticationService.isUserLoggedIn()\" routerLink='login' >Login</a>\n    <a class=\"nav-link text-white \" *ngIf=\"hardcodedAuthenticationService.isUserLoggedIn()\" routerLink='logout'>Logout</a>\n  </div>\n</nav>\n</div>"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/hardcoded-authentication.service */ "./src/app/service/hardcoded-authentication.service.ts");



var MenuComponent = /** @class */ (function () {
    function MenuComponent(hardcodedAuthenticationService) {
        this.hardcodedAuthenticationService = hardcodedAuthenticationService;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_2__["HardcodedAuthenticationService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/service/data/todo-data.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/data/todo-data.service.ts ***!
  \***************************************************/
/*! exports provided: TodoDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDataService", function() { return TodoDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TodoDataService = /** @class */ (function () {
    function TodoDataService(http) {
        this.http = http;
    }
    TodoDataService.prototype.retrieveAllTodos = function (username) {
        return this.http.get("http://localhost:8080/users/" + username + "/todos");
    };
    TodoDataService.prototype.deleteTodo = function (username, id) {
        return this.http.delete("http://localhost:8080/users/" + username + "/todos/" + id);
    };
    TodoDataService.prototype.retrieveTodo = function (username, id) {
        return this.http.get("http://localhost:8080/users/" + username + "/todos/" + id);
    };
    TodoDataService.prototype.updateTodo = function (username, id, todo) {
        return this.http.put("http://localhost:8080/users/" + username + "/todos/" + id, todo);
    };
    TodoDataService.prototype.createTodo = function (username, todo) {
        return this.http.post("http://localhost:8080/users/" + username + "/todos/", todo);
    };
    TodoDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TodoDataService);
    return TodoDataService;
}());



/***/ }),

/***/ "./src/app/service/data/welcome-data.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/data/welcome-data.service.ts ***!
  \******************************************************/
/*! exports provided: HelloWorldBean, WelcomeDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloWorldBean", function() { return HelloWorldBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeDataService", function() { return WelcomeDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



//We created this class to show the return response for the Spring response  in message
var HelloWorldBean = /** @class */ (function () {
    function HelloWorldBean(message) {
        this.message = message;
    }
    return HelloWorldBean;
}());

var WelcomeDataService = /** @class */ (function () {
    function WelcomeDataService(http) {
        this.http = http;
    }
    WelcomeDataService.prototype.executeHelloWorldBeanService = function () {
        return this.http.get('http://localhost:8080/hello-world-bean');
    };
    WelcomeDataService.prototype.executeHelloWorldBeanServiceWithPathvariable = function (name) {
        // use `` (ticks) insted of ''
        return this.http.get("http://localhost:8080//hello-world/pathvariable/" + name);
    };
    WelcomeDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WelcomeDataService);
    return WelcomeDataService;
}());



/***/ }),

/***/ "./src/app/service/hardcoded-authentication.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/service/hardcoded-authentication.service.ts ***!
  \*************************************************************/
/*! exports provided: HardcodedAuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HardcodedAuthenticationService", function() { return HardcodedAuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HardcodedAuthenticationService = /** @class */ (function () {
    function HardcodedAuthenticationService() {
    }
    HardcodedAuthenticationService.prototype.authenticate = function (username, password) {
        if (username === 'Ikhlas' && password === 'Kazi') {
            sessionStorage.setItem('authenticatedUser', username);
            return true;
        }
        else {
            return false;
        }
    };
    HardcodedAuthenticationService.prototype.isUserLoggedIn = function () {
        var user = sessionStorage.getItem('authenticatedUser');
        return !(user === null);
    };
    HardcodedAuthenticationService.prototype.logout = function () {
        sessionStorage.removeItem('authenticatedUser');
    };
    HardcodedAuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HardcodedAuthenticationService);
    return HardcodedAuthenticationService;
}());



/***/ }),

/***/ "./src/app/service/route-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/route-guard.service.ts ***!
  \************************************************/
/*! exports provided: RouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuardService", function() { return RouteGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hardcoded-authentication.service */ "./src/app/service/hardcoded-authentication.service.ts");




var RouteGuardService = /** @class */ (function () {
    function RouteGuardService(router, hardcodedAuthenticationService) {
        this.router = router;
        this.hardcodedAuthenticationService = hardcodedAuthenticationService;
    }
    //Implimentation copy pase from the interface with parameters
    RouteGuardService.prototype.canActivate = function (route, state) {
        if (this.hardcodedAuthenticationService.isUserLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    };
    RouteGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }) //Interface
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_3__["HardcodedAuthenticationService"]])
    ], RouteGuardService);
    return RouteGuardService;
}());



/***/ }),

/***/ "./src/app/todo/todo.component.css":
/*!*****************************************!*\
  !*** ./src/app/todo/todo.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vdG9kby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/todo/todo.component.html":
/*!******************************************!*\
  !*** ./src/app/todo/todo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  \n  <div>\n    <h3>Your Todo's</h3>\n  </div>\n  <div class=\"alert alert-success\" *ngIf=\"message\">{{message}}</div>\n  <br>\n  <div>\n      <table class=\"table  \">\n          <thead class=\"thead-light\">\n            <tr>\n              <th scope=\"col\">Id</th>\n               <!-- <th scope=\"col\">Name</th>  -->\n              <th scope=\"col\">Description</th>\n              <th scope=\"col\">Target Date</th>\n              <th scope=\"col\">Is Done</th>\n              <th scope=\"col\">Update</th>\n              <th scope=\"col\">Delete</th>\n            </tr>\n          </thead>\n          <tbody >\n              <tr *ngFor=\"let todo of todos\">\n              <th scope=\"row\">{{todo.id}}</th>\n               <!-- <td>{{todo.username}}</td> -->\n                <td>{{todo.description}}</td>\n                <td>{{todo.targetDate | date : 'shortDate'}}</td>\n                <td>{{todo.isDone}}</td>\n                <td><button class=\"btn btn-primary\" (click)='updateTodo(todo.id)'>Update</button></td>\n                <td><button class=\"btn btn-danger\" (click)='deleteTodo(todo.id)'>Delete</button></td>\n                </tr>\n          </tbody>\n        </table>\n        <div>\n          <td><button class=\"btn btn-primary\" (click)='addTodo()'>Add</button></td>\n        </div>\n  </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: Todo, TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_data_todo_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data/todo-data.service */ "./src/app/service/data/todo-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var Todo = /** @class */ (function () {
    function Todo(id, username, description, targetDate, isDone) {
        this.id = id;
        this.username = username;
        this.description = description;
        this.targetDate = targetDate;
        this.isDone = isDone;
    }
    return Todo;
}());

var TodoComponent = /** @class */ (function () {
    // todos=[
    //   new Todos(1,'Ikhlas','Software Engineer',false,new Date()),
    //   new Todos(2,'Rahul','PMT',true,new Date()),
    //   new Todos(3,'Manvesh','CEA',false,new Date()),
    //   new Todos(4,'Sheetal','ABS',true,new Date())
    // ]
    function TodoComponent(todoserive, router) {
        this.todoserive = todoserive;
        this.router = router;
    }
    TodoComponent.prototype.ngOnInit = function () {
        this.refreshTodos();
    };
    TodoComponent.prototype.refreshTodos = function () {
        var _this = this;
        this.todoserive.retrieveAllTodos('ikhlas').subscribe(function (response) {
            console.log(response),
                _this.todos = response;
        });
    };
    TodoComponent.prototype.deleteTodo = function (id) {
        var _this = this;
        console.log("delete me " + id);
        this.todoserive.deleteTodo('Ikhlas', id).subscribe(function (response) {
            console.log(response);
            _this.message = "Deleted todo " + id + " Successfully !";
            _this.refreshTodos();
        });
    };
    TodoComponent.prototype.updateTodo = function (id) {
        console.log("update is " + id);
        this.router.navigate(['todo', id]);
    };
    TodoComponent.prototype.addTodo = function () {
        this.router.navigate(['todo', -1]);
    };
    TodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/todo/todo.component.html"),
            styles: [__webpack_require__(/*! ./todo.component.css */ "./src/app/todo/todo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_data_todo_data_service__WEBPACK_IMPORTED_MODULE_2__["TodoDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/app/update-todo/update-todo.component.css":
/*!*******************************************************!*\
  !*** ./src/app/update-todo/update-todo.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-invalid:not(form){\r\nborder-left: 5px solid red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlLXRvZG8vdXBkYXRlLXRvZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLDBCQUEwQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS10b2RvL3VwZGF0ZS10b2RvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmctaW52YWxpZDpub3QoZm9ybSl7XHJcbmJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/update-todo/update-todo.component.html":
/*!********************************************************!*\
  !*** ./src/app/update-todo/update-todo.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Todo</h1>\n\n<div class=\"container\">\n  <div class=\"alert alert-warning\" *ngIf=\"TodoForm.dirty && TodoForm.invalid \">Enter Valid values !</div>\n  <div class=\"alert alert-warning\" *ngIf=\"TodoForm.dirty && targetDate.invalid \">Enter Date !</div>\n  <div class=\"alert alert-warning\" *ngIf=\"TodoForm.dirty && description.invalid \">Enter atleast 5 characters !</div>\n                   <!-- Validation for form should not be submited blank -->\n <form (ngSubmit)='!TodoForm.invalid && saveTodo()' #TodoForm=\"ngForm\">\n  <fieldset class=\"form-group\">\n    <label>Description</label>\n    <input type=\"text\" class=\"form-control\" #description=\"ngModel\"\n        [(ngModel)]='todo.description'  name=\"description\" required=\"required\" minlength=\"5\">\n  </fieldset>\n\n  <fieldset class=\"form-group\">\n    <label>Target Date</label>\n    <input type=\"date\" #targetDate=\"ngModel\"\n     [ngModel]=\"todo.targetDate | date:'yyyy-MM-dd'\" \n     (ngModelChange)=\"todo.targetDate=$event \"\n     class=\"form-control\" name=\"targetDate\" required=\"required\">\n  </fieldset>\n  <button class=\"btn btn-success\" >Save</button>\n</form>\n</div>"

/***/ }),

/***/ "./src/app/update-todo/update-todo.component.ts":
/*!******************************************************!*\
  !*** ./src/app/update-todo/update-todo.component.ts ***!
  \******************************************************/
/*! exports provided: UpdateTodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTodoComponent", function() { return UpdateTodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_data_todo_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data/todo-data.service */ "./src/app/service/data/todo-data.service.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var UpdateTodoComponent = /** @class */ (function () {
    function UpdateTodoComponent(todoService, route, router) {
        this.todoService = todoService;
        this.route = route;
        this.router = router;
    }
    UpdateTodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        //Default data to remove errors
        this.todo = new _todo_todo_component__WEBPACK_IMPORTED_MODULE_3__["Todo"](this.id, '', '', new Date(), false);
        if (this.id != -1) {
            this.todoService.retrieveTodo('Ikhlas', this.id).subscribe(function (data) { return _this.todo = data; });
        }
    };
    UpdateTodoComponent.prototype.saveTodo = function () {
        var _this = this;
        //console.log("Saved")
        if (this.id === -1) {
            this.todoService.createTodo('Ikhlas', this.todo).subscribe(function (data) {
                console.log(data);
                _this.router.navigate['todo'];
            });
        }
        else {
            this.todoService.updateTodo('Ikhlas', 1, this.todo).subscribe(function (data) {
                console.log(data);
                _this.router.navigate(['todo']);
            });
        }
    };
    UpdateTodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-todo',
            template: __webpack_require__(/*! ./update-todo.component.html */ "./src/app/update-todo/update-todo.component.html"),
            styles: [__webpack_require__(/*! ./update-todo.component.css */ "./src/app/update-todo/update-todo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_data_todo_data_service__WEBPACK_IMPORTED_MODULE_2__["TodoDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UpdateTodoComponent);
    return UpdateTodoComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div>\n    <h3>Welcome {{name}}!</h3>\n    <h3>Welcome {{newvariable}}!</h3>\n  </div>\n  <div>\n    <p>You can check your Todo's now </p>\n    <button class=\"btn btn-success\" routerLink='/todo'>Todo</button>\n  </div>\n  <div class=\"container\">\n    <h3>Get your Spring Boot rest service here</h3>\n    <button class=\"btn btn-primary\" (click)='getWelcomeMessageWithParameter()'>Invoke RestService</button>\n  </div>\n  <div class=\"container\">\n    <h3>Your RestService message</h3>\n    <div *ngIf=\"welcomeMessageFromService\">{{welcomeMessageFromService}}</div>\n  </div>\n\n  <div class=\"alert alert-warning\" *ngIf='errorMessageFromService'>\n    {{errorMessageFromService}}\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_data_welcome_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/data/welcome-data.service */ "./src/app/service/data/welcome-data.service.ts");




var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(route, service) {
        this.route = route;
        this.service = service;
        this.newvariable = "Show me the msg";
        this.name = '';
        this.welcomeMessageFromService = '';
        this.errorMessageFromService = '';
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        this.name = this.route.snapshot.params['name'];
    };
    WelcomeComponent.prototype.getWelcomeMessage = function () {
        var _this = this;
        console.log(this.service.executeHelloWorldBeanService());
        this.service.executeHelloWorldBeanService().subscribe(function (response) { return _this.handleSuccessfullResposnse(response); }, function (error) { return _this.handleErrorResponse(error); });
    };
    WelcomeComponent.prototype.getWelcomeMessageWithParameter = function () {
        var _this = this;
        //console.log(this.service.executeHelloWorldBeanServiceWithPathvariable(this.name))
        this.service.executeHelloWorldBeanServiceWithPathvariable(this.name).subscribe(function (response) { return _this.handleSuccessfullResposnse(response); }, function (error) { return _this.handleErrorResponse(error); });
    };
    WelcomeComponent.prototype.handleSuccessfullResposnse = function (response) {
        // console.log(response)
        // console.log(response.message)
        this.welcomeMessageFromService = response.message;
    };
    WelcomeComponent.prototype.handleErrorResponse = function (error) {
        //console.log("First="+error)
        // console.log("second="+error.error)
        //console.log("Third="+error.error.message)
        this.errorMessageFromService = error.error.message;
        //this.errorMessageFromService=true
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_data_welcome_data_service__WEBPACK_IMPORTED_MODULE_3__["WelcomeDataService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\AngularSpring\Todo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map