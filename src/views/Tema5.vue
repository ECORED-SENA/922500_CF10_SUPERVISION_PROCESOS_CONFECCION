<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.pb-md-0.pb-0.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Técnicas de estudio de tiempos

    .row.fondo-tema5.align-items-center.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-4.mb-4(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema5/img.png' alt='Imagen decorativa')
          .col-md-8.mb-4(data-aos="fade-left")
            .bg-9.p-4.mb-4
              p.mb-0 La técnica de estudio y análisis de tiempos a través del cronómetro es una de las más usadas en la industria de la confección y la más común en el resto de las industrias, debido a que el estándar de tiempo es un elemento de información importante para todas las áreas de la empresa, y esta técnica permite una validación y participación por parte de los supervisores y trabajadores de la planta. Los pasos más relevantes para desarrollar esta técnica de medición del tiempo se muestran a continuación.
            h4.t-red.text-center.mb-4 Procedimiento de estudio de tiempos con cronómetro
            SlyderF.mb-5.text-center(columnas="col-lg-6 col-xl-4")
              .tarjeta.bg-8.text-center.p-4
                .row.justify-content-center.mb-3
                  .col-6
                    img(src='@/assets/curso/temas/tema2/1.png' alt='1')
                h5 Selección del trabajo. 
              .tarjeta.bg-8.text-center.p-4
                .row.justify-content-center.mb-3
                  .col-6
                    img(src='@/assets/curso/temas/tema2/2.png' alt='2')
                h5 Hacer acopio de la información sobre el trabajo.
              .tarjeta.bg-8.text-center.p-4
                .row.justify-content-center.mb-3
                  .col-6
                    img(src='@/assets/curso/temas/tema2/3.png' alt='3')
                h5 Dividir el trabajo en elementos.
              .tarjeta.bg-8.text-center.p-4
                .row.justify-content-center.mb-3
                  .col-6
                    img(src='@/assets/curso/temas/tema2/4.png' alt='4')
                h5 Efectuar el estadio de tiempos propiamente dicho.
              .tarjeta.bg-8.text-center.p-4
                .row.justify-content-center.mb-3
                  .col-6
                    img(src='@/assets/curso/temas/tema2/5.png' alt='5')
                h5 Hacer la extensión del estudio de tiempos.
              .tarjeta.bg-8.text-center.p-4
                .row.justify-content-center.mb-3
                  .col-6
                    img(src='@/assets/curso/temas/tema2/6.png' alt='6')
                h5 Determinar el número de ciclos a cronometrar.
              .tarjeta.bg-8.text-center.p-4
                .row.justify-content-center.mb-3
                  .col-6
                    img(src='@/assets/curso/temas/tema2/7.png' alt='7')
                h5 Valorar o calificar el ritmo de trabajo.
              .tarjeta.bg-8.text-center.p-4
                .row.justify-content-center.mb-3
                  .col-6
                    img(src='@/assets/curso/temas/tema2/8.png' alt='8')
                h5 Aplicar suplementos.
              .tarjeta.bg-8.text-center.p-4
                .row.justify-content-center.mb-3
                  .col-6
                    img(src='@/assets/curso/temas/tema5/9.png' alt='9')
                h5 Verificar la lógica.
              .tarjeta.bg-8.text-center.p-4
                .row.justify-content-center.mb-3
                  .col-6
                    img(src='@/assets/curso/temas/tema5/10.png' alt='10')
                h5 Valorar o calificar el ritmo de trabajo.
          
          .row.mb-3
            .col-md-7.mb-4(data-aos="fade-right")
              p Luego de seleccionar la tarea y el trabajador en la planta, como alistamiento de la actividad, es necesario tener a la mano herramientas para realizar la medición de tiempos de forma eficiente. Estas herramientas son:
              ul.lista-ul--color.mb-4
                li.mb-0 
                  i.fas.fa-tshirt
                  | Formato para el registro del tiempo.
                li.mb-0 
                  i.fas.fa-tshirt
                  | Cronómetro.
                li.mb-0 
                  i.fas.fa-tshirt
                  | Tablas para sujeción de formatos.
                li.mb-0 
                  i.fas.fa-tshirt
                  | Calculadora.
                li.mb-0 
                  i.fas.fa-tshirt
                  | Cámara de video, para validar la división de los movimientos de una actividad. 
              h4 Registro del tiempo    
              p En el formato «Estudio de tiempos cronómetro» se registra la información para la determinación del estándar de tiempo, comenzando por la descripción del proceso y la actividad en la parte superior del formato. Se sugiere revisar el documento en el  cual se detallan las fórmulas correspondientes a cada campo y también se describen algunos puntos clave para el cálculo del tiempo estándar. 
              .row 
                .col-md-9
                  a.anexo.box-shadow(:href="obtenerLink('/downloads/Formatos_Estudio_Tiempos_Cronometro.xlsx')" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-xls.svg")
                    .anexo__texto
                      p.mb-0.t-sistema-texto #[b Anexo.] Formato estudio de tiempos cronometro
            .col-md-5.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema5/img2.png' alt='Imagen decorativa')

          
          p.mb-4(data-aos="fade") Es válido que las operaciones tiendan a dividirse en elementos si estas llegan a tardar demasiado, como, por ejemplo, las operaciones de corte o alistamiento de pedidos. Sin embargo, las operaciones industrializadas de confección de prendas tienden a durar menos de 3 minutos; por ejemplo, cerrar costados de una camiseta, cuya duración no es superior a los 0,6 minutos. Si la operación supera los 3 minutos, se recomienda dividir esta operación para ser medida. 

          .col-md-6.mb-4.mb-md-0(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema5/img3.png' alt='Imagen decorativa')
          .col-md-6.mb-4.mb-md-0(data-aos="fade-left")
            p Es por ello, que antes de empezar la medición, es necesario saber cuándo inicia y termina la medición, para, así mismo, activar y parar el cronómetro. Por ende, se recomienda establecer un desde y hasta en la descripción, que permitan identificar claramente el ciclo de la operación.
            .cajon.color-secundario.p-4.py-md-5
              p.mb-0 El registro de tiempo se hará basado en 10 lecturas, inicialmente, por cada operación o elemento, porque al validar la información se podrá aumentar la cantidad de observaciones debido a la consistencia de los datos. Por ejemplo, si los datos varían demasiado de toma a toma, la cantidad de observaciones aumentará. En este registro, es preciso que se ingresen los valores de tiempos, correspondientes a las mediciones, en sistema centesimal, aclarando en el formato si el tiempo es continuo o con regreso .


    p.mb-4(data-aos="fade") Se deben tener en cuenta los siguientes métodos:

    .row.fondo2-tema5.align-items-center.py-4.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .row
            .col-md-4.mb-4.mb-md-0(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema5/img4.png' alt='Imagen decorativa')
            .col-md-4.mb-4.mb-md-0(data-aos="fade-left")
              .h-100.tarjeta.bg-white.box-shadow.text-center.p-4 
                img.w-90.mx-auto.mb-3(src='@/assets/curso/temas/tema5/ico1.svg' alt='Imagen decorativa')
                h4.t-red Continuo
                p.mb-0 En el método continuo, se deja correr el cronómetro mientras dura el estudio. En esta técnica, el cronómetro se lee en el punto terminal de cada elemento, mientras las manecillas están en movimiento. En este, se debe hacer un cálculo adicional para establecer el tiempo elemental de cada actividad.
            .col-md-4.mb-4.mb-md-0(data-aos="fade-left")
              .h-100.tarjeta.bg-white.box-shadow.text-center.p-4 
                img.w-90.mx-auto.mb-3(src='@/assets/curso/temas/tema5/ico2.svg' alt='Imagen decorativa')
                h4.t-red Regreso o vuelta a cero
                p.mb-0 Consiste en tomar los tiempos de manera directa de cada elemento, es decir, al acabar cada elemento, se hace volver el reloj a cero.

    p.mb-4(data-aos="fade") Para calcular el tiempo estándar de cada operación, es necesario haber realizado las mediciones necesarias. Luego de tener los registros, el trabajo del supervisor se convierte en un ejercicio de cálculo y análisis de la información. Los diferentes tipos de tiempos y suplementos dentro del proceso de medición son: 

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-10")
      .row.justify-content-center(titulo="Tiempo promedio")
        .col-md-6.mb-4.mb-md-0
          p Lo primero que se calculará será el tiempo promedio, también conocido como elemental. Este se calcula realizando la sumatoria de las 10 lecturas, así: 
          img.mb-4(src='@/assets/curso/temas/tema5/acord-form1.svg', alt='Tabla')
          img.w-320.mb-4.mx-auto(src='@/assets/curso/temas/tema5/acord-form2.svg', alt='Formula')
          p Aplicando la fórmula, resultará un tiempo promedio o elemental de 1,2 minutos.     
        .col-md-5
          img(src='@/assets/curso/temas/tema5/acord-img1.png', alt='Imagen decorativa')
      .row.justify-content-center(titulo="Tiempo normal")
        .col-md-6.mb-4.mb-md-0
          p Luego, se calculará el tiempo normal; este busca normalizar el tiempo observado, teniendo en cuenta el desempeño o ritmo de trabajo del operador. Este desempeño se evalúa teniendo en cuenta la calificación de la actuación. 
          p Hay diferentes métodos para evaluarlos, según Freivalds y Niebel (2014), el Método de Westinghouse es el método más utilizado, y consiste en evaluar la actuación del operario calificando cuatro factores claves: habilidad, esfuerzo, condición y consistencia. 
        .col-md-5
          img(src='@/assets/curso/temas/tema5/acord-img2.png', alt='Imagen decorativa')
      .row.justify-content-center(titulo="Tiempo normal unitario")
        .col-md-6.mb-4.mb-md-0
          p El tiempo normal unitario se determina teniendo en cuenta la forma como se realizó el estudio. En confección, es muy común aplicar el concepto de frecuencia, tanto en la técnica con cronómetro como en la técnica de  predeterminados, puesto que, al momento de tomar el tiempo, la operación se puede llevar a cabo en circunstancias especiales. Por ejemplo, si se realiza la toma de tiempos de la operación unir hombros, pero solo se toma el tiempo cuando se une un solo hombro, para estimar el tiempo de la prenda completa, es necesario contemplar los dos hombros, para lo que, en la frecuencia, es necesario escribir 2. 
          .row.justify-content-center
            .col-md-10.text-center.border-r10.bg-white.p-4
              p.font-italic.mb-0 Tiempo normal unitario =  Tiempo normal * Frecuencia
              p.font-italic.mb-0 Tiempo normal unitario = 1,308 * 2 
              p.mb-0 Por lo tanto, el tiempo normal unitario sería 2,616 min.
        .col-md-5
          img(src='@/assets/curso/temas/tema5/acord-img3.png', alt='Imagen decorativa')
      .row.justify-content-center(titulo="Suplementos")
        .col-md-5.mb-4.mb-md-0
          p Los suplementos de tiempo permiten una holgura que beneficia la labor del trabajador, generalmente, en las empresas de confección que trabajan en condiciones normales, se otorga un suplemento del 12% al 14%, en los tiempos predeterminados, que también son usados para calcular el estándar.
          p #[b Los suplementos por descanso:] según la OIT, el tiempo de suplemento por descanso es el que se añade al tiempo básico para dar al trabajador la posibilidad de reponerse de los efectos fisiológicos y psicológicos causados por la ejecución de determinado trabajo en determinadas condiciones y para que pueda atender sus necesidades personales. Su cuantía depende de la naturaleza del trabajo..
        .col-md-6
          img(src='@/assets/curso/temas/tema5/acord-img4.svg', alt='Imagen decorativa')
        .col-md-11
          p #[b Los suplementos por contingencias:] según la OIT, el tiempo de suplemento por contingencias es el margen que se incluye en el tiempo estándar para prever legítimos añadidos de trabajo o demora que no compensan medir exactamente, porque aparecen sin frecuencia ni regularidad. 
          p De acuerdo con la  tabla de suplementos, se determinarán suplementos por descanso constantes de 9 % y suplementos por descanso variables por 5 %, para un total de 14 %
      .row.justify-content-center(titulo="Tiempo estándar")
        .col-md-6.mb-4.mb-md-0
          p Luego de analizar los suplementos necesarios, se procede a calcular el tiempo estándar de la operación. Cuando se obtenga el de todas las operaciones de la prenda, se tendrá el resultado que tanto se espera, el Tiempo estándar de la prenda, o SAM (
            em Standard Allowed Minutes).
          .row.justify-content-center.mb-4
            .col-md-10.text-center.border-r10.bg-white.p-4
              p.font-italic.mb-0 Tiempo estándar =  Tiempo normal unitario * (1+Suplementos)
              p.font-italic.mb-0 Tiempo estándar =  2,616 min * (1+14%)
          p Así, el tiempo estándar de la operación unir hombros por dos, sería 2,982 minutos, lo que significa que un operario, en condiciones normales, podrá entregar, por hora de esta operación, 20 unidades. Lo anterior, dividiendo los 60 minutos de la hora entre el tiempo estándar. 
        .col-md-5
          img(src='@/assets/curso/temas/tema5/acord-img5.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-5
      .col-md-10(data-aos="fade-down")
        .tarjeta.bg-color-secundario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.ms-md-3
              img(src="@/assets/curso/temas/tema5/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Ejemplo tiempo normal
                  p.mb-0 Para ampliar la información frente al «tiempo normal», se expone el ejemplo de un operario.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Ejemplo_Tiempo_normal.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
          .row.my-4.mx-3.borde-punteado
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.ms-md-3
              img(src="@/assets/curso/temas/tema5/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Tabla de suplementos básicos OIT
                  p.mb-0 Como complemento del recurso anterior, para los suplementos de tiempo, se sugiere revisar como referente el siguiente documento en el que se presenta la Tabla de Suplementos Básicos OIT. 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Tabla_Suplementos_Basicos_OIT.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    
    p.mb-4(data-aos="fade") Ahora bien, debido a la globalización y competitividad de las empresas, se ha incrementado la demanda de prendas de vestir, lo que genera la necesidad de personas con competencias afines en el desarrollo de procesos productivos. Es por esto que la estandarización de tiempos ha evidenciado la necesidad de requerir personal enfocado en ejecutar labores cada vez más específicas dentro de la empresa, de tal manera que estos sean generadores de productividad. (Freivalds y Niebel, 2014).
    
    .row.fondo4-tema5.align-items-center.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-8.mb-4(data-aos="fade-right")
            p La estandarización en la confección de prendas de vestir es fundamental, por ello es importante tener la trazabilidad de la duración de las diferentes operaciones que contempla una prenda y es relevante conocer el uso de herramientas como 
              b.t-red cronómetros y tablas de MTM.
            .cajon.color-secundario.p-4.mb-4
              p El objetivo de la estandarización de cualquier prenda es establecer, mediante esta técnica, el tiempo estándar de las tareas que se dan dentro de los procesos. Es necesario contar con el apoyo de los trabajadores calificados para dicha tarea, ya que ellos han adquirido la destreza y conocimientos, respetando las normas de seguridad y calidad.
              p.mb-0 Esto genera que los tiempos estándar sean entendidos como el punto de competitividad con otras empresas del sector; por lo tanto, estos lineamientos establecidos y generalizados dentro de la confección ayudan a construir empresas productivas . 
            p Existe, entonces, una técnica de gran ayuda para la confección, 
              b.t-red la de MTM
              |, que ofrece una gran oportunidad para la exactitud de la estandarización, refuerza la importancia para mejorar la productividad y proporciona un enfoque al área de manufactura, donde se establecen tiempos de fabricación consistentes, los cuales minimizan el tiempo requerido para la ejecución de trabajos y, así, se reducen los costos de las prendas de vestir a confeccionar a través de tiempos predeterminados.   
          .col-md-4.mb-4(data-aos="fade-left")
            img(src='@/assets/curso/temas/tema5/img5.png' alt='Imagen decorativa')

          .row.align-items-center.bg-blue5.p-4.mb-4
            .col-md-1.col-5.mb-4.mb-md-0(data-aos="fade")
              img(src='@/assets/curso/temas/tema5/ico3.svg' alt='Imagen decorativa')
            .col-md-11.mb-4.mb-md-0(data-aos="fade")
              p.mb-0 El objetivo de los tiempos predeterminados es evitar movimientos innecesarios, que solo hacen que el tiempo estándar sea mayor, y ayudan a entender la construcción de las prendas en un ambiente óptimo de fabricación, de recursos humanos y de materiales e insumos. Este proceso de ensamble, con las tablas de MTM, ayuda a crear productos con un criterio de calidad y entrega oportuna a los clientes; por ello, en los siguientes apartados, se entregarán lineamientos que darán soporte a la estandarización correcta de las prendas de vestir .

          p.mb-4(data-aos="fade") Los tiempos predeterminados, según García (2005), 
            b.t-red son la “colección de tiempos válidos asignados a movimientos y a grupos de movimientos básicos, que no pueden ser evaluados con exactitud con el procedimiento ordinario del estudio cronológico de tiempos. Son el resultado del estudio de un gran número de muestras de operaciones diversificadas, que son capaces de medir elementos muy cortos”. 

          .col-md-4.mb-4(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema5/img6.png' alt='Imagen decorativa')
          .col-md-8.mb-4(data-aos="fade-left")
            p Los movimientos básicos se pueden agrupar adecuadamente hasta formar los elementos completos de operaciones, pudiendo cuantificar el tiempo de estos sin necesidad del cronómetro; es por esto que los tiempos predeterminados se utilizan para sintetizar las estimaciones hechas, puesto que las diferentes operaciones manuales consisten en diferentes combinaciones y permutaciones de un número limitado de movimientos de los miembros del cuerpo, tales como mover la mano hacia un objeto, tomarlo, trasladarlo y dejarlo; y, debido a que cada una de estas pequeñas subdivisiones son comunes a un gran número de operaciones manuales, es posible, técnica y económicamente, obtener un tiempo esperado de ejecución para cada una de ellas. 
            p Por medio de estas subdivisiones básicas, conocidas simplemente como movimientos, y sus tiempos de ejecución asociados, es posible llegar a: 
            ul.lista-ul--color
              li.mb-1 
                i.fas.fa-tshirt
                | Establecer los diferentes movimientos requeridos por un método dado.
              li.mb-1 
                i.fas.fa-tshirt
                | Consultar las tablas de los valores de tiempos para obtener el tiempo esperado de ejecución de cada uno de estos movimientos.
              li.mb-0 
                i.fas.fa-tshirt
                | Sumar estos tiempos para obtener un tiempo total esperado de ejecución de ese método.

          .col-md-6.mb-4(data-aos="fade-right")
            h4.t-red Tablas MTM  
            p Las tablas de MTM 1-MTM 2-MTM 3 sirven para la adecuada estandarización de prendas de vestir y, en especial, la combinación de las tres tablas.
            p Se invita a revisar los siguientes anexos de mtmingenieros (s.f.), realizados por la empresa MTM Ingenieros, donde se puede evidenciar de forma detallada el procedimiento. Asimismo, existen otras tablas que permiten que las diferentes operaciones se puedan estandarizar y, como resultado, permiten ofrecer un producto terminado con criterios de calidad y exactitud en su confección.
            .row 
              .col-md-4.px-md-0
                a.anexo.box-shadow(:href="obtenerLink('/downloads/Tabla_MTM1.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p.mb-0.t-sistema-texto #[b Anexo.] Tabla MTM1
              .col-md-4.px-md-0
                a.anexo.box-shadow(:href="obtenerLink('/downloads/Tabla_MTM2.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p.mb-0.t-sistema-texto #[b Anexo.] Tabla MTM2
              .col-md-4.px-md-0
                a.anexo.box-shadow(:href="obtenerLink('/downloads/Tabla_MTM3.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p.mb-0.t-sistema-texto #[b Anexo.] Tabla MTM3
          .col-md-6.mb-4(data-aos="fade-left")
            img(src='@/assets/curso/temas/tema5/img7.png' alt='Imagen decorativa')

          p(data-aos="fade") Para comenzar, las horas, minutos y segundos tienen entre ellos la posibilidad de hacer conversiones, y esto mismo ocurre con las equivalencias en las tablas de MTM, donde se pueden hacer conversiones de horas, minutos y segundos a TMU. También se cuenta con formatos donde se puede ver esta conversión ya con diferentes operaciones; estos cuentan con una unidad de medida, la cual es el TMU (unidad de tiempo del movimiento); la cual tiene unas equivalencias como, por ejemplo, 1 TMU = 0.00001 hora.

          h5.t-red.mb-4(data-aos="fade") A continuación, se presenta una tabla que resume las principales unidades de tiempo con sus respectivas equivalencias y aplicables hasta la actualidad. 

          .col-md-10.mb-5
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 3.] Unidades de tiempo en TMU
            .tabla-a.color-acento-contenido
              table
                caption 
                  p.mb-0 Nota. Tomada de Association R. Standard and Research.
                thead
                  tr.bg-gray3
                    th(colspan="3") El tiempo de una operación es expresado en TMU (Unidades de tiempo del movimiento
                  tr
                    th(colspan="3") 
                      p.mb-0 Un TMU es equivalente a:
                tbody.bg-white.text-center
                  tr
                    td 1 TMU =
                    td 0,00001
                    td Horas
                  tr
                    td 1 TMU =
                    td 0,0006
                    td Minutos
                  tr
                    td 1 TMU =
                    td 0,036
                    td Segundos
                  tr
                    td 
                    td 
                    td
                  tr
                    td 1 hora
                    td 100080
                    td TMU
                  tr
                    td 1 minuto
                    td 1668
                    td TMU
                  tr
                    td 1 segundo
                    td 27,8
                    td TMU


          .col-md-10
            h4.t-red Análisis MTM
            p.mb-4(data-aos="fade") De acuerdo con la tabla anterior, para registrar los movimientos y asignar los tiempos correspondientes a la operación analizada, se emplea el formato “Hoja de análisis MTM”, la cual es una ayuda para identificar esos primeros movimientos que se pueden utilizar al estandarizar una operación. 
            .tarjeta.bg-color-secundario.p-3.mb-4(data-aos="fade-down")
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2.px-md-4
                  img.px-md-4(src="@/assets/curso/temas/tema5/xls.svg")
                .col.ps-md-0
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Hoja de análisis MTM
                      p.mb-0 En el siguiente recurso, se puede consultar la “Hoja de análisis MTM” para el desarrollo del proceso evaluativo.
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="obtenerLink('/downloads/Hoja_de_analisis_MTM.xls')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download

    .row
      .col-md-8.mb-4.mb-md-0(data-aos="fade-right")
        p En cualquier actividad que se deba desarrollar en producción, existen unas claves básicas para su mejor aplicación, y al trabajar con tablas de MTM, también se deben tener en cuenta estas características, como, 
          b.t-red por ejemplo, cada movimiento, para el cual se debe analizar cómo lo hace el trabajador y la posibilidad de crear una ayuda externa para realizarlo; 
          | además, cada ayuda o idea a implementar debe ser para que el movimiento se desarrolle más fácilmente. Las ayudas técnicas se hacen para los movimientos de alcanzar, coger, mover o posicionar, para que estos mejoren; para los otros movimientos, estas ayudas técnicas pueden buscar su eliminación. 
        p Asimismo, los elementos aplicados MTM-3 se deben utilizar en tres acciones fundamentales, las cuales permiten entender la correcta utilización y descripción de las siguientes operaciones:  
      .col-md-4.mb-4.mb-md-0(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema5/img8.png' alt='Imagen decorativa')

    .row.justify-content-center.mb-4.px-md-3(data-aos="fade-down")
      .col-md-4.mb-md-0.mb-4
        .row.px-2.pt-2.h-100
          .tarjeta.col-12.m-0.nav-holder2.align-items-center.px-0
            figure
              img(src="@/assets/curso/temas/tema5/hover-img1.png", alt="Primero")
            .text.text-center.p-md-2.px-md-4.p-3
              .row.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-4
                h4.mt-4.mt-lg-0.mb-3 Primero
                p Identificar los movimientos antes de iniciar la operación y hasta tener el objeto en el sitio, para trabajar los movimientos durante el proceso de ejecución del trabajo.
      .col-md-4.mb-md-0.mb-4
        .row.px-2.pt-2.h-100
          .tarjeta.col-12.m-0.nav-holder2.align-items-center.px-0(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            figure
              img(src="@/assets/curso/temas/tema5/hover-img2.png", alt="Segundo")
            .text.text-center.p-md-2.px-md-4.p-3
              .row.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-4
                h4.mt-4.mt-lg-0.mb-3 Segundo
                p Identificar los movimientos después de haber terminado el trabajo y hasta dejar el objeto u objetos en el sitio, y tenerlos presentes durante la ejecución de cada labor.
      .col-md-4.mb-md-0.mb-4
        .row.px-2.pt-2.h-100
          .tarjeta.col-12.m-0.nav-holder2.align-items-center.px-0
            figure
              img(src="@/assets/curso/temas/tema5/hover-img3.png", alt="Tercero")
            .text.text-center.p-md-2.px-md-4.p-3
              .row.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-4
                h4.mt-4.mt-lg-0.mb-3 Tercero
                p Contar con espacios y herramientas de trabajo que, ante todo, preserven su bienestar durante la labor.
    

    p.mb-4(data-aos="fade") Las variables de los movimientos básicos son ejecuciones en las cuales hay un cambio de posición o de lugar de alguien o de algo. Cada tabla de MTM cuenta con diferentes movimientos a la hora de estandarizar un proceso; sin embargo, existen movimientos básicos, los cuales vienen con tipos de control al realizarlos. A continuación, las variables de los movimientos básicos se amplían:

    .row.fondo5-tema5.align-items-center.py-5.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .row
            .col-md-3.mb-4.mb-md-0(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema5/img9.png' alt='Imagen decorativa')
            .col-md-3.mb-4.mb-md-0(data-aos="fade-left")
              .h-100.bg-white.box-shadow.text-center.p-4 
                h4.t-red Movimiento básico
                p.mb-0 Cualquier movimiento del cuerpo humano o de los miembros del cuerpo utilizado en un sistema de análisis de movimiento es conocido como unidad básica de trabajo.
            .col-md-3.mb-4.mb-md-0(data-aos="fade-left")
              .h-100.bg-white.box-shadow.text-center.p-4 
                h4.t-red Elementos primarios delsistema MTM para movimientos
                p.mb-0 Sistema de clasificación de los movimientos básicos. Son una serie de símbolos para identiciar estos movimientos y sus valores de tiempos preseterminados.
            .col-md-3.mb-4.mb-md-0(data-aos="fade-left")
              .h-100.bg-white.box-shadow.text-center.p-4 
                h4.t-red Niveles de control
                p.mb-0 Tienen que ver con las características que debe tener un movimiento en el momento de determinar si el operador necesita mucha o poca precisión al ejecutarlo. Existe control bajo, mediano y alto.
    
    
    p.mb-4(data-aos="fade") Para establecer el tiempo estándar a través de tiempos predeterminados, es clave identificar los movimientos básicos o generales, que se subdividieron en movimientos más específicos. En cada MTM, existen diferentes movimientos, pero, para estandarizar, se van a utilizar los más comunes en las operaciones de confección, como se presentan en el siguiente recurso, de acuerdo con García (2005).

    .tarjeta.fondo-slider.p-4.pt-5.mb-5
      SlyderA(tipo="b" data-aos="fade-down")
        .row.justify-content-evenly
          .col-md-6.mb-4.mb-md-0
            h4 Alcanzar
            p Movimiento manual básico efectuado con el fin predominante de transportar la mano o los dedos a un destino. Es necesario tratar directamente tres variables al analizar alcanzar: nivel de control (caso), tipo de movimiento (mano en movimiento), distancia alcanzada (en cm).
          .col-md-5
            img(src='@/assets/curso/temas/tema5/slide-img1.png', alt='Imagen decorativa')
        .row.justify-content-evenly
          .col-md-6.mb-4.mb-md-0
            h4 Mover
            p Es el movimiento manual básico efectuado con el fin predominante de transportar un objeto a un destino con dedos o mano. Al analizar este movimiento, debe tratarse directamente con cuatro variables. Estas son:
            h5.mb-0 1. Nivel de control
            h5.mb-0 2. Tipo de movimiento
            h5.mb-0 3. Distancia
            h5 4. Distancia del movimiento
            p Lo tratado sobre las distancias del movimiento en el apartado de alcanzar también se aplica a mover. En este movimiento, también es importante el peso o resistencia, porque tiene el efecto de aumentar el tiempo para su ejecución.
          .col-md-5
            img(src='@/assets/curso/temas/tema5/slide-img2.png', alt='Imagen decorativa')
        .row.justify-content-evenly
          .col-md-6.mb-4.mb-md-0
            h4 Girar
            p Es el movimiento manual básico efectuado al hacer girar la mano vacía o llena sobre el eje longitudinal del antebrazo. Variables para girar:
            p #[b 1. Distancia.] Esta se mide en términos de grados girados. Los grados girados se miden en relación con el eje largo del antebrazo, con el plano de rotación quedando aproximadamente perpendicular a este eje.
            p #[b 2. Resistencia.] Debido a lo poco frecuente del mover girar con resistencia mayor de 1 kg, se ha clasificado en cuatro categorías, que rinden resultados satisfactorios para determinar el tiempo para el girar. Estas son:
            p Sin resistencia: mano vacía; Pequeña: hasta 1 kg; Mediana: de 1.1 a 5 kg; Grande: de 5.1 a 16 kg.
          .col-md-5
            img(src='@/assets/curso/temas/tema5/slide-img3.png', alt='Imagen decorativa')
        .row.justify-content-evenly
          .col-md-6.mb-4.mb-md-0
            h4 Aplicar presión
            p Únicamente con las manos es la aplicación de la fuerza muscular para vencer la resistencia de un objeto, acompañada por poco o ningún movimiento.
            p El aplicar presión se caracteriza por:
            p pausa corta o titubeo, la tensión de los músculos del operador, exprimir o jalar con las manos.
          .col-md-5
            img(src='@/assets/curso/temas/tema5/slide-img4.png', alt='Imagen decorativa')
        .row.justify-content-evenly
          .col-md-6.mb-4.mb-md-0
            h4 Aplicación
            p No toda la fuerza que se analiza como AP debe incluirse en el análisis de un trabajo como uno de los movimientos básicos que se requieren en su ejecución, si la aplicación de la fuerza se incluye en algún otro movimiento básico.
            p Los golpes con la mano o dedos no requieren un AP. Los golpes débiles del cuerpo, algunas veces, exigen un AP para aplicar fuerza de operaciones que no requerirían el AP si se utilizara un miembro más fuerte del cuerpo.
          .col-md-5
            img(src='@/assets/curso/temas/tema5/slide-img5.png', alt='Imagen decorativa')
        .row.justify-content-evenly
          .col-md-6.mb-4.mb-md-0
            h4 Coger
            p Es el movimiento manual básico de los dedos o la mano, empleado para asegurar el control de un objeto. Cuando se logra el control por medio mecánico o por algún otro miembro del cuerpo, el movimiento o movimientos no se clasifican como coger.
            p Implica elementos distintos: coger. Los dedos de la mano que recibe son cerrados en la pieza con un coger, tiempo de reacción.
          .col-md-5
            img(src='@/assets/curso/temas/tema5/slide-img6.png', alt='Imagen decorativa')
        .row.justify-content-evenly
          .col-md-6.mb-4.mb-md-0
            h4 Soltar	
            p Es el movimiento básico de dedos o manos empleado para dejar el control de un objeto.
            p Los casos de soltar:
            p #[b 1. Caso RL1.] Soltar normal, ejecutado abriendo los dedos. 
            p #[b 2. Caso RL2.] Soltar el contacto. No consume tiempo.
          .col-md-5
            img(src='@/assets/curso/temas/tema5/slide-img7.png', alt='Imagen decorativa')
        .row.justify-content-evenly
          .col-md-6.mb-4.mb-md-0
            h4 Posicionar	
            p Es el movimiento manual básico efectuado para llevar un objeto a una relación exacta (alinear, orientar o encajar) predeterminada con otro objeto. Los #[em posicionar] de inserción; las variables de importancia en el #[em posicionar] de inserción son:
            h5.mb-0 1.Alinear (PISE)
            h5.mb-0 2.Clase de ajuste
            h5.mb-0 3.Simetría
            h5 4.Facilidad de manejo
            p PISE es el elemento básico del #[em posicionar], sobre el cual se basan todos los demás valores de #[em posicionar].
          .col-md-5
            img(src='@/assets/curso/temas/tema5/slide-img8.png', alt='Imagen decorativa')
        .row.justify-content-evenly
          .col-md-6.mb-4.mb-md-0
            h4 Desmontar	
            p Es el movimiento manual básico efectuado para separar objetos, que se caracteriza por un movimiento involuntario ocasionado por la terminación repentina de la resistencia.
          .col-md-5
            img(src='@/assets/curso/temas/tema5/slide-img9.png', alt='Imagen decorativa')
        .row.justify-content-evenly
          .col-md-6.mb-4.mb-md-0
            h4 Manivela
            p Es el movimiento manual básico ejecutado con los dedos, mano, muñecas, antebrazo, en un trayecto circular con el antebrazo pivoteando en el codo.
            p Variables de la manivela
            h5.mb-0 1. Tamaño de la manivela
            h5.mb-0 2. Número de revoluciones
            h5.mb-0 3. Resistencia en kg
            h5 4. Método de ejecución
            p El tamaño de la manivela es el diámetro del trayecto de la mano, usualmente medido en la base del dedo índice.
          .col-md-5
            img(src='@/assets/curso/temas/tema5/slide-img10.png', alt='Imagen decorativa')
        .row.justify-content-evenly
          .col-md-6.mb-4.mb-md-0
            h4 Tiempo ocular
            p El recorrido ocular es el movimiento básico que se emplea para cambiar el eje de visión de un lugar a otro.
            p Métodos para ejecutar el recorrido ocular.
            p Puede ejecutarse en cualquiera de las siguientes tres formas:
            h5.mb-1 1. Voltear únicamente los ojos
            h5.mb-1 2. Voltear únicamente la cabeza
            h5 3. Voltear tanto la cabeza como los ojos
          .col-md-5
            img(src='@/assets/curso/temas/tema5/slide-img11.png', alt='Imagen decorativa')

    p.mb-4(data-aos="fade") Dentro de las funciones de un supervisor en procesos de confección está el velar porque cada uno de estos movimientos cuente con las especificaciones y orientaciones que permitan y faciliten el proceso de estandarización en planta para las prendas de vestir; ello asegura el cumplimiento en tiempos y requerimientos de fechas de entrega establecidas con el cliente. Se recomienda verificar las tablas de MTM, en las cuales se hace énfasis en cada movimiento y sus variaciones.  

    .row.fondo6-tema5.align-items-center.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-6.mb-4(data-aos="fade-right")
            .bg-6.mb-4.p-4.p-md-3
              .row.align-items-center
                .col-md-2.col-5.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/tema3/alert.svg' alt='AvatarTop')
                .col-md-10
                  p.mb-0 Es importante tener presente que cada MTM tiene unas variaciones de movimientos y algunas otras representaciones; por ejemplo, en el MTM-2, se consideran 11 clases de acciones, que se denominan "categorías". Estas once categorías y sus símbolos se exponen en la Tabla 4.
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 4.] Simbología para elaboración de diagramas de flujo
            .tabla-a.tabla4.color-acento-contenido
              table
                caption.bg-white
                  p.mb-0 Nota. Tomada de Association R. Standard and Research
                thead
                  tr
                    th Movimiento
                    th.colum-20 Símbolo
                tbody.bg-white.text-center
                  tr
                    td GET (Obtener)
                    td G
                  tr
                    td PUT (poner)
                    td P
                  tr
                    td GET WEIGHT (Tomar peso)
                    td GW
                  tr
                    td PUT WEIGHT (Poner peso)
                    td PW
                  tr
                    td REGRASP (Volver a asir)
                    td R
                  tr
                    td APPL y PRESSURE (Aplicar presión)
                    td A
                  tr
                    td EYE ACTION (Acción de ojo) 
                    td E
                  tr
                    td FOOTACTION (Acción de pie)
                    td F
                  tr
                    td STEP (Paso)
                    td S
                  tr
                    td BEND & ARISE (Doblar y subir)
                    td B
                  tr
                    td CRANK (Acción de manivela)
                    td C
          .col-md-6.mb-4(data-aos="fade-left")
            img(src='@/assets/curso/temas/tema5/img10.png' alt='Imagen decorativa')

          p.mb-4(data-aos="fade") El último nivel de la Medición de Tiempos y Métodos se conoce por MTM-3. Este nivel no fue elaborado para reemplazar a MTM o a MTM-2, sino como un complemento de estos sistemas. El MTM-3 está destinado al caso de situaciones de trabajo donde se tiene como objeto ahorrar tiempo a expensas de algo de exactitud. Este tipo de tablas se puede utilizar eficazmente para estudiar y mejorar métodos, evaluar métodos en alternativa, desarrollar datos y fórmulas estándares y establecer estándares de actuación; no debe emplearse en relación con operaciones que requieren tiempos de enfoque ocular o de desplazamiento de los ojos, puesto que los datos no consideran estos movimientos. La exactitud de estas tablas MTM-3 está dentro de + - 5 %, con un 95 % de nivel de confianza cuando se compara con el análisis MTM-I. (García, 2005).
          h5.mb-4.t-red(data-aos="fade") El sistema MTM-3 consiste en solamente estas cuatro categorías de movimientos:

          .row.mb-3
            .col-md-4.mb-4.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/temas/tema5/tarj-ico1.svg' alt='AvatarTop')
                .tarjeta.color-secundario.tarj-hover
                  .text-center.p-4
                    h3.mb-2 01
                    p Manejar: una secuencia de movimientos con el propósito de controlar un objeto con la mano o dedos y colocarlo en un nuevo sitio.
            .col-md-4.mb-4.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/temas/tema5/tarj-ico2.svg' alt='AvatarTop')
                .tarjeta.color-secundario.tarj-hover
                  .text-center.p-4
                    h3.mb-2 02
                    p Transportar: un movimiento con el propósito de colocar un objeto nuevo en un lugar con la mano o los dedos.
            .col-md-4.mb-4.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/temas/tema5/tarj-ico3.svg' alt='AvatarTop')
                .tarjeta.color-secundario.tarj-hover
                  .text-center.p-4
                    h3.mb-2 03
                    p Movimientos de pasos y pies, y por último, flexionarse y levantarse.
    

    p.mb-4(data-aos="fade") La siguiente tabla presenta datos del MTM-3. Diez estándares de tiempo, que varían desde 7 hasta 61 TMU, constituyen la base para el desarrollo de un estándar sometido a las limitaciones antes dichas.

    .row.fondo7-tema5.align-items-center.pb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-10.mb-5(data-aos="fade-down")
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 5.] Sistema MTM-3
            .tabla-a.color-acento-contenido
              table
                caption.bg-white  
                  p.mb-0 Nota. Tomada de Maynad Research Council, Inc.: MTM-3
                thead
                  tr
                    th 
                    th 
                    th(colspan="2") Manejar
                    th(colspan="2") Transportar
                tbody.bg-white.text-center
                  tr.fw-bold
                    td Pulgadas
                    td Codificación
                    td HB
                    td HB
                    td TA
                    td TB
                  tr
                    td 6
                    td 6
                    td 18
                    td 34
                    td 7
                    td 21
                  tr
                    td 6
                    td 32
                    td 34
                    td 48
                    td 16
                    td 29
                  tr
                    td
                    td 
                    td(colspan="2") SF 18
                    td(colspan="2") B61

          h4.t-red.mb-4(data-aos="fade") Códigos de MTM y estandarización del tiempo

          .col-md-6.mb-4(data-aos="fade-right")
            p Adicional a lo anterior, en este documento se detallan los códigos de MTM. De igual forma, Para estandarizar un tiempo predeterminado, con toda la información que conlleva una operación de una prenda de vestir, se recomienda visualizar el anexo de «Plantilla de tiempos predeterminados» que utiliza códigos generales de MTM Ingenieros, y hacer énfasis en cada movimiento y sus variaciones, con respecto a las medidas de ejecución de la operación.
            .row 
              .col-md-6
                a.anexo.box-shadow(:href="obtenerLink('/downloads/Codigos_MTM.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p.mb-0.t-sistema-texto #[b Anexo.] Códigos MTM
              .col-md-6
                a.anexo.box-shadow(:href="obtenerLink('/downloads/Plantilla_tiempos_estandarizar_operaciones.xlsx')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-xls.svg")
                  .anexo__texto
                    p.mb-0.t-sistema-texto #[b Anexo.] Plantilla tiempos estandarizar operaciones
          .col-md-6.mb-4(data-aos="fade-left")
            img(src='@/assets/curso/temas/tema5/img11.png' alt='Imagen decorativa')

          p.mb-5(data-aos="fade") Finalmente, se debe sintetizar la acción de tomar tiempos aplicando predeterminados. Se pueden comparar los tiempos que se realicen en cualquier prenda con los que existen en la actualidad en las diferentes empresas. Estos estándares se pueden verificar con respecto a la realidad, teniendo en cuenta el tipo de tecnología de cada empresa. De acuerdo con las operaciones que se estandarice, se pueden comparar los tiempos con los listados de operaciones de diferentes prendas y operaciones que se tendrán de ejemplo. (Kanawaty, 2014). Lo anterior con el fin de validar el establecimiento de estándares.
          
          .col-md-10
            .tarjeta.bg-color-secundario.p-3(data-aos="fade-down")
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2.px-md-4
                  img.px-md-4(src="@/assets/curso/temas/tema5/xls.svg")
                .col.ps-md-0
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Listados operacionales
                      p.mb-0 Amplíe el conocimiento con el análisis de este archivo correspondiente a un listado de operaciones con estándares reales.
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="obtenerLink('/downloads/Listados_Operacionales.xlsx')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download


</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
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
