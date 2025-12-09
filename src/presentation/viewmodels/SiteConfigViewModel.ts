import type { SiteConfig } from "../../core/domain/entities/SiteConfig";

/**
 * Presentation: SiteConfigViewModel
 * Modelo de vista para presentar configuración del sitio
 */
export interface SiteConfigViewModel {
  title: string;
  description: string;
}

export class SiteConfigViewModelMapper {
  static toViewModel(config: SiteConfig): SiteConfigViewModel {
    return {
      title: config.title,
      description: config.description,
    };
  }
}
