const app = Vue.createApp({
  data() {
    var randomscore1 = Math.floor(Math.random() * 100 + 1);
    var randomscore2 = Math.floor(Math.random() * 100 + 1);
    var randomscore3 = Math.floor(Math.random() * 100 + 1);
    var randomscore4 = Math.floor(Math.random() * 100 + 1);
    var randomscore5 = Math.floor(Math.random() * 100 + 1);
    var randomscore6 = Math.floor(Math.random() * 100 + 1);
    return {
      users: [],
      scores: [
        randomscore1,
        randomscore2,
        randomscore3,
        randomscore4,
        randomscore5,
        randomscore6,
      ],
    };
  },

  mounted() {
    setInterval(() => {
      fetch("http://localhost:3000/users")
        .then((res) => res.json())
        .then((data) => (this.users = data))
        .then((setScore) => {
          for (var x = 0; x < this.users.length; x++) {
            this.users[x].score = this.scores[x];
          }
        });
    }, 1000);
  },
});

app.mount("#app");
