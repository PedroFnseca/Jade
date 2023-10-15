<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Jade </q-toolbar-title>

        <q-btn
          flat
          dense
          aria-label="Entrar"
          @click="signIn"
          label="Entrar"
          cursor-pointer
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PublicLayout",

  methods: {
    signIn() {
      console.log("Saindo...");
      this.$router.push("/auth");
    },
  },
});
</script>
