/* eslint-disable default-param-last */
Object.defineProperty(exports, '__esModule', { value: true });
const ordinaryTags = ['br', 'img', 'input'];
class Tag {
  tagName;

  value;

  tagProperties;

  constructor(tagName, tagProperties = {}, value) {
    this.tagName = tagName;
    this.value = value;
    this.tagProperties = Object.entries(tagProperties).map(([tagKey, tagValue]) => `${tagKey}="${tagValue}"`).join(' ');
  }

  toString() {
    return `<${this.tagName}${this.tagProperties && ` ${this.tagProperties}`}>${this.value ?? ''}${ordinaryTags.includes(this.tagName) ? '' : `</${this.tagName}>`}`;
  }
}
exports.default = Tag;
// # sourceMappingURL=tag.js.map
