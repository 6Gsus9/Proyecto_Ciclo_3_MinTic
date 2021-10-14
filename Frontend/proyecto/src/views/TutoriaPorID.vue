<template>
    <div class="container">
    <div class="row col-12 d-flex " v-if="editar">
        <h3 class="text-center">Progrma tu tutoría</h3>
        <div class="container col-12 d-flex justify-content-center">
            <div class="col-4">
                <form @submit.prevent="UpdateClass(Tutoria)">
                    
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
                        <button type="submit" class="btn btn-primary btn-block"  >Programar la clase</button>
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
    data(){
        return{
            Tutoria: {}, 
        }
    },
    created(){
        this.UpdateClass();
    },
    methods:{
            UpdateClass(item){
            console.log(item.ClassName);
            
            this.axios.put(`/Cursos/${item._id}`, item).then(res=>{
                const index = this.classes.findIndex(n=>n._id === res.data._id);
                this.classes[index].ClassName=res.data.ClassName;
                console.log(this.classes[index].ClassName);
                this.classes[index].ClassDate=res.data.ClassDate;
                this.classes[index].ClassInit=res.data.ClassInit;
                this.classes[index].ClassEnd=res.data.ClassEnd;
            }).catch(e=>{
                console.log(e.response)
            });
        },
    }
}
</script>