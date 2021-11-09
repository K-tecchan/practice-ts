let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
let s2: string = vUnknown as string;

let pageNumber: string = '1';
// asは型を変えてるっぽい
// ↓はpageNumberが文字列。文字列を直接数字にはできないのでunknownを挟んでるっぽい
let numericPageNumber: number = (pageNumber as unknown) as number;