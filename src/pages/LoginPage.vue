<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center">
        <q-card style="width: 60vh" class="q-pa-xl">
          <q-card-section class="q-pt-md q-pb-md">
            <div class="text-center">
              <q-img
                src="images/logo2.png"
                style="width: 150px"
                class="q-mb-md"
              />
            </div>

            <q-input
              dense
              v-model="email"
              label="Email ou usuário"
              outlined
              class="full-width q-mt-md"
            />

            <q-input
              dense
              v-model="password"
              label="Senha"
              :type="showPassword ? 'text' : 'password'"
              outlined
              class="full-width q-mt-md"
            >
              <template v-slot:append>
                <q-icon
                  :name="showPassword ? 'visibility' : 'visibility_off'"
                  :color="showPassword ? 'primary' : 'grey-5'"
                  class="cursor-pointer"
                  @click="togglePasswordVisibility"
                />
              </template>
            </q-input>

            <q-btn
              color="primary"
              label="Entrar"
              @click="login"
              class="full-width q-mt-md"
            />

            <q-btn
              color="primary"
              label="Esqueci a senha"
              class="full-width q-mt-xl"
              flat
              @click="$router.push('/auth/forgot-password')"
            />
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
    };
  },
  methods: {
    login() {
      // Lógica de autenticação aqui
      console.log("Autenticando...");
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>
