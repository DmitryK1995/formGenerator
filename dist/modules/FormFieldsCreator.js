"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const tag_1 = tslib_1.__importDefault(require("./tag"));
const form_helpers_1 = tslib_1.__importDefault(require("./helpers/form-helpers"));
class FormFieldsCreator {
    template;
    inputList = [];
    constructor(template) {
        this.template = template;
    }
    submit(propertyName) {
        const submitProperties = {
            type: 'submit',
            value: propertyName || 'Save',
        };
        const submit = new tag_1.default('input', submitProperties).toString();
        this.inputList.push(submit);
    }
    createInput(propertyName, addProperties) {
        if (!this.template[propertyName])
            throw new Error(`Field ${propertyName} does not exist in the template.`);
        const inputProperties = {
            name: propertyName,
            type: 'text',
            value: this.template[propertyName],
            ...addProperties,
        };
        const label = (0, form_helpers_1.default)(propertyName);
        const input = new tag_1.default('input', inputProperties).toString();
        return `${label}${input}`;
    }
    createTextArea(propertyName, addProperties) {
        if (!this.template[propertyName])
            throw new Error(`Field ${propertyName} does not exist in the template.`);
        const textAreaProperties = {
            cols: addProperties.cols ? addProperties.cols : 20,
            rows: addProperties.rows ? addProperties.rows : 40,
            name: propertyName,
        };
        const value = this.template[propertyName];
        const label = (0, form_helpers_1.default)(propertyName);
        const textarea = new tag_1.default('textarea', textAreaProperties, value).toString();
        return `${label}${textarea}`;
    }
    input(propertyName, addProperties = {}) {
        const inputType = addProperties.as ? addProperties.as : 'input';
        const fields = inputType === 'textarea' ? this.createTextArea(propertyName, addProperties) : this.createInput(propertyName, addProperties);
        this.inputList.push(fields);
    }
    get getInputList() {
        return this.inputList.join('');
    }
}
exports.default = FormFieldsCreator;
//# sourceMappingURL=FormFieldsCreator.js.map