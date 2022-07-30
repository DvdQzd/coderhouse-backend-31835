export default class Persona {
//   private fname: string;
//   private lname: string;

//   constructor(fname: string, lname: string) {
//     this.fname = fname;
//     this.lname = lname;
//   }

  constructor(private fname: string, private lname: string) {}

  getFullName(): string {
    return `${this.fname} ${this.lname}`;
  }
}
