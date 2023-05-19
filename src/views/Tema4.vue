<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Sistema de tiempos

    
    .row.mb-3
      .col-md-4.mb-4.pe-md-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema4/img.png' alt='Imagen decorativa')
      .col-md-8.mb-4.ps-md-0(data-aos="fade-left")
        .bg-1.h-100.p-4.p-md-5
          p Es muy dado que, al querer hacer la medición de tiempos con cronómetro, se deba realizar siempre la conversión de unidades, porque este instrumento de medición generalmente viene con las tres diferentes: horas, minutos y segundos. Estos tiempos son registrados inmediatamente en los formatos designados para este fin, sin embargo, al momento de realizar el cálculo y el análisis, es necesario realizar una conversión de estas unidades a una sola unidad, que generalmente es en minutos. (Kanawaty, 2014)

    p.mb-4(data-aos="fade") Con el fin de tener un mayor nivel de comprensión sobre la conversión, se invita a consultar el siguiente recurso.

    .row.mb-3
      .col-md-6.mb-4.pe-md-0(data-aos="fade-right")
        .degrade-gray.text-center.h-100.p-4
          img.w-150.mx-auto.mb-3(src='@/assets/curso/temas/tema4/cron1.svg' alt='Imagen decorativa')
          h4 Sistema sexagesimal
          p El sistema sexagesimal es un sistema de numeración en el que cada unidad se divide en 60 unidades de orden inferior, es decir, es un sistema de numeración en base 60. Se aplica en la actualidad a la medida del tiempo, para horas, minutos y segundos (Kanawaty, 2014). En la imagen se visualiza la medición de tiempos de forma sexagesimal en un cronómetro análogo, para entender gráficamente la conversión. 
      .col-md-6.mb-4.ps-md-0(data-aos="fade-left")
        .degrade-orange.text-center.h-100.p-4
          img.w-150.mx-auto.mb-3(src='@/assets/curso/temas/tema4/cron2.svg' alt='Imagen decorativa')
          h4 Sistema centesimal
          p Para los cálculos matemáticos, como suma, resta, multiplicación, o división de tiempos, se requiere que las unidades estén dadas en 100 partes. La razón es que la calculadora no asume el minuto como 60 segundos, ni siquiera está sumando o restando segundos, sino unidades de cualquier tipo (Kanawaty, 2014). En la imagen se visualiza la medición de tiempos de forma centesimal en un cronómetro análogo, para entender gráficamente la conversión. 
    
    p.mb-4(data-aos="fade") Ahora, para realizar la conversión de unidades, es necesario realizar una correcta lectura del cronómetro. En este, se valorarán las horas, en primer lugar, los minutos, en segundo lugar, y los segundos, en tercer lugar. Es posible que en algunos cronómetros se observe una cuarta posición con centésimas o milésimas de segundo, según la precisión del cronómetro. 
      b.t-red A continuación se expone un ejemplo.

    
    .row.fondo-tema4.align-items-center.pt-4.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center
    
          .col-md-10.mb-5(data-aos="fade")
            .cajon-tema4.py-3.px-3
              .row.align-items-center 
                .col-md-4
                  img(src='@/assets/curso/temas/tema4/img3.svg' alt='Imagen decorativa')
                .col-md-8
                  h4.text-right Ejemplo de conversión
                  p Se tiene que:
                  table.tema-4.mb-3
                    thead
                      tr.bg-blue2
                        th 00 
                        th 00 
                        th 00 
                    tbody.bg-blue3
                      tr
                        td Horas 
                        td Minutos 
                        td Segundos
                  p Si el registro del cronómetro valida un tiempo de 1 minuto y 40 segundos, en sistema sexagesimal, se deberán convertir las unidades de segundos a minutos, para convertirlos al sistema centesimal.
                  table.tema-4.mb-3
                    thead
                      tr.bg-blue2
                        th 00 
                        th 01 
                        th 40 
                    tbody.bg-blue3
                      tr
                        td Horas 
                        td Minutos 
                        td Segundos
                  p Entonces, la conversión se hará basados en una regla de 3, donde:
                  .row
                    .col-md-4.text-right
                      p.mb-0 1 minuto = 60 segundos
                      p x = 40 segundos
                  p Por lo tanto, solucionando la regla de tres:
                  p.mb-0.ps-md-4 x=  1 *40 seg / 60 seg
                  p.ps-md-4 x= 0,67 min
                  p De lo anterior y de acuerdo al registro tomado (1 min y 40 segundos),  el valor total y con el cual se podrán realizar operaciones será 1,67 minutos, que corresponde al minuto que está ya registrado en el cronómetro más la conversión de los 40 segundos. 

          .col-md-10(data-aos="fade-down")  
            .tarjeta.bg-color-secundario.p-3
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2.px-md-3
                  img.px-md-4(src="@/assets/curso/temas/tema1/pdf.svg")
                .col.ps-md-0
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Conversión de tiempos del sistema sexagesimal al centesimal
                      p.mb-0 Teniendo en cuenta el ejemplo anterior del procedimiento para realizar la conversión, se puede observar que en la tabla se muestra que 40 segundos del sistema sexagesimal corresponden, en el sistema centesimal, a 0,667 minutos. 
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="obtenerLink('/downloads/Conversion_de_tiempos.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download


    p.mb-4(data-aos="fade") El cronómetro, entonces, es una herramienta fundamental en el estudio de tiempos, debido a que es un instrumento de medición preciso y práctico. El cronómetro es un reloj, o una función de reloj, que sirve para medir fracciones de tiempo, normalmente cortos y con exactitud. (García, 2005). Se revisarán las características y ventajas de los cronómetros usados en el estudio de tiempos. Sin embargo, de forma general, los cronómetros se pueden clasificar en dos categorías:

    .row.mb-3
      .col-md-6.pe-md-0.mb-4(data-aos="fade-right")
        .bg-2.h-100
          img(src='@/assets/curso/temas/tema4/img4.png' alt='Imagen decorativa')
          .p-4
            h4 Cronometro análogo
            p.mb-0 Basada en recolección, ordenación y presentación de datos a través de gráficos y tablas, su objetivo es resumir o describir la información sin factores adicionales más que los datos.
      .col-md-6.ps-md-0.mb-4(data-aos="fade-left")
        .bg-3.h-100
          img(src='@/assets/curso/temas/tema4/img5.png' alt='Imagen decorativa')
          .p-4
            h4 Cronometro digital
            p.mb-0 La mayor parte de las técnicas de estudios de tiempos usa este cronómetro, ya que es muy preciso, y la mayoría de ellos cuenta con memoria. Su uso se da mediante la puesta en marcha y la parada del mecanismo de control, que generalmente son los botones que se acciona. 


    .row.align-items-center
      .col-md-1.col-5.mb-4(data-aos="fade")
        img(src='@/assets/curso/temas/tema4/ico.svg' alt='Imagen decorativa')
      .col-md-11.mb-4(data-aos="fade")
        p.mb-0 Los cronómetros tienen distintas precisiones que favorecen el análisis y registro de tiempos; su elección depende, en gran medida, de la precisión necesaria del estudio, así como de la cantidad de memorias que necesitemos. En la actualidad, son más usados los cronómetros digitales, debido a la facilidad de uso, interpretación y precisión. Se considera que el estudio de los cronómetros análogos es más bien una lección de historia.






</template>

<script>
export default {
  name: 'Tema4',
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
