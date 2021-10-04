<template>
  <b-navbar toggleable="lg">
    <div>
      <b-link @click="inicio()">
        <img class="icon" src="../assets/logo.png" />
      </b-link>
    </div>
    <div>
    <b-collapse id="nav-collapse" is-nav>
      <div><b-navbar-brand @click="inicio()">TutoWeb</b-navbar-brand></div>
      
        <div><b-navbar-nav>
          <b-nav-item-dropdown text="¿Cómo funciona?" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent" style="position: absolute; right: 2cm; "><b-navbar-nav class="ml-auto">
      
        <!-- Right aligned nav items -->
        
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit" right
              >Search</b-button
            >
          </b-nav-form>
          <b-navbar-nav>
            <b-nav-item href="#" right>Ingresa</b-nav-item>
            <b-nav-item @click="llamarRegistro()">Registrate es gratis</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </div>
    </b-collapse>
    </div>
  </b-navbar>
</template>
<script>
export default {
  name: "Barra",
  data: () => ({}),
  methods: {
    inicio() {
      this.$router.push("/");
    },
    llamarRegistro() {
      this.$router.push("/registro");
    },
  },
};
</script>
<style>
.icon {
  height: 60px;
  width: 60px;
  display: block;
  margin-top: 2px;
}

</style>
