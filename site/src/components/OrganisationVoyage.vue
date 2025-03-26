<template>
    <v-navigation-drawer 
    v-model="open"
    fixed
    app
    temporary 
    class= "slice"
    width = "600"
    right
    >
        <div class="head">
            <h4 class="title-slice">Organisation de voyage personnalisé</h4>
            <button @click="drawer = false">
                <v-icon class="icon-head">mdi-close</v-icon>
            </button>
        </div>
        <div class="text-orga">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at lectus aliquam, suscipit leo quis, ornare elit. Donec porta, neque non euismod faucibus, mi est gravida diam, in ultricies tellus nunc ut magna. Maecenas tortor velit, sagittis ullamcorper ante a, aliquam sagittis dolor. Praesent pharetra purus ut augue tempus convallis. In a lectus placerat, consectetur sapien non, dignissim ante. Mauris pretium justo vestibulum lectus tristique posuere. Proin sodales sit amet mauris non bibendum. In in lectus a leo pharetra fringilla ac eget elit. Fusce luctus nunc urna, sit amet commodo libero ullamcorper ut. Integer scelerisque ipsum id urna egestas, nec hendrerit lacus sollicitudin. Phasellus elementum eros non posuere tempus. Sed id risus ligula.
                Morbi condimentum aliquam est, non consequat erat mollis eget. Aenean in commodo tellus. Proin vel lorem quis risus egestas gravida eu ac libero. Vivamus sed volutpat risus, vel efficitur massa. Nulla id dolor posuere, condimentum ipsum vel, porttitor magna. In non sapien pretium, dignissim eros eget, pulvinar augue. Ut vel ultrices nisi, sed porta mi. Donec placerat tempus vulputate.
                Nullam dictum et dolor eget pharetra. Donec blandit vestibulum faucibus. Vivamus eu arcu eget urna condimentum malesuada. Proin arcu quam, pretium vitae rutrum non, aliquam nec ex. Donec sed massa ut sapien ornare efficitur ac vel metus. Integer viverra finibus eros sed porta. Nunc consequat vulputate ultrices. Suspendisse feugiat ligula tempor turpis placerat porta. Praesent sodales ultricies nunc. Etiam non nulla eget magna sollicitudin iaculis. Mauris pulvinar commodo ligula sed volutpat. Proin magna nisl, facilisis vel augue ac, feugiat rhoncus orci. Sed sed consectetur mi, sit amet ullamcorper lorem. Praesent viverra eu erat id egestas. Curabitur volutpat odio ut tellus iaculis, eu dictum ipsum tristique. 
            </p>
        </div>
    </v-navigation-drawer>
</template>
  
  <script>
  export default{
    name: 'OrganisationVoyage',

    // props: {
    //   value: Boolean,
    // },

    data(){
        return {
          open: false,
        }
      },

      // watch:{
      //   open(value){
      //     if (!value){
      //       this.close()
      //     }
      //   }
      // },

    created(){
      setTimeout(() => {
        this.open = true
      }, 1)
    },
    
  methods: {
    close(){
      this.open = false

      setTimeout(()=> {
        this.$emit('cancel')
      }, 500)
    }
  }
}
</script>
  
<style lang="scss" scoped>
.slice{
    padding: 5px 20px;
    height: 200px;
    .head{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 30px;
        margin-top: 20px;
        .title-slice{
            // margin-bottom: 50px;
            width: 80%;
        }
    }
    .text-orga{
      padding-right: 25px;
    }
}
</style>
