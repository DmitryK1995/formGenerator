"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const tag_1 = tslib_1.__importDefault(require("../tag"));
function createLabel(forValue) {
    const value = forValue.charAt(0).toUpperCase() + forValue.slice(1);
    const labelProperties = {
        for: forValue,
    };
    return new tag_1.default('label', labelProperties, value).toString();
}
exports.default = createLabel;
//# sourceMappingURL=form-helpers.js.map