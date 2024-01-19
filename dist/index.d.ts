import FormFieldsCreator from './modules/FormFieldsCreator';
export default class HexletCode {
    static formFor(template: Record<string, string>, formInfo: {
        url?: string;
        method?: string;
    }, func: {
        (f: FormFieldsCreator): void;
    }): string;
}
