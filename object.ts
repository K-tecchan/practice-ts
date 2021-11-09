
// interfaceには末尾にinterfaceってつけるのが良さそう
interface UserInterface {
    // interfaceは型の定義をしておける的な感じ？
    name: string;
    // ?をつけておくとオブジェクトにそれが含まれていないことを許容
    age?: number;
    getMessage(): string;
}

const user1: UserInterface = {
    name: 'monster',
    age: 30,
    getMessage() {
        return `Hello${name}`;
    }
}

const user2: UserInterface = {
    name: 'Jack',
    // age: 20,
    getMessage() {
        return `Hello${name}`;
    }
}

console.log(user.name)