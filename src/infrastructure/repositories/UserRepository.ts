import type { IUserRepository } from "../../core/domain/repositories/IUserRepository";
import { UserEntity } from "../../core/domain/entities/User";
import type { User } from "../../core/domain/entities/User";
import { USER_NAME } from "../config/constants";

/**
 * Infrastructure: UserRepository
 * Implementación concreta del repositorio de usuarios
 */
export class UserRepository implements IUserRepository {
  async getUser(): Promise<User> {
    // En una aplicación real, esto podría venir de una API o base de datos
    const userData = {
      name: "Daniel Chaviano Pérez",
      username: USER_NAME,
      picture: `https://avatars.githubusercontent.com/${USER_NAME}`,
      role: "Software Engineer",
      bio: "Backend developer, interested in AI, Frontend Development, Algorithm Designing, Software Architecture.",
      interests: "Also likes music, planes, photography, design.",
    };

    return UserEntity.create(userData);
  }
}
