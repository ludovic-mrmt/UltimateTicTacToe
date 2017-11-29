<template>
  <v-app>
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>pregnant_woman</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Meilleurs scores</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="blue-grey darken-1">
      <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>UltimateTicTacToe</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
         <v-btn flat color="amber darken-3" dark>Le jeu
           <v-icon right>golf_course</v-icon>
         </v-btn>
         <v-btn flat color="green lighten-1" dark>Les règles
           <v-icon right>attach_file</v-icon>
         </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>

    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false
      }
    }
  }
</script>
