<template>
    <main class="coup-coeurs d-flex">
        <div class="activite-new">
            <div class="img-activite">
                <p class="new">Nouveauté</p>
                <p class="text">IMG nouveauté</p>
            </div>
            <div class="tag-favoris d-flex">
                <div class="tag d-flex">
                    <div class="chips d-flex">
                        <div class="tag-chips">test</div>
                        <div class="tag-chips">test</div>
                        <div class="tag-chips">test</div>
                        <div class="tag-chips">test</div>
                        <div class="tag-chips">test</div>
                    </div>
                </div>
                <div class="favoris d-flex">
                    <img class="img-favoris" src="" alt="Image favoris">
                </div>
            </div>
            <div class="description">
                <p class="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla est nec mi placerat cursus ut vel lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec volutpat, purus vitae suscipit vehicula, risus risus vehicula tellus, sed vehicula ipsum dui id nisi. Aliquam metus libero, congue eget consequat mollis, ultrices eu arcu. Morbi tortor neque, egestas ut dictum ut, porttitor vitae sapien. In non tellus sed urna placerat dapibus.
                </p>
            </div>
            <button type="button" class="btn-new">Voir plus</button>
        </div>
        <div class="activite-new">
            <div class="img-activite">
                <p class="new">Nouveauté</p>
                <p class="text">IMG nouveauté</p>
            </div>
            <div class="tag-favoris d-flex">
                <div class="tag d-flex">
                    <div class="chips d-flex">
                        <div class="tag-chips">test</div>
                        <div class="tag-chips">test</div>
                        <div class="tag-chips">test</div>
                        <div class="tag-chips">test</div>
                        <div class="tag-chips">test</div>
                    </div>
                </div>
                <div class="favoris d-flex">
                    <img class="img-favoris" src="" alt="Image favoris">
                </div>
            </div>
            <div class="description">
                <p class="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla est nec mi placerat cursus ut vel lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec volutpat, purus vitae suscipit vehicula, risus risus vehicula tellus, sed vehicula ipsum dui id nisi. Aliquam metus libero, congue eget consequat mollis, ultrices eu arcu. Morbi tortor neque, egestas ut dictum ut, porttitor vitae sapien. In non tellus sed urna placerat dapibus.
                </p>
            </div>
            <button type="button" class="btn-new">Voir plus</button>
        </div>
        <div class="activite-new">
            <div class="img-activite">
                <p class="new">Nouveauté</p>
                <p class="text">IMG nouveauté</p>
            </div>
            <div class="tag-favoris d-flex">
                <div class="tag d-flex">
                    <div class="chips d-flex">
                        <div class="tag-chips">test</div>
                        <div class="tag-chips">test</div>
                        <div class="tag-chips">test</div>
                        <div class="tag-chips">test</div>
                        <div class="tag-chips">test</div>
                    </div>
                </div>
                <div class="favoris d-flex">
                    <img class="img-favoris" src="" alt="Image favoris">
                </div>
            </div>
            <div class="description">
                <p class="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla est nec mi placerat cursus ut vel lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec volutpat, purus vitae suscipit vehicula, risus risus vehicula tellus, sed vehicula ipsum dui id nisi. Aliquam metus libero, congue eget consequat mollis, ultrices eu arcu. Morbi tortor neque, egestas ut dictum ut, porttitor vitae sapien. In non tellus sed urna placerat dapibus.
                </p>
            </div>
            <button type="button" class="btn-new">Voir plus</button>
        </div>
        <div class="activite-new">
            <div class="img-activite">
                <p class="new">Nouveauté</p>
                <p class="text">IMG nouveauté</p>
            </div>
            <div class="tag-favoris d-flex">
                <div class="tag d-flex">
                    <div class="chips d-flex">
                        <div class="tag-chips">test</div>
                        <div class="tag-chips">test</div>
                        <div class="tag-chips">test</div>
                        <div class="tag-chips">test</div>
                        <div class="tag-chips">test</div>
                    </div>
                </div>
                <div class="favoris d-flex">
                    <img class="img-favoris" src="" alt="Image favoris">
                </div>
            </div>
            <div class="description">
                <p class="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla est nec mi placerat cursus ut vel lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec volutpat, purus vitae suscipit vehicula, risus risus vehicula tellus, sed vehicula ipsum dui id nisi. Aliquam metus libero, congue eget consequat mollis, ultrices eu arcu. Morbi tortor neque, egestas ut dictum ut, porttitor vitae sapien. In non tellus sed urna placerat dapibus.
                </p>
            </div>
            <button type="button" class="btn-new">Voir plus</button>
        </div>


    </main>
  </template>
  
  <script>
  export default{
          name: 'ActiviteNouveaute',
          props:{
  
          },
          data (){
              return {
  
              }
          }
      }
  </script>
  
  <style lang="scss" scoped>
  .activite-new{
    background-color: #cac9c9;
    width: 25%;
    padding: 15px;
    margin-right: 20px;
    .img-activite{
        background-color: #f8f6f6;
        height: 200px;
        border-radius: 50px;
        width: 100%;
        padding-top: 10px;
        .text{
            text-align: center;
            font-size: 25px;
            padding-top: 20%;
        }
        .new{
            margin-left: 25px;
            background-color: yellow;
            width: 35%;
            text-align: center;
            border-radius: 60px;
        }
    }
    .tag-favoris{
        margin: 5% 0%;
        .tag{
            margin-top: 10px;
            display: flex;
            width: 80%;
            .chips{
                width: 40%;
                .tag-chips{
                    background-color: #f8f6f6;
                    border-radius: 30px;
                    margin-right: 10px;
                    text-align: center;
                    padding: 0px 3px;
                }
            }
        }
        .favoris{
            width: 20%;
        }
    }
    .btn-new{
        background-color: #b17d7d;
        color: white;
        font-size: 17px;
        width: 50%;
        margin-bottom: 2%;
        border-radius: 20px;
        border: none;
        margin-left: 20%;
    }
  }
  </style>