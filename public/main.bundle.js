webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/modules/content/content.module": [
		"../../../../../src/app/modules/content/content.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_landing_landing_component__ = __webpack_require__("../../../../../src/app/modules/landing/landing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__modules_landing_landing_component__["a" /* LandingComponent */]
    },
    {
        path: 'content',
        loadChildren: 'app/modules/content/content.module#ContentModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modules_landing_landing_component__["a" /* LandingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes, {
                    enableTracing: false
                })
            ],
            providers: [],
            bootstrap: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Study Vis';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_content_content_module__ = __webpack_require__("../../../../../src/app/modules/content/content.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_content_model_explanations_rb_explanation_component__ = __webpack_require__("../../../../../src/app/modules/content/model-explanations/rb-explanation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_content_model_explanations_svm_explanation_component__ = __webpack_require__("../../../../../src/app/modules/content/model-explanations/svm-explanation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__configuration_service__ = __webpack_require__("../../../../../src/app/configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__modules_content_content_module__["ContentModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__configuration_service__["a" /* ConfigurationService */],
                __WEBPACK_IMPORTED_MODULE_7__services_data_service__["a" /* DataService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__modules_content_model_explanations_rb_explanation_component__["a" /* RbExplanationComponent */],
                __WEBPACK_IMPORTED_MODULE_5__modules_content_model_explanations_svm_explanation_component__["a" /* SvmExplanationComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/configuration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigurationService = /** @class */ (function () {
    function ConfigurationService() {
        this.developmentBaseURL = 'http://localhost:5000';
        this.productionBaseURL = 'https://vis-prod.herokuapp.com';
        this.stagingBaseURL = 'https://vis-stage.herokuapp.com';
        this.activeURL = this.developmentBaseURL;
    }
    ConfigurationService.prototype.getActiveUrl = function () {
        return this.activeURL;
    };
    ConfigurationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ConfigurationService);
    return ConfigurationService;
}());



/***/ }),

/***/ "../../../../../src/app/modules/content/content-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nav_component__ = __webpack_require__("../../../../../src/app/modules/content/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_component__ = __webpack_require__("../../../../../src/app/modules/content/models.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var contentRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__nav_component__["a" /* NavComponent */],
        children: [
            {
                path: 'models',
                component: __WEBPACK_IMPORTED_MODULE_3__models_component__["a" /* ModelsComponent */]
            }
        ]
    },
];
var ContentRoutingModule = /** @class */ (function () {
    function ContentRoutingModule() {
    }
    ContentRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(contentRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ],
            providers: []
        })
    ], ContentRoutingModule);
    return ContentRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/content/content.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentModule", function() { return ContentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_component__ = __webpack_require__("../../../../../src/app/modules/content/models.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nav_component__ = __webpack_require__("../../../../../src/app/modules/content/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__prediction_result_component__ = __webpack_require__("../../../../../src/app/modules/content/prediction-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_explanations_explanation_parent_component__ = __webpack_require__("../../../../../src/app/modules/content/model-explanations/explanation-parent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_explanations_rb_explanation_component__ = __webpack_require__("../../../../../src/app/modules/content/model-explanations/rb-explanation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model_explanations_svm_explanation_component__ = __webpack_require__("../../../../../src/app/modules/content/model-explanations/svm-explanation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__model_explanations_explanation_text_box_component__ = __webpack_require__("../../../../../src/app/modules/content/model-explanations/explanation-text-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__model_explanations_rb_annotated_sentence_component__ = __webpack_require__("../../../../../src/app/modules/content/model-explanations/rb-annotated-sentence.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__model_explanations_explanation_view_directive__ = __webpack_require__("../../../../../src/app/modules/content/model-explanations/explanation-view.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__model_explanations_explanation_tab_behaivor_directive__ = __webpack_require__("../../../../../src/app/modules/content/model-explanations/explanation-tab-behaivor.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__content_routing_module__ = __webpack_require__("../../../../../src/app/modules/content/content-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_rb_sentence_parser_service__ = __webpack_require__("../../../../../src/app/services/rb-sentence-parser.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var ContentModule = /** @class */ (function () {
    function ContentModule() {
    }
    ContentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_3__models_component__["a" /* ModelsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__prediction_result_component__["a" /* PredictionResultComponent */],
                __WEBPACK_IMPORTED_MODULE_11__model_explanations_explanation_view_directive__["a" /* ExplanationViewDirective */],
                __WEBPACK_IMPORTED_MODULE_6__model_explanations_explanation_parent_component__["a" /* ExplanationParentComponent */],
                __WEBPACK_IMPORTED_MODULE_7__model_explanations_rb_explanation_component__["a" /* RbExplanationComponent */],
                __WEBPACK_IMPORTED_MODULE_8__model_explanations_svm_explanation_component__["a" /* SvmExplanationComponent */],
                __WEBPACK_IMPORTED_MODULE_12__model_explanations_explanation_tab_behaivor_directive__["a" /* ExplanationTabBehaivorDirective */],
                __WEBPACK_IMPORTED_MODULE_9__model_explanations_explanation_text_box_component__["a" /* ExplanationTextBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_10__model_explanations_rb_annotated_sentence_component__["a" /* RbAnnotatedSentenceComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_13__content_routing_module__["a" /* ContentRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__services_rb_sentence_parser_service__["a" /* RbSentenceParserService */]],
            bootstrap: []
        })
    ], ContentModule);
    return ContentModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/content/model-explanations/explanation-parent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1#explanation-header {\n  font-family: Playfair Display;\n  font-size: 24pt;\n}\n\ndiv#parent-nav-div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n\ndiv.explanation-tab {\n  -webkit-transition-duration: .2s;\n          transition-duration: .2s;\n  font-family: Roboto;\n  font-size: 14pt;\n  margin: 30px 45px 60px 0;\n  border-bottom: solid white 2px;\n}\n\ndiv.explanation-tab:hover {\n  cursor: pointer;\n  -webkit-transition-duration: .2s;\n          transition-duration: .2s;\n  border-bottom: solid black 2px;\n}\n\ndiv.explanation-tab.active {\n  -webkit-transition-duration: .2s;\n          transition-duration: .2s;\n  border-bottom: solid black 2px;\n}\n\ndiv.explanation-tab.deactivated {\n  color: darkgray;\n}\n\ndiv.explanation-tab.deactivated:hover {\n  cursor: default;\n  border-bottom: solid white 2px;\n}\n\napp-rb-explanation app-svm-explanation {\n  display: block;\n  width: 100%;\n  margin-bottom: 50px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/content/model-explanations/explanation-parent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplanationParentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rb_explanation_component__ = __webpack_require__("../../../../../src/app/modules/content/model-explanations/rb-explanation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svm_explanation_component__ = __webpack_require__("../../../../../src/app/modules/content/model-explanations/svm-explanation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__explanation_view_directive__ = __webpack_require__("../../../../../src/app/modules/content/model-explanations/explanation-view.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3_selection__ = __webpack_require__("../../../../d3-selection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ExplanationParentComponent = /** @class */ (function () {
    function ExplanationParentComponent(dataService, componentFactoryResolver) {
        this.dataService = dataService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.selectedModelName = '';
        this.modelNames = ['rb', 'svm-ds', 'svm-fs'];
        this.changeKeyNames = ['rbData', 'svmDSData', 'svmFSData'];
        this.modelNameMap = {
            'rb': { data: this.rbData, tabName: 'rule-based-tab' },
            'svm-ds': { data: this.svmDSData, tabName: 'svm-ds-tab' },
            'svm-fs': { data: this.svmFSData, tabName: 'svm-fd-tab' }
        };
    }
    ExplanationParentComponent.prototype.ngOnInit = function () {
    };
    ExplanationParentComponent.prototype.ngAfterViewInit = function () {
    };
    ExplanationParentComponent.prototype.ngOnChanges = function (changes) {
        // Check for changes to 'predictionMade'
        if (changes.hasOwnProperty('predictionMade') && this.inputValueIsBeingUpdated('predictionMade', changes)) {
            var predictionChange = changes.predictionMade;
            if (predictionChange.previousValue === false && predictionChange.currentValue === true) {
                // Remove 'deactivated' class from the tabs
                // Check if 'selectedModel' has a value, if so call explanationSelected() and pass in
                // object whose id is equal to the selected tab. Otherwise call explanationSelected()
                // with the svm tab id.
                var explanationTabs = __WEBPACK_IMPORTED_MODULE_5_d3_selection__["g" /* selectAll */]('.explanation-tab').classed('deactivated', false);
                var ruleBasedTab = __WEBPACK_IMPORTED_MODULE_5_d3_selection__["f" /* select */]('#rule-based-tab').node();
                var selectionInput = { target: ruleBasedTab };
                this.explanationSelected(selectionInput);
            }
        }
        // Check for changes to model data and update properties accordingly.
        for (var _i = 0, _a = this.changeKeyNames; _i < _a.length; _i++) {
            var modelName = _a[_i];
            if (changes.hasOwnProperty(modelName)) {
                if (this.inputValueIsBeingSet(modelName, changes) || this.inputValueIsBeingUpdated(modelName, changes)) {
                    this.onModelDataChange(modelName, changes[modelName].currentValue);
                }
            }
        }
    };
    ExplanationParentComponent.prototype.explanationSelected = function (event) {
        if (event.target.classList.contains('deactivated')) {
            return;
        }
        var explanationTabs = __WEBPACK_IMPORTED_MODULE_5_d3_selection__["g" /* selectAll */](".explanation-tab").classed('active', false);
        var selectedTabId = event.target.id;
        var selectedModelName = this.selectedModelName = event.target.getAttribute('data-model-name');
        var selectedTabElement = __WEBPACK_IMPORTED_MODULE_5_d3_selection__["f" /* select */]("#" + selectedTabId).classed('active', true);
        this.displayExplanation(selectedModelName);
    };
    ExplanationParentComponent.prototype.displayExplanation = function (explanationName) {
        var selectedComponent;
        var data;
        if (explanationName === 'rb') {
            selectedComponent = __WEBPACK_IMPORTED_MODULE_2__rb_explanation_component__["a" /* RbExplanationComponent */];
            data = this.rbData;
        }
        else {
            selectedComponent = __WEBPACK_IMPORTED_MODULE_3__svm_explanation_component__["a" /* SvmExplanationComponent */];
            if (explanationName === 'svm-fs') {
                data = this.svmFSData;
            }
            else {
                data = this.svmDSData;
            }
        }
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(selectedComponent);
        var viewContainerRef = this.explanationViewProperty.viewContainerRef;
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        var componentInstance = componentRef.instance;
        componentInstance.setData(data);
        this.activeComponent = componentInstance;
    };
    ExplanationParentComponent.prototype.onModelDataChange = function (modelName, newModelData) {
        // update the data property of whichever view is currently being shown.
        // If no view is being shown call setTimeout and try again after the view is displayed.
        if (newModelData.model !== this.activeComponent.getData().model) {
            return;
        }
        if (JSON.stringify(this.activeComponent.getData()) === JSON.stringify(newModelData)) {
            return;
        }
        this.activeComponent.setData(newModelData);
    };
    ExplanationParentComponent.prototype.inputValueIsBeingSet = function (key, changes) {
        if (!(changes.hasOwnProperty(key))) {
            throw Error("Changes does not have key: " + key);
        }
        var change = changes[key];
        if (Object(__WEBPACK_IMPORTED_MODULE_6_util__["isUndefined"])(change.previousValue) && !Object(__WEBPACK_IMPORTED_MODULE_6_util__["isUndefined"])(change.currentValue)) {
            return true;
        }
        else {
            return false;
        }
    };
    ExplanationParentComponent.prototype.inputValueIsBeingUpdated = function (key, changes) {
        if (!(changes.hasOwnProperty(key))) {
            throw Error("Changes does not have key: " + key);
        }
        var change = changes[key];
        if (!Object(__WEBPACK_IMPORTED_MODULE_6_util__["isUndefined"])(change.previousValue)) {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__explanation_view_directive__["a" /* ExplanationViewDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__explanation_view_directive__["a" /* ExplanationViewDirective */])
    ], ExplanationParentComponent.prototype, "explanationViewProperty", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ExplanationParentComponent.prototype, "rbData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ExplanationParentComponent.prototype, "svmFSData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ExplanationParentComponent.prototype, "svmDSData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ExplanationParentComponent.prototype, "predictionMade", void 0);
    ExplanationParentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None,
            selector: 'app-explanation-parent',
            template: "\n    <h1 id=\"explanation-header\">How do they work?</h1>\n    <div id=\"parent-nav-div\">\n      <div id=\"rule-based-tab\" class=\"explanation-tab deactivated\" data-model-name=\"rb\" (click)=\"explanationSelected($event)\">\n        Rule-Based\n      </div>\n      <div id=\"svm-fs-tab\" class=\"explanation-tab deactivated\" data-model-name=\"svm-fs\" (click)=\"explanationSelected($event)\">\n        SVM-FS\n      </div>\n      <div id=\"svm-ds-tab\" class=\"explanation-tab deactivated\" data-model-name=\"svm-ds\" (click)=\"explanationSelected($event)\">\n        SVM-DS\n      </div>\n    </div>\n    <ng-template appExplanationView></ng-template>\n  ",
            styles: [__webpack_require__("../../../../../src/app/modules/content/model-explanations/explanation-parent.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */]])
    ], ExplanationParentComponent);
    return ExplanationParentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/content/model-explanations/explanation-tab-behaivor.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplanationTabBehaivorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExplanationTabBehaivorDirective = /** @class */ (function () {
    function ExplanationTabBehaivorDirective(element) {
        this.element = element;
    }
    ExplanationTabBehaivorDirective.prototype.onMouseOver = function () {
        console.log('Mouse Over');
    };
    ExplanationTabBehaivorDirective.prototype.onMouseOut = function () {
        console.log('Mouse Out');
    };
    ExplanationTabBehaivorDirective.prototype.onClick = function () {
        console.log('Clicked');
    };
    ExplanationTabBehaivorDirective.prototype.myInstanceMethod = function (stuffToSay) {
        console.log(stuffToSay);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('mouseover'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ExplanationTabBehaivorDirective.prototype, "onMouseOver", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('mouseout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ExplanationTabBehaivorDirective.prototype, "onMouseOut", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ExplanationTabBehaivorDirective.prototype, "onClick", null);
    ExplanationTabBehaivorDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appExplanationTabBehaivor]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], ExplanationTabBehaivorDirective);
    return ExplanationTabBehaivorDirective;
}());



/***/ }),

