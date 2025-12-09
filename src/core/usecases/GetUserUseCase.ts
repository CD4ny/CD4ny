import type { IUserRepository } from "../domain/repositories/IUserRepository";
import type { User } from "../domain/entities/User";

/**
 * Use Case: GetUserUseCase
 * Obtiene la información del usuario
 */
export class GetUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(): Promise<User> {
    return await this.userRepository.getUser();
  }
}
