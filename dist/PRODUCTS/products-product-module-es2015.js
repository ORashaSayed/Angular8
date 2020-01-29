(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-product-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/products/product-detail.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/product-detail.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    {{pageTitle}}\r\n  </div>\r\n\r\n  <div class=\"card-body\"\r\n       *ngIf=\"product\">\r\n\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-md-8\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3\">Name:</div>\r\n          <div class=\"col-md-6\">{{product.productName}}</div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3\">Code:</div>\r\n          <div class=\"col-md-6\">{{product.productCode}}</div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3\">Description:</div>\r\n          <div class=\"col-md-6\">{{product.description}}</div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3\">Availability:</div>\r\n          <div class=\"col-md-6\">{{product.releaseDate}}</div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3\">Price:</div>\r\n          <div class=\"col-md-6\">{{product.price|currency:\"USD\":\"symbol\"}}</div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3\">5 Star Rating:</div>\r\n          <div class=\"col-md-6\">\r\n            <pm-star [rating]=\"product.starRating\">\r\n            </pm-star>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3\">Category:</div>\r\n          <div class=\"col-md-6\">{{product.category}}</div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3\">Tags:</div>\r\n          <div class=\"col-md-6\">{{product.tags}}</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4\"\r\n           *ngIf=\"product.imageUrl\">\r\n        <img class=\"center-block img-responsive\"\r\n             [style.height.px]=\"150\"\r\n             [style.margin.px]=\"2\"\r\n             [src]=\"product.imageUrl\"\r\n             [title]=\"product.productName\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mt-4\">\r\n      <div class=\"col-md-4\">\r\n        <button class=\"btn btn-outline-secondary mr-3\"\r\n                style=\"width:80px\"\r\n                [routerLink]=\"['/products']\"\r\n                queryParamsHandling=\"preserve\">\r\n          <i class=\"fa fa-chevron-left\"></i> Back\r\n        </button>\r\n        <button class=\"btn btn-outline-primary\"\r\n                style=\"width:80px\"\r\n                [routerLink]=\"['/products', product.id, 'edit']\">\r\n          Edit\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<div class=\"alert alert-danger\"\r\n     *ngIf=\"errorMessage\">{{errorMessage}}\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/product-edit/product-edit-info.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/product-edit/product-edit-info.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body\">\r\n  <form novalidate\r\n        #productForm=\"ngForm\">\r\n    <fieldset>\r\n      <legend>Basic Product Information</legend>\r\n\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-md-2 col-form-label\"\r\n               for=\"productNameId\">Product Name</label>\r\n        <div class=\"col-md-8\">\r\n          <input class=\"form-control\"\r\n                 id=\"productNameId\"\r\n                 type=\"text\"\r\n                 placeholder=\"Name (required)\"\r\n                 required\r\n                 minlength=\"3\"\r\n                 [(ngModel)]=product.productName\r\n                 name=\"productName\"\r\n                 #productNameVar=\"ngModel\"\r\n                 [ngClass]=\"{'is-invalid': (productNameVar.touched || \r\n                                            productNameVar.dirty ||\r\n                                            product.id !== 0) && \r\n                                            !productNameVar.valid }\" />\r\n          <span class=\"invalid-feedback\">\r\n            <span *ngIf=\"productNameVar.errors?.required\">\r\n              Product name is required.\r\n            </span>\r\n            <span *ngIf=\"productNameVar.errors?.minlength\">\r\n              Product name must be at least three characters.\r\n            </span>\r\n          </span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-md-2 col-form-label\"\r\n               for=\"productCodeId\">Product Code</label>\r\n        <div class=\"col-md-8\">\r\n          <input class=\"form-control\"\r\n                 id=\"productCodeId\"\r\n                 type=\"text\"\r\n                 placeholder=\"Code (required)\"\r\n                 required\r\n                 [(ngModel)]=product.productCode\r\n                 name=\"productCode\"\r\n                 #productCodeVar=\"ngModel\"\r\n                 [ngClass]=\"{'is-invalid': (productCodeVar.touched || \r\n                                            productCodeVar.dirty ||\r\n                                            product.id !== 0) &&\r\n                                            !productCodeVar.valid }\" />\r\n          <span class=\"invalid-feedback\">\r\n            <span *ngIf=\"productCodeVar.errors?.required\">\r\n              Product code is required.\r\n            </span>\r\n          </span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-md-2 col-form-label\"\r\n               for=\"descriptionId\">Description</label>\r\n        <div class=\"col-md-8\">\r\n          <textarea class=\"form-control\"\r\n                    id=\"descriptionId\"\r\n                    placeholder=\"Description\"\r\n                    rows=3\r\n                    [(ngModel)]=product.description\r\n                    name=\"description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </fieldset>\r\n  </form>\r\n</div>\r\n\r\n<div class='alert alert-danger'\r\n     *ngIf='errorMessage'>{{errorMessage}}\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/product-edit/product-edit-tags.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/product-edit/product-edit-tags.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body\">\r\n  <form novalidate>\r\n    <fieldset>\r\n      <legend>Product Search Tags</legend>\r\n\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-md-2 col-form-label\"\r\n               for=\"categoryId\">Category</label>\r\n        <div class=\"col-md-8\">\r\n          <input class=\"form-control\"\r\n                 id=\"categoryId\"\r\n                 type=\"text\"\r\n                 placeholder=\"Category (required)\"\r\n                 required\r\n                 minlength=\"3\"\r\n                 [(ngModel)]=\"product.category\"\r\n                 name=\"category\"\r\n                 #categoryVar=\"ngModel\"\r\n                 [ngClass]=\"{'is-invalid': (categoryVar.touched ||\r\n                                            categoryVar.dirty || \r\n                                            product.id !== 0) &&\r\n                                            !categoryVar.valid }\" />\r\n          <span class=\"invalid-feedback\">\r\n            <span *ngIf=\"categoryVar.errors?.required\">\r\n              A category must be entered.\r\n            </span>\r\n            <span *ngIf=\"categoryVar.errors?.minlength\">\r\n              The category must be at least 3 characters in length.\r\n            </span>\r\n          </span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-md-2 col-form-label\"\r\n               for=\"tagsId\">Search Tags</label>\r\n        <div class=\"col-md-8\">\r\n          <input class=\"form-control\"\r\n                 id=\"tagsId\"\r\n                 type=\"text\"\r\n                 placeholder=\"Search keywords separated by commas\"\r\n                 [(ngModel)]=\"newTags\"\r\n                 name=\"tags\" />\r\n        </div>\r\n        <div class=\"col-md-1\">\r\n          <button class=\"btn btn-outline-primary\"\r\n                  type=\"button\"\r\n                  title=\"Enter the search keywords separated by commas and then press Add\"\r\n                  (click)=\"addTags()\">\r\n            Add\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8 offset-md-2\">\r\n          <span *ngFor=\"let tag of product.tags; let i = index\">\r\n            <button class=\"btn btn-outline-secondary\"\r\n                    style=\"font-size:smaller;margin-bottom:12px;margin-right:2px\"\r\n                    title=\"Click to remove this tag\"\r\n                    (click)=\"removeTag(i)\">\r\n              {{tag}}\r\n              <span class=\"fa fa-times-circle\"></span>\r\n            </button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n\r\n    </fieldset>\r\n  </form>\r\n</div>\r\n\r\n<div class=\"alert alert-danger\"\r\n     *ngIf=\"errorMessage\">{{errorMessage}}\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/product-edit/product-edit.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/product-edit/product-edit.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    {{pageTitle}}\r\n  </div>\r\n\r\n  <div class=\"card-body\"\r\n       *ngIf=\"product\">\r\n    <div class=\"wizard\">\r\n      <a [routerLink]=\"['info']\"\r\n         routerLinkActive=\"active\">\r\n        Basic Information<span [ngClass]=\"{'fa fa-exclamation': !isValid('info')}\"></span>\r\n      </a>\r\n      <a [routerLink]=\"['tags']\"\r\n         routerLinkActive=\"active\">\r\n        Search Tags<span [ngClass]=\"{'fa fa-exclamation': !isValid('tags')}\"></span>\r\n      </a>\r\n    </div>\r\n\r\n    <router-outlet></router-outlet>\r\n\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-md-4\">\r\n        <button class=\"btn btn-primary mr-3\"\r\n                style=\"width:80px\"\r\n                type=\"button\"\r\n                title=\"Save your entered data\"\r\n                [disabled]=\"!isValid()\"\r\n                (click)=\"saveProduct()\">\r\n          Save\r\n        </button>\r\n        <button class=\"btn btn-outline-secondary mr-3\"\r\n                style=\"width:80px\"\r\n                type=\"button\"\r\n                title=\"Cancel your edits\"\r\n                [routerLink]=\"['/products']\">\r\n          Cancel\r\n        </button>\r\n        <button class=\"btn btn-outline-warning\"\r\n                style=\"width:80px\"\r\n                type=\"button\"\r\n                title=\"Delete this product\"\r\n                (click)=\"deleteProduct()\">\r\n          Delete\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"alert alert-danger\"\r\n     *ngIf=\"errorMessage\">{{errorMessage}}\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/product-list.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/product-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    {{pageTitle}}\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\">Filter by:</div>\r\n      <div class=\"col-md-4\">\r\n        <input type=\"text\"\r\n               [(ngModel)]=\"listFilter\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"row\"\r\n         *ngIf=\"listFilter\">\r\n      <div class=\"col-md-6\">\r\n        <h4>Filtered by: {{listFilter}}</h4>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table mb-0\"\r\n             *ngIf=\"products && products.length\">\r\n        <thead>\r\n          <tr>\r\n            <th>\r\n              <button class=\"btn btn-outline-primary btn-sm\"\r\n                      (click)=\"toggleImage()\">\r\n                {{showImage ? \"Hide\" : \"Show\"}} Image\r\n              </button>\r\n            </th>\r\n            <th>Product</th>\r\n            <th>Code</th>\r\n            <th>Available</th>\r\n            <th>Price</th>\r\n            <th>5 Star Rating</th>\r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let product of filteredProducts\">\r\n            <td>\r\n              <img *ngIf=\"showImage && product.imageUrl\"\r\n                   [src]=\"product.imageUrl\"\r\n                   [title]=\"product.productName\"\r\n                   [style.width.px]=\"imageWidth\"\r\n                   [style.margin.px]=\"imageMargin\">\r\n            </td>\r\n            <td>\r\n              <a [routerLink]=\"['/products', product.id]\"\r\n                 [queryParams]=\"{filterBy: listFilter, showImage: showImage}\">\r\n                {{ product.productName }}\r\n              </a>\r\n            </td>\r\n            <td>{{ product.productCode }}</td>\r\n            <td>{{ product.releaseDate }}</td>\r\n            <td>{{ product.price | currency:\"USD\":\"symbol\":\"1.2-2\" }}</td>\r\n            <td>\r\n              <pm-star [rating]=\"product.starRating\">\r\n              </pm-star>\r\n            </td>\r\n            <td>\r\n              <button class=\"btn btn-outline-primary btn-sm\"\r\n                      [routerLink]=\"['/products', product.id, 'edit']\">\r\n                Edit\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"errorMessage\"\r\n     class=\"alert alert-danger\">\r\n  Error: {{ errorMessage }}\r\n</div>"

/***/ }),

