

const game = () => {

	// Score set to 0
    let pScore = 0;
    let cScore = 0;
  
    // Start the Game
    const startGame = () => {
		const playBtn = document.querySelector(".intro button");
		const introScreen = document.querySelector(".intro");
		const match = document.querySelector(".match");
  
		playBtn.addEventListener("click", () => {
			introScreen.classList.add("fadeOut");
			match.classList.add("fadeIn");
		});
    };
	
    // Play game
    const playMatch = () => {
		const options = document.querySelectorAll(".options button");
		const playerHand = document.querySelector(".player-hand");
		const computerHand = document.querySelector(".computer-hand");
		const hands = document.querySelectorAll(".hands img");
  
		hands.forEach(hand => {
			hand.addEventListener("animationend", function() {
				this.style.animation = "";
			});
		});
	  
	  
		// Computer choices
		const computerOptions = ["rock", "paper", "scissors"];
  
		options.forEach(option => {
			option.addEventListener("click", function() {
          
			// Computer Choice
			const computerNumber = Math.floor(Math.random() * 3);
			const computerChoice = computerOptions[computerNumber];
  
			setTimeout(() => {
				// Compare hands
				compareHands(this.textContent, computerChoice);
           
				// Update hand image
				playerHand.src = `${this.textContent}.png`;
				computerHand.src = `${computerChoice}.png`;
			}, 2000);
          
			// Hand animation effects
			playerHand.style.animation = "shakePlayer 2s ease";
			computerHand.style.animation = "shakeComputer 2s ease";
			});
		});
    };
  
	// Update the scoreboard
    const updateScore = () => {
		const playerScore = document.querySelector(".player-score p");
		const computerScore = document.querySelector(".computer-score p");
		playerScore.textContent = pScore;
		computerScore.textContent = cScore;
    };
  
    // Update Text
    const compareHands = (playerChoice, computerChoice) => {

		const winner = document.querySelector(".winner");
      
		// Check hand condition
		if (playerChoice === computerChoice) {
			winner.textContent = "It is a tie";
			return;
		}
	  
		//Check for rock
		if (playerChoice === "rock") {
			if (computerChoice === "scissors") {
				winner.textContent = "Player Wins";
				pScore++;
				updateScore();
				return;
			} else {
				winner.textContent = "Computer Wins";
				cScore++;
				updateScore();
				return;
			}
		}
	  
		//Check for paper
		if (playerChoice === "paper") {
			if (computerChoice === "scissors") {
				winner.textContent = "Computer Wins";
				cScore++;
				updateScore();
				return;
			} else {
				winner.textContent = "Player Wins";
				pScore++;
				updateScore();
				return;
			}
		}
	  
		//Check for scissors
		if (playerChoice === "scissors") {
			if (computerChoice === "rock") {
				winner.textContent = "Computer Wins";
				cScore++;
				updateScore();
				return;
			} else {
				winner.textContent = "Player Wins";
				pScore++;
				updateScore();
			return;
			}
		}
    };
  
    // Let the game begin
    startGame();
    playMatch();
  };
  
  //start the game function
  game();