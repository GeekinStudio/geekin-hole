export class User {
  constructor(
    public uid = 0,
    public username = '',
    public pwd = '',
    public level = 100,
    public group = '',
    public name = '',
  ) {
  }
}

export const loggedUser = new User; // new User(0, 'goldimax', '', 0, '', '玩火');

