<template>

  <div id="app">
    
    <Barra />
    <router-view/>
  </div>
</template>

<script>
import Barra from './components/Barra.vue';
import * as mdb from 'mdb-ui-kit';

export default {
  name: 'app',
  components:{
    Barra,
  },
  data:() => ({

  }),
  methods:{
    llamarRegistro(){
      this.$router.push('/registro');
      
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
