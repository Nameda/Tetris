<template>
    <div>
        <div class="game" id="game">
            <!-- <div v-for="(items,i) in gameData" :key="i">
                <div class="none" v-for="(item,j) in items" :key="j" :style="{top:i*20 + 'px',left:j*20 + 'px'}"></div>
            </div> -->
        </div>
        <div class="next" id="next">
            <!-- <div v-for="(items,i) in nextData" :key="i">
                <div class="none" v-for="(item,j) in items" :key="j" :style="{top:i*20 + 'px',left:j*20 + 'px'}"></div>
            </div> -->
        </div>
        <div class="info">
            <div>time：<span id="time">0</span>s</div>
            <div>score：<span id="score">0</span>分</div>
            <div id = "gameover"></div>
        </div>
        <div class="operationBox" id="operationBox">
            <div class="change ball" @click="rotate">rotate</div>
            <div class="ballBox">
                <div class="left ball" @click="left">left</div>
                <div class="right ball" @click="right">right</div>
            </div>
            <div class="down ball" @click="fall">fall</div>
        </div>
        <div class="more" @click="retry">
            <p>one more time ?</p>
            <h3>YES</h3>
        </div>
    </div>
</template>

<script>
let Local = require('../util/local.js');
var Game = require("../util/game")
export default {
  name:"index",
  data() {
    return {
        gameData:Local.gameData,
        nextData:Local.nextData,
    };
  },
  mounted () {
      Local.start();
  },
  methods:{
      rotate(){
          Local.rotate();
      },
      left(){
          Local.left();
      },
      right(){
          Local.right();
      },
      fall(){
          Local.fall();
      },
      retry(){
          location.reload();
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.more{
    font-size: 16px;
    position: absolute;
    top:400px;
    left:220px;
    background: #add;
    padding:0 10px;
    border-radius: 10px;
    display: none;
}
#gameover{
    font-size: 36px;
    font-weight: bold;
    padding:5px;
}
.game{
    width: 200px;
    height:400px;
    background: #F2faff;
    border: 1px solid yellowgreen;
    border-top: 0;
    position: absolute;
    top:10px;
    left: 10px;
}
.next{
    width:80px;
    height: 80px;
    background: #F2faff;
    position: absolute;
    left: 250px;
    top: 10px;
    border: 1px solid yellowgreen;
}
.info{
    position: absolute;
    top: 100px;
    left: 250px;
}
.none,.current,.done{
    width:20px;
    height:20px;
    position: absolute;
    box-sizing: border-box;
}
.none{
    background: #F2faff;
}
.current{
    background: pink;
    border: 1px solid red;
}
.done{
    background: gray;
    border:1px solid black;
}
.operationBox{
    background: #F2faff;
    position: absolute;
    top:200px;
    left: 230px;
}
.operationBox .ball{
    width:50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: 1px solid #adf;
    border-radius: 50%;
    margin:0 auto;
    background: #ada;
}
.ballBox{
    display: flex;
}
.ballBox .ball{
    margin:6px 10px;
}
/* .operationBox .change{
    position: absolute;
    top:-50px;
    left:50px;
} */
</style>
