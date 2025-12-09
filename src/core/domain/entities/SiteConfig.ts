/**
 * Domain Entity: SiteConfig
 * Representa la configuración del sitio
 */
export interface SiteConfig {
  readonly title: string;
  readonly description: string;
}

export class SiteConfigEntity implements SiteConfig {
  readonly title: string;
  readonly description: string;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }

  static create(title: string, description: string): SiteConfigEntity {
    return new SiteConfigEntity(title, description);
  }
}
