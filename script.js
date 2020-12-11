var app = new Vue({
    el: '#root',
    data: {
      message: "",
      things: [
        "Comprare il pane",
        "Portare giu il cane",
        "Annaffiare le piante",
        "Lavare la macchina"
      ]
    },

    methods: {
      funzioneAggiungi: function () {
        if(this.message == "") {
          window.alert("Devi compilare tutti i campi");
        } else {
          this.things.push(this.message);
          this.message = "";
        }
      },
      funzioneElimina: function (index) {
        this.things.splice(index, 1);
      },
      funzioneAggiustaParola: function () {
        var inputUtente = this.message;
        inputUtente = inputUtente.toLowerCase();
        inputUtente = inputUtente[0].toUpperCase() + inputUtente.slice(1);
      },
    }



});
