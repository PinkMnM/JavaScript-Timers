function countDown(time){
  let timer = setInterval(function(){
    time--;
    if(time <= 0){
      clearInterval(timer);
      console.log('DONE!');
    }
    else {
      console.log(time);
    }

  },1000)
}

function randomGame(){
  let num;
  let times = 0;
  let timer = setInterval(function(){
    num = Math.random();
    times++
    if(num > .75) {
      clearInterval(timer);
      console.log("It took " + times + " tries");    }
  },1000)
}

