<template>
  <main class="header d-flex">
      <div class="logo">
          <p class="logo-img" src="/site/src/App.vue" alt=""> </p>
      </div>
      <div class="navbar">
          <li><a class="link-header" href="/main.vue">Accueil</a></li>
          <li><a class="link-header" href="/main.vue">Pays</a></li>
          <li><a class="link-header" href="/main.vue">Activités</a></li>
          <li><a class="link-header" href="/main.vue">Transports</a></li>
          <li><a class="link-header" href="/main.vue">Hébergements</a></li>
          <li><a class="link-header" href="/main.vue">Locations</a></li>
      </div>
      <div class="compte">
          <v-icon class="compte-img" > mdi-account</v-icon>
      </div>
  </main>
</template>

<script>
export default{
        name: 'HeaderSite',
        props:{

        },
        data (){
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
a{
    text-decoration: none;
}
li{
    list-style: none;
}
.header{
    background-color: #ACCAB2;
    width: 100%;
    height: 60px;
    .logo{
        width: 20%;
        .logo-img{
            border-radius: 100%;
            background-color: grey;
            width: 50px;
            height: 50px;
            margin: 5px;
        }
    }
    .navbar{
        display: flex;
        margin-left: auto;
        width: 60%;
        .link-header{
            color: black;
            padding-right: 5px;
            margin: 0%;
        }
    }
    .compte{
        width: 15%;
        .compte-img{
            width: 50px;
            height: 50px;
            margin: 5px 10px;
            float: right;
        }
    }
}
</style>
