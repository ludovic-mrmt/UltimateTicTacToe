<template>
  <div class="morpion">
    <v-alert color="info" value="true" id="al">
    </v-alert>
    <v-form v-model="valid">
      <v-text-field
        label="Pseudo"
        v-model="name"
        :rules="nameRules"
      ></v-text-field>
      <p hidden id="btn">{{ name }}</p>
      <v-btn
      v-on:click="main()"
      :disabled="!valid"
      >
      Envoyer
      </v-btn>
    </v-form>
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
import * as firebase from 'firebase'

  export default {
    data: function() {
      return {
        valid: true,
        name: '',
        nameRules : [
          (v) => !!v || 'Entrez un pseudo'
        ]
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      }
    },
    methods: {

      main () {
        var ref = firebase.database().ref('name');
        ref.on('value', gotData, errData);
        function gotData(data) {
          var inPseudo = document.getElementById("btn").innerHTML;
          var scores = data.val();
          var keys = Object.keys(scores);
          for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            var name = scores[k].name;
            var email = scores[k].email;
            if (name==inPseudo) {
              i=keys.length;

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
              var player = [ 'X', inPseudo ]
              console.log(user);
              var tour = 0;
              var end = false;
              document.getElementById("al").innerHTML = "Joueur " + player[tour] + " c'est à vous !";
              for (var i = 0; i < carre.length; i++) {
                carre[i].addEventListener("click", function() {
                  if (end)
                    return;
                  if (!estValide(this)) {
                    document.getElementById("al").innerHTML = "Case occupée ! " + player[tour] + " c'est toujours à vous !";
                  }
                  else {
                    setSymbol(this, joueurs[tour]);
                    end = rechercherVainqueur(carre, joueurs, tour);

                    if(end)
                      {
                        alert("Le joueur " + player[tour] + " a gagné ! ");
                        return window.location.reload();
                      }

                    if (matchNul(carre))
                      {
                        alert("Match Nul !");
                        return window.location.reload();
                      }

                    tour++;
                    tour = tour % 2;
                    document.getElementById("al").innerHTML = "Joueur " + player[tour] + " c'est à vous !";
                  }
                });
              }
            }
            else {
              alert("Joueur introuvable, Recommencez");
              return
            }
          }
        }
        function errData(err) {
          console.log('Error');
          console.log(err);
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

#al {
  margin: auto;
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
.morpion {
  margin: auto;
}

</style>
