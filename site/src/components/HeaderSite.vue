<template>
  <main class="header d-flex">
      <div class="logo">
          <p class="logo-img" src="../assets/user.png" alt=""> </p>
      </div>
      <div class="navbar">
        <a class="link-header" href="/">Accueil</a>
        <a class="link-header" href="/pays">Pays</a>
        <a class="link-header" href="/activite">Activités</a>
        <a class="link-header" href="/transport">Transports</a>
        <a class="link-header" href="/hebergement">Hébergements</a>
        <a class="link-header" href="/location">Locations</a>
      </div>
      <div class="compte">
          <v-icon class="compte-img"> mdi-account</v-icon>
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
    color: black;
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