/***/ "../../../../../src/app/modules/content/model-explanations/explanation-text-box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div#rb-explanation {\n  /*border: solid green 1px;*/\n  /*margin-bottom: 400px;*/\n}\n\ndiv#arrow-title-div {\n  /*border: solid red 1px;*/\n}\n\n#left-arrow {\n  fill:none;\n  stroke:#000;\n  stroke-miterlimit:10;\n  stroke-width:2px;\n}\n\nsvg#explanation-text-box-svg {\n  cursor: pointer;\n  -webkit-transition-duration: .3s;\n          transition-duration: .3s;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  /*border: solid 1px blue;*/\n}\n\nsvg#explanation-text-box-svg.open {\n  -webkit-transition-duration: .3s;\n          transition-duration: .3s;\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n/*g#explanation-text-box-left-arrow-group {*/\n\n/*border: solid 1px yellow;*/\n\n/*}*/\n\n#explanation-span {\n  -webkit-transition-duration: .3s;\n          transition-duration: .3s;\n  position: relative;\n  top: -8px;\n  font-family: Roboto;\n  font-size: 12pt;\n  color: darkgray;\n}\n\n#explanation-span.hidden {\n  -webkit-transition-duration: .3s;\n          transition-duration: .3s;\n  color: white;\n}\n\ndiv#explanation-text-content-div {\n  overflow: hidden;\n  -webkit-transition-duration: 1s;\n          transition-duration: 1s;\n  max-height: 500px;\n  font-family: Roboto;\n  font-size: 13pt;\n}\n\ndiv#explanation-text-content-div.closed {\n  -webkit-transition-duration: .3s;\n          transition-duration: .3s;\n  max-height: 0;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/content/model-explanations/explanation-text-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplanationTextBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_selection__ = __webpack_require__("../../../../d3-selection/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExplanationTextBoxComponent = /** @class */ (function () {
    function ExplanationTextBoxComponent() {
    }
    ExplanationTextBoxComponent.prototype.ngOnInit = function () {
    };
    ExplanationTextBoxComponent.prototype.onSvgClick = function () {
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["f" /* select */]('#explanation-text-box-svg');
        svg.classed('open', !svg.classed('open'));
        var contentDiv = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["f" /* select */]('#explanation-text-content-div');
        contentDiv.classed('closed', !contentDiv.classed('closed'));
        var explanationSpan = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["f" /* select */]('#explanation-span');
        explanationSpan.classed('hidden', !explanationSpan.classed('hidden'));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ExplanationTextBoxComponent.prototype, "content", void 0);
    ExplanationTextBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None,
            selector: 'app-explanation-text-box',
            template: "\n    <div id=\"rb-explanation\">\n      <div id=\"arrow-title-div\">\n        <svg width=\"25px\" height=\"25px\" (click)=\"onSvgClick()\" id=\"explanation-text-box-svg\">\n          <g id=\"explanation-text-box-left-arrow-group\" transform=\"translate(7, 3)\">\n            <polyline id=\"left-arrow\" points=\"9.71 18.49 1.37 9.59 9.71 0.68\"/>\n          </g>\n        </svg>\n        <span id=\"explanation-span\">Explanation</span>\n      </div>\n      <div id=\"explanation-text-content-div\" class=\"closed\" [innerHTML]=\"content\"></div>\n    </div>\n  ",
            styles: [__webpack_require__("../../../../../src/app/modules/content/model-explanations/explanation-text-box.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExplanationTextBoxComponent);
    return ExplanationTextBoxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/content/model-explanations/explanation-view.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplanationViewDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExplanationViewDirective = /** @class */ (function () {
    function ExplanationViewDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    ExplanationViewDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appExplanationView]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */]])
    ], ExplanationViewDirective);
    return ExplanationViewDirective;
}());



/***/ }),

/***/ "../../../../../src/app/modules/content/model-explanations/rb-annotated-sentence.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span {\n  font-family: Roboto;\n  font-size: 14pt;\n  margin-right: 4px;\n}\n\n.targetTextChunk {\n  background-color: orangered;\n  color: white;\n  border-radius: 4px;\n  padding-left: 2px;\n  padding-right: 2px;\n}\n\n.modifierTextChunk {\n  background-color: #3A6DA8;\n  color: white;\n  border-radius: 4px;\n  padding-left: 2px;\n  padding-right: 2px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/content/model-explanations/rb-annotated-sentence.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RbAnnotatedSentenceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RbAnnotatedSentenceComponent = /** @class */ (function () {
    function RbAnnotatedSentenceComponent() {
    }
    Object.defineProperty(RbAnnotatedSentenceComponent.prototype, "parsedSentence", {
        set: function (sentence) {
            this._parsedSentence = sentence;
            this.renderSentence();
        },
        enumerable: true,
        configurable: true
    });
    ;
    RbAnnotatedSentenceComponent.prototype.ngOnInit = function () {
    };
    RbAnnotatedSentenceComponent.prototype.renderSentence = function () {
        console.log(this._parsedSentence);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], RbAnnotatedSentenceComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('parsedSentence'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], RbAnnotatedSentenceComponent.prototype, "parsedSentence", null);
    RbAnnotatedSentenceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-rb-annotated-sentence',
            template: "\n    <span>{{index + 1}}.</span>\n    <span *ngFor=\"let chunk of _parsedSentence\" [ngClass]=\"chunk.type\"> {{chunk.text}}</span>\n  ",
            styles: [__webpack_require__("../../../../../src/app/modules/content/model-explanations/rb-annotated-sentence.component.css")]
        })
    ], RbAnnotatedSentenceComponent);
    return RbAnnotatedSentenceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/content/model-explanations/rb-explanation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-rb-annotated-sentence {\n  display: block;\n  margin: 10px 0 0 0 ;\n}\n\napp-explanation-text-box {\n  margin: 0 40px 0 40px;\n}\n\nh2 {\n  font-family: Roboto;\n  font-weight: 600;\n  font-size: 24pt;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/content/model-explanations/rb-explanation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RbExplanationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_rb_sentence_parser_service__ = __webpack_require__("../../../../../src/app/services/rb-sentence-parser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RbExplanationComponent = /** @class */ (function () {
    function RbExplanationComponent(sentenceParserService, dataService) {
        this.sentenceParserService = sentenceParserService;
        this.dataService = dataService;
        this.explanationContent = this.getExplanationContent();
    }
    RbExplanationComponent.prototype.ngOnInit = function () {
        var _this = this;
        // debugger;
        this.dataService.getTargetsAndModifiers(function (data) {
            // debugger;
            _this.targetsAndModifiers = data;
            _this.getParsedInputSentenceData();
        });
    };
    // Type assertion is necessary becasue call signature must match svm-explanation as per
    // https://github.com/Microsoft/TypeScript/issues/7294
    RbExplanationComponent.prototype.setData = function (data) {
        // debugger;
        this.data = data;
        this.stringifiedData = JSON.stringify(data);
        console.log(data);
        this.getParsedInputSentenceData();
    };
    RbExplanationComponent.prototype.getData = function () {
        return this.data;
    };
    RbExplanationComponent.prototype.getParsedInputSentenceData = function () {
        // Since we need the targets and modifiers, and the prediction data, and they come from different places, both async,
        // this function acts as a gate to ensure that we have both before we call the parserService.
        // debugger;
        if (Object(__WEBPACK_IMPORTED_MODULE_3_util__["isUndefined"])(this.targetsAndModifiers) || Object(__WEBPACK_IMPORTED_MODULE_3_util__["isUndefined"])(this.data)) {
            return;
        }
        this.parsedInputSentenceData = this.sentenceParserService.parseInputSentences(this.data.dynamic, this.targetsAndModifiers);
    };
    RbExplanationComponent.prototype.renderVisualizationContents = function () { };
    RbExplanationComponent.prototype.getExplanationContent = function () {
        return "\n    <p>The rule-based classifier relies on two lists of words: a list of targets and a list of modifiers. Target words \n    are words like \u201Cbleed\u201D, \u201Chematoma\u201D, or \u201Csdh\u201D. They are the keywords that most directly indicate that a bleeding \n    event has occurred. Modifier words are words like \u201Chistory of\u201D, \u201Cdenies\u201D, or \u201Cpresents with\u201D. They are words or \n    phrases that modify the meaning of the target words. Each word in the list of modifiers is designated as either \n    a positive modifier, or a negating modifier. For example, one negative modifier that is included in the modifier \n    list is \u201Cno evidence\u201D. Consider the text \u201Cthere is no evidence of GI bleed\u201D. The target in this sentence is \n    \u201Cbleed\u201D. However, since the negative modifier \u201Cno evidence\u201D appears in the same sentence the algorithm will not \n    mark the sentence as an indication of bleeding. Contrast this example with another: \u201Cchief complaint: epistaxis\u201D. \n    In this case the rule-based algorithm will detect that the positive modifier \u201Cchief complaint\u201D is present in the \n    same sentence as the target \u201Cepistaxis\u201D and mark the sentence as an indication of bleeding. Similarly, sentences \n    with a target term but no modifier terms will also be marked as an indication of bleeding.</p>\n    <br>\n    <p>In the visualization below, target terms are highlighted in red and any modifier terms that occur in the same sentence \n    are highlighted in blue. (Soon there will also be a marker indicating whether the modifier was positive or negative and \n    the user will be able to view the full list of targets and modifiers.)</p>\n    ";
    };
    RbExplanationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // encapsulation: ViewEncapsulation.None,
            selector: 'app-rb-explanation',
            template: "\n    <h2>Sentences Processed by the Rule-based Algorithm</h2>\n    <app-explanation-text-box [content]=\"explanationContent\"></app-explanation-text-box>\n    <app-rb-annotated-sentence *ngFor=\"let parsedSentenceData of parsedInputSentenceData; let i = index\" [index]=\"i\" [parsedSentence]=\"parsedSentenceData\">\n    </app-rb-annotated-sentence>\n    \n  ",
            styles: [__webpack_require__("../../../../../src/app/modules/content/model-explanations/rb-explanation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_rb_sentence_parser_service__["a" /* RbSentenceParserService */], __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], RbExplanationComponent);
    return RbExplanationComponent;
}());

// Here is a sentence about bleeding. And another evidence of hematoma.
// Definitely not a hematoma.


/***/ }),

/***/ "../../../../../src/app/modules/content/model-explanations/svm-explanation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/content/model-explanations/svm-explanation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvmExplanationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SvmExplanationComponent = /** @class */ (function () {
    function SvmExplanationComponent() {
        this.explanationContent = this.getExplanationContent();
    }
    SvmExplanationComponent.prototype.ngOnInit = function () { };
    // Type assertion is necessary becasue call signature must match rb-explanation as per
    // https://github.com/Microsoft/TypeScript/issues/7294
    SvmExplanationComponent.prototype.setData = function (data) {
        this.data = data;
        console.log(data);
    };
    SvmExplanationComponent.prototype.getData = function () {
        return this.data;
    };
    SvmExplanationComponent.prototype.getExplanationContent = function () {
        return 'This is where the SVM explanation text will go.';
    };
    SvmExplanationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-svm-explanation',
            template: "\n    <app-explanation-text-box [content]=\"explanationContent\"></app-explanation-text-box>\n  ",
            styles: [__webpack_require__("../../../../../src/app/modules/content/model-explanations/svm-explanation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SvmExplanationComponent);
    return SvmExplanationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/content/models.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  font-family: \"Roboto\";\n  font-size: 16pt;\n  margin: 130px 0 15px 0;\n  /*letter-spacing: 1px;*/\n}\n\nh2 {\n  font-family: Roboto;\n  font-size: 14pt;\n}\n\nh2#example-button-header {\n  font-family: Roboto;\n  letter-spacing: 1px;\n  font-size: 14pt;\n  margin-top: 0px;\n}\n\nh3 {\n  font-family: Roboto;\n  font-size: 10pt;\n}\n\n#content {\n  position: relative;\n  width: 85%;\n  height: 630px;\n  margin: 50px auto 0 auto;\n  border: 1px solid white;\n}\n\n#result-icon-div {\n  width: 90%;\n  margin: 0 auto 0 0;\n  /*border: solid 1px blue;*/\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 120px;\n}\n\n#text-entry-div {\n  position: relative;\n  float: left;\n  /*border: solid 1px darkgray;*/\n  height: 630px;\n  width: 60%;\n}\n\n.result-row {\n  display: inline-block;\n}\n\n#rb-result-div {\n  width: 80px;\n}\n\n#dividing-line-div {\n  height: 100%;\n  width: 5px;\n}\n\n.paired-result-div {\n  display: inline-block;\n  text-align: center;\n}\n\n.individual-result-div {\n  display: inline-block;\n  text-align: center;\n  margin: 0 2px 0 2px;\n}\n\napp-prediction-result {\n  display: inline-block;\n  width: 80px;\n}\n\n#examples-div {\n  margin-left: 60%;\n  height: 450px;\n  text-align: left;\n  /*border: solid 1px lime;*/\n}\n\n#text-area-div {\n  width: 90%;\n  margin: 15px auto 10px 0;\n  /*border: solid 1px blueviolet;*/\n}\n\ntextarea#text-entry {\n  position: relative;\n  resize: none;\n  width: 100%;\n  height: 400px;\n  /*border: solid 1px lightgray;*/\n  border-radius: 3px;\n  font-family: Roboto;\n  font-size: 14pt;\n}\n\ntextarea:focus, input:focus{\n  outline: none;\n  border: solid 1px black;\n}\n\n#button-container-div {\n  position: relative;\n  width: 90%;\n  margin: 0 auto 0 0;\n  /*border: solid 1px orange;*/\n  padding: 0;\n}\n\n#button-position-div {\n  /*border: solid 1px rebeccapurple;*/\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 235px;\n  margin: 0 0 0 auto;\n}\n\nbutton {\n  font-family: Roboto;\n  letter-spacing: 1px;\n  font-size: 14pt;\n  border-radius: 5px;\n  width: 110px;\n  height: 40px;\n  cursor: pointer;\n}\n\nbutton:focus {\n  outline: none;\n}\n\nbutton#clear-button {\n  background-color: white;\n  border: none;\n  color: black;\n}\n\nbutton#predict-button {\n  border: solid black 2px;\n  color: black;\n}\n\n#example-selection-container {\n  height: 32px;\n  width: 120px;\n  /*margin: 0 auto;*/\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.example-svg:hover {\n  cursor: pointer;\n}\n\ncircle.active {\n  fill: #575757;\n}\n\ntextarea#note-display {\n  height: 264px;\n  width: 90%;\n  margin: 20px auto 0 auto;\n  resize: none;\n  /*border: solid 1px black;*/\n  border: none;\n  font-family: Roboto;\n  font-size: 10pt;\n}\n\n#copy-button-div {\n  margin: 20px auto 0 auto;\n  width: 195px;\n  height: 35px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  /*border: solid 1px green;*/\n}\n\n#copy-button-div:hover {\n  cursor: pointer;\n}\n\n#copy-svg-div {\n  display: inline-block;\n}\n\n#left-arrow {\n  fill:none;\n  stroke:#000;\n  stroke-miterlimit:10;\n  stroke-width:2px;\n}\n\napp-explanation-parent {\n  display: block;\n  width: 85%;\n  margin: 0 auto 80px auto;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/content/models.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configuration_service__ = __webpack_require__("../../../../../src/app/configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3__ = __webpack_require__("../../../../d3/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModelsComponent = /** @class */ (function () {
    function ModelsComponent(http, configService) {
        this.http = http;
        this.configService = configService;
        this.predictionMade = false;
        this.backendUrl = this.configService.getActiveUrl();
    }
    ModelsComponent.prototype.ngOnInit = function () {
        this.textAreaPlaceholder = 'Enter the text you want to classify.';
        this.modelNames = ['rb', 'svm', 'svm-ds', 'et', 'et-ds', 'cnn', 'cnn-ds'];
        this.childMap = {
            rb: this.rbResult,
            svm: this.svmResult,
            'svm-ds': this.svmDSResult,
            et: this.etResult,
            'et-ds': this.etDSResult,
            cnn: this.cnnResult,
            'cnn-ds': this.cnnDSResult
        };
        this.exampleNotes = this.loadNotes();
        this.activeExampleNote = this.exampleNotes[0];
    };
    ModelsComponent.prototype.predictText = function () {
        var _this = this;
        if (this.userText === '') {
            return;
        }
        for (var _i = 0, _a = this.modelNames; _i < _a.length; _i++) {
            var modelName = _a[_i];
            for (var childViewKey in this.childMap) {
                if (this.childMap.hasOwnProperty(childViewKey)) {
                    var childView = this.childMap[childViewKey];
                    childView.showLoading();
                }
            }
            this.http.post(this.backendUrl + '/predict', { text: this.userText, model: modelName }).subscribe(function (response) {
                var childView = _this.childMap[response.model];
                childView.showResult(response.prediction);
                // These values are all being watched by explanation parent.
                if (!(_this.predictionMade)) {
                    _this.predictionMade = true;
                }
                if (response.model === 'rb') {
                    _this.rbData = response;
                }
                else if (response.model === 'svm') {
                    _this.svmFSData = response;
                }
                else if (response.model === 'svm-ds') {
                    _this.svmDSData = response;
                }
            });
        }
    };
    ModelsComponent.prototype.clearText = function () {
        var textArea = document.getElementById('text-entry');
        textArea.value = this.userText = '';
    };
    ModelsComponent.prototype.exampledSelected = function (event) {
        var selectedId = event.srcElement.getAttribute('id');
        var svg = __WEBPACK_IMPORTED_MODULE_3_d3__["b" /* selectAll */]("circle.example-circle").classed('active', false);
        var selectedCircle = __WEBPACK_IMPORTED_MODULE_3_d3__["a" /* select */]("circle#" + selectedId).classed('active', true);
        var domElement = selectedCircle.node();
        var index = domElement.getAttribute('data-circle-index');
        this.activeExampleNote = this.exampleNotes[index];
    };
    ModelsComponent.prototype.copyExampleNote = function () {
        var noteCopy = this.activeExampleNote.slice(0);
        var textArea = document.getElementById('text-entry');
        textArea.value = this.userText = noteCopy;
    };
    ModelsComponent.prototype.loadNotes = function () {
        var notes = [];
        notes[0] = 'Admission Date: 04/24/2004      Discharge Date: 04/27/2004\n' +
            'Service: MEDICINE\n' +
            'Allergies: No known allergies\n' +
            '\n' +
            'Chief Complaint: chest pain, SOB, Afib\n' +
            '\n' +
            'Major Surgical or Invasive Procedure:\n' +
            'Cardiac catheterization\n' +
            'Pulmonary vein isolation\n' +
            '\n' +
            'Brief Hospital Course:\n' +
            'The patient is a 67 year old male on coumadin who presents with chest ' +
            'pain and elevated troponin. He went in and out of rapid afib and sinus ' +
            'bradycardia while admitted. Was scheduled for a PCI on 4/26/2004 which ' +
            'was complicated by orophanyngeal bleeding from TEE probe. He was ' +
            'subsequently transferred to the CCU. Nodal agents were held given his ' +
            'bradychardia when not in AFIB. A CT scan was done which showed no evidence of sdh.\n' +
            '\n' +
            'Oropharyngeal Injury:\n' +
            'Patient suffered an injury during intubation in preparation for PCI. ' +
            'Higher than normal resistance was met in the pharynx during the placement ' +
            'of the probe. Insertion of the probe was stopped. Mild oozing was noted and ' +
            'the pharynx was packed, successfully ending the oozing.\n' +
            '\n' +
            'GERD:\n' +
            'Will continue omeprazole at home, 40mg q.d. Notably the reflux symptoms only ' +
            'appear when the patient is in afib, suggesting that it may be a symptomatic ' +
            'arrythmia rather than GERD.';
        notes[1] = 'Example note 2.';
        return notes;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('rbResult'),
        __metadata("design:type", Object)
    ], ModelsComponent.prototype, "rbResult", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('svmResult'),
        __metadata("design:type", Object)
    ], ModelsComponent.prototype, "svmResult", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('svmDSResult'),
        __metadata("design:type", Object)
    ], ModelsComponent.prototype, "svmDSResult", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('etResult'),
        __metadata("design:type", Object)
    ], ModelsComponent.prototype, "etResult", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('etDSResult'),
        __metadata("design:type", Object)
    ], ModelsComponent.prototype, "etDSResult", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('cnnResult'),
        __metadata("design:type", Object)
    ], ModelsComponent.prototype, "cnnResult", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('cnnDSResult'),
        __metadata("design:type", Object)
    ], ModelsComponent.prototype, "cnnDSResult", void 0);
    ModelsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-models',
            template: "\n    <section id=\"content\">\n      <div id=\"text-entry-div\">\n        <div id=\"result-icon-div\">\n          <div id=\"rb-result-div\" class=\"result-row\">\n            <div class=\"individual-result-div\">\n              <h2 style=\"margin: 9px;\">RB</h2>\n              <app-prediction-result #rbResult [myId]=\"'rb'\" [attr.id]=\"'rb'\"></app-prediction-result>\n            </div>\n          </div>\n          <div id=\"dividing-line-div\" class=\"result-row\">\n            <svg width=\"5\" height=\"100%\">\n              <rect width=\"100%\" height=\"100%\" fill=\"#575757\"></rect>\n            </svg>\n          </div>\n          <div id=\"ml-results-div\" class=\"result-row\">\n            <div class=\"paired-result-div\">\n              <h2>SVM</h2>\n              <div class=\"individual-result-div\">\n                <h3>FS</h3>\n                <app-prediction-result #svmResult [myId]=\"'svm'\" [attr.id]=\"'svm'\"></app-prediction-result>\n              </div>\n              <div class=\"individual-result-div\">\n                <h3>DS</h3>\n                <app-prediction-result #svmDSResult [myId]=\"'svm-ds'\" [attr.id]=\"'svm-ds'\"></app-prediction-result>\n              </div>\n            </div>\n            <div class=\"paired-result-div\">\n              <h2>ET</h2>\n              <div class=\"individual-result-div\">\n                <h3>FS</h3>\n                <app-prediction-result #etResult [myId]=\"'et'\" [attr.id]=\"'et'\"></app-prediction-result>\n              </div>\n              <div class=\"individual-result-div\">\n                <h3>DS</h3>\n                <app-prediction-result #etDSResult [myId]=\"'et-ds'\" [attr.id]=\"'et-ds'\"></app-prediction-result>\n              </div>\n            </div>\n            <div class=\"paired-result-div\">\n              <h2>CNN</h2>\n              <div class=\"individual-result-div\">\n                <h3>FS</h3>\n                <app-prediction-result #cnnResult [myId]=\"'cnn'\" [attr.id]=\"'cnn'\"></app-prediction-result>\n              </div>\n              <div class=\"individual-result-div\">\n                <h3>DS</h3>\n                <app-prediction-result #cnnDSResult [myId]=\"'cnn-ds'\" [attr.id]=\"'cnn-ds'\"></app-prediction-result>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div id=\"text-area-div\">\n          <textarea id=\"text-entry\" spellcheck=\"false\" [placeholder]=\"textAreaPlaceholder\" (input)=\"userText=$event.target.value\"></textarea>\n        </div>\n        <div id=\"button-container-div\">\n          <div id=\"button-position-div\">\n            <button type=\"button\" id=\"clear-button\" (click)=\"clearText()\">Clear</button>\n            <button type=\"button\" id=\"predict-button\" (click)=\"predictText()\">Predict</button>\n          </div>\n        </div>\n      </div>\n      <div id=\"examples-div\">\n        <h1>Try an example.</h1>\n        <div id=\"example-selection-container\">\n          <div id=\"positive-example-div\">\n            <svg id=\"positive-selection\" width=\"32\" height=\"32\" class=\"example-svg\" (click)=\"exampledSelected($event)\">\n              <circle id=\"positive-selection\" r=\"16\" cx=\"16\" cy=\"16\" fill=\"darkgray\" class=\"example-circle active\" data-circle-index=\"0\"></circle>\n              <line y1=\".5\" y2=\".5\" x2=\"13\" transform=\"translate(10, 15)\" stroke=\"white\" stroke-width=\"1\"></line>\n              <line x1=\".5\" x2=\".5\" y2=\"13\" transform=\"translate(16, 9)\" stroke=\"white\" stroke-width=\"1\"></line>\n            </svg>\n          </div>\n          <div id=\"negative-example-div\" class=\"example-svg\">\n            <svg id=\"negative-selection\" width=\"32\" height=\"32\" class=\"example-svg\" (click)=\"exampledSelected($event)\">\n              <circle id=\"negative-selection\" r=\"16\" cx=\"16\" cy=\"16\" fill=\"darkgray\" class=\"example-circle\" data-circle-index=\"1\"></circle>\n              <line y1=\".5\" y2=\".5\" x2=\"13\" transform=\"translate(10, 15)\" stroke=\"white\" stroke-width=\"1\"></line>\n            </svg>\n          </div>\n        </div>\n        <textarea id=\"note-display\" spellcheck=\"false\" readonly=\"true\" [value]=\"activeExampleNote\"></textarea>\n        <div id=\"copy-button-div\" (click)=\"copyExampleNote()\">\n          <div id=\"copy-svg-div\">\n            <svg width=\"25px\" height=\"35px\">\n              <g transform=\"translate(0, 4)\">\n                <polyline id=\"left-arrow\" points=\"9.71 18.49 1.37 9.59 9.71 0.68\"/>\n              </g>\n            </svg>\n          </div>\n          <h2 id=\"example-button-header\">Use This Example</h2>\n        </div>\n      </div>\n    </section>\n    <app-explanation-parent [predictionMade]=\"predictionMade\" [rbData]=\"rbData\" [svmDSData]=\"svmDSData\" [svmFSData]=\"svmFSData\"></app-explanation-parent>\n    \n  ",
            styles: [__webpack_require__("../../../../../src/app/modules/content/models.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__configuration_service__["a" /* ConfigurationService */]])
    ], ModelsComponent);
    return ModelsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/content/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 300px;\n  height: 80px;\n}\n\nnav div {\n  height: 100%;\n  /*background-color: aliceblue;*/\n  padding: 0;\n  display: inline-block;\n}\n\nnav div a {\n  position: relative;\n  top: 25px;\n  font-size: 14pt;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/content/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"nav-link-div\" data-svg-id=\"home\" (click)=\"onLinkClick($event)\">\n    <a routerLink=\"\"  data-svg-id=\"home\" class=\"playfair-font\" (mouseover)=\"onLinkMouseover($event)\" (mouseout)=\"onLinkMouseout($event)\">Home</a>\n  </div>\n  <div class=\"nav-link-div\" data-svg-id=\"models\" (click)=\"onLinkClick($event)\">\n    <a routerLink=\"models\" data-svg-id=\"models\" class=\"playfair-font\" (mouseover)=\"onLinkMouseover($event)\" (mouseout)=\"onLinkMouseout($event)\">Models</a>\n  </div>\n  <div class=\"nav-link-div\" data-svg-id=\"code\" (click)=\"onCodeClick()\">\n    <a href=\"{{codeUrl}}\" data-svg-id=\"code\" target=\"_blank\" class=\"playfair-font\" (mouseover)=\"onLinkMouseover($event)\" (mouseout)=\"onLinkMouseout($event)\">Code</a>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/modules/content/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__("../../../../d3/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavComponent = /** @class */ (function () {
    function NavComponent(_router) {
        this._router = _router;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.codeUrl = 'https://github.com/MMontgomeryTaggart/CV_MachineLearning';
        // Update the active link id and set the rect to be 100% for the active link.
        var currentRoute = this._router.url.split('/').pop();
        switch (currentRoute) {
            case "":
                this.activeLinkSVGId = "home";
                break;
            case "vis":
                this.activeLinkSVGId = "vis";
                break;
            case "models":
                this.activeLinkSVGId = "models";
        }
        // Add the mouseOver mouseOut behaivor
        var anchors = __WEBPACK_IMPORTED_MODULE_2_d3__["b" /* selectAll */]("div.nav_link_div a");
        anchors.on("mouseover", this.onLinkMouseover).on("mouseout", this.onLinkMouseout);
        // Add SVG
        setTimeout(function () {
            // Add svg elements for link selection
            var navLinks = __WEBPACK_IMPORTED_MODULE_2_d3__["b" /* selectAll */]("div.nav-link-div");
            navLinks.each(function (d, i) {
                var currentDivSelection = __WEBPACK_IMPORTED_MODULE_2_d3__["a" /* select */](this);
                var currentAnchor = currentDivSelection.select("a").node();
                var currentSvgId = currentAnchor.getAttribute("data-svg-id");
                var currentBoundingRect = currentAnchor.getBoundingClientRect();
                var currentWidth = currentBoundingRect.width;
                currentDivSelection.attr("style", "width: " + currentWidth + "px");
                var svg = currentDivSelection.append("svg");
                svg.attr("width", currentWidth)
                    .attr("height", "10px")
                    .attr("style", "position: relative; top: 26px; fill: black;")
                    .attr("id", currentSvgId);
            });
            var svg = __WEBPACK_IMPORTED_MODULE_2_d3__["b" /* selectAll */]("div.nav-link-div svg");
            var rects = svg.append("rect");
            rects.attr("height", "3px")
                .attr("width", 0)
                .attr("fill", "#4F4F4F");
            _this.setRectWidth(_this.activeLinkSVGId, "100%");
        }, 200);
    };
    NavComponent.prototype.onLinkMouseover = function (event) {
        var id = event.srcElement.getAttribute("data-svg-id");
        this.setRectWidth(id, "100%");
    };
    NavComponent.prototype.onLinkMouseout = function (event) {
        if (event.srcElement.getAttribute("data-svg-id") === this.activeLinkSVGId) {
            return;
        }
        var id = event.srcElement.getAttribute("data-svg-id");
        this.setRectWidth(id, "0");
    };
    NavComponent.prototype.onLinkClick = function (event) {
        var newId = event.srcElement.getAttribute("data-svg-id");
        // Reset old link
        this.setRectWidth(this.activeLinkSVGId, "0");
        // Set new link
        this.activeLinkSVGId = newId;
        this.setRectWidth(newId, "100%");
    };
    NavComponent.prototype.onCodeClick = function () {
        this.setRectWidth("code", "0");
    };
    NavComponent.prototype.setRectWidth = function (svgId, width) {
        var rect = __WEBPACK_IMPORTED_MODULE_2_d3__["a" /* select */]("svg#" + svgId).select("rect");
        rect.transition()
            .duration(300)
            .attr("width", width);
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/modules/content/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/content/nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/content/prediction-result.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/content/prediction-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PredictionResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_selection__ = __webpack_require__("../../../../d3-selection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_shape__ = __webpack_require__("../../../../d3-shape/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_ease__ = __webpack_require__("../../../../d3-ease/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_interpolate__ = __webpack_require__("../../../../d3-interpolate/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PredictionResultComponent = /** @class */ (function () {
    function PredictionResultComponent() {
    }
    PredictionResultComponent.prototype.ngOnInit = function () {
        this.svgWidth = this.svgHeight = 80;
        this.circleGrayFill = '#B1B2B1'; // 'darkgray';
        this.circleGreenFill = '#38C16F';
        this.circleRedFill = '#DF504F';
        this.spinDuration = 1500;
        this.dropletIcon = "<path d=\"M13.84,0C11.82,16.12,0,27.46,0,35.1a13.84,13.84,0,1,0,27.67,0C27.67,27.46,15.85,16.12,13.84,0Z\" />";
    };
    PredictionResultComponent.prototype.ngAfterViewInit = function () {
        this.myContainer = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["f" /* select */]("#" + this.myId);
        this.createContent();
        this.spinLoadArc();
    };
    PredictionResultComponent.prototype.createContent = function () {
        // We need a circle with two rects on it and a loady thingy on the edge.
        this.mySvg = this.myContainer.append('svg')
            .attr('width', this.svgWidth)
            .attr('height', this.svgHeight)
            .classed('d3-result-svg', true);
        this.myContentCircle = this.mySvg.append('circle')
            .attr('cx', this.svgWidth / 2)
            .attr('cy', this.svgHeight / 2)
            .attr('r', 32)
            .attr('stroke-width', 5)
            .attr('stroke', this.circleGrayFill)
            .attr('fill', 'white')
            .attr('opacity', 1)
            .classed('contentCircleClass', true);
        this.myDropletGroup = this.mySvg.append('g').attr('id', 'dropletGroup');
        this.myDropletGroup.html(this.dropletIcon);
        this.myDropletGroup.attr('fill', this.circleGrayFill)
            .attr('transform', 'translate(26.5, 15)');
        this.myHorizontalLine = this.mySvg.append('line')
            .attr('y1', .5)
            .attr('y2', .5)
            .attr('x2', 15)
            .attr('stroke', 'white')
            .attr('stroke-weight', 1)
            .attr('transform', 'translate(33, 50)')
            .attr('opacity', 0);
        this.myVerticalLine = this.mySvg.append('line')
            .attr('x1', .5)
            .attr('x2', .5)
            .attr('y2', 15)
            .attr('stroke', 'white')
            .attr('stroke-weight', 1)
            .attr('transform', 'translate(40, 43)')
            .attr('opacity', 0);
        this.myLoadArcGenerator = __WEBPACK_IMPORTED_MODULE_2_d3_shape__["a" /* arc */]()
            .innerRadius(34)
            .outerRadius(39)
            .startAngle(0)
            .endAngle(Math.PI / 3);
        this.myLoadArcGroup = this.mySvg.append('g')
            .classed('loadArcGroup', true)
            .attr('opacity', 0)
            .attr('transform', "translate(" + this.svgWidth / 2 + ", " + this.svgHeight / 2 + ")");
        this.myLoadArcPath = this.myLoadArcGroup.append('path')
            .attr('d', this.myLoadArcGenerator({
            innerRadius: 34,
            outerRadius: 39,
            startAngle: 0,
            endAngle: Math.PI / 3
        }))
            .attr('fill', '#3A6DA8');
    };
    PredictionResultComponent.prototype.spinLoadArc = function () {
        var _this = this;
        setInterval(function () {
            _this.myLoadArcPath.transition()
                .ease(__WEBPACK_IMPORTED_MODULE_3_d3_ease__["b" /* easeLinear */])
                .duration(_this.spinDuration)
                .attrTween('transform', function () {
                return __WEBPACK_IMPORTED_MODULE_4_d3_interpolate__["f" /* interpolateString */]('rotate(0)', 'rotate(360)');
            });
        }, this.spinDuration);
    };
    PredictionResultComponent.prototype.showLoading = function () {
        this.setLoadArcOpacity(1);
        this.setCircleAndDropletColor(this.circleGrayFill);
        this.setVerticalLineOpacity(0);
        this.setHorizontalLineOpacity(0);
    };
    PredictionResultComponent.prototype.showResult = function (result) {
        this.setLoadArcOpacity(0);
        if (result === 1) {
            this.setCircleAndDropletColor(this.circleRedFill);
            this.setHorizontalLineOpacity(1);
            this.setVerticalLineOpacity(1);
        }
        else {
            this.setCircleAndDropletColor(this.circleGreenFill);
            this.setHorizontalLineOpacity(1);
        }
    };
    PredictionResultComponent.prototype.setLoadArcOpacity = function (opacity) {
        // debugger;
        this.myLoadArcGroup
            .transition()
            .duration(300)
            .attr('opacity', opacity);
    };
    PredictionResultComponent.prototype.setCircleAndDropletColor = function (color) {
        this.myContentCircle
            .transition()
            .duration(300)
            .attr('stroke', color);
        this.myDropletGroup
            .transition()
            .duration(300)
            .attr('fill', color);
    };
    PredictionResultComponent.prototype.setVerticalLineOpacity = function (opacity) {
        this.myVerticalLine
            .transition()
            .duration(300)
            .attr('opacity', opacity);
    };
    PredictionResultComponent.prototype.setHorizontalLineOpacity = function (opacity) {
        this.myHorizontalLine
            .transition()
            .duration(300)
            .attr('opacity', opacity);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], PredictionResultComponent.prototype, "myId", void 0);
    PredictionResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-prediction-result',
            template: "",
            styles: [__webpack_require__("../../../../../src/app/modules/content/prediction-result.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PredictionResultComponent);
    return PredictionResultComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  font-size: 64pt;\n  margin: .76em 0;\n}\n\nh2 {\n  font-size: 24pt;\n}\n\nh2#visualize-header {\n  margin-top: 75px;\n}\n\nh2#models-header {\n  margin-top: 120px;\n}\n\nh2#code-header {\n  margin-top: 120px;\n}\n\n#landing-subtitle {\n  margin-bottom: 50px;\n}\n\nnav {\n  margin: 40px auto 30px auto;\n  width: 700px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.card-div {\n  position: relative;\n  height: 300px;\n  width: 300px;\n  /*border: 1px solid;*/\n  /*border-color: black;*/\n  text-align: center;\n  -webkit-transition-duration: .5s;\n          transition-duration: .5s;\n  background-color: #f0f0f0;\n  /*border-radius: 2px;*/\n}\n\n.card-div:hover {\n  color: white;\n  border: none;\n  /*background-color: #3A6DA8;*/\n  background-color: #DF504F;\n  -webkit-transition-duration: .5s;\n          transition-duration: .5s;\n}\n\nnav div a span {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\ndiv#about-header-div {\n  margin: 45px auto 0 auto;\n  height: 50px;\n  width: 400px;\n  text-align: center;\n}\n\ndiv#about-text-div {\n  width: 85%;\n  margin: 35px auto 35px auto;\n}\n\ndiv#about-text-div p {\n  font-size: 14pt;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h1 class=\"playfair-font center-text\" id=\"landing-title\">Bleeding Detection with NLP</h1>\n<h2 class=\"playfair-font center-text\" id=\"landing-subtitle\">Online Appendix</h2>\n<p class=\"roboto-font center-text\" id=\"landing-description\">\n  Welcome to the online appendix for the 2018 University of Utah bleeding detection study using NLP.\n</p>\n\n<nav>\n  <div class=\"card-div\">\n    <h2 class=\"playfair-font\" id=\"models-header\">Try the Models</h2>\n    <a routerLink=\"content/models\"><span></span></a>\n  </div>\n  <div class=\"card-div\">\n    <h2 class=\"playfair-font\" id=\"code-header\">Get the Code</h2>\n    <a href=\"{{codeUrl}}\" target=\"_blank\"><span></span></a>\n  </div>\n</nav>\n\n<!--<div id=\"about-header-div\">-->\n  <!--<h2 class=\"roboto-font\">About</h2>-->\n<!--</div>-->\n\n<!--<div id=\"about-text-div\">-->\n  <!--<p class=\"roboto-font\">Something describing the study and/or the authors of the study. Maybe some pictures?</p>-->\n<!--</div>-->\n\n"

/***/ }),

/***/ "../../../../../src/app/modules/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.codeUrl = 'https://github.com/MMontgomeryTaggart/CV_MachineLearning';
    };
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-landing',
            template: __webpack_require__("../../../../../src/app/modules/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configuration_service__ = __webpack_require__("../../../../../src/app/configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_fetch__ = __webpack_require__("../../../../d3-fetch/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = /** @class */ (function () {
    function DataService(configService) {
        this.configService = configService;
        this.idCount = 0;
    }
    DataService.prototype.processObject = function (rawRow, index, column) {
        // debugger;
        var processedObject = {
            name: rawRow.Lex,
            type: rawRow.Type,
            regex: rawRow.Regex,
            direction: rawRow.Direction,
            id: this.idCount++
        };
        return processedObject;
    };
    DataService.prototype.getTargetsAndModifiers = function (callback) {
        var _this = this;
        this.baseUrl = this.configService.getActiveUrl();
        var tempTargetsAndModifiers = { targets: [], modifiers: [] };
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isUndefined"])(this.targetsAndModifiersData)) {
            __WEBPACK_IMPORTED_MODULE_3_d3_fetch__["a" /* tsv */](this.baseUrl + '/public/data/targets.tsv', {}, this.processObject.bind(this))
                .then(function (value) {
                tempTargetsAndModifiers.targets = value;
                __WEBPACK_IMPORTED_MODULE_3_d3_fetch__["a" /* tsv */](_this.baseUrl + '/public/data/modifiers.tsv', {}, _this.processObject.bind(_this))
                    .then(function (value) {
                    tempTargetsAndModifiers.modifiers = value;
                    _this.targetsAndModifiersData = tempTargetsAndModifiers;
                    return callback(_this.targetsAndModifiersData);
                }).catch(function (reason) {
                    console.log(JSON.stringify(reason));
                });
            }).catch(function (reason) {
                console.log(JSON.stringify(reason));
            });
        }
        else {
            return callback(this.targetsAndModifiersData);
        }
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__configuration_service__["a" /* ConfigurationService */]])
    ], DataService);
    return DataService;
}());

// d3Fetch.tsv(this.baseUrl + '/public/data/modifiers.tsv', (modifierRawRow: any, modifierList: RawTargetOrModifier[], modifiercColumns: string[]) => {
//
//   const targets: Target[] = targetList.map((rawTarget: RawTargetOrModifier) => {return this.convertRawRowToType<Target>(rawTarget)});
//   const modifiers: Modifier[] = modifierList.map((rawModifier: RawTargetOrModifier) => {return this.convertRawRowToType<Modifier>(rawModifier)});
//   this.targetsAndModifiersData = {
//     targets,
//     modifiers
//   }
//   observer.next(this.targetsAndModifiersData);
//   observer.complete();
// });


/***/ }),

/***/ "../../../../../src/app/services/rb-sentence-parser.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RbSentenceParserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RbSentenceParserService = /** @class */ (function () {
    function RbSentenceParserService() {
    }
    RbSentenceParserService.prototype.parseInputSentences = function (inputSentences, targetsAndModifiers) {
        var cleanedSentences = this.cleanWhitespace(inputSentences);
        var wordSpans = this.findWordSpans(cleanedSentences);
        var targetAndModSpans = this.findTargetAndModifierSpans(cleanedSentences, targetsAndModifiers);
        var textChunks = this.createTextChunks(wordSpans, targetAndModSpans);
        return textChunks;
    };
    RbSentenceParserService.prototype.cleanWhitespace = function (inputSentences) {
        var cleanedSentences = inputSentences.map(function (rawSentence) {
            var cleanSentence = rawSentence.trim().replace(/\s+/, ' ');
            return cleanSentence;
        });
        return cleanedSentences;
    };
    RbSentenceParserService.prototype.findWordSpans = function (cleanedSentences) {
        var allWordSpans = cleanedSentences.map(function (cleanSentence) {
            var regex = RegExp(/\S+/, 'g');
            var wordmatches = [];
            var match;
            while ((match = regex.exec(cleanSentence)) !== null) {
                wordmatches.push(match);
            }
            var sentenceWordSpans = [];
            var sentenceWords = [];
            for (var i = 0; i < wordmatches.length; i++) {
                var currentStart = void 0;
                var currentEnd = void 0;
                // Take span as position of first character to position of last character.
                currentStart = wordmatches[i].index;
                currentEnd = wordmatches[i].index + wordmatches[i][0].length - 1;
                var span = { start: currentStart, end: currentEnd };
                sentenceWordSpans.push(span);
                var currentWord = wordmatches[i][0];
                sentenceWords.push(currentWord);
            }
            return { words: sentenceWords, spans: sentenceWordSpans };
        });
        return allWordSpans;
    };
    // private getSpansFromMatches(matchObj: any):
    RbSentenceParserService.prototype.findTargetAndModifierSpans = function (cleanedSentences, targetsAndModifiers) {
        var allTargetAndModifierSpans = [];
        for (var _i = 0, cleanedSentences_1 = cleanedSentences; _i < cleanedSentences_1.length; _i++) {
            var cleanSentence = cleanedSentences_1[_i];
            var targetSpans = [];
            for (var _a = 0, _b = targetsAndModifiers.targets; _a < _b.length; _a++) {
                var target = _b[_a];
                var regex = RegExp(target.regex, 'gi');
                var sentenceTargetSpans = this.findRegexSpans(cleanSentence, regex, 'targetSpan', target.id);
                for (var _c = 0, sentenceTargetSpans_1 = sentenceTargetSpans; _c < sentenceTargetSpans_1.length; _c++) {
                    var singleTargetSpan = sentenceTargetSpans_1[_c];
                    targetSpans.push(singleTargetSpan);
                }
            }
            var modifierSpans = [];
            for (var _d = 0, _e = targetsAndModifiers.modifiers; _d < _e.length; _d++) {
                var modifier = _e[_d];
                var regex = RegExp(modifier.regex, 'gi');
                var sentenceModifierSpans = this.findRegexSpans(cleanSentence, regex, 'modifierSpan', modifier.id);
                for (var _f = 0, sentenceModifierSpans_1 = sentenceModifierSpans; _f < sentenceModifierSpans_1.length; _f++) {
                    var singleModifierSpan = sentenceModifierSpans_1[_f];
                    modifierSpans.push(singleModifierSpan);
                }
            }
            allTargetAndModifierSpans.push({ targetSpans: targetSpans, modifierSpans: modifierSpans });
        }
        return allTargetAndModifierSpans;
    };
    ;
    RbSentenceParserService.prototype.findRegexSpans = function (text, regex, type, id) {
        var matches = [];
        var notNull = true;
        var match;
        while ((match = regex.exec(text)) !== null) {
            matches.push(match);
        }
        var spans = [];
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match_1 = matches_1[_i];
            var start = match_1.index;
            var end = start + match_1[0].length;
            spans.push({ start: start, end: end, type: type, id: id });
        }
        if (type === 'targetSpan') {
            return spans;
        }
        else {
            return spans;
        }
    };
    RbSentenceParserService.prototype.createTextChunks = function (wordSpans, targetAndModifierSpans, filterModifiersWithoutTargets) {
        if (filterModifiersWithoutTargets === void 0) { filterModifiersWithoutTargets = true; }
        if (wordSpans.length !== targetAndModifierSpans.length) {
            throw Error("Word spans and targetAndModifierSpans should have the same length.");
        }
        var parsedSentenceChunks = [];
        for (var sentenceIndex = 0; sentenceIndex < wordSpans.length; sentenceIndex++) {
            // These values represent the word spans, modifier spans, and target spans for a single sentence.
            var currentWordSpans = wordSpans[sentenceIndex].spans;
            var currentWords = wordSpans[sentenceIndex].words;
            var currentModifierSpans = targetAndModifierSpans[sentenceIndex].modifierSpans;
            var currentTargetSpans = targetAndModifierSpans[sentenceIndex].targetSpans;
            var currentSentence = currentWords.join(' ');
            // Create an object that maps from string index to word index, assuming that whitespace belongs to the
            // word that follows it. Then create a list that combines all target and modifier spans, sorted by
            // start, assuming that none of them overlap, which they shouldn't.
            // Then simply iterate through the list, using the index mapper to determine where each target or
            // modifier begins and ends.
            var sentenceIndexToWordIndexMap = this.createStringIndexToWordIndexMap(currentSentence, currentWordSpans);
            var combinedSortedList = this.createSortedListOfTargetsAndModifierSpans(currentTargetSpans, currentModifierSpans);
            var currentTargetAndModifierWordSpans = this.convertTargetAndModifierSentenceSpansToWordSpans(combinedSortedList, sentenceIndexToWordIndexMap);
            // Word index where the last span ended. It is from this index+1 up to the next index-1 that we will grab.
            // If (startOfNextSpan - 1) - (endOfLastSpan + 1) <= 0 then we insert no plain chunk, we go right from
            // one highlight to another.
            var chunksForThisSentence = [];
            // Start with the easy case: there are no targets or modifiers.
            if (currentModifierSpans.length === 0 && currentTargetSpans.length === 0) {
                chunksForThisSentence.push({ text: currentSentence, type: 'plainTextChunk' });
                // The next easiest case is if `filterModifiersWithoutTargets` is true and the sentence has no targets
            }
            else if (filterModifiersWithoutTargets && currentTargetSpans.length === 0) {
                chunksForThisSentence.push({ text: currentSentence, type: 'plainTextChunk' });
            }
            else {
                var endOfLastSpan = -1;
                for (var _i = 0, currentTargetAndModifierWordSpans_1 = currentTargetAndModifierWordSpans; _i < currentTargetAndModifierWordSpans_1.length; _i++) {
                    var targetModSpan = currentTargetAndModifierWordSpans_1[_i];
                    var chunkType = '';
                    var text = '';
                    var highlightChunk = null;
                    var plainChunk = null;
                    if ((targetModSpan.start - 1) - endOfLastSpan <= 0) {
                        // Skip adding a plain chunk and just add a chunk for the next span.
                        chunkType = targetModSpan.type === 'targetSpan' ? 'targetTextChunk' : 'modifierTextChunk';
                        text = this.extractWordsFromSpan(currentWords, targetModSpan);
                        highlightChunk = { text: text, id: targetModSpan.id, type: chunkType };
                        chunksForThisSentence.push(highlightChunk);
                        endOfLastSpan = targetModSpan.end;
                    }
                    else {
                        // Add a plain chunk up to the next span and then add the next span.
                        chunkType = 'plainTextChunk';
                        text = this.extractWordsFromSpan(currentWords, { start: (endOfLastSpan + 1), end: (targetModSpan.start - 1) });
                        plainChunk = { text: text, type: chunkType };
                        chunksForThisSentence.push(plainChunk);
                        // Add next span
                        chunkType = targetModSpan.type === 'targetSpan' ? 'targetTextChunk' : 'modifierTextChunk';
                        text = this.extractWordsFromSpan(currentWords, targetModSpan);
                        highlightChunk = { text: text, id: targetModSpan.id, type: chunkType };
                        chunksForThisSentence.push(highlightChunk);
                        endOfLastSpan = targetModSpan.end;
                    }
                }
            }
            parsedSentenceChunks.push(chunksForThisSentence);
        }
        return parsedSentenceChunks;
    };
    ;
    RbSentenceParserService.prototype.createStringIndexToWordIndexMap = function (sentence, wordSpans) {
        var currentWordIndex = 0;
        var mapper = [];
        for (var sentenceIndex = 0; sentenceIndex < sentence.length; sentenceIndex++) {
            var currentWordSpan = wordSpans[currentWordIndex];
            mapper.push(currentWordIndex);
            if (sentenceIndex > currentWordSpan.end) {
                currentWordIndex++;
            }
        }
        return mapper;
    };
    RbSentenceParserService.prototype.createSortedListOfTargetsAndModifierSpans = function (targetSpans, modifierSpans) {
        var targetCopy = [];
        targetCopy.push.apply(targetCopy, targetSpans);
        var combinedList = targetCopy.concat(modifierSpans);
        combinedList.sort(function (span1, span2) {
            return span1.start - span2.start;
        });
        return combinedList;
    };
    RbSentenceParserService.prototype.convertTargetAndModifierSentenceSpansToWordSpans = function (sentenceSpans, wordMap) {
        var convertedSpans = [];
        for (var _i = 0, sentenceSpans_1 = sentenceSpans; _i < sentenceSpans_1.length; _i++) {
            var span = sentenceSpans_1[_i];
            var startWord = wordMap[span.start];
            var endWord = wordMap[span.end];
            if (span.end >= wordMap.length) {
                endWord = wordMap[wordMap.length - 1];
            }
            convertedSpans.push({ start: startWord, end: endWord, id: span.id, type: span.type });
        }
        return convertedSpans;
    };
    RbSentenceParserService.prototype.extractWordsFromSpan = function (words, span) {
        var extractedWords = [];
        for (var i = span.start; i <= span.end; i++) {
            extractedWords.push(words[i]);
        }
        return extractedWords.join(' ');
    };
    RbSentenceParserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], RbSentenceParserService);
    return RbSentenceParserService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map