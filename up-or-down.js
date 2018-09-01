'use strict';

function buildDom(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div.children[0];
}

function main() {

  var splashMain;
  var game; // instance of Game
  var gameOverMain;

  // -- splash

  function buildSplash() {

    splashMain = buildDom(`
    <main>
      <h1>Up or Down</h1>
      <button>Start</button>
    </main>
    `);

    document.body.appendChild(splashMain);

    var button = splashMain.querySelector('button');
    button.addEventListener('click', startGame);
  }

  function destroySplash() {
    splashMain.remove();
  }

  // --game

  function startGame() {
    destroySplash();
    destroyGameOver();

    game = new Game();
    game.start();
    game.onOver(function () {
      gameOver();
    })
  }

  function destroyGame() {
    game.destroy();
  }

    // -- game over

  function gameOver () {
    destroyGame();
    buildGameOver();
  }

  function buildGameOver( ) {

    // @todo score
    var score = 99;

    gameOverMain = buildDom(`
    <main>
    <h1>Game over</h1>
    <p><span></span></p>
    <button>Restart</button>
    </main>
    `);

    var button = gameOverMain.querySelector('button');
    button.addEventListener('click', startGame);    
    
    var span = gameOverMain.querySelector('span');
    span.innerText = username +' your score is: ' + score + ' !!!!';

    document.body.appendChild(gameOverMain);
  }

  function destroyGameOver() {
    if (gameOverMain) {
      gameOverMain.remove();
    }
  }

  // --initialize

  buildSplash();
}


window.addEventListener('load', main)
