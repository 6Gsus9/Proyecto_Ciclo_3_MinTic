<template>
    <div class="row justify-content-center">
        <h3 class="text-center">Registro estudiantes</h3>
        <div class="container col-12">
                <div class="row col-md-12">
                    
                    <div class="col-md-5">
                        <h2>TutoWeb</h2>
                        <h2>¡El mejor aliado para estudiar!</h2>

                        <p id="primer">
                            Aprende o profundiza en los temas que mas te interesen y conviértete en
                            un experto. Encontrarás los mejores profesores para que te sientas
                            seguro y cómodo.
                        </p>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col-md-5">
                        <form @submit.prevent="agregarEstudiante()">
                            <div class="form-group">
                                <label class="form-label" for="Nombre">Nombre(s)</label>
                                <input type="text" class="form-control" maxlength="30" name="Nombre" id="Nombre" placeholder="Ingrese su(s) nombre"  v-model="atributos.Nombres" required/>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="Apellidos">Apellidos</label>
                                <input type="text" class="form-control" maxlength="30" name="Apellidos" id="Apellidos" placeholder="Ingrese su(s) apellidos" v-model="atributos.Apellidos" required/>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="Typeid">Tipo de documento</label>
                                <select class="form-select" name="Typeid" id="Typeid" v-model="atributos.Documento" required>
                                        <option>Tarjeta identidad</option>
                                        <option>Cedula de ciudadania</option>
                                        <option>Cedula de extrangeria</option>
                                        <option>Pasaporte</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="id">Numero de documento</label>
                                <input type="number" class="form-control" maxlength="11" name="id" id="id" placeholder="Ingrese el número de documento" v-model="atributos.NumeroD" required/>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="email">Correo</label>
                                <input type="email" class="form-control" maxlength="50" name="email" id="email" placeholder="ejemplo@correo.com" v-model="atributos.Correo" required/>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="Phone">Telefono</label>
                                <input type="tel" class="form-control" maxlength="15" name="Phone" id="Phone" placeholder="Ingrese su numero telefónico" v-model="atributos.Telefono" required/>
                            </div>
                            
                            <div class="form-group">
                                <label class="form-label" for="Contraseña">Contraseña</label>
                                <input type="password" class="form-control" maxlength="30" name="Contraseña" id="Contraseña" v-model="atributos.Contraseña" required />
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="TyC">
                                <label class="form-check-label" for="TyC">Acepto terminos y condiones</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="HabeasData">
                                <label class="form-check-label" for="HabeasData">Acepta el tratamiento de datos personales</label>
                            </div>
                            <div class="form-group mt-3">
                                <button type="submit" class="btn btn-success btn-block">Registrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            atributos:{
                Nombres:"",
                Apellidos:"",
                Documento:"",
                NumeroD:"",
                Correo:"",
                Telefono:"",
                Contraseña:""
                
            }
            
        };
    },
    methods:{
        llamarCursos(){
      this.$router.push('/cursos')
    },
        agregarEstudiante(){
            
            this.axios.post('https://tutoriasweb.herokuapp.com/api/Estudiante-nuevo',this.atributos)
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