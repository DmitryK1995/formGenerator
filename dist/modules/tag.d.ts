export default class Tag {
    private tagName;
    private value?;
    tagProperties: string;
    constructor(tagName: string, tagProperties?: Record<string, string | number>, value?: string | undefined);
    toString(): string;
}
