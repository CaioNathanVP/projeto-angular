// export class Message {
//     constructor(public messageID?: string,
//         public content?: string,
//         public userId?: string,
//         public username?: string
//     ) { }
// }
export class Message {
  constructor(
    public content?: string,
    public username?: string,
    public messageID?: string,
    public userId?: string
  ) { }
}