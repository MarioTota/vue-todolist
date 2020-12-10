var app = new Vue({
    el: '#root',
    data: {
      message: "",
      things: [
        "comprare il pane",
        "portare giu il cane",
        "annaffiare le piante",
        "lavare la macchina"
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
      }
    }



});
