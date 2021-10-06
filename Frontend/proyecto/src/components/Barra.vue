<template>
  <div >
            <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                <div class="container-fluid">
                    <router-link to="/"><input class='icon' type="image" id="saveform" src="img/Logo.png" loading="lazy" width="50px"/></router-link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-1">
                            <li class="nav-item mt-1 mx-5">
                                <router-link class="navbar-brand h1" to="/QS">Quienes
                                somos</router-link>
                            </li>
                            <li class="nav-item dropdown mt-1 mx-5">
                                <a class="navbar-brand dropdown-toggle h1" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                    Cómo funciona
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><router-link class="dropdown-item" to="/info">Agendar una tutoria</router-link></li>
                                    <li><router-link class="dropdown-item" to="/info">Cambiar el horario de la tutoria</router-link></li>
                                    <li><router-link class="dropdown-item" to="/info">Realizar la subscripción</router-link></li>
                                </ul>
                            </li>
                        </ul>
                        <form class="form-inline d-flex mx-5 mt-1">
                            <input class="form-control me-2" type="search" placeholder="¿Qué deseas aprender?" aria-label="Search" style="width:450px;">
                            <router-link class="navbar-brand h1" to="/QS">
                                <button type="button" class="btn btn-primary">
                                    <i class="fas fa-search"></i>
                                </button>
                            </router-link>
                        </form>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mt-1">
                            <li class="nav-item mx-5 me-2">
                                <router-link class="navbar-brand h1" to="/QS">Trabaja con
                                nosotros </router-link>
                            </li>
                            <ul class="navbar-nav mx-5">
                            <li class="nav-item mx-1">
                                <router-link class="nav-link" to="/login"> <button type="button" class="btn btn-outline-primary me-2">Ingresa </button></router-link>
                            </li>
                            <li class="nav-item">
                              <button type="button" class="btn btn-warning me-2" @click="llamarRegistro()">Registrate es gratis</button>
                            </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </nav>
    </div>
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
