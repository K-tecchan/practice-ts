interface UserInterface3 {
  getFullName(): string;
}

class User3 {
  // privateを使うと外部からアクセスできないっぽい
  firstName: string;
  lastName: string;
  readonly unchangableName: string;
  static readonly maxAge = 50
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  changeUnchangableName(): void {
      // this.unchangableName = 'foo';
  }

  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}

class Admin extends User3 {
  private editor: string
  setEditor(editor: string): void {
    this.editor = editor
  }
}

const user3 = new User3('Monster', 'lessons');
console.log(user3.firstName)
console.log(User3.maxAge);

const admin = new Admin('Foo', 'Bar');