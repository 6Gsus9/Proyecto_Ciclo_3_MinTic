<template>
  <b-container >
        <div class="row" style="position: absolute; margin-top: 4cm;">
            <div class="col-5" >
                <h1>TutoWeb</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque consectetur iure magni adipisci
                    minus inventore voluptatem voluptas ad recusandae dignissimos tenetur quia quaerat ducimus
                    aspernatur, libero quis voluptate necessitatibus tempore praesentium! Necessitatibus pariatur aut
                    consectetur minus ducimus architecto mollitia labore, libero, quo aliquid perspiciatis dolor autem
                    assumenda quam consequatur voluptatem!</p>
                <div b-container style="margin-left: 2cm;">
                    <a @click="llamarRegistro()"><button class="btn btn-primary" type="submit" >Registrarse</button></a>
                    <router-link to="/login"><button type="button" class="btn btn-outline-secondary" > Ingresa </button></router-link>
                </div>
                         
                
            </div>

            
            <div class="col-6" >
                <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>

    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>
  </div>
                
            </div>
        </div>

  </b-container>

</template>

<script>
export default {
  data(){
    return {
        slide: 0,
        sliding: null
      }
  },
  created(){

  },
  methods:{
    llamarRegistro(){
      this.$router.push('/registro');
      console.log( this.$router.name )
    },
    onSlideStart(slide) {
        this.sliding = true
      },
    onSlideEnd(slide) {
        this.sliding = false
      }
  }
};
</script>
<style>

</style>