/***/ "./src/app/products/product-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/products/product-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/products/product-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/products/product-detail.component.ts ***!
  \******************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ProductDetailComponent = class ProductDetailComponent {
    constructor(route) {
        this.route = route;
        this.pageTitle = 'Product Detail';
    }
    ngOnInit() {
        const resolvedData = this.route.snapshot.data['resolvedData'];
        this.errorMessage = resolvedData.error;
        this.onProductRetrieved(resolvedData.product);
    }
    onProductRetrieved(product) {
        this.product = product;
        if (this.product) {
            this.pageTitle = `Product Detail: ${this.product.productName}`;
        }
        else {
            this.pageTitle = 'No product found';
        }
    }
};
ProductDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./product-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/products/product-detail.component.html"),
        styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/products/product-detail.component.css")]
    })
], ProductDetailComponent);



/***/ }),

/***/ "./src/app/products/product-edit/product-edit-info.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/products/product-edit/product-edit-info.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProductEditInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditInfoComponent", function() { return ProductEditInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let ProductEditInfoComponent = class ProductEditInfoComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route.parent.data.subscribe(data => {
            if (this.productForm) {
                this.productForm.reset();
            }
            this.product = data['resolvedData'].product;
        });
    }
};
ProductEditInfoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], { static: false })
], ProductEditInfoComponent.prototype, "productForm", void 0);
ProductEditInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./product-edit-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/products/product-edit/product-edit-info.component.html")
    })
], ProductEditInfoComponent);



