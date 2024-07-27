const profileGame = {
  profile: {
    username: "Jacob",
    playTime: 300,
  },
  changeUsername(newName) {
    newName = this.profile.username;
  },
  updatePlayTime(hours) {
    hours = this.profile.playTime;
  },
  getInfo() {
    return `${newName} ma ${hours} aktywnych godzin!`;
  },
};

console.log(profile.getInfo());

profile.changeUsername("Marco");
console.log(profile.getInfo());

profile.updatePlayTime(20);
console.log(profile.getInfo());
