interface IAddProperties {
    class?: string;
    as?: string;
    rows?: number;
    cols?: number;
}
export default class FormFieldsCreator {
    private template;
    private inputList;
    constructor(template: Record<string, string>);
    submit(propertyName?: string): void;
    private createInput;
    private createTextArea;
    input(propertyName: string, addProperties?: IAddProperties): void;
    get getInputList(): string;
}
export {};