/***/ }),

/***/ "./src/app/products/product-edit/product-edit-tags.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/products/product-edit/product-edit-tags.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProductEditTagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditTagsComponent", function() { return ProductEditTagsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ProductEditTagsComponent = class ProductEditTagsComponent {
    constructor(route) {
        this.route = route;
        this.newTags = '';
    }
    ngOnInit() {
        this.route.parent.data.subscribe(data => {
            this.product = data['resolvedData'].product;
        });
    }
    // Add the defined tags
    addTags() {
        if (!this.newTags) {
            this.errorMessage = 'Enter the search keywords separated by commas and then press Add';
        }
        else {
            const tagArray = this.newTags.split(',');
            this.product.tags = this.product.tags ? this.product.tags.concat(tagArray) : tagArray;
            this.newTags = '';
            this.errorMessage = '';
        }
    }
    // Remove the tag from the array of tags.
    removeTag(idx) {
        this.product.tags.splice(idx, 1);
    }
};
ProductEditTagsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ProductEditTagsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./product-edit-tags.component.html */ "./node_modules/raw-loader/index.js!./src/app/products/product-edit/product-edit-tags.component.html")
    })
], ProductEditTagsComponent);



/***/ }),

/***/ "./src/app/products/product-edit/product-edit.component.css":
/*!******************************************************************!*\
  !*** ./src/app/products/product-edit/product-edit.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-exclamation {\r\n  color: red;\r\n}\r\n\r\n.wizard a {\r\n    background: #efefef;\r\n    display: inline-block;\r\n    margin-right: 5px;\r\n    min-width: 150px;\r\n    outline: none;\r\n    padding: 10px 40px 10px;\r\n    position: relative;\r\n    text-decoration: none;\r\n}\r\n\r\n.wizard a:hover {\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n\r\n/* Adds the cut out on the left side of the tab */\r\n\r\n.wizard a:before {\r\n    width: 0;\r\n    height: 0;\r\n    border-top: 20px inset transparent;\r\n    border-bottom: 24px inset transparent;\r\n    border-left: 20px solid #fff;\r\n    position: absolute;\r\n    content: \"\";\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n/* Adds the arrow on the right side of the tab */\r\n\r\n.wizard a:after {\r\n    width: 0;\r\n    height: 0;\r\n    border-top: 20px inset transparent;\r\n    border-bottom: 24px inset transparent;\r\n    border-left: 21px solid #efefef;\r\n    position: absolute;\r\n    content: \"\";\r\n    top: 0;\r\n    right: -20px;\r\n    z-index: 2;\r\n}\r\n\r\n/* Squares the start and end of the tab bar */\r\n\r\n.wizard a:first-child:before,\r\n.wizard a:last-child:after {\r\n    border: none;\r\n}\r\n\r\n/* Rounds the corners */\r\n\r\n.wizard a:first-child {\r\n    border-radius: 8px 0 0 0px;\r\n}\r\n\r\n.wizard a:last-child {\r\n    border-radius: 0 8px 0px 0;\r\n}\r\n\r\n.wizard .active {\r\n    background: #007ACC;\r\n    color: #fff;\r\n}\r\n\r\n/* Adds the right arrow after the tab */\r\n\r\n.wizard .active:after {\r\n    border-left-color: #007ACC;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1lZGl0L3Byb2R1Y3QtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7O0FBRUksaURBQWlEOztBQUNyRDtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0NBQWtDO0lBQ2xDLHFDQUFxQztJQUNyQyw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxNQUFNO0lBQ04sT0FBTztBQUNYOztBQUVJLGdEQUFnRDs7QUFDcEQ7SUFDSSxRQUFRO0lBQ1IsU0FBUztJQUNULGtDQUFrQztJQUNsQyxxQ0FBcUM7SUFDckMsK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsTUFBTTtJQUNOLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUksNkNBQTZDOztBQUNqRDs7SUFFSSxZQUFZO0FBQ2hCOztBQUVJLHVCQUF1Qjs7QUFDM0I7SUFHSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFHSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVJLHVDQUF1Qzs7QUFDM0M7SUFDSSwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0LWVkaXQvcHJvZHVjdC1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmEtZXhjbGFtYXRpb24ge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi53aXphcmQgYSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEwcHggNDBweCAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ud2l6YXJkIGE6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbiAgICAvKiBBZGRzIHRoZSBjdXQgb3V0IG9uIHRoZSBsZWZ0IHNpZGUgb2YgdGhlIHRhYiAqL1xyXG4ud2l6YXJkIGE6YmVmb3JlIHtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLXRvcDogMjBweCBpbnNldCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDI0cHggaW5zZXQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItbGVmdDogMjBweCBzb2xpZCAjZmZmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbiAgICAvKiBBZGRzIHRoZSBhcnJvdyBvbiB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgdGFiICovXHJcbi53aXphcmQgYTphZnRlciB7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlci10b3A6IDIwcHggaW5zZXQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAyNHB4IGluc2V0IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDIxcHggc29saWQgI2VmZWZlZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogLTIwcHg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4gICAgLyogU3F1YXJlcyB0aGUgc3RhcnQgYW5kIGVuZCBvZiB0aGUgdGFiIGJhciAqL1xyXG4ud2l6YXJkIGE6Zmlyc3QtY2hpbGQ6YmVmb3JlLFxyXG4ud2l6YXJkIGE6bGFzdC1jaGlsZDphZnRlciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbiAgICAvKiBSb3VuZHMgdGhlIGNvcm5lcnMgKi9cclxuLndpemFyZCBhOmZpcnN0LWNoaWxkIHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogOHB4IDAgMCAwcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDhweCAwIDAgMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDAgMCAwcHg7XHJcbn1cclxuXHJcbi53aXphcmQgYTpsYXN0LWNoaWxkIHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCA4cHggMHB4IDA7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDAgOHB4IDBweCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCA4cHggMHB4IDA7XHJcbn1cclxuXHJcbi53aXphcmQgLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA3QUNDO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbiAgICAvKiBBZGRzIHRoZSByaWdodCBhcnJvdyBhZnRlciB0aGUgdGFiICovXHJcbi53aXphcmQgLmFjdGl2ZTphZnRlciB7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzAwN0FDQztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/products/product-edit/product-edit.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/products/product-edit/product-edit.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function() { return ProductEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _messages_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../messages/message.service */ "./src/app/messages/message.service.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product.service */ "./src/app/products/product.service.ts");





let ProductEditComponent = class ProductEditComponent {
    constructor(productService, messageService, route, router) {
        this.productService = productService;
        this.messageService = messageService;
        this.route = route;
        this.router = router;
        this.pageTitle = 'Product Edit';
        this.dataIsValid = {};
    }
    get isDirty() {
        return JSON.stringify(this.originalProduct) !== JSON.stringify(this.currentProduct);
    }
    get product() {
        return this.currentProduct;
    }
    set product(value) {
        this.currentProduct = value;
        // Clone the object to retain a copy
        this.originalProduct = Object.assign({}, value);
    }
    ngOnInit() {
        this.route.data.subscribe(data => {
            const resolvedData = data['resolvedData'];
            this.errorMessage = resolvedData.error;
            this.onProductRetrieved(resolvedData.product);
        });
    }
    onProductRetrieved(product) {
        this.product = product;
        if (!this.product) {
            this.pageTitle = 'No product found';
        }
        else {
            if (this.product.id === 0) {
                this.pageTitle = 'Add Product';
            }
            else {
                this.pageTitle = `Edit Product: ${this.product.productName}`;
            }
        }
    }
    deleteProduct() {
        if (this.product.id === 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete(`${this.product.productName} was deleted`);
        }
        else {
            if (confirm(`Really delete the product: ${this.product.productName}?`)) {
                this.productService.deleteProduct(this.product.id).subscribe({
                    next: () => this.onSaveComplete(`${this.product.productName} was deleted`),
                    error: err => this.errorMessage = err
                });
            }
        }
    }
    isValid(path) {
        this.validate();
        if (path) {
            return this.dataIsValid[path];
        }
        return (this.dataIsValid &&
            Object.keys(this.dataIsValid).every(d => this.dataIsValid[d] === true));
    }
    reset() {
        this.dataIsValid = null;
        this.currentProduct = null;
        this.originalProduct = null;
    }
    saveProduct() {
        if (this.isValid()) {
            if (this.product.id === 0) {
                this.productService.createProduct(this.product).subscribe({
                    next: () => this.onSaveComplete(`The new ${this.product.productName} was saved`),
                    error: err => this.errorMessage = err
                });
            }
            else {
                this.productService.updateProduct(this.product).subscribe({
                    next: () => this.onSaveComplete(`The updated ${this.product.productName} was saved`),
                    error: err => this.errorMessage = err
                });
            }
        }
        else {
            this.errorMessage = 'Please correct the validation errors.';
        }
    }
    onSaveComplete(message) {
        if (message) {
            this.messageService.addMessage(message);
        }
        this.reset();
        // Navigate back to the product list
        this.router.navigate(['/products']);
    }
    validate() {
        // Clear the validation object
        this.dataIsValid = {};
        // 'info' tab
        if (this.product.productName &&
            this.product.productName.length >= 3 &&
            this.product.productCode) {
            this.dataIsValid['info'] = true;
        }
        else {
            this.dataIsValid['info'] = false;
        }
        // 'tags' tab
        if (this.product.category &&
            this.product.category.length >= 3) {
            this.dataIsValid['tags'] = true;
        }
        else {
            this.dataIsValid['tags'] = false;
        }
    }
};
ProductEditComponent.ctorParameters = () => [
    { type: _product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _messages_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProductEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./product-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/products/product-edit/product-edit.component.html"),
        styles: [__webpack_require__(/*! ./product-edit.component.css */ "./src/app/products/product-edit/product-edit.component.css")]
    })
], ProductEditComponent);



