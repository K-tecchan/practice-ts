// 同じフォルダ内でinterfaceは共有されるっぽい.
// typeを使うことで型を分かりやすい名前にできる
type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

interface UserInterface2 {
  id: ID;
  name: string;
  surname: string;
}

const popularTags: PopularTag[] = ['dragon', 'coffee'];

const dragonTag: MaybePopularTag = 'dragon';

let userame: string = 'alex';
// | はどっちかならOK
let pagename: string | number = '1';

let errorMessage: string | null = null;

let user: UserInterface2 | null = null;

let someProp: string | number | null | undefined | string[] | object;
