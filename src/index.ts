import InputCreator from './modules/inputCreator';
import Tag from './modules/tag';

export default class HexletCode {
  // private fields = [];

  // static input() {
  //   console.log('work22!');
  // }
  // constructor(
  //   private template: Record<string, string>,
  //   private url: { url?: string },
  //   private func: { (): void },
  // ) {
  //   super('form', url);
  // }

  static formFor(
    template: Record<string, string>,
    formInfo: { url?: string, method?: string },
    func: { (f: InputCreator): void },
  ): string {
    const formProperties = {
      action: `${formInfo.url ? formInfo.url : '#'}`,
      method: `${formInfo.method ? formInfo.method : 'post'}`,
    };

    const inputFieldsNew = new InputCreator(template);

    func(inputFieldsNew);

    const inputFields = inputFieldsNew.getInputList;

    return new Tag('form', formProperties, inputFields).toString();
  }
}