/***/ }),

/***/ "./src/app/products/product-edit/product-edit.guard.ts":
/*!*************************************************************!*\
  !*** ./src/app/products/product-edit/product-edit.guard.ts ***!
  \*************************************************************/
/*! exports provided: ProductEditGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditGuard", function() { return ProductEditGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductEditGuard = class ProductEditGuard {
    canDeactivate(component, currentRoute, currentState, nextState) {
        if (component.isDirty) {
            const productName = component.product.productName || 'New Product';
            return confirm(`Navigate away and lose all changes to ${productName}?`);
        }
        return true;
    }
};
ProductEditGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductEditGuard);



/***/ }),

/***/ "./src/app/products/product-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/products/product-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "thead {\r\n  color: #337AB7;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aGVhZCB7XHJcbiAgY29sb3I6ICMzMzdBQjc7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/products/product-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/products/product-list.component.ts ***!
  \****************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.service */ "./src/app/products/product.service.ts");




let ProductListComponent = class ProductListComponent {
    constructor(productService, route) {
        this.productService = productService;
        this.route = route;
        this.pageTitle = 'Product List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.errorMessage = '';
        this._listFilter = '';
        this.filteredProducts = [];
        this.products = [];
    }
    get listFilter() {
        return this._listFilter;
    }
    set listFilter(value) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    ngOnInit() {
        this.listFilter = this.route.snapshot.queryParamMap.get('filterBy') || '';
        this.showImage = this.route.snapshot.queryParamMap.get('showImage') === 'true';
        this.productService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filteredProducts = this.performFilter(this.listFilter);
            },
            error: err => this.errorMessage = err
        });
    }
    performFilter(filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    toggleImage() {
        this.showImage = !this.showImage;
    }
};
ProductListComponent.ctorParameters = () => [
    { type: _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/products/product-list.component.html"),
        styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/products/product-list.component.css")]
    })
], ProductListComponent);



