<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Jade </q-toolbar-title>

        <!-- totalmetne a direita botão de sair -->
        <q-btn
          flat
          dense
          round
          icon="logout"
          aria-label="Sair"
          @click="signOut"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <MenuBar
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import MenuBar from "components/Menu.vue";

const linksList = [
  {
    title: "Livros",
    icon: "book",
    link: "https://quasar.dev",
  },
  {
    title: "Empréstimos",
    icon: "people",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Usuários",
    icon: "person",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Administração",
    icon: "settings",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Relatórios",
    icon: "insert_chart",
    link: "https://twitter.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    MenuBar,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },

  methods: {
    signOut() {
      console.log("Saindo...");
      this.$router.push("/");
    },
  },
});
</script>
