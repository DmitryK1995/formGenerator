const ordinaryTags = ['br', 'img', 'input'];

export default class Tag {
  tagProperties: string;

  constructor(
    private tagName: string,
    tagProperties: Record<string, string | number> = {},
    private value?: string,
  ) {
    this.tagProperties = Object.entries(tagProperties).map(([tagKey, tagValue]) => `${tagKey}='${tagValue}'`).join(' ');
  }

  toString(): string {
    return `<${this.tagName}${this.tagProperties && ` ${this.tagProperties}`}>${this.value ?? ''}${ordinaryTags.includes(this.tagName) ? '' : `</${this.tagName}>`}`;
  }
}
