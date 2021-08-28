import { Inject, Service } from "typedi";
import UserRepository from "../repository/users-repository";

@Service()
class UserService {

  // Uma outra forma de fazer a injeção
  @Inject()
  userRepository!: UserRepository;

  getAll(): Promise<any[]> {
    return this.userRepository.getAll();
  }

  getOne(id: string): Promise<string> {
    return new Promise((resolve, reject) => resolve(id));
  }

}

export default UserService;
