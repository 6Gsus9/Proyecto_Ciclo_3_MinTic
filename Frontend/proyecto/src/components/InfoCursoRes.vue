<template>
    <div class="row m-3">
        <div class="col-12 d-flex justify-content-center" style="background-color: rgb(223, 223, 223);">
            <div class="col-10">
                <h1>Titulo del curso 1</h1>
                <p>explicación de curso 1: Aliquip ullamco in est laboris commodo. Non qui minim voluptate laborum id esse ipsum incididunt tempor cupidatat magna. Ad nulla minim ex voluptate ipsum do laborum deserunt exercitation pariatur pariatur dolore.</p>
            </div>
            <div class="col-2 d-flex justify-content-end">
                <form class="col-auto text-center">
                    <div class="align-self-center m-3">
                    <a href=""><button type="button" class="btn btn-warning">
                        Programar tutoria <i class="far fa-calendar-alt fa-lg"></i>
                    </button></a>
                    </div>
                    <div class="align-self-center m-3">
                    <a href=""><button type="button" class="btn" style="background-color: rgb(255, 255, 255);">
                        Ver mas <i class="fas fa-plus"></i>
                    </button></a>
                    </div>
                </form>  
            </div>
        </div>
    </div>
</template>
<script>

export default ({
  name: "InfoCurso",
  data: () => ({}),
  methods: {
    inicio() {
      this.$router.push("/");
    },
    llamarRegistro() {
      this.$router.push("/registro");
    },
  },
})
</script>

