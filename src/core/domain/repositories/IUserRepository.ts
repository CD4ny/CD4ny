import type { User } from "../entities/User";

/**
 * Repository Interface: IUserRepository
 * Define el contrato para acceder a datos de usuarios
 */
export interface IUserRepository {
  getUser(): Promise<User>;
}
