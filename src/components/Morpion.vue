<template>
  <div class="text-xs-center">
    <v-alert color="info" icon="info" value="true"  id="al">
    <v-btn color="error" v-on:click="main()">Appuyez ici pour commencer !</v-btn>
   </v-alert>
    <div id="Jeu">
      <div>
        <button class="button"></button>
        <button class="button"></button>
        <button class="button"></button>
      </div>
      <div>
        <button class="button"></button>
        <button class="button"></button>
        <button class="button"></button>
      </div>
      <div>
        <button class="button"></button>
        <button class="button"></button>
        <button class="button"></button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
      }
    },
    methods: {

      main () {

        function estValide(button) {
          return button.innerHTML.length == 0;
        }

        function setSymbol(btn, symbole) {
          btn.innerHTML = symbole;
        }

        function rechercherVainqueur(carre, joueurs, tour){
          if (carre[0].innerHTML == joueurs[tour] && carre[1].innerHTML == joueurs[tour] && carre[2].innerHTML == joueurs[tour]) {
            carre[0].style.backgroundColor = "#9ACD32";
            carre[1].style.backgroundColor = "#9ACD32";
            carre[2].style.backgroundColor = "#9ACD32";
            return true;
          }

          if (carre[3].innerHTML == joueurs[tour] && carre[4].innerHTML == joueurs[tour] && carre[5].innerHTML == joueurs[tour]) {
            carre[3].style.backgroundColor = "#9ACD32";
            carre[4].style.backgroundColor = "#9ACD32";
            carre[5].style.backgroundColor = "#9ACD32";
            return true;
          }

          if (carre[6].innerHTML == joueurs[tour] && carre[7].innerHTML == joueurs[tour] && carre[8].innerHTML == joueurs[tour]) {
            carre[6].style.backgroundColor = "#9ACD32";
            carre[7].style.backgroundColor = "#9ACD32";
            carre[8].style.backgroundColor = "#9ACD32";
            return true;
          }

          if (carre[0].innerHTML == joueurs[tour] && carre[3].innerHTML == joueurs[tour] && carre[6].innerHTML == joueurs[tour]) {
            carre[0].style.backgroundColor = "#9ACD32";
            carre[3].style.backgroundColor = "#9ACD32";
            carre[6].style.backgroundColor = "#9ACD32";
            return true;
          }

          if (carre[1].innerHTML == joueurs[tour] && carre[4].innerHTML == joueurs[tour] && carre[7].innerHTML == joueurs[tour]) {
            carre[1].style.backgroundColor = "#9ACD32";
            carre[4].style.backgroundColor = "#9ACD32";
            carre[7].style.backgroundColor = "#9ACD32";
            return true;
          }

          if (carre[2].innerHTML == joueurs[tour] && carre[5].innerHTML == joueurs[tour] && carre[8].innerHTML == joueurs[tour]) {
            carre[2].style.backgroundColor = "#9ACD32";
            carre[5].style.backgroundColor = "#9ACD32";
            carre[8].style.backgroundColor = "#9ACD32";
            return true;
          }

          if (carre[0].innerHTML == joueurs[tour] && carre[4].innerHTML == joueurs[tour] && carre[8].innerHTML == joueurs[tour]) {
            carre[0].style.backgroundColor = "#9ACD32";
            carre[4].style.backgroundColor = "#9ACD32";
            carre[8].style.backgroundColor = "#9ACD32";
            return true;
          }

          if (carre[2].innerHTML == joueurs[tour] && carre[4].innerHTML == joueurs[tour] && carre[6].innerHTML == joueurs[tour]) {
            carre[2].style.backgroundColor = "#9ACD32";
            carre[4].style.backgroundColor = "#9ACD32";
            carre[6].style.backgroundColor = "#9ACD32";
            return true;
          }
        }
        function matchNul(pions) {
          for (var i = 0, len = pions.length; i < len; i++) {
            if (pions[i].innerHTML.length == 0)
              return false;
            }
          return true;
        }
        var carre = document.querySelectorAll(".button");
        var joueurs = ['X', 'O']
        var tour = 0;
        var end = false;
        for (var i = 0; i < carre.length; i++) {
          carre[i].addEventListener("click", function() {
            if (end)
              return;
            if (!estValide(this)) {
              document.getElementById("al").innerHTML = "Case occupée ! " + joueurs[tour] + " c'est toujours à vous !";
            }
            else {
              setSymbol(this, joueurs[tour]);
              end = rechercherVainqueur(carre, joueurs, tour);

              if(end)
                {
                  alert("Le joueur " + joueurs[tour] + " a gagné ! ");
                  return window.location.reload();
                }

              if (matchNul(carre))
                {
                  alert("Match Nul !");
                  return window.location.reload();
                }

              tour++;
              tour = tour % 2;
              document.getElementById("al").innerHTML = "Joueur " + joueurs[tour] + " c'est à vous !";
            }
          });
        }
      }
    }
  }
</script>

<style>

#Jeu
{
  background-color: black;
  overflow: auto;
  padding: 10px;

}

#Jeu div
{
}

.button
{
   width: 150px;
   height: 150px;
   font-weight: bold;
   font-size: 50px;
   margin: 8px;
   float: left;
   color:#ffffff;
   border: 3px solid white;
   border-radius: 10px 10px 10px 10px;
}

</style>
