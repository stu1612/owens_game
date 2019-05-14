//Global Variables
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');
const botDoorPath = "https://d1muy2ct2wkbaz.cloudfront.net/profile/c/5/newsflare_dXvolj78oZaGx3KfIZlpizmJN_400.jpeg";
const beachDoorPath = "http://www.rainbowseniorcenter.com/wp-content/uploads/2013/05/Penguins-400x400.jpg";
const spaceDoorPath = "http://www.rainbowseniorcenter.com/wp-content/uploads/2013/05/Penguins-400x400.jpg";
let closedDoorPath = "http://www.uni-siegen.de/start/news/images_new/2017/loewe_thumbb.jpg";
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;
//Script functionality



//game ending function
const isBot = (door) => {
  if(door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
}

//function to ensure doors are clickable just once
const isClicked = (door) => {
  if(door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
}

//determine winner function
const playDoor = (door) => {
  numClosedDoors--;
  if(numClosedDoors === 0) {
  gameOver('win');
} else if (isBot(door)) {
  gameOver('lose');
	}
}


// math random fucntion to generate number sequence
randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
    openDor1 = spaceDoorPath;
  } else { (choreDoor === 2)
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
}

//Open (onclick) door function
door1.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage1)) {
  doorImage1.src = openDoor1;
  playDoor (door1);
  }
}

door2.onclick = () => {
	if(currentlyPlaying && !isClicked(doorImage2)) {
  doorImage2.src = openDoor2;
  playDoor (door2);
  }
}

door3.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage3)) {
  doorImage3.src = openDoor3;
  playDoor (door3);
  }
}

startButton.onclick = () => {
  if(!currentlyPlaying) {
  startRound();
	}
}


const startRound = () => {
  numClosedDoors = 3;
  door1.src = closedDoorPath;
  door2.src = closedDoorPath;
  door3.src = closedDoorPath;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

const gameOver = (status) => {
  if(status === 'win') {
    startButton.innerHTML = 'You win! Play again?'
  } else {
    startButton.innerHTML = 'Game over! Play again?'
  }
  currentlyPlaying = false;
}


startRound ();
