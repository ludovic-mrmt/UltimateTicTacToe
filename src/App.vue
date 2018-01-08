<template>
  <v-app>
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
        sideNav: false,
        menuItems: [
          { icon: 'supervisor_account', title: 'Home', link: '/'},
          { icon: 'assignment', title: 'Règles', link: '/regles'},
          { icon: 'list', title: 'Morpion', link: '/morpion'},
          { icon: 'person', title: 'Stats', link: '/stats'},
          { icon: 'form', title: 'Signup', link: '/signup'}
        ]
      }
    }
  }
</script>
