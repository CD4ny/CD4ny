import type { ISiteConfigRepository } from "../../core/domain/repositories/ISiteConfigRepository";
import { SiteConfigEntity } from "../../core/domain/entities/SiteConfig";
import type { SiteConfig } from "../../core/domain/entities/SiteConfig";
import { SITE_TITLE, SITE_DESCRIPTION } from "../config/constants";

/**
 * Infrastructure: SiteConfigRepository
 * Implementación concreta del repositorio de configuración del sitio
 */
export class SiteConfigRepository implements ISiteConfigRepository {
  async getSiteConfig(): Promise<SiteConfig> {
    return SiteConfigEntity.create(SITE_TITLE, SITE_DESCRIPTION);
  }
}
