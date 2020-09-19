var scores, roundScore, activePlayer, gamePlaying;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;
function nullVal(){
  gamePlaying = true;  
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0'; 
}
document.querySelector('.dice').style.display = 'none';
nullVal();
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
    var dice = Math.floor(Math.random() * 6) + 1;
    console.log("dice is "+dice);
    var diceDOM = document.querySelector('.dice');  
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+dice+'.png';
    if(dice > 1){
        roundScore+=dice;
        document.querySelector('.dice').style.display = 'block';
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        console.log("sum is "+roundScore);
        }else{
           document.querySelector('.dice').style.display = 'block';
           nextPlayer();
          
    }
     }
   });
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
   scores[activePlayer] += roundScore;
   document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
   document.querySelector('.dice').style.display = 'none';
       if(scores[activePlayer] >= 100){
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
 document.querySelector('.dice').style.display = 'none';
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





















































