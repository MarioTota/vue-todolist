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
        this.things.push(this.message);
        this.message = "";
      },
      funzioneElimina: function () {
        // for (var i = 0; i < this.things.length; i++) {
        //   message = this.things[i];
        // }
        this.things.splice(this);
      }
    }



});
