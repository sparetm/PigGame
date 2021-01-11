var scores, roundScore, activePlayer, gamePlaying;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;
var initialScore = 0;
function nullVal(){
  gamePlaying = true;  
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0'; 
}
document.querySelector('.dice-2').style.display = 'none';
document.querySelector('.dice-1').style.display = 'none';
nullVal();
document.querySelector('.btn-roll').addEventListener('click', function(){
    
    if(gamePlaying){
    var dice1 = Math.floor(Math.random() * 6) + 1;
     var dice2 = Math.floor(Math.random() * 6) + 1;     
    console.log("dice 1 is "+dice1);
    console.log("dice 2 is "+dice2);
    var diceDOM = document.querySelector('.dice-1');  
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+dice1+'.png';
        
          var diceDOM2 = document.querySelector('.dice-2');  
    diceDOM2.style.display = 'block';
    diceDOM2.src = 'dice-'+dice2+'.png';
        
        
        
        
    if(dice1 !== 1 && dice2 !== 1){
        roundScore+=dice1 + dice2;
        document.querySelector('.dice-1').style.display = 'block';
        document.querySelector('.dice-2').style.display = 'block';
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        console.log("sum is "+roundScore);
       
        }else{
           document.querySelector('.dice-1').style.display = 'block';
            document.querySelector('.dice-2').style.display = 'block';
           nextPlayer();
          
    }
         
     
    }
   });
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
   scores[activePlayer] += roundScore;
   document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
   document.querySelector('.dice-1').style.display = 'none';
   document.querySelector('.dice-2').style.display = 'none';
        var setScore;
         var input = document.getElementById('winning-score').value;
        if(input){
            setScore = input;
        }else{
            setScore = 100;
        }
       if(scores[activePlayer] >= setScore){
      document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
      document.getElementById('score-0').textContent = scores[0];
      document.getElementById('score-1').textContent = scores[1];
      document.getElementById('current-0').textContent = '0';
      document.getElementById('current-1').textContent = '0'; 
      document.querySelector('.player-'+ activePlayer+'-panel').classList.add('winner');     document.querySelector('.player-'+ activePlayer+'-panel').classList.remove('active');
           gamePlaying = false;
   }else{  
        nextPlayer();
    } 
    }
 });
document.querySelector('.btn-new').addEventListener('click', function(){
 alert('Starting a new game...');
 scores = [0, 0];
 roundScore = 0;
 activePlayer = 0;
 document.querySelector('.dice-1').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';
 nullVal();
    
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

    
    
});
function nextPlayer(){
         roundScore = 0;
         document.querySelector('#current-0').textContent = '0';
         document.querySelector('#current-1').textContent = '0';
         activePlayer === 0 ?  activePlayer = 1:  activePlayer = 0;
         document.querySelector('.player-0-panel').classList.toggle('active');
         document.querySelector('.player-1-panel').classList.toggle('active');
}





















































