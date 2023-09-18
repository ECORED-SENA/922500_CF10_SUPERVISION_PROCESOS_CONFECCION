<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Técnicas y diagramas de estudio de métodos

    .row.fondo-tema2.align-items-center.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-lg-8.mb-4(data-aos="fade-right")
            .cajon.color-secundario.h-100.p-4.mb-4
              p.mb-0 Las técnicas para estudiar los métodos de trabajo, de acuerdo con García (2005),  permiten validar la versión actual del cómo realiza el trabajo y también proponer mejoras que conlleven a una reducción de tiempo u optimización de otros recursos. En la comparación entre el estado actual y mejorado se puede ver lo que se eliminó, simplificar o varió, es por esto su importancia. A nivel general en el estudio de métodos se puede usar más de una técnica, sin embargo, las que no pueden faltar son las que se muestran en este contenido, ya que hace que se pueda analizar el proceso desde la visión general hasta el detalle de este.
            p Sumado a esto, la simbología es un elemento clave en la realización de diagramas. Según Salazar (2019), la simbología es el lenguaje gráfico de los diagramas de flujo, es propuesta por diferentes organismos de normalización para que a nivel mundial se pueda interpretar cada uno de los símbolos usados como la ISO (
              em International Organization for Standardization
              |) Organización Internacional de Normalización, ASME (
              em The American Society of Mechanical Engineers
              |) Sociedad Americana de Ingenieros Mecánicos o ANSI (The American National Standards Institute) Instituto Nacional Americano de Estándares. Generalmente las dimensiones usadas para su representación son proporcionales tanto en largo como en ancho, 1 cm por 1 cm. 
          .col-lg-4.col-md-8.col-10.mb-4.ps-md-0(data-aos="fade-left")
            img(src='@/assets/curso/temas/tema2/img.png' alt='')

          p.mb-4(data-aos="fade") La simbología aquí propuesta es rescatada de las normas ASME, en la tabla se describe su símbolo, actividad que indica y su uso en la realización de diagramas para el estudio de métodos. 

          .col-md-12(data-aos="fade-down")
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 1.] Simbología para elaboración de diagramas de flujo
            .tabla-a.color-acento-contenido
              table
                thead
                  tr
                    th Símbolo
                    th Actividad
                    th.colum-60 Para qué se usa
                tbody.bg-white
                  tr
                    td 
                      img.mx-auto(src='@/assets/curso/temas/tema2/tabl1.png' alt='Operación' style="width: 85px;")
                    td.text-center Operación
                    td Indica las principales fases del proceso, método o procedimiento. Describe la modificación o alteración de las características del proceso.
                  tr
                    td 
                      img.mx-auto(src='@/assets/curso/temas/tema2/tabl2.png' alt='Inspección' style="width: 85px;")
                    td.text-center Inspección
                    td Indica la verificación de características del objeto para determinar sus calidad, cantidad o características. Es un paso de control dentro del proceso. Se coloca cada vez que un producto es examinado.
                  tr
                    td 
                      img.mx-auto(src='@/assets/curso/temas/tema2/tabl3.png' alt='Almacenamiento' style="width: 85px;")
                    td.text-center Almacenamiento
                    td Indica el depósito de un objeto o partes de un objeto, que se desea proteger de alguna modificación o algún movimiento.
                  tr
                    td 
                      img.mx-auto(src='@/assets/curso/temas/tema2/tabl4.png' alt='Transporte' style="width: 85px;")
                    td.text-center Transporte
                    td Indica el traslado de un objeto o grupo de ellos de un lugar a otro, sin considerar los movimientos que corresponden a una operación o inspección. Generalmente se tienen en cuenta los desplazamientos que implican mas de 1.5 metros de distancia.
                  tr
                    td 
                      img.mx-auto(src='@/assets/curso/temas/tema2/tabl5.png' alt='Demora' style="width: 85px;")
                    td.text-center Demora
                    td Indican cuando el proceso es detenido, ya que requiere la ejecución de otra operación o el tiempo de respuesta es lento.
                  tr
                    td 
                      img.mx-auto(src='@/assets/curso/temas/tema2/tabl6.png' alt='Operación / Inspección' style="width: 85px;")
                    td.text-center Operación / Inspección
                    td Es una actividad combinada, en donde el fin principal es ejecutar una operación durante la cual se puede efectuarse alguna inspección.


    Separador

    #t_2_1
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.1 Diagrama de operaciones

    .row.justify-content-center.mb-3
      .col-lg-8.mb-4.mb-md-0(data-aos="fade-right")
        p Según Meyers (2000) 
          b.t-red el diagrama de operaciones es la representación gráfica de la secuencia de actividades de una prenda o producto, en donde se muestran las materias primas que lo conforman, las operaciones que agregan valor en cada material y las operaciones de ensamble. 
          | Es así como se muestra el detalle del paso a paso y se construye de manera limpia el proceso productivo, también en su elaboración se aclaran las dudas generales que se puedan tener en cuanto al orden en que se va ensamblando la prenda ya al unir cada Insumo o material no se deberán cruzar las líneas del diagrama.
        p El diagrama de operaciones tiene un círculo por cada operación requerida para transformar cada materia prima, así como también para ensamblar las partes y para empacar el producto. Están incluidos todos los pasos del proceso productivo que se quiera representar, desde el inicio y hasta el final que se define antes de empezar su realización. El número de materias primas e insumos determina el tamaño y complejidad del diagrama de operaciones.
        .bg-6.mb-4.p-4.p-md-3
          .row 
            .col-lg-2.col-md-2.col-4.mb-4.mb-md-0
              img.px-lg-3(src='@/assets/curso/temas/tema3/alert.svg' alt='AvatarTop')
            .col-md-10
              p.mb-0 Es necesario señalar que los diagramas de operaciones son de gran importancia en la estructura inicial del estudio de métodos, pues, permite visualizar el proceso de manera general con los detalles más importantes de la elaboración de la prenda o producto. 
      .col-lg-4.col-md-8.col-10.mb-4.mb-md-0(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img2.png' alt='')

    p.mb-4(data-aos="fade") Todo diagrama de operaciones debe reconocerse por medio de la información que muestra en el encabezado y se debe colocar la información necesaria para su rápida interpretación, tal como se presenta en la siguiente figura, basada en Meyers (2000).

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10.bg-gray2.px-4.pt-4
        .titulo-sexto.color-acento-contenido.mb-0
          p.mb-0 #[b Figura 1.] Esquema general elaboración de Diagrama de operaciones
        img(src='@/assets/curso/temas/tema2/fig1.svg' alt='Esquema en el que se visualizan los componentes y las operaciones que desarrollan y aquellas de ensamble.')
      .col-lg-10.px-0.mb-5
        .bg-7.p-4
          p.mb-0 En este esquema se muestra una adaptación del esquema general de manufactura a un esquema de confección, en donde se visibiliza los componentes, las operaciones que transforman cada componente y las operaciones de ensamble, también se puede ver de manera gráfica como se muestran las operaciones dependiendo si son de ensamble, preparación o terminados.

    
    p.mb-4(data-aos="fade") A continuación, se relacionan los pasos establecidos para realizar este tipo de esquema:

    .row.fondo2-tema2.align-items-center.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center
    
          .tarjeta.fondo-slider.p-4.pt-5.mb-5
            SlyderA(tipo="b" data-aos="fade-down")
              .row.justify-content-evenly
                .col-lg-7.mb-4.mb-md-2.mb-lg-0
                  .tarjeta-numerada.verde.color-primario.bg-green.box-shadow.ps-5.p-4.mb-2
                    .tarjeta-numerada__numero.text-white
                      .h2 1
                    p Para comenzar el diagrama de operaciones, es importante reconocer las partes del producto o prenda a describir. En el caso que se pretenda describir las operaciones del proceso de confección de una prenda es práctico comenzar reconociendo cuales serían los componentes del producto: 
                    ul.lista-ul--color.color-verde.mb-0
                      li.mb-2 
                        i.fas.fa-circle
                        | Materiales o partes del producto a transformar: se refiere a aquellos materiales que se transforman en el proceso, en el caso específico de confección se refiere a las partes de la prenda.
                      li
                        i.fas.fa-circle
                        | Materiales comprados: se refieren a los materiales o insumos que se usan en el proceso productivo y se compran ya hechos, en el caso de los procesos de confección, se refiere generalmente a los insumos, por ejemplo, los herrajes, botones, bolsas, cremalleras, entre otros. 
                .col-lg-4.col-md-8.col-10
                  img(src='@/assets/curso/temas/tema2/slide-img1.svg', alt='')
              .row.justify-content-evenly
                .col-lg-7.mb-4.mb-md-2.mb-lg-0
                  .tarjeta-numerada.verde.color-primario.bg-green.box-shadow.ps-5.p-4.mb-2
                    .tarjeta-numerada__numero.text-white
                      .h2 2
                    p Determine las operaciones y la secuencia requerida para fabricar cada componente.                    
                .col-lg-4.col-md-8.col-10
                  img(src='@/assets/curso/temas/tema2/slide-img2.svg', alt='')
              .row.justify-content-evenly
                .col-lg-7.mb-4.mb-md-2.mb-lg-0
                  .tarjeta-numerada.verde.color-primario.bg-green.box-shadow.ps-5.p-4.mb-2
                    .tarjeta-numerada__numero.text-white
                      .h2 3
                    p Determine la secuencia de ensamble, tanto de materiales a transformar como de materiales comprados.                    
                .col-lg-4.col-md-8.col-10
                  img(src='@/assets/curso/temas/tema2/slide-img3.svg', alt='')
              .row.justify-content-evenly
                .col-lg-7.mb-4.mb-md-2.mb-lg-0
                  .tarjeta-numerada.verde.color-primario.bg-green.box-shadow.ps-5.p-4.mb-2
                    .tarjeta-numerada__numero.text-white
                      .h2 4
                    p Ubique los materiales o componentes a transformar en orden. Se colocarán de derecha a izquierda, en el orden en que se vaya ensamblando al proceso de confección, sobre una línea horizontal, indicando qué materia prima ingresará al proceso. 
                    p Luego, una línea vertical se extiende hacia abajo partiendo desde el lado derecho de la línea horizontal, colocando un círculo para cada operación hasta llegar a la última.            
                .col-lg-4.col-md-8.col-10
                  img(src='@/assets/curso/temas/tema2/slide-img4.svg', alt='')
              .row.justify-content-evenly
                .col-lg-7.mb-4.mb-md-2.mb-lg-0
                  .tarjeta-numerada.verde.color-primario.bg-green.box-shadow.ps-5.p-4.mb-2
                    .tarjeta-numerada__numero.text-white
                      .h2 5
                    p Coloque el segundo componente al lado del primero, el tercero al lado del segundo y así sucesivamente, hasta que se incluyan todas las materias primas y todas las operaciones.                    
                .col-lg-4.col-md-8.col-10
                  img(src='@/assets/curso/temas/tema2/slide-img5.svg', alt='')
              .row.justify-content-evenly
                .col-lg-7.mb-4.mb-md-2.mb-lg-0
                  .tarjeta-numerada.verde.color-primario.bg-green.box-shadow.ps-5.p-4.mb-2
                    .tarjeta-numerada__numero.text-white
                      .h2 6
                    p Dibuje una línea horizontal desde la parte inferior de la última operación del segundo componente, hasta la línea vertical del primer componente, uniendo el proceso en operaciones en la línea de ensamble. Y así con cada materia prima trasformada o preparada para el proceso de confección.                    
                .col-lg-4.col-md-8.col-10
                  img(src='@/assets/curso/temas/tema2/slide-img6.svg', alt='')
              .row.justify-content-evenly
                .col-lg-7.mb-4.mb-md-2.mb-lg-0
                  .tarjeta-numerada.verde.color-primario.bg-green.box-shadow.ps-5.p-4.mb-2
                    .tarjeta-numerada__numero.text-white
                      .h2 7
                    p Introduzca todas las partes a la línea de ensamble y agregue un círculo para cada operación de ensamble.                    
                .col-lg-4.col-md-8.col-10
                  img(src='@/assets/curso/temas/tema2/slide-img7.svg', alt='')
              .row.justify-content-evenly
                .col-lg-7.mb-4.mb-md-2.mb-lg-0
                  .tarjeta-numerada.verde.color-primario.bg-green.box-shadow.ps-5.p-4.mb-2
                    .tarjeta-numerada__numero.text-white
                      .h2 8
                    p Indique los números de operación o inspección, nombre de la operación y recurso utilizado.                    
                .col-lg-4.col-md-8.col-10
                  img(src='@/assets/curso/temas/tema2/slide-img8.svg', alt='')

          .col-lg-10
            h4.t-red(data-aos="fade") Aplicación del diagrama de operaciones
            p(data-aos="fade") Ahora bien, frente a la implementación, esta se hará sobre una prenda básica, en este caso se verá que los componentes son diagramados en su totalidad de acuerdo con el esquema de especificaciones de confección. 
            .tarjeta.bg-color-secundario.p-3(data-aos="fade-down")
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2.px-lg-4.px-md-3
                  img.px-lg-4(src="@/assets/curso/temas/tema5/xls.svg")
                .col.ps-md-0
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Diagrama de operaciones
                      p.mb-0 Se sugiere revisar el archivo para comprender la aplicación directa del diagrama.
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_Diagrama_Operaciones.xlsx')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download


    Separador

    #t_2_2
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.2  Diagrama de flujo del proceso

    .row.fondo2-tema2.align-items-center.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center
    
          .row.justify-content-center.mb-3
            .col-lg-8.mb-4(data-aos="fade-right")
              p Según García (2005), 
                b.t-red el diagrama de flujo del proceso o diagrama de procesos muestra todo el manejo, inspección, operaciones, almacenaje y retrasos que ocurren con cada materia prima conforme a como se mueve por la planta. 
                | Este diagrama se dispone en un formato estándar, sin embargo, un formato correctamente diseñado guiará al supervisor o analista a hacer las preguntas correctas para un análisis completo del proceso, así mismo es importante aclarar que en un mismo proceso la información debe ser coherente y coincidir en las herramientas de recolección de información. 
              .cajon.color-primario.p-4.mb-4
                p.mb-0 Para elaborar el diagrama de flujo de procesos, de acuerdo con García (2005), es necesario tener en cuenta dos formas para su construcción: se puede diagramar el flujo o recorrido de los materiales o el flujo de un operario. Ambas formas son importantes, el de materiales sirve para validar las actividades en general del proceso de producción y el de operario es más útil para validar las operaciones de servicio, como por ejemplo el mantenimiento de una máquina, o despachar un material en el almacén. Para su construcción es necesario ser consecuente con el diagrama de operaciones y mencionar, además de las operaciones, las demás actividades, transportes, demoras, almacenamientos, inspecciones u operaciones combinadas. 
              h4.t-red Aplicación del diagrama de flujo
              p Según Meyers (2000), la implementación realizada se hará sobre una prenda básica. En este caso se verá que los componentes son diagramados en su totalidad de acuerdo al esquema de especificaciones de confección relacionadas. En esta ocasión, se incorporó las demás actividades, en las cuales se deberá enfocar el estudio de métodos con el fin de mitigar aquellas actividades que no agregan valor, por ejemplo, tratar de combinar las actividades de operación e inspección para que las realice una sola persona.          
            .col-lg-4.col-md-7.col-9.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema2/img3.png' alt='')

          .row.justify-content-center
            .col-lg-10(data-aos="fade-down")
              .tarjeta.bg-color-secundario.p-3
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-2.col-lg-2.px-lg-4.px-md-3
                    img.px-lg-4(src="@/assets/curso/temas/tema5/xls.svg")
                  .col.ps-md-0
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h3.mb-1 Diagrama de flujo
                        p.mb-0 Se sugiere revisar el archivo para comprender la aplicación directa del diagrama.
                      .col-sm-auto
                        a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_Diagrama_Flujo.xlsx')" target="_blank")
                          span Descargar
                          i.fas.fa-file-download


    Separador

    #t_2_3
    .titulo-segundo.color-acento-contenido
      h2 2.3 Diagrama de recorrido

    .row.fondo3-tema2.align-items-center.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center
          
          .row.justify-content-center.mb-3
            .col-lg-4.col-md-9.mb-4(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema2/img4.png' alt='')
            .col-lg-8.mb-4(data-aos="fade-left")
              p Según Salazar (2019), 
                b.t-red este diagrama se utiliza para complementar a los diagramas de flujo y operaciones. 
                | Este es el esquema visual en donde a través de un plano en dos dimensiones se validan las actividades mencionadas en el diagrama de flujo de proceso. Se muestra cómo se distribuye en el espacio físico de la planta todas las actividades y cómo se conectan a través del recorrido de un operario. 
              p Por otro lado, este se construye con base en un #[em layout] a escala taller, en donde se indican las máquinas, las mesas auxiliares, los pasillos y demás posiciones fijas, sobre este plano se dibuja el flujo del proceso utilizando los mismos símbolos empleados en el diagrama de flujo o recorrido, con el objetivo de validar si existen contraflujos en el proceso productivo, recorridos innecesarios, disposición inadecuada de las instalaciones o maquinaria. Para su elaboración, es necesario haber realizado y analizado los demás instrumentos para el registro de la información de métodos. Se mencionan los pasos más relevantes a tener en cuenta para la diagramación del flujo dentro del plano. 
          
          .titulo-sexto.color-acento-contenido(data-aos="fade-down")
            p.mb-0 #[b Figura 2.] Proceso de elaboración de un diagrama de recorrido

          .col-lg-9.mb-4(data-aos="fade-down")
            img.d-none.d-md-block(src='@/assets/curso/temas/tema2/fig2.svg' alt='Presentación de los cinco pasos para la realización de un diagrama de recorrido.')
            img.d-md-none.d-block(src='@/assets/curso/temas/tema2/fig2-mobile.svg' alt='Presentación de los cinco pasos para la realización de un diagrama de recorrido.')

          .col-lg-10
            h4.t-red(data-aos="fade") Aplicación de un diagrama de recorrido
            p(data-aos="fade") Según Salazar (2019) la implementación realizada se hará sobre una prenda básica, en este caso se verá que los componentes son diagramados en su totalidad de acuerdo al esquema de especificaciones de confección relacionadas en la camiseta básica y el diagrama de procesos en la Implementación de un diagrama de flujo. 
            .tarjeta.bg-color-secundario.p-3(data-aos="fade-down")
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2.px-lg-4.px-md-3
                  img.px-lg-4(src="@/assets/curso/temas/tema1/pdf.svg")
                .col.ps-md-0
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Diagrama de recorrido 
                      p.mb-0 Se sugiere revisar el archivo para comprender la aplicación directa del diagrama.
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="obtenerLink('/downloads/Diagrama_de_recorrido.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download

    Separador

    #t_2_4
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.4 Técnica de estudio de micromovimientos

    p.mb-4(data-aos="fade") Después de haber analizado el proceso general, tal vez se comiencen a dilucidar algunos problemas del proceso productivo, así como también algunas soluciones; sin embargo, quedan por analizar las operaciones de manera individual. La técnica para estudio de micromovimientos deja claro hasta el más mínimo detalle de cada operación, de manera que también se puedan efectuar mejoras pequeñas.

    .row.justify-content-center.mb-3
      .col-lg-8.mb-4.mb-md-0(data-aos="fade-right")
        .bg-6.mb-4.p-4.p-md-3
          .row 
            .col-md-2.col-4.mb-4.mb-md-0
              img.px-lg-3(src='@/assets/curso/temas/tema3/alert.svg' alt='AvatarTop')
            .col-md-10
              p.mb-0 Los micro movimientos (
                em therbligs
                | ) suelen definirse como movimientos elementales del cuerpo humano que se realizan en el puesto de trabajo y que permiten, tras su análisis y con ayuda de técnicas de filmación y otras similares, describir el trabajo con gran precisión y detalle. Es así como algunos de los diagramas usados en el estudio de métodos, las actividades o movimientos son nombrados con estos movimientos, ya que ayudan a validar de forma específica los movimientos eficientes e ineficientes. (Salazar, 2019 )
        p Los esposos Frank y Lillian Gilbreth establecieron una división de 17 movimientos fundamentales. Estos son los que se conocen actualmente como 
          em therbligs
          | , en la tabla 2 se relacionan sus nombres y siglas.
      .col-lg-4.col-md-8.mb-4.mb-md-0(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img5.png' alt='')


    .row.fondo4-tema2.align-items-center.mb-4
      .col-lg-12.col-12.px-lg-5.py-lg-0.p-4
        .row.justify-content-center.align-items-center
          
          .col-lg-10(data-aos="fade-down")
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 2.] Clasificación de #[em Therbligs]
            .tabla-a.color-acento-contenido.mb-4
              table
                thead
                  tr
                    th(colspan="2") #[em Therbligs] eficientes
                    th(colspan="2") #[em Therbligs] ineficientes
                tbody.bg-white
                  tr
                    td Alcanzar
                    td AL
                    td Buscar
                    td B
                  tr
                    td Tomar
                    td T
                    td Seleccionar
                    td S.E
                  tr
                    td Mover
                    td M
                    td Inspeccionar
                    td I
                  tr
                    td Soltar
                    td A.L
                    td Demora evitable
                    td D.E.T
                  tr
                    td Ensamblar
                    td E
                    td Demora inevitable
                    td D.I
                  tr
                    td Desmontar
                    td D.E
                    td Colocar en posición
                    td P
                  tr
                    td Usar
                    td U
                    td Descansar
                    td D.E.S
                  tr
                    td Preparar posición
                    td P.P
                    td Sostener
                    td S.O
                  tr
                    td 
                    td 
                    td Planear
                    td P.L

            p.mb-4(data-aos="fade") El estudio de micro movimientos desde un principio concibió estándares de tiempo predeterminados para todas las actividades en particular para analizar una operación o un conjunto de ellas, así solo con preparar el diseño de una estación de trabajo y un patrón de movimientos, se podría determinar cuánto tiempo se tardará. En las propuestas de mejora se busca adecuar la operación o el puesto de trabajo. Se utiliza la técnica de los diagramas bimanuales para validar que movimientos podrían llevar a ser improductivos.

          .col-lg-10
            h4.t-red Aplicación de un diagrama bimanual
            p.mb-4(data-aos="fade") Según Salazar (2019), el objetivo del diagrama bimanual es validar qué movimientos ineficaces se están ejecutando operación por operación; sin embargo, son objeto de estudio las operaciones que pueden ser críticas dentro del proceso de confección. Su elaboración generalmente se realiza, luego de hacer un registro fílmico, ya que probablemente esta operación tenga ciclos de trabajo muy cortos. 
            .tarjeta.bg-color-secundario.p-3.mb-4(data-aos="fade-down")
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2.px-lg-4.px-md-3
                  img.px-lg-4(src="@/assets/curso/temas/tema5/xls.svg")
                .col.ps-md-0
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Diagrama bimanual
                      p.mb-0 Se sugiere revisar el archivo para comprender la aplicación directa de este diagrama.
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_Diagrama_Bimanual.xlsx')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download

            p.mb-4(data-aos="fade") Ahora bien, con el fin de tener mayor claridad sobre el concepto y aplicabilidad de la economía de movimientos, que busca técnicamente hacer que el trabajo sea simplificado y más fácil para la persona, el siguiente recurso presenta algunos consejos que contribuyen con este principio. 

          h4.mb-4(data-aos="fade").text-center Consejos de economía de movimientos      

          SlyderF.mb-5.text-center(columnas="col-lg-6 col-xl-4")
            .tarjeta.bg-8.text-center.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema2/1.png' alt='1')
              h5 Los movimientos deben de ser cortos y con desplazamientos sencillos.   
            .tarjeta.bg-8.text-center.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema2/2.png' alt='2')
              h5 Las dos manos y brazos deben comenzar y completar sus movimientos al tiempo, esto simulando movimientos tipo espejo, es decir que las dos manos hagan lo mismo siempre. 
            .tarjeta.bg-8.text-center.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema2/3.png' alt='3')
              h5 Nunca deben estar inactivas las dos manos a la vez, excepto durante los períodos de descanso.
            .tarjeta.bg-8.text-center.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema2/4.png' alt='4')
              h5 Debe aprovecharse el impulso cuando favorece al operario, pero debe reducirse a un mínimo si hay que contrarrestarlo con esfuerzo muscular.
            .tarjeta.bg-8.text-center.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema2/5.png' alt='5')
              h5 Son preferibles los movimientos continuos y curvos a los movimientos rectos en los que hay cambios de dirección bruscos y/o repentinos.
            .tarjeta.bg-8.text-center.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema2/6.png' alt='6')
              h5 Los movimientos de oscilación libre son más rápidos, fáciles y exactos que los restringidos o controlados.
            .tarjeta.bg-8.text-center.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema2/7.png' alt='7')
              h5 Debe de haber una sucesión lógica para mantener un ritmo y permitir que sea automática.
            .tarjeta.bg-8.text-center.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema2/8.png' alt='8')
              h5 El trabajo debe disponerse de modo que los ojos se muevan dentro de límites cómodos y no sea necesario cambiar de foco a menudo.  


          p.mb-4(data-aos="fade") Finalmente, se exponen ejemplos y alternativas de aplicación que contribuyan a incrementar la productividad a modo contextual y de cierre de esta temática.

          figure(data-aos="fade-down")
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/XBfqe7E1gOw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Ejemplo de aplicación de un estudio de trabajo



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
