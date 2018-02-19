# Estructura de Carpetas por Función

**Hacer:** Crear carpetas con el nombre de la funcionalidad que representan.  
**¿Por qué?:**  
+ Un desarrollador puede ubicar el código e identificar qué representa cada archivo de un vistazo. La estructura es tan plana como puede ser y no hay nombres repetitivos o redundantes.
+ Cuando hay muchos archivos, por ejemplo mas de diez, es más fácil ubicarlos con una estructura de carpetas consistente, y más difícil en una estructura plana.

**Hacer:** Crear un NgModule para cada carpeta de funcionalidad.  
**¿Por qué?:**  
+ Los NgModules facilitan la carga lenta (lazy load) de las características enrutables.
+ NgModules facilita el aislamiento, prueba y reutilización de características.

```
├── app
│   ├─── core
│   │    ├── core.module.ts
│   │    ├── exception.service.ts|spec.ts
│   │    └── user-profile.service.ts|spec.ts
│   ├─── heroes
│   │    ├── hero
│   │    │   └─── hero.component.ts|html|css|spec.ts
│   │    ├── hero-list
│   │    │   └── hero-list.component.ts|html|css|spec.ts
│   │    ├── shared
│   │    │   └── hero-button.component.ts|html|css|spec.ts
│   │    │   └── hero.model.ts
│   │    │   └── hero.service.ts|spec.ts
│   │    ├── heroes.component.ts|html|css|spec.ts
│   │    ├── heroes.module.ts
│   │    └── heroes-routing.module.ts
│   ├── shared
│   │   ├── shared.module.ts
│   │   ├── init-caps.pipe.ts|spec.ts
│   │   ├── text-filter.component.ts|spec.ts
│   │   └── text-filter.service.ts|spec.ts
│   ├── villains
│   │   ├── villain
│   │   │   └── ...
│   │   ├── villain-list
│   │   │   └── ...
│   │   ├── shared
│   │   │   └── ...
│   │   ├── villains.component.ts|html|css|spec.ts
│   │   ├── villains.module.ts
│   │   └── villains-routing.module.ts
│   ├── app.component.ts|html|css|spec.ts
│   ├── app.module.ts
│   └── app-routing.module.ts
```

## Modulos de Funciones

**Hacer:**  
+ Crear un NgModule para todas las funcionalidades distintas en la aplicación; por ejemplo, para la funcionalidad  Heroes.  
+ Coloque el modulo de la funcionalidad en la carpeta con el mismo nombre; por ejemplo, en app/heroes.
+ El nombre del módulo debe reflejar el nombre de la carpeta y la funcionalidad en sí; por ejemplo, app/heroes/heroes.module.ts.
+ El nombre de la definición del módulo debe reflejar el nombre de la funcionalidad y la carpeta; por ejemplo, el modulo app/heroes/heroes.module.ts se define HeroesModule.      

**¿Por qué?:**
+ Un módulo de funcionalidad puede exponer u ocultar su implementación de otros módulos.
+ Un módulo de funcionalidad identifica distintos conjuntos de componentes relacionados.
+ Un módulo de funcionalidad puede enrutarse con facilidad y agilidad.
+ Un módulo de funcionalidad define límites claros entre la funcionalidad específica y otras características de la aplicación.
+ Un módulo de funcionalidad ayuda a aclarar y facilita asignar responsabilidades de desarrollo a diferentes equipos.
+ Un módulo de funcionalidad se puede aislar fácilmente para testear.

## Modulo Shared

**Hacer:** 
+ Crear un módulo SharedModule en una carpeta shared; por ejemplo, app/shared/shared.module.ts.
+ Declarar componentes, directivas y pipes en el módulo shared cuando se puedan volver a utilizar por los componentes declarados en otros modulos.

**Considerar:** Usar el nombre SharedModule cuando se haga referencia al contenido del módulo shared en toda la aplicación.  
**Evitar:** Proporcionar servicios en el modulo shared. Los servicios generalmente son singletons que se proporcionan una vez para toda la aplicación o en un módulo de funcionalidad.

**Hacer:** Importar todos los módulos requeridos en el SharedModule; por ejemplo, CommonModule y FormsModule.  
**¿Por qué?:** SharedModule contendrá componentes, directivas y pipes que pueden necesitar características de otro módulo común; por ejemplo, ngFor en CommonModule.
  
**Hacer:** Exportar todos las definiciones de SharedModule que los otros módulos de funcionalidad necesiten utilizar.  
**¿Por qué?:** SharedModule existe para hacer que los componentes, directivas y pipes comúnmente utilizados estén disponibles para su uso en las plantillas de componentes de muchos otros módulos.

**Evitar:** Especificar proveedores de singleton en toda la aplicación en SharedModule. Los singleton intencionales están bien. Cuídate.
**¿Por qué?:** Un módulo de funcionalidad con carga diferida que importe ese módulo shared hará su propia copia del servicio y probablemente tenga resultados no deseados.
**¿Por qué?:** No desea que cada módulo tenga su propia instancia separada de servicios únicos. Sin embargo, existe un peligro real de que eso suceda si SharedModule proporciona un servicio.

