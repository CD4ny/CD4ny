/**
 * Dependency Injection Container
 * Centraliza la creación e inyección de dependencias
 */

import { UserRepository } from "../repositories/UserRepository";
import { SiteConfigRepository } from "../repositories/SiteConfigRepository";
import { GetUserUseCase } from "../../core/usecases/GetUserUseCase";
import { GetSiteConfigUseCase } from "../../core/usecases/GetSiteConfigUseCase";
import { UserController } from "../../presentation/controllers/UserController";
import { SiteConfigController } from "../../presentation/controllers/SiteConfigController";

/**
 * Contenedor de dependencias singleton
 */
class DIContainer {
  private static instance: DIContainer;

  // Repositories
  private userRepository: UserRepository;
  private siteConfigRepository: SiteConfigRepository;

  // Use Cases
  private getUserUseCase: GetUserUseCase;
  private getSiteConfigUseCase: GetSiteConfigUseCase;

  // Controllers
  private userController: UserController;
  private siteConfigController: SiteConfigController;

  private constructor() {
    // Initialize repositories
    this.userRepository = new UserRepository();
    this.siteConfigRepository = new SiteConfigRepository();

    // Initialize use cases with dependencies
    this.getUserUseCase = new GetUserUseCase(this.userRepository);
    this.getSiteConfigUseCase = new GetSiteConfigUseCase(
      this.siteConfigRepository
    );

    // Initialize controllers
    this.userController = new UserController();
    this.siteConfigController = new SiteConfigController();
  }

  static getInstance(): DIContainer {
    if (!DIContainer.instance) {
      DIContainer.instance = new DIContainer();
    }
    return DIContainer.instance;
  }

  getUserController(): UserController {
    return this.userController;
  }

  getSiteConfigController(): SiteConfigController {
    return this.siteConfigController;
  }
}

// Export singleton instance methods
export const getUserController = () =>
  DIContainer.getInstance().getUserController();
export const getSiteConfigController = () =>
  DIContainer.getInstance().getSiteConfigController();
