import type { ISiteConfigRepository } from "../domain/repositories/ISiteConfigRepository";
import type { SiteConfig } from "../domain/entities/SiteConfig";

/**
 * Use Case: GetSiteConfigUseCase
 * Obtiene la configuración del sitio
 */
export class GetSiteConfigUseCase {
  constructor(private readonly siteConfigRepository: ISiteConfigRepository) {}

  async execute(): Promise<SiteConfig> {
    return await this.siteConfigRepository.getSiteConfig();
  }
}
