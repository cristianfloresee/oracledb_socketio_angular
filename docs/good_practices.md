# Guía de Estilos

Esta es una guía sobre la sintaxis, convenciones y estructura de las aplicaciones de angular.

## Vocabulario
Cada directriz describe una buena o mala práctica.  
A continuación el vocabulario de una directriz. 

<b>Hacer:</b> Pauta que siempre se debe seguir.  
<b>Considerar:</b> Generalmente se deben seguir a menos que tenga una buena razón.  
<b>Evitar:</b> Algo que casi nunca debe hacer.  
<b>¿Por qué?:</b> Da las razones para seguir las recomendaciones anteriores.


## Responsabilidad Individual 

### Funciones Pequeñas

Estilo 01-02

<b>Hacer:</b> Definir funciones pequeñas.  
<b>Considerar:</b> Limitar a no más de 75 líneas.     
<b>¿Por qué?:</b> 
+ Son más faciles de probar, especialmente cuando hacen una cosa. 
+ Promueven la reutilización.
+ Son más faciles de mantener.
+ Ayudan a evitar errores ocultos que vienen con grandes funciones que comparten variables con alcance externo.

## Nombres

### Directrices Generales

### Nombres de archivos separados

<b>Hacer:</b> Usar guiones para separar palabras en el nombre.  
<b>Hacer:</b> Usar puntos para separar el tipo.  
<b>Hacer:</b> Utilizar nombres coherentes siguiendo el patrón <nombre.tipo.ts>  
<b>Hacer:</b> Utilizar tipos convencionales como .component .directive .pipe .service