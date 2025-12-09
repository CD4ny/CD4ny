import type { SiteConfig } from "../entities/SiteConfig";

/**
 * Repository Interface: ISiteConfigRepository
 * Define el contrato para acceder a la configuración del sitio
 */
export interface ISiteConfigRepository {
  getSiteConfig(): Promise<SiteConfig>;
}
