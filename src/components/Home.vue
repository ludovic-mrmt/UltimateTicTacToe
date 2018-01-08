<template>

  <v-container>
    <v-layout row justify-center wrap>
      <v-card>
        <v-card-media src="/static/welcome.png" height="400px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h2 style="text-align:center;">Bienvenue sur la page de l'UltimateTicTacToe !</h2>
          </div>
        </v-card-title>
      </v-card>
      <v-flex xs6  class="text-xs-center text-sm-center">
        <v-btn large router to="/morpion">Jouer !</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
