<template>
    <div class="row col-12 d-flex justify-content-center">
        <h3 class="text-center">Ingreso</h3>
        <div class="container col-12 d-flex justify-content-center">
            <div class="col-md-8 ">
                <form @submit.prevent="handleSubmitForm">
                    <div class="form-group">
                        <label class="form-label" for="Nombre">Usuario</label>
                        <input type="text" class="form-control" maxlength="20" name="Nombre" id="Nombre" placeholder="Ingrese su(s) nombre" v-model="user.user" required />
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="Contraseña">Contraseña</label>
                        <input type="password" class="form-control" maxlength="30" name="Contraseña" id="Contraseña" v-model="user.password" required/>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="recordar">
                        <label class="form-check-label" for="recordar">Recordar nombre de usuario</label>
                    </div><div class="form-check">
                        <input type="checkbox" class="form-check-input" id="mantener">
                        <label class="form-check-label" for="mantener">Manterner sección iniciada</label>
                    </div>
                    <div class="form-group mt-2">
                        <button type="submit" class="btn btn-primary btn-block">Iniciar sección</button>
                    </div>
                    <router-link class="navbar-link mt-2" to="/QS">¿Olvido su nombre de usuario o contraseña? </router-link>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                user: {
                },
            };
        },
        methods: {
            handleSubmitForm() {},
        },
    };
</script>