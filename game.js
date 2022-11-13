const playerOne = document.getElementById("one");
const playerTwo = document.getElementById("two");
const ball = document.getElementById("ball");

var width = window.innerWidth;
var height = window.innerHeight;

var x1 = 0;
var y1 = 0;
var velX1 = 0;
var velY1 = 0;

var x2 = 0;
var y2 = 0;
var velX2 = 0;
var velY2 = 0;

var ballX = 100;
var ballY = 100;
var ballVelX = 0;
var ballVelY = 0;

const maxSpeed = width / 800;
const maxBallSpeed = width / 500;

var left1, right1, up1, down1;
var left2, right2, up2, down2;

/*window.addEventListener("keydown", function(event) {
    if (event.key == "d"){
        velX1 +=1;
        if(velX1 > maxSpeed) {
            velX1 = maxSpeed;
        }
    }
});*/

document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 68) {
        left1 = true;
    }
    if (evt.keyCode === 65) {
        right1 = true;
    }
    if (evt.keyCode === 83) {
        up1 = true;
    }
    if (evt.keyCode === 87) {
        down1 = true;
    }

    if (evt.keyCode === 39) {
        left2 = true;
    }
    if (evt.keyCode === 37) {
        right2 = true;
    }
    if (evt.keyCode === 40) {
        up2 = true;
    }
    if (evt.keyCode === 38) {
        down2 = true;
    }
});

document.addEventListener('keyup', function (evt) {
    if (evt.keyCode === 68) {
        left1 = false;
    }
    if (evt.keyCode === 65) {
        right1 = false;
    }
    if (evt.keyCode === 83) {
        up1 = false;
    }
    if (evt.keyCode === 87) {
        down1 = false;
    }

    if (evt.keyCode === 39) {
        left2 = false;
    }
    if (evt.keyCode === 37) {
        right2 = false;
    }
    if (evt.keyCode === 40) {
        up2 = false;
    }
    if (evt.keyCode === 38) {
        down2 = false;
    }
});

(function () {
    (function update() {

        width = window.innerWidth;
        height = window.innerHeight;

        x1 += velX1;
        y1 += velY1;
        playerOne.style.transform = `translate(${x1}px,${y1}px)`;
        velX1 /= 1.025;
        velY1 /= 1.025;

        x2 += velX2;
        y2 += velY2;
        playerTwo.style.transform = `translate(${x2}px,${y2}px)`;
        velX2 /= 1.025;
        velY2 /= 1.025;

        ballX += ballVelX;
        ballY += ballVelY;
        ball.style.transform = `translate(${ballX}px,${ballY}px)`;
        ballVelX /= 1.005;
        ballVelY /= 1.005;

        if (left1) {
            velX1 += 1;
            if (velX1 > maxSpeed) {
                velX1 = maxSpeed;
            }
        }
        if (right1) {
            velX1 -= 1;
            if (velX1 < maxSpeed * -1) {
                velX1 = maxSpeed * -1;
            }
        }
        if (up1) {
            velY1 += 1;
            if (velY1 > maxSpeed) {
                velY1 = maxSpeed;
            }
        }
        if (down1) {
            velY1 -= 1;
            if (velY1 < maxSpeed * -1) {
                velY1 = maxSpeed * -1;
            }
        }

        if (left2) {
            velX2 += 1;
            if (velX2 > maxSpeed) {
                velX2 = maxSpeed;
            }
        }
        if (right2) {
            velX2 -= 1;
            if (velX2 < maxSpeed * -1) {
                velX2 = maxSpeed * -1;
            }
        }
        if (up2) {
            velY2 += 1;
            if (velY2 > maxSpeed) {
                velY2 = maxSpeed;
            }
        }
        if (down2) {
            velY2 -= 1;
            if (velY2 < maxSpeed * -1) {
                velY2 = maxSpeed * -1;
            }
        }

        if (x1 < 0) {
            x1 += maxSpeed;
        }
        if (x1 + (width * 0.1) + (width * 0.03) > width * 0.9) {
            x1 -= maxSpeed;
        }
        if (y1 < 0) {
            y1 += maxSpeed;
        }
        if (y1 + (height * 0.175) + (width * 0.03) > height * 0.975) {
            y1 -= maxSpeed;
        }

        if (x2 < 0) {
            x2 += maxSpeed;
        }
        if (x2 + (width * 0.1) + (width * 0.03) > width * 0.9) {
            x2 -= maxSpeed;
        }
        if (y2 < 0) {
            y2 += maxSpeed;
        }
        if (y2 + (height * 0.175) + (width * 0.03) > height * 0.975) {
            y2 -= maxSpeed;
        }

        if (ballX < 0) {
            ballX += maxSpeed;
            ballVelX = Math.abs(ballVelX);
        }
        if (ballX + (width * 0.1) + (width * 0.02) > width * 0.9) {
            ballX -= maxSpeed;
            ballVelX = Math.abs(ballVelX) * -1;
        }
        if (ballY < 0) {
            ballY += maxSpeed;
            ballVelY = Math.abs(ballVelY);
        }
        if (ballY + (height * 0.175) + (width * 0.02) > height * 0.975) {
            ballY -= maxSpeed;
            ballVelY = Math.abs(ballVelY) * -1;
        }

        if (ballVelY > maxBallSpeed) {
            ballVelY = maxBallSpeed;
        }
        if (ballVelY < maxBallSpeed * -1) {
            ballVelY = maxBallSpeed * -1;
        }
        if (ballVelX > maxBallSpeed) {
            ballVelX = maxBallSpeed;
        }
        if (ballVelX < maxBallSpeed * -1) {
            ballVelX = maxBallSpeed * -1;
        }

        getCollisions();

        setTimeout(update, 0);
    })();
})();

function getCollisions() {
    if (Math.abs(((ballX + width * 0.01) - (x1 + width * 0.015)) ^ 2) + Math.abs(((ballY + width * 0.01) - (y1 + width * 0.015)) ^ 2) < width * 0.03) {
        ballVelX += (ballX - x1) / 5;
        ballVelY += (ballY - y1) / 5;
    }

    if (Math.abs(((ballX + width * 0.01) - (x2 + width * 0.015)) ^ 2) + Math.abs(((ballY + width * 0.01) - (y2 + width * 0.015)) ^ 2) < width * 0.03) {
        ballVelX += (ballX - x2) / 5;
        ballVelY += (ballY - y2) / 5;
    }
}