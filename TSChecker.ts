abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickname: string
  ) {}
  abstract getNickName(): void;
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player extends User {}

const dabin = new Player("dabin", "kim", "DBK");

dabin.getFullName();
