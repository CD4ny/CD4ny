import axios from "axios";
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
    try {
      // Obtener datos desde la API de GitHub usando axios
      const response = await axios.get(
        `https://api.github.com/users/${USER_NAME}`
      );
      const githubData = response.data;

      const userData = {
        name: githubData.name || USER_NAME,
        username: githubData.login || USER_NAME,
        picture:
          githubData.avatar_url ||
          `https://avatars.githubusercontent.com/${USER_NAME}`,
        role: "Software Engineer",
        bio:
          githubData.bio ||
          "Backend developer, interested in AI, Frontend Development, Algorithm Designing, Software Architecture.",
        interests: "Also likes music, planes, photography, design.",
      };

      return UserEntity.create(userData);
    } catch (error) {
      console.error("Error fetching user from GitHub:", error);

      // Fallback con datos por defecto en caso de error
      const fallbackData = {
        name: "Daniel Chaviano Pérez",
        username: USER_NAME,
        picture: `https://avatars.githubusercontent.com/${USER_NAME}`,
        role: "Software Engineer",
        bio: "Backend developer, interested in AI, Frontend Development, Algorithm Designing, Software Architecture.",
        interests: "Also likes music, planes, photography, design.",
      };

      return UserEntity.create(fallbackData);
    }
  }
}
