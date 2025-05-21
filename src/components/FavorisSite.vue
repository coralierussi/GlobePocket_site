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
            <h4 class="title-slice">Mes favoris</h4>
            <button @click="close">
                <v-icon class="icon-head">mdi-close</v-icon>
            </button>
        </div>
        
    </v-navigation-drawer>
</template>
  
  <script>
  export default{
    name: 'OrganisationVoyage',

    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    data() {
    return {
      open: this.value, 
    };
  },
  watch: {
    value(val) {
      this.open = val; 
    },
    open(val) {
      this.$emit('input', val); 
    },
  },
  methods: {
    close() {
      this.open = false; 
    },
  },
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
            width: 80%;
        }
    }
}
</style>
