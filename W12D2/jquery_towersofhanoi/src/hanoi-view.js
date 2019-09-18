class View {
  constructor(game, $el) {
  this.game = game;
  this.$el = $el;
  this.setUpTowers();
  this.render();


  $("ul.tower").each((idx, tower) => {
      $(tower).on("click", () => {this.clickTower(idx)});
  });
  }

  clickTower(towerNum) {
    if(this.startTower !== undefined) {
      this.endTower = towerNum;
      console.log(this.endTower);
      console.log(this.startTower);
      if (!this.game.move(this.startTower, this.endTower)) {
        alert("Invalid move, ya dunce!");
        this.startTower = undefined;
        this.endTower = undefined;
      } else {
        this.render();
        if (this.game.isWon()) {
          setTimeout(() => {alert("Hooray, you won! you're so smart. good job I'm proud of you, I wish my father was as proud of me as I am of you right now!")}, 10);
          $("ul.tower").off("click");
        }
        this.startTower = undefined;
        this.endTower = undefined;
      }
    } else {
      this.startTower = towerNum;
      $($("ul.tower")[towerNum]).toggleClass("selected");
      console.log(this.startTower);
    }
  }

  setUpTowers() {
    let $view = $(".toh");
    for(let j = 0; j < 3; j++) {
      let tower = $("<ul>").addClass("tower");
      for (let i = 0; i < 3; i++) {
        tower.append($("<li>"));
      }
      $view.append(tower);
    }
  }

  render() {
    $(".tower li").removeClass();
    let $towers = $(".tower");
    this.game.towers.forEach((tower, towerIdx) => {
      tower.forEach((el, elIdx) => {
        $($($towers[towerIdx]).children("li")[elIdx]).addClass(`disk-${el}`);
      });
    });
  }
}

module.exports = View;