/***/ }),

/***/ "./src/app/products/product-resolver.service.ts":
/*!******************************************************!*\
  !*** ./src/app/products/product-resolver.service.ts ***!
  \******************************************************/
/*! exports provided: ProductResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductResolver", function() { return ProductResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product.service */ "./src/app/products/product.service.ts");





let ProductResolver = class ProductResolver {
    constructor(productService) {
        this.productService = productService;
    }
    resolve(route, state) {
        const id = route.paramMap.get('id');
        if (isNaN(+id)) {
            const message = `Product id was not a number: ${id}`;
            console.error(message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ product: null, error: message });
        }
        return this.productService.getProduct(+id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(product => ({ product: product })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            const message = `Retrieval error: ${error}`;
            console.error(message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ product: null, error: message });
        }));
    }
};
ProductResolver.ctorParameters = () => [
    { type: _product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }
];
ProductResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductResolver);



/***/ }),

/***/ "./src/app/products/product.module.ts":
/*!********************************************!*\
  !*** ./src/app/products/product.module.ts ***!
  \********************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-list.component */ "./src/app/products/product-list.component.ts");
/* harmony import */ var _product_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-detail.component */ "./src/app/products/product-detail.component.ts");
/* harmony import */ var _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-edit/product-edit.component */ "./src/app/products/product-edit/product-edit.component.ts");
/* harmony import */ var _product_edit_product_edit_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-edit/product-edit-info.component */ "./src/app/products/product-edit/product-edit-info.component.ts");
/* harmony import */ var _product_edit_product_edit_tags_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-edit/product-edit-tags.component */ "./src/app/products/product-edit/product-edit-tags.component.ts");
/* harmony import */ var _product_resolver_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-resolver.service */ "./src/app/products/product-resolver.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _product_edit_product_edit_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-edit/product-edit.guard */ "./src/app/products/product-edit/product-edit.guard.ts");











