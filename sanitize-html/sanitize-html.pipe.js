"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var SanitizeHtmlPipe = /** @class */ (function () {
    function SanitizeHtmlPipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SanitizeHtmlPipe.prototype.transform = function (value) {
        if (!value) {
            return value;
        }
        return this._sanitizer.bypassSecurityTrustHtml(value);
    };
    SanitizeHtmlPipe.decorators = [
        { type: core_1.Pipe, args: [{
                    name: 'sanitizeHtml'
                },] },
    ];
    /** @nocollapse */
    SanitizeHtmlPipe.ctorParameters = function () { return [
        { type: platform_browser_1.DomSanitizer, },
    ]; };
    return SanitizeHtmlPipe;
}());
exports.SanitizeHtmlPipe = SanitizeHtmlPipe;
//# sourceMappingURL=sanitize-html.pipe.js.map