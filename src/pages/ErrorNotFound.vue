<template>
  <div
    class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <q-img
        src="/public/images/Dictionary-pana.png"
        style="width: 300px"
        class="q-mb-sm"
        attributes="src: 'https://storyset.com/education'"
      />

      <div class="text-h4 q-mb-sm" style="opacity: 0.5">
        Ops! Parece que você se perdeu na estante.
      </div>

      <div class="text-h6" style="opacity: 0.6; q-mt-md">
        A página que você está procurando não está catalogada aqui.
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="primary"
        unelevated
        label="Voltar para a prateleira anterior"
        @click="$router.go(-1)"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorNotFound",
});
</script>
