import { Service } from "typedi";

@Service()
class UserRepository {

  constructor() { }

  async getAll(): Promise<any[]> {
    return [{
      nome: 'Foo', sobrenome: 'Bar'
    }];
  }

}

export default UserRepository;
