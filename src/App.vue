<template>
  <v-app>
<<<<<<< HEAD
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

=======
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" router :to="item.link" @click="">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="blue-grey darken-1">
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">UltimateTicTacToe</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
         <v-btn flat color="amber darken-3" dark href="https://www.instagram.com/UltimateTicTacToe/">
           <v-icon left>people</v-icon>
           Réseaux sociaux
         </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>


</template>

<script>
var turn=0
function XorO() {
  console.log('foo')
}
  export default {
    data () {
      return {


=======
        sideNav: false,
        menuItems: [
          { icon: 'supervisor_account', title: 'Home', link: '/'},
          { icon: 'list', title: 'Règles', link: '/regles'},
          { icon: 'golf_course', title: 'Morpion', link: '/morpion'},
          { icon: 'person', title: 'Stats', link: '/stats'},
          { icon: 'assignment', title: 'Signup', link: '/signup'}
        ]

      }
    }
  }
</script>