let ProductModule = class ProductModule {
};
ProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    component: _product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"]
                },
                {
                    path: ':id',
                    component: _product_detail_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailComponent"],
                    resolve: { resolvedData: _product_resolver_service__WEBPACK_IMPORTED_MODULE_8__["ProductResolver"] }
                },
                {
                    path: ':id/edit',
                    component: _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_5__["ProductEditComponent"],
                    canDeactivate: [_product_edit_product_edit_guard__WEBPACK_IMPORTED_MODULE_10__["ProductEditGuard"]],
                    resolve: { resolvedData: _product_resolver_service__WEBPACK_IMPORTED_MODULE_8__["ProductResolver"] },
                    children: [
                        { path: '', redirectTo: 'info', pathMatch: 'full' },
                        { path: 'info', component: _product_edit_product_edit_info_component__WEBPACK_IMPORTED_MODULE_6__["ProductEditInfoComponent"] },
                        { path: 'tags', component: _product_edit_product_edit_tags_component__WEBPACK_IMPORTED_MODULE_7__["ProductEditTagsComponent"] }
                    ]
                }
            ])
        ],
        declarations: [
            _product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"],
            _product_detail_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailComponent"],
            _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_5__["ProductEditComponent"],
            _product_edit_product_edit_info_component__WEBPACK_IMPORTED_MODULE_6__["ProductEditInfoComponent"],
            _product_edit_product_edit_tags_component__WEBPACK_IMPORTED_MODULE_7__["ProductEditTagsComponent"]
        ]
    })
], ProductModule);



/***/ }),

/***/ "./src/app/products/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/products/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
        this.productsUrl = 'api/products';
    }
    getProducts() {
        return this.http.get(this.productsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log(JSON.stringify(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getProduct(id) {
        if (id === 0) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.initializeProduct());
        }
        const url = `${this.productsUrl}/${id}`;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log('getProduct: ' + JSON.stringify(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    createProduct(product) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        product.id = null;
        return this.http.post(this.productsUrl, product, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log('createProduct: ' + JSON.stringify(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    deleteProduct(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        const url = `${this.productsUrl}/${id}`;
        return this.http.delete(url, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log('deleteProduct: ' + id)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    updateProduct(product) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        const url = `${this.productsUrl}/${product.id}`;
        return this.http.put(url, product, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => console.log('updateProduct: ' + product.id)), 
        // Return the product on an update
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => product), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage;
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        console.error(err);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
    initializeProduct() {
        // Return an initialized object
        return {
            id: 0,
            productName: null,
            productCode: null,
            category: null,
            tags: [],
            releaseDate: null,
            price: null,
            description: null,
            starRating: null,
            imageUrl: null
        };
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductService);



/***/ })

}]);
//# sourceMappingURL=products-product-module-es2015.js.map