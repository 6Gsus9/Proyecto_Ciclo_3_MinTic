<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h2>TutoWeb</h2>
                <h2>¡El mejor aliado para estudiar!</h2>

                <p id="primer">
                    Aprende o profundiza en los temas que mas te interesen y conviértete en
                    un experto. Encontrarás los mejores profesores para que te sientas
                    seguro y cómodo.
                </p>
            </div>
            <form @submit.prevent="agregarEstudiante()" class="col">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"> Primer Nombre</label>
                    <input type="text" class="form-control" name="Pnombre" id="Pnombre" v-model="atributos.pNombre"/><br />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"> Segundo Nombre</label>
                    <input type="text" class="form-control" name="Snombre" id="Snombre" v-model="atributos.sNombre"/><br />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"> Apellidos</label>
                    <input type="text" class="form-control" name="Apellidos" id="Apellidos" v-model="atributos.apellidos"/><br />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"> correo</label>
                    <input type="email" class="form-control" name="correo" id="correo" v-model="atributos.correo"/><br />
                </div>

                <button id="registrar" type="submit"  >Registrar</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            atributos:{
                pNombre:"",
                sNombre:"",
                apellidos:"",
                correo:""
            }
            
        };
    },
    methods:{
        llamarCursos(){
      this.$router.push('/cursos')
    },
        agregarEstudiante(){
            
            this.axios.post('/Estudiante-nuevo',this.atributos)
            .then(res=>{
                this.atributos.push(res.atributos);
                
                

            })
            .catch((e)=>{
                console.log(e.response)
            });
            this.llamarCursos();
        }
        
    }

}
</script>