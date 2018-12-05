var Game = require("./game")
  //游戏对象
  var game;
  //时间间隔
  var INTERVAL = 200;
  var timer = null;
  //時間
  var time_timer = null;
  //时间计数器
  var timeCount = 0;
  //时间
  var time = 0;
  //绑定键盘事件
  var bindKeyEvent = function () {
    document.onkeydown = function (e) {
      if (e.keyCode == 38) { //up
        game.rotate();
      } else if (e.keyCode == 39) { //right
        game.right();
      } else if (e.keyCode == 40) { //down
        game.down();
      } else if (e.keyCode == 37) { //left
        game.left();
      } else if (e.keyCode == 32) { //space
        game.fall();
      }
    }
  }
  //移动
  var move = function () {
    if (!game.down()) {
      game.fixed();
      var line = game.checkClear();
      if (line) {
        game.addScore(line);
      }
      var gameOver = game.checkGameOver();
      if (gameOver) {
        game.gameover(false);
        stop();
      } else {
        game.performNext(generateType(), generateDir());
      }
    }
  }
  //计时函数
  var timeFunc = function () {
      time = time + 1;
      game.setTime(time);
      if(time>10 && INTERVAL >50){
        clearInterval(timer);
        INTERVAL  = INTERVAL -1
        timer = setInterval(move, INTERVAL)
      }
  }
  //随机生成一个方块种类
  var generateType = function () {
    return Math.ceil(Math.random() * 7) - 1;
  }
  //随机生成一个旋转次数
  var generateDir = function () {
    return Math.ceil(Math.random() * 4) - 1;
  }
  //开始
  var start = function () {
    var doms = {
      gameDiv: document.getElementById('game'),
      nextDiv: document.getElementById('next'),
      timeDiv: document.getElementById('time'),
      scoreDiv: document.getElementById('score'),
      resultDiv: document.getElementById('gameover')
    }
    game = new Game();
    game.init(doms, generateType(), generateDir());
    bindKeyEvent();
    game.performNext(generateType(), generateDir());
    time_timer = setInterval(timeFunc,1000);
    timer = setInterval(move, INTERVAL)
  }
  //结束
  var stop = function () {
    if (timer) {
      clearInterval(timer);
      clearInterval(time_timer);
      timer = null;
      time_timer = null;
    }
    document.onkeydown = null;
    document.getElementsByClassName('more')[0].style.display = 'block'
  }

module.exports = {
  gameData(){
    return game.gameData
  },
  nextData(){
    return game.nextData
  },
  start(){
    return start();
  },
  left(){
    return game.left()
  },
  right(){
    return game.right()
  },
  rotate(){
    return game.rotate()
  },
  fall(){
    return game.fall()
  },
}