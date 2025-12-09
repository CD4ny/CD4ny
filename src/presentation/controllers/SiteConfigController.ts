import { GetSiteConfigUseCase } from "../../core/usecases/GetSiteConfigUseCase";
import { SiteConfigRepository } from "../../infrastructure/repositories/SiteConfigRepository";
import type { SiteConfig } from "../../core/domain/entities/SiteConfig";

/**
 * Presentation: SiteConfigController
 * Controlador para gestionar las acciones relacionadas con la configuración del sitio
 */
export class SiteConfigController {
  private getSiteConfigUseCase: GetSiteConfigUseCase;

  constructor() {
    const siteConfigRepository = new SiteConfigRepository();
    this.getSiteConfigUseCase = new GetSiteConfigUseCase(siteConfigRepository);
  }

  async getSiteConfig(): Promise<SiteConfig> {
    return await this.getSiteConfigUseCase.execute();
  }
}
