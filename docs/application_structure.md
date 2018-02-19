<h1 align=center>Buenas Prácticas en la Estructura de la Aplicación</h1>

Tener una visión a corto y largo plazo de la aplicación. Comience de a poco, pero tenga en cuenta hacia dónde se dirige su aplicación.

Todo el código de la aplicación va en la carpeta **src**. Todas las funcionalidades están en sus propias carpetas, con su propio NgModule.

Cada componente, servicio y pipe está en su propio archivo. Todas las secuencias de comandos *vendor scripts* están almacenados en otras carpetas y no en **src**. Probablemente tu no los escribiste y no quieres que se amontonen en **src**.

## LIFT

**Hacer:** Estructure la aplicación de tal manera que pueda identificar el código rápidamente.  
**Hacer:** Definir la estructura siguiendo estas 4 pautas, enlistadas en orden de importancia. ¿Cuáles cuatro pautas?  
**¿Por qué?:** LIFT proporciona una estructura consistente que se adapta bien, es modular y facilita la mejora de la eficiencia del desarrollador al encontrar el código rápidamente. Pregúntese: ¿Puedo abrir y comenzar rápidamente a trabajar con todos los archivos relacionados con esta función?


## Localizar

**Hacer:** Haga que el código sea intuitivo, simple y rápido.  
**¿Por qué?:** Para trabajar de manera eficiente debe ser capaz de encontrar archivos rápidamente cuando no conoce o no recuerda el nombre de los archivos. Mantener los archivos relacionados cerca el uno del otro en una ubicación intuitiva ahorra tiempo. Una estructura de carpetas descriptiva hace una gran diferencia para usted y las personas que lo siguen.

## Identificar

**Hacer:** Asigne un nombre al archivo para que sepa al instante qué contiene y qué representa.  
**Hacer:** Sea descriptivo con los nombres de archivo y mantenga el contenido del archivo en exactamente un componente.
**Evitar:** Evitar archivos con múltiples componentes, múltiples servicios o una mezcla.  
**¿Por qué?:** Dedique menos tiempo a búsqueda de código, y sea más eficiente. Los nombres de archivo más largos son mucho mejores que los nombres abreviados y cortos pero poco claros.

*Puede ser ventajoso desviarse de la regla de una cosa por archivo cuando tiene un conjunto de características pequeñas estrechamente relacionadas que se describen y entienden mejor en un único archivo.*

## Plano

**Hacer:** Mantener una estructura de carpetas plana el mayor tiempo posible.  
**Hacer:** Considere crear subcarpetas cuando una carpeta llegue a siete o más archivos.
**Hacer:** Considere la posibilidad de configurar el IDE para ocultar los archivos molestos e irrelevantes, como los archivos .js y .js.map.  
**¿Por qué?:** Nadie quiere buscar archivos a través de siete niveles de carpetas. Una estructura plana es fácil de escanear.  Por otro lado los psicólogos creen que los humanos comienzan a luchar cuando el número de cosas interesantes adyacentes excede nueve. Entonces, cuando una carpeta tiene diez o más archivos, puede ser momento de crear subcarpetas.


## T-DRY (Intente no duplicar)

**Evitar:** Evitar llevar al extremo T-DRY que tenga que sacrificar la legibilidad.  
**¿Por qué?:** Evitar no duplicar (DRY) es importante, pero no crucial si sacrifica los otros elementos del LIFT. Es por eso que se llama T-DRY. Por ejemplo, es redundante nombrar una plantilla hero-view.component.html porque la extensión .html, obviamente es una vista. Pero si algo no es obvio, entonces escribirlo.

## Directrices estructurales generales

**Hacer:** Tener una visión a corto plazo de ejecución y una visión a largo plazo.

<<<En construcción>>>


## Referencias
+ Documentación de Angular  
https://angular.io/guide/styleguide#application-structure-and-ngmodules