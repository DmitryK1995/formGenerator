import Tag from './tag';

interface IAddProperties {
  class?: string,
  as?: string,
  rows?: number,
  cols?: number
}

export default class InputCreator {
  private inputList: string[] = [];

  constructor(private template: Record<string, string>) {}

  createInput(propertyName: string, addProperties: IAddProperties) {
    if (!this.template[propertyName]) throw new Error(`Field ${propertyName} does not exist in the template.`);

    const inputProperties = {
      name: propertyName,
      type: 'text',
      value: this.template[propertyName],
      ...addProperties,
    };

    return new Tag('input', inputProperties).toString();
  }

  createTextArea(propertyName: string, addProperties: IAddProperties) {
    if (!this.template[propertyName]) throw new Error(`Field ${propertyName} does not exist in the template.`);

    const textAreaProperties = {
      cols: addProperties.cols ? addProperties.cols : 20,
      rows: addProperties.rows ? addProperties.rows : 40,
      name: propertyName,
    };

    const value = this.template[propertyName];

    return new Tag('textarea', textAreaProperties, value).toString();
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
