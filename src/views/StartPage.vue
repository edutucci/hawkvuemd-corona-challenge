<template lang="pug">
  h-page-content(padding)
    .row.full-height.justify-center.align-items-center.scroll
      .col-auto(
        style="width: 90vw; max-width: 550px; height: calc(80vh - 60px); max-height: 550px;"
      )
        .full-height.full-width.border.border-gray.border-radius.shadow-2.scroll(
          v-if="estado==='pesquisa'"
        )
          .column.full-width.full-height
            .col.h-pa-sm
              .row.full-height
                .col
                  .row(v-if="tela==='inicio'")
                    .col.text-center
                      h-image(
                        src="/img/corona-image.jpeg" style="width:90%; height: 100%"
                      )
                  .row.full-height.align-items-center(v-if="tela==='p1'")
                    .col
                      .column.full-width
                        .col
                          h-image(
                            v-if="tela!=='inicio'"
                            src="/img/corona-image.jpeg" style="width:100%; height: 200px"
                          )
                        .col.full-width
                          .row.justify-center
                            .col-auto
                                p
                                  | Quantas vezes você sai de casa durante o dia?
                          .row.justify-center
                            .col-auto
                              .column.full-width
                                h-radio(v-model="p1" text="1" value="1")
                                h-radio(v-model="p1" text="2" value="2")
                                h-radio(v-model="p1" text="Mais vezes" value="3")
                                h-radio(v-model="p1" text="Romance" value="Romance")

                  .row.full-height.align-items-center(v-if="tela==='p2'")
                    .col
                      .column.full-width
                        .col
                          h-image(
                            v-if="tela!=='inicio'"
                            src="/img/corona-image.jpeg" style="width:100%; height: 200px"
                          )
                        .col.full-width
                          .row.justify-center
                            .col-auto
                                p
                                  | Voce usa máscara todos os dias?
                          .row.justify-center
                            .col-auto
                              .column.full-width
                                h-radio(v-model="p2" text="Sim" value="Sim")
                                h-radio(v-model="p2" text="Não" value="Não")

                  .row.full-height.align-items-center(v-if="tela==='p3'")
                    .col
                      .column.full-width
                        .col
                          h-image(
                            v-if="tela!=='inicio'"
                            src="/img/corona-image.jpeg" style="width:100%; height: 200px"
                          )
                        .col.full-width
                          .row.justify-center
                            .col-auto
                                p
                                  | Na sua cidade tem aglomeração?
                          .row.justify-center
                            .col-auto
                              .column.full-width
                                h-radio(v-model="p3" text="Sim" value="Sim")
                                h-radio(v-model="p3" text="Não" value="Não")

                  .row.full-height.align-items-center(v-if="tela==='p4'")
                    .col
                      .column.full-width
                        .col
                          h-image(
                            v-if="tela!=='inicio'"
                            src="/img/corona-image.jpeg" style="width:100%; height: 200px"
                          )
                        .col.full-width
                          .row.justify-center
                            .col-auto
                                p
                                  | Já sentiu algum sintoma de covid-19?
                          .row.justify-center
                            .col-auto
                              .column.full-width
                                h-radio(v-model="p3" text="Sim" value="Sim")
                                h-radio(v-model="p3" text="Não" value="Não")

                  .row.full-height.align-items-center(v-if="tela==='p5'")
                    .col
                      .column.full-width
                        .col
                          h-image(
                            v-if="tela!=='inicio'"
                            src="/img/corona-image.jpeg" style="width:100%; height: 200px"
                          )
                        .col.full-width
                          .row.justify-center
                            .col-auto
                                p
                                  | Já fez algum exame de covid-19?
                          .row.justify-center
                            .col-auto
                              .column.full-width
                                h-radio(v-model="p3" text="Sim" value="Sim")
                                h-radio(v-model="p3" text="Não" value="Não")

            .col-auto.h-pa-sm
              .row.justify-center
                .col-auto(v-if="tela==='inicio'")
                  h-btn(
                    text="Iniciar" bg-color="bg-primary"
                    text-color="text-white" @click="tela='p1'"
                  )
                .col-auto(v-if="tela==='p1'")
                  h-btn(
                    text="Proximo" bg-color="bg-primary"
                    text-color="text-white" @click="tela='p2'"
                  )
                .col-auto(v-if="tela==='p2'")
                  h-btn.h-pr-sm(
                    text="Voltar" @click="tela='p1'"
                  )
                  h-btn(
                    text="Proximo" bg-color="bg-primary"
                    text-color="text-white" @click="tela='p3'"
                  )
                .col-auto(v-if="tela==='p3'")
                  h-btn.h-pr-sm(
                    text="Voltar" @click="tela='p2'"
                  )
                  h-btn(
                    text="Proximo" bg-color="bg-primary"
                    text-color="text-white" @click="tela='p4'"
                  )
                .col-auto(v-if="tela==='p4'")
                  h-btn.h-pr-sm(
                    text="Voltar" @click="tela='p3'"
                  )
                  h-btn(
                    text="Proximo" bg-color="bg-primary"
                    text-color="text-white" @click="tela='p5'"
                  )
                .col-auto(v-if="tela==='p5'")
                  h-btn.h-pr-sm(
                    text="Voltar" @click="tela='p4'"
                  )
                  h-btn(
                    text="Finalizar" bg-color="bg-primary"
                    text-color="text-white" @click="estado='grafico'"
                  )

        .column.full-height.full-width.justify-center.border.border-gray.border-radius.shadow-2(
          v-if="estado==='grafico'"
        )
          .row.justify-center.h-mt-md
            .col-auto.text-h6
              | Resultado da Pesquisa
          .row.h-mt-md
            .col.text-center
              h-image(
                src="/img/barcolumn.png" style="width:90%; height: 100%"
              )
</template>

<script>

export default {
  name: 'StartPage',
  data() {
    return {
      estado: 'pesquisa',
      tela: 'inicio',
      p1: '',
      p2: '',
      p3: '',
    };
  },
};
</script>
