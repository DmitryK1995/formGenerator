import FormFieldsCreator from './modules/FormFieldsCreator';
import Tag from './modules/tag';

export default class HexletCode {
  static formFor(
    template: Record<string, string>,
    formInfo: { url?: string, method?: string },
    func: { (f: FormFieldsCreator): void },
  ): string {
    const formProperties = {
      action: `${formInfo.url ? formInfo.url : '#'}`,
      method: `${formInfo.method ? formInfo.method : 'post'}`,
    };

    const inputFieldsNew = new FormFieldsCreator(template);

    func(inputFieldsNew);

    const inputFields = inputFieldsNew.getInputList;

    return new Tag('form', formProperties, inputFields).toString();
  }
}
