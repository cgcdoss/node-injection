import { Request, Response } from "express";
import { Inject, Service } from "typedi";
import UserService from "../services/user-service";

@Service()
export class UserController {

  // Injetando a depedência no construtor
  constructor(
    private userService: UserService,
    @Inject() private userService2: UserService // Com o decorator do TypeDI
  ) { }

  async getAll(req: Request, res: Response): Promise<Response<[]>> {
    const users = await this.userService.getAll();
    return res.json(users);
  }

  async getOne(req: Request, res: Response): Promise<Response<string>> {
    return res.json(await this.userService2.getOne(req.params.id));
  }

}
