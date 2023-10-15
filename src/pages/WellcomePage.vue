<template>
  <div>
    <q-carousel
      v-model="slide"
      transition-prev="scale"
      transition-next="scale"
      swipeable
      animated
      control-color="white"
      navigation
      padding
      arrows
      height="300px"
      class="bg-primary text-white shadow-2 rounded-borders q-mx-md q-mt-md"
    >
      <template v-slot:navigation-icon="{ active, btnProps, onClick }">
        <q-btn
          :size="active ? 'md' : 'sm'"
          :icon="btnProps.icon"
          :color="active ? 'white' : 'grey-6'"
          flat
          round
          dense
          @click="onClick"
        />
      </template>

      <q-carousel-slide
        v-for="item in carouselItems"
        :key="item.name"
        :name="item.name"
        class="column no-wrap flex-center"
      >
        <q-icon :name="item.icon" size="56px" class="q-mt-xl" />
        <div class="q-my-md text-center">
          <h3 class="text-h5">{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <div class="q-my-md q-pa-md">
      <h2 class="text-h6 q-mb-md">
        Desperte para as maravilhas da nosso sistema de Biblioteca Digital!
      </h2>
      <p class="q-mb-md">
        Dê as boas-vindas à biblioteca do futuro, onde a leitura transcende para
        uma experiência única e cativante. Nosso sistema foi meticulosamente
        desenvolvido para oferecer acessibilidade descomplicada, uma seleção
        diversificada de conteúdo e muito mais!
      </p>
      <ul>
        <li>
          Explore uma extensa coleção de livros digitais cuidadosamente
          selecionados.
        </li>
        <li>
          Deixe-se surpreender por recomendações personalizadas que se alinham
          aos seus gostos.
        </li>
        <li>
          Acesse a biblioteca em qualquer dispositivo, a qualquer momento, sem
          limitações.
        </li>
        <li>
          Conecte-se e mergulhe em discussões vibrantes nos nossos clubes de
          leitura virtuais.
        </li>
      </ul>
      <p class="q-mt-md">
        Estamos aqui para transformar a leitura em mais do que uma atividade,
        mas sim em uma jornada emocionante e inesquecível!
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "WelcomePage",

  data() {
    return {
      emailDialog: false,
      email: "",
      message: "",
      carouselItems: [
        {
          name: "book",
          icon: "book",
          title: "Descobrindo Novos Mundos",
          description:
            "Explore uma vasta coleção de livros e mergulhe em novas histórias a cada página.",
        },
        {
          name: "search",
          icon: "search",
          title: "Busca Inteligente",
          description:
            "Encontre facilmente o que você precisa com nossa poderosa ferramenta de busca e categorização.",
        },
        {
          name: "calendar",
          icon: "calendar_today",
          title: "Eventos Literários",
          description:
            "Participe de eventos emocionantes, como lançamentos de livros e sessões de autógrafos, diretamente da sua biblioteca.",
        },
        {
          name: "community",
          icon: "people",
          title: "Comunidade Literária",
          description:
            "Conecte-se com amantes de livros, compartilhe recomendações e participe de discussões apaixonantes sobre seus títulos favoritos.",
        },
        {
          name: "notebook",
          icon: "note",
          title: "Anotações Personalizadas",
          description:
            "Crie e compartilhe suas anotações pessoais sobre livros, tornando sua experiência de leitura ainda mais única.",
        },
      ],
      slide: "book",
    };
  },
});
</script>
