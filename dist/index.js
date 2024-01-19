"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const FormFieldsCreator_1 = tslib_1.__importDefault(require("./modules/FormFieldsCreator"));
const tag_1 = tslib_1.__importDefault(require("./modules/tag"));
class HexletCode {
    static formFor(template, formInfo, func) {
        const formProperties = {
            action: `${formInfo.url ? formInfo.url : '#'}`,
            method: `${formInfo.method ? formInfo.method : 'post'}`,
        };
        const inputFieldsNew = new FormFieldsCreator_1.default(template);
        func(inputFieldsNew);
        const inputFields = inputFieldsNew.getInputList;
        return new tag_1.default('form', formProperties, inputFields).toString();
    }
}
exports.default = HexletCode;
//# sourceMappingURL=index.js.map