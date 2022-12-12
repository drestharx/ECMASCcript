/*------------------------------ MODULES
Nos permite separar archivos que despues son representados por modulos y luego importarlos
y hacer referencia a ellos
Para esto JS puede identificar modulos directamente con la extension .mjs, esto se hace para evitar
la configuracion JSON */

import hello from "./module.mjs"

hello();

/* para indicarle que trabajamos con modulos es necesario que las extensiones de los archivos 
sean .mjs */