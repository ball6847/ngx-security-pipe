"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var sanitize_html_pipe_1 = require("./sanitize-html/sanitize-html.pipe");
var NgSecurityPipeModule = /** @class */ (function () {
    function NgSecurityPipeModule() {
    }
    NgSecurityPipeModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [sanitize_html_pipe_1.SanitizeHtmlPipe],
                    exports: [sanitize_html_pipe_1.SanitizeHtmlPipe]
                },] },
    ];
    /** @nocollapse */
    NgSecurityPipeModule.ctorParameters = function () { return []; };
    return NgSecurityPipeModule;
}());
exports.NgSecurityPipeModule = NgSecurityPipeModule;
//# sourceMappingURL=ng-security-pipe.module.js.map