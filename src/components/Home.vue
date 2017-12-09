<template>
  <v-container>
    <v-layout row justify-center wrap>
      <v-card>
        <v-card-media src="/static/welcome.png" height="400px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h1 style="text-align:center;">Bienvenue sur la page de l'UltimateTicTacToe !</h1>
          </div>
        </v-card-title>
      </v-card>
      <v-flex xs12 class="info">
        <v-btn large router to="/morpion" class="text-center">Jouer !</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
