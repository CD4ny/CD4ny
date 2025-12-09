# Clean Architecture - Proyecto CD4ny

## 📐 Estructura del Proyecto

Este proyecto sigue los principios de **Clean Architecture** (Arquitectura Limpia) propuesta por Robert C. Martin (Uncle Bob).

### 🔄 Capas de la Arquitectura

```
src/
├── core/                          # 🎯 Núcleo de la aplicación
│   ├── domain/                    # Capa de Dominio
│   │   ├── entities/              # Entidades de negocio
│   │   │   ├── User.ts
│   │   │   └── SiteConfig.ts
│   │   └── repositories/          # Interfaces de repositorios
│   │       ├── IUserRepository.ts
│   │       └── ISiteConfigRepository.ts
│   └── usecases/                  # Casos de uso (lógica de negocio)
│       ├── GetUserUseCase.ts
│       └── GetSiteConfigUseCase.ts
│
├── infrastructure/                # 🔧 Capa de Infraestructura
│   ├── repositories/              # Implementaciones de repositorios
│   │   ├── UserRepository.ts
│   │   └── SiteConfigRepository.ts
│   └── config/                    # Configuración
│       ├── constants.ts
│       └── DIContainer.ts
│
├── presentation/                  # 🎨 Capa de Presentación
│   ├── controllers/               # Controladores
│   │   ├── UserController.ts
│   │   └── SiteConfigController.ts
│   └── viewmodels/                # Modelos de vista
│       ├── UserViewModel.ts
│       └── SiteConfigViewModel.ts
│
├── components/                    # Componentes Astro (UI)
├── layouts/                       # Layouts Astro
└── pages/                         # Páginas Astro (rutas)
```

## 🏗️ Principios Aplicados

### 1. **Separación de Responsabilidades**
- Cada capa tiene una responsabilidad única y bien definida
- El dominio es independiente de frameworks y librerías externas

### 2. **Inversión de Dependencias**
- Las capas internas no conocen las capas externas
- Se utilizan interfaces para definir contratos
- Las dependencias apuntan hacia el dominio

### 3. **Independencia de Frameworks**
- La lógica de negocio es independiente de Astro
- Facilita la migración a otros frameworks si es necesario

### 4. **Testabilidad**
- Cada capa puede ser testeada de forma independiente
- Los casos de uso son fáciles de testear sin UI

## 📦 Capas Detalladas

### 🎯 Core/Domain (Dominio)
**Responsabilidad:** Contiene la lógica de negocio pura y las reglas del dominio.

- **Entities:** Objetos de negocio que representan conceptos del dominio
  - `User.ts`: Entidad de usuario
  - `SiteConfig.ts`: Configuración del sitio

- **Repositories Interfaces:** Contratos que definen cómo acceder a los datos
  - `IUserRepository.ts`: Contrato para acceso a datos de usuario
  - `ISiteConfigRepository.ts`: Contrato para configuración

### ⚙️ Core/UseCases (Casos de Uso)
**Responsabilidad:** Orquesta el flujo de datos y aplica las reglas de negocio.

- `GetUserUseCase.ts`: Obtiene información del usuario
- `GetSiteConfigUseCase.ts`: Obtiene configuración del sitio

### 🔧 Infrastructure (Infraestructura)
**Responsabilidad:** Implementaciones concretas de acceso a datos y servicios externos.

- **Repositories:** Implementaciones de las interfaces del dominio
  - `UserRepository.ts`: Obtiene datos del usuario
  - `SiteConfigRepository.ts`: Obtiene configuración

- **Config:** Configuración y utilidades
  - `constants.ts`: Constantes de la aplicación
  - `DIContainer.ts`: Contenedor de inyección de dependencias

### 🎨 Presentation (Presentación)
**Responsabilidad:** Adaptadores entre los casos de uso y la UI.

- **Controllers:** Coordinan la ejecución de casos de uso
  - `UserController.ts`: Gestiona acciones de usuario
  - `SiteConfigController.ts`: Gestiona configuración

- **ViewModels:** Transforman datos del dominio a formato para la vista
  - `UserViewModel.ts`: Modelo de vista de usuario
  - `SiteConfigViewModel.ts`: Modelo de vista de configuración

## 🔄 Flujo de Datos

```
UI (Astro Components)
    ↓
Controllers (Presentation)
    ↓
Use Cases (Core)
    ↓
Repository Interfaces (Domain)
    ↓
Repository Implementations (Infrastructure)
    ↓
Data Sources (Constants, APIs, etc.)
```

## 💡 Uso en Componentes Astro

### Ejemplo: Hero.astro
```astro
---
import { UserController } from '../presentation/controllers/UserController';
import { UserViewModelMapper } from '../presentation/viewmodels/UserViewModel';

const userController = new UserController();
const user = await userController.getUser();
const userViewModel = UserViewModelMapper.toViewModel(user);
---

<div>
  <h1>{userViewModel.name}</h1>
  <p>{userViewModel.bio}</p>
</div>
```

## 🎯 Ventajas de esta Arquitectura

1. **Mantenibilidad:** Código organizado y fácil de mantener
2. **Escalabilidad:** Fácil agregar nuevas funcionalidades
3. **Testabilidad:** Cada capa puede ser testeada independientemente
4. **Flexibilidad:** Cambiar implementaciones sin afectar la lógica de negocio
5. **Reutilización:** Componentes reutilizables en diferentes contextos
6. **Claridad:** Estructura clara y predecible

## 🧪 Testing

Cada capa puede ser testeada de forma independiente:

- **Domain:** Test de entidades y lógica de negocio
- **Use Cases:** Test de casos de uso con mocks de repositorios
- **Infrastructure:** Test de implementaciones de repositorios
- **Presentation:** Test de controllers y view models

## 📚 Recursos

- [Clean Architecture - Robert C. Martin](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [The Clean Code Blog](https://blog.cleancoder.com/)
- [Domain-Driven Design](https://martinfowler.com/tags/domain%20driven%20design.html)
