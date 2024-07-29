const profile = {
  profileGame: {
    username: "Jacob",
    playTime: 300,
  },
  changeUsername(newName) {
    this.profileGame.username = newName;
  },
  updatePlayTime(hours) {
    this.profileGame.playTime += hours;
  },
  getInfo() {
    return `${this.profileGame.username} ma ${this.profileGame.playTime} aktywnych godzin!`;
  },
};

console.log(profile.getInfo());

profile.changeUsername("Marco");
console.log(profile.getInfo());

profile.updatePlayTime(20);
console.log(profile.getInfo());
