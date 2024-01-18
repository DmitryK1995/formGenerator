type ItagProperties = Record<string, string>;

const ordinaryTags = ['br', 'img', 'input'];

export default class Tag {
  tagPropertiesToString: string;

  constructor(
    private tagName: string,
    private tagProperties: Partial<ItagProperties> = {},
    private value?: string,
  ) {
    this.tagPropertiesToString = Object.entries(tagProperties).map(([tagKey, tagValue]) => `${tagKey}="${tagValue}"`).join(' ');
  }

  toString(): string {
    return `<${this.tagName}${this.tagPropertiesToString && ` ${this.tagPropertiesToString}`}>${this.value ?? ''}${ordinaryTags.includes(this.tagName) ? '' : `</${this.tagName}>`}`;
  }
}

// console.log(new Tag('label', { for: 'email' }, 'Email').toString());
