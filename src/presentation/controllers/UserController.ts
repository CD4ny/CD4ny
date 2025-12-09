import { GetUserUseCase } from "../../core/usecases/GetUserUseCase";
import { UserRepository } from "../../infrastructure/repositories/UserRepository";
import type { User } from "../../core/domain/entities/User";

/**
 * Presentation: UserController
 * Controlador para gestionar las acciones relacionadas con el usuario
 */
export class UserController {
  private getUserUseCase: GetUserUseCase;

  constructor() {
    const userRepository = new UserRepository();
    this.getUserUseCase = new GetUserUseCase(userRepository);
  }

  async getUser(): Promise<User> {
    return await this.getUserUseCase.execute();
  }
}
