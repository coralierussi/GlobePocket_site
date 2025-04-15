<template>
    <main id="app">
      <IndexSite></IndexSite>
    </main>
  </template>
  
  <script>
  import IndexSite from './IndexSite.vue';
  
  export default {
    name: 'App',
    components: { IndexSite },
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
  .presentation{
      .carousel {
          display: flex;
          position: relative;
          animation: slide 4s infinite alternate ease-in-out;
          z-index: -1;
      }
      .carousel img {
          width: 100%;
          height: auto;
      }
      .en-tete{
          position: absolute;
          width: 40%;
          background-color: rgb(158, 158, 158);
          border-radius: 50px;
          z-index: 10;
          margin: 20% 30%;
          .title{
              color: white;
              font-size: 300%;
              text-align: center;
          }
      }
  }
  .globe{
      margin-top: 100px;
      display: flex;
      .texte{
          padding-top: 125px;
          text-align: center;
          width: 60%;
          font-size: 50px;
      }
      .img{
          width: 40%;
          .img-globe{
              width: 80%;
          }
      }
  }
  .services{
      margin-top: 100px;
      .sous-titre{
          font-size: 45px;
          text-align: center;
          margin-bottom: 5%;
      }
      .carousel{
          .carousel-item{
              background-color: #D9D9D9;
              .titre-service{
                  text-align: center;
                  padding-bottom: 2%;
                  padding-top: 1%;
                  font-weight: 600;
              }
              .text-service{
                  padding: 0% 8% 3% 8%;
              }
              .btn-service{
                background-color: #D54721;
                color: white;
                  font-size: 17px;
                  width: 10%;
                  margin-bottom: 2%;
                  border-radius: 20px;
                  border: none;
                  margin-left: 45%;
              }
              .slice{
                /* border: 1px solid black; */
                padding: 5px 20px;
                width: 100%;
                height: 200px;
                .head{
                    display: flex;
                    .title-slice{
                        margin-bottom: 20px;
                        width: 80%;
                    }
                }
              }
          }
      }
  }
  .activites{
      margin: 100px 20px 100px 20px;
      .sous-titre{
          font-size: 45px;
          text-align: center;
          margin-bottom: 5%;
      }
      .coup-coeur{
          margin-bottom: 3%;
          .substiles{
              margin-bottom: 50px;
          }
      }
      .nouveautes{
          margin-bottom: 3%;
          .substiles{
              margin-bottom: 50px;
          }
      }
  }
  
  </style>