## Modulo Core

Considere la posibilidad de recopilar numerosas clases auxiliares de un solo uso dentro de un módulo central para simplificar la estructura aparente de un módulo de características.

Considere llamar al módulo principal de la aplicación, CoreModule. La importación de CoreModule en la raíz AppModule reduce su complejidad y enfatiza su papel como orquestador de la aplicación como un todo.

Crea un módulo de características llamado CoreModule en una carpeta central (por ejemplo, app/core/core.module.ts).

Ponga un servicio singleton cuya instancia se compartirá a lo largo de la aplicación en el CoreModule (por ejemplo, ExceptionService y LoggerService).

Importe todos los módulos requeridos por los activos en el CoreModule (por ejemplo, CommonModule y FormsModule).

¿Por qué? CoreModule proporciona uno o más servicios únicos. Angular registra a los proveedores con el inyector de raíz de la aplicación, haciendo que una instancia singleton de cada servicio esté disponible para cualquier componente que los necesite, ya sea que ese componente se cargue con impaciencia o de forma lenta.

¿Por qué? CoreModule contendrá servicios únicos. Cuando un módulo con carga diferida los importe, obtendrá una nueva instancia y no el único de la aplicación previsto.

Reúna componentes de uso único para toda la aplicación en el CoreModule. Importe una vez (en el AppModule) cuando se inicie la aplicación y nunca la importe en ningún otro lado. (por ejemplo, NavComponent y SpinnerComponent).

¿Por qué? Las aplicaciones del mundo real pueden tener varios componentes de un solo uso (por ejemplo, hilanderos, brindis de mensajes y diálogos modales) que aparecen solo en la plantilla de AppComponent. No se importan en otro lugar, por lo que no se comparten en ese sentido. Sin embargo, son demasiado grandes y desordenados para dejarlos sueltos en la carpeta raíz.

Evite importar el CoreModule en cualquier lugar, excepto en el AppModule.

¿Por qué? Un módulo de funciones con carga lenta que importe directamente el CoreModule hará su propia copia de servicios y probablemente tenga resultados no deseados.

¿Por qué? Un módulo de funciones cargado con entusiasmo ya tiene acceso al inyector de AppModule y, por lo tanto, a los servicios del CoreModule.

Exporte todos los símbolos del CoreModule que AppModule importará y pondrá a disposición para que otros módulos de características los usen.

¿Por qué? CoreModule existe para hacer que los servicios singleton comúnmente utilizados estén disponibles para su uso en muchos otros módulos.

¿Por qué? Desea que toda la aplicación use la única instancia de singleton. No desea que cada módulo tenga su propia instancia separada de servicios únicos. Sin embargo, existe un peligro real de que esto suceda accidentalmente si el CoreModule proporciona un servicio.


## Referencias de estructura

<https://github.com/ngrx/platform>
<https://medium.com/@tomastrajan/6-best-practices-pro-tips-for-angular-cli-better-developer-experience-7b328bc9db81>
https://github.com/gpolanco/platzisquare/tree/github/src/app/core

¿Qué tal esta estructura?

```
├── app
│   ├─── core
│   │    ├── core.module.ts
│   │    ├── services
│   │    │    ├── alert.service.ts
│   │    │    ├── toast.service.ts
│   │    │    └── login.service.ts
│   │    │    └──
│   │    ├── components
│   │    │    ├── nav
│   │    │    │   ├── nav.component.html
│   │    │    │   ├── nav.component.css
│   │    │    │   ├── nav.component.spec.ts
│   │    │    │   └── nav.component.ts
│   │    │    ├── footer
│   │    │    │   ├── footer.component.html
│   │    │    │   ├── footer.component.css
│   │    │    │   ├── footer.component.spec.ts
│   │    │    │   └── footer.component.ts
│   ├─── heroes
│   │    ├── hero
│   │    │   └─── hero.component.ts|html|css|spec.ts
│   │    ├── hero-list
│   │    │   └── hero-list.component.ts|html|css|spec.ts
│   │    ├── shared
│   │    │   └── hero-button.component.ts|html|css|spec.ts
│   │    │   └── hero.model.ts
│   │    │   └── hero.service.ts|spec.ts
│   │    ├── heroes.component.ts|html|css|spec.ts
│   │    ├── heroes.module.ts
│   │    └── heroes-routing.module.ts
│   ├── shared
│   │   ├── shared.module.ts
│   │   ├── pipes
│   │   │   ├── capitalize.pipe.ts
│   │   │   └── time_ago.pipe.ts
│   │   └── text-filter.service.ts|spec.ts
│   ├── villains
│   │   ├── villain
│   │   │   └── ...
│   │   ├── villain-list
│   │   │   └── ...
│   │   ├── shared
│   │   │   └── ...
│   │   ├── villains.component.ts|html|css|spec.ts
│   │   ├── villains.module.ts
│   │   └── villains-routing.module.ts
│   ├── app.component.ts|html|css|spec.ts
│   ├── app.module.ts
│   └── app-routing.module.ts
```