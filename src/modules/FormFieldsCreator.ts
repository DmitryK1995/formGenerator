import Tag from './tag';

import createLabel from './helpers/form-helpers';

interface IAddProperties {
  class?: string,
  as?: string,
  rows?: number,
  cols?: number
}

export default class FormFieldsCreator {
  private inputList: string[] = [];

  constructor(private template: Record<string, string>) {}

  submit(propertyName?: string) {
    const submitProperties = {
      type: 'submit',
      value: propertyName || 'Save',
    };

    const submit = new Tag('input', submitProperties).toString();

    this.inputList.push(submit);
  }

  private createInput(propertyName: string, addProperties: IAddProperties) {
    if (!this.template[propertyName]) throw new Error(`Field ${propertyName} does not exist in the template.`);

    const inputProperties = {
      name: propertyName,
      type: 'text',
      value: this.template[propertyName],
      ...addProperties,
    };

    const label = createLabel(propertyName);
    const input = new Tag('input', inputProperties).toString();

    return `${label}${input}`;
  }

  private createTextArea(propertyName: string, addProperties: IAddProperties) {
    if (!this.template[propertyName]) throw new Error(`Field ${propertyName} does not exist in the template.`);

    const textAreaProperties = {
      cols: addProperties.cols ? addProperties.cols : 20,
      rows: addProperties.rows ? addProperties.rows : 40,
      name: propertyName,
    };

    const value = this.template[propertyName];

    const label = createLabel(propertyName);
    const textarea = new Tag('textarea', textAreaProperties, value).toString();

    return `${label}${textarea}`;
  }

  input(
    propertyName: string,
    addProperties: IAddProperties = {},
  ) {
    const inputType = addProperties.as ? addProperties.as : 'input';

    const fields = inputType === 'textarea' ? this.createTextArea(propertyName, addProperties) : this.createInput(propertyName, addProperties);

    this.inputList.push(fields);
  }

  get getInputList() {
    return this.inputList.join('');
  }
}
