# ai_integration-jc

## Problema a resolver:
La idea del problema viene de la necesidad que tienen los entrenadores deportivos que llevan una cartera de clientes considerablemente grande (minimo 15 hasta 50 o más personas), a las que tienen que programar rutinas de ejercicios dependiendo de las necesidades de cada cliente.

## Como se resolvio:
La idea principal consiste en que el usuario (entrenador deportivo) llene 2 formularios uno con información especifica de su cliente y el otro con sus necesidades, esto nos daria el primer archivo como contexto y el segundo el archivo input, para que la implementación de la AI cree un archivo .txt con el plan de entrenamiento basandose, asi el usuario obtine una guia con la que puede trabajar de manera rapida evitando crear un plan de entrenamiento desde cero.

## Resultado esperado:
Se espera la creación de un archivo .txt con la información que compartimos más el entrenamiento por día de acuerdo al tiempo del plan, puede ser 1 semana, 1 mes, etc. y con algunas consideraciones adicionales.
Esto ayudara a los entrenadores a optimizar el tiempo de planeación en sus programas de entrenamiento, al no diseñarlos desde cero, ya que el resultado les ayudara a tener una base y asi agregar o remover ejercicios o detalles que consideren necesarios ya que pueden tener una cartera de clientes extensa.

## Como funciona la herramienta internamente:
La implementación realizada consiste en leer 2 archivos, el primero (system_context.txt) como contexto y el segundo (user?input.txt) con la iinformación referente a el tipo de entrenamiento, prioridades y el resultado de las pruebas realizadas.
La idea es obtener los archivos .txt (tambien se busca hacerlo con archivos .pdf) mediante la introducción de los datos desde un entorno visual (form) obteniendo los siguientes datos:
Nombre:
Edad: 
Peso: 
Altura: 
Genero: 
Ocupación: 
Actividad:
Entrenamiento: 
Prioridades de entrenamiento: 
Resultados de sus pruebas:
