<template>
  <v-app>
  <v-toolbar dark color="primary">
     <v-toolbar-side-icon>
    </v-toolbar-side-icon>
     <v-toolbar-title class="white--text">Ultimate TicTacToe</v-toolbar-title>
     <v-spacer></v-spacer>
     <main>
     <router-view>
     </router-view>
     </main>
   </v-toolbar>



  <v-container fluid="fluid" class="text-xs-center">
     <v-layout row wrap>
     <v-flex md12 sm6>
         <v-card  height="725px" flat color="green">
           <v-card-text>

             <div>
               <v-btn color="blue">Jouer une partie de TicTacToe normal
               <v-icon right>
              gamepad
              </v-icon>
               </v-btn>
             </div>

             <v-btn color="red">Jouer une partie de TicTacToe ultime
             <v-icon right>
            gamepad
            </v-icon>
             </v-btn>
           </div>

             <div>
               <v-btn color="yellow">Règles du jeu
               <v-icon right >
              help
              </v-icon>
              </v-btn>
             </div>

           </v-card-text>
         </v-card>
       </v-flex>
    </v-layout>
  </v-container>

  </v-app>

</template>

<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>
