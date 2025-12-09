/**
 * Domain Entity: User
 * Representa la entidad de usuario en el dominio
 */
export interface User {
  readonly name: string;
  readonly username: string;
  readonly picture: string;
  readonly role: string;
  readonly bio: string;
  readonly interests: string;
}

export class UserEntity implements User {
  readonly name: string;
  readonly username: string;
  readonly picture: string;
  readonly role: string;
  readonly bio: string;
  readonly interests: string;

  constructor(
    name: string,
    username: string,
    picture: string,
    role: string,
    bio: string,
    interests: string
  ) {
    this.name = name;
    this.username = username;
    this.picture = picture;
    this.role = role;
    this.bio = bio;
    this.interests = interests;
  }

  static create(data: {
    name: string;
    username: string;
    picture: string;
    role: string;
    bio: string;
    interests: string;
  }): UserEntity {
    return new UserEntity(
      data.name,
      data.username,
      data.picture,
      data.role,
      data.bio,
      data.interests
    );
  }
}
