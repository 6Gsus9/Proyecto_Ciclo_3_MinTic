<template>
    <div class="container mt-5">
    <div class="row col-12 d-flex ">
        <h3 class="text-center">Progrma tu tutoría</h3>
        <div class="container col-12 d-flex justify-content-center">
            <div class="col-4">
                <form @submit.prevent="AddCurso()">
                    <div class="form-group mt-2">
                        <label class="form-label" for="UserName">Nombre de Usuario</label>
                        <input type="text" class="form-control" maxlength="30" name="UserName" id="User name" placeholder="Nombre de usurario"  v-model="Tutoria.UserName" disabled required>
                    </div>
                    <div class="form-group mt-2">
                        <label class="form-label" for="Classname">Nombre del curso</label>
                        <select class="form-select" name="Classname" id="Classname" Value="Ingrese su(s) nombre" v-model="Tutoria.ClassName" >
                                <option>Curso 1</option>
                                <option>Curso 2</option>
                                <option>Curso 3</option>
                                <option>Curso 4</option>
                                <option>Curso 5</option>
                                <option>Curso 6</option>
                        </select>
                    </div>
                    <div class="form-group mt-2">
                        <label class="form-label" for="Classdate">Fecha</label>
                        <input type="date" class="form-control" name="Classdate" id="Classdate" v-model="Tutoria.ClassDate"  />       
                    </div>
                    <div class="row form-group mt-2">
                        <div class="col-6">
                            <label class="form-label" for="ClassInit">Hora de inicio</label>
                            <input type="time" class="form-control" name="ClassInit" id="ClassInit" v-model="Tutoria.ClassInit"  />       
                        </div>
                        <div class="col-6">
                            <label class="form-label" for="ClassEnd">Hora de fin</label>
                            <input type="time" class="form-control" maxlength="20" name="ClassEnd" id="ClassEnd" v-model="Tutoria.ClassEnd"  />       
                        </div>
                    </div>
                    <div class="form-check mt-2">
                        <input type="checkbox" class="form-check-input" id="recordar">
                        <label class="form-check-label" for="recordar">Accepto los terminos y condicones</label>
                    </div>
                    <div class="form-group mt-2">
                        <button type="submit" class="btn btn-primary btn-block">Programar la clase</button>
                    </div>
                    <router-link class="navbar-link mt-2" to="/QS">Conoce como funcionan las totorias</router-link>
                </form>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                Tutoria: {
                    ClassName:"",
                    ClassDate:Date(),
                    ClassInit:Date(),
                    ClassEnd:Date(),
                },
            };
        },
        methods: {
            VerCurso(id){
               this.$router.push('/Clases-Pendientes')
            },
            handleSubmitForm() {
                console.log(this.Tutoria)
            },
            AddCurso(){
            let id = 0;
            this.axios.post('https://tutoriasweb.herokuapp.com/api/asignacion-curso',this.Tutoria)
            .then(res=>{
                this.Tutoria.push(res.Tutoria);
                this.Tutoria.getId();
            })
            .catch((e)=>{
                console.log(e.response)
            });
            this.VerCurso()
            
            }
        },
    };
</script>