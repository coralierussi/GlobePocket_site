<template>
  <main id="app">
    <HeaderSite/>
    <!-- <br><br><br><br><br><br><br><br> -->
    <div class="presentation">
        <div class="carousel">
            <img class="carousel-images" src="./assets/voyage-2.png" alt="">
            <div class="en-tete">
                <p class="title">Suivez vos envies</p>
            </div>
        </div>
    </div>
    <div class="globe">
        <div class="texte">

        </div>
        <div class="img">
            <img class="img-globe" src="./assets/earth.jpg" alt="">
        </div>
    </div>
  </main>
</template>

<script>
import HeaderSite from './components/HeaderSite.vue'

export default {
  // name: 'App',
  components: { HeaderSite },
  data(){
    return {

    }
  },
}
</script>

<style sccs scoped>

*{
    margin: 0%;
    padding: 0%;
}

    a{
        text-decoration: none;
    }
    .header{
        display: flex;
        background-color: #7BB27F;
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
                border-radius: 100%;
                background-color: rgb(34, 34, 204);
                width: 50px;
                height: 50px;
                margin: 5px 10px;
                float: right;
            }
        }
    }
    .presentation{
        .carousel-images {
            display: flex;
            position: relative;
            width: 200%;
            animation: slide 4s infinite alternate ease-in-out;
            z-index: 1;
        }
        .carousel img {
            width: 100%;
            height: auto;
        }
        /* @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        } */
        .en-tete{
            position: absolute;
            width: 40%;
            background-color: rgb(158, 158, 158);
            border-radius: 50px;
            z-index: 10;
            .title{
                color: white;
                font-size: 50px;
                text-align: center;
            }
        }
    }
    .globe{
        .img{
            .img-globe{
                width: 50%;
            }
        }
    }

</style>
