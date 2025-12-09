import type { User } from "../../core/domain/entities/User";

/**
 * Presentation: UserViewModel
 * Modelo de vista para presentar datos del usuario
 */
export interface UserViewModel {
  name: string;
  username: string;
  picture: string;
  role: string;
  bio: string;
  interests: string;
}

export class UserViewModelMapper {
  static toViewModel(user: User): UserViewModel {
    return {
      name: user.name,
      username: user.username,
      picture: user.picture,
      role: user.role,
      bio: user.bio,
      interests: user.interests,
    };
  }
}
