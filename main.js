// видимість меню вибору погоди
let menuVisible = false;

settingsButton.onclick = function () {
    if (menuVisible == false) {
        settingsMenu.style.display = 'flex';
        menuVisible = true;
    } else {
        settingsMenu.style.display = 'none';
        menuVisible = false;
    }
}

// Змінити погоду
sun.onclick = function () {
    wrap.style.backgroundImage = 'url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/01073865290819.5d61d475f0072.jpg)';
    road.style.backgroundImage = 'url(/img/road_day.png)';
    settingsButton.style.backgroundImage = 'url(/img/settingsDark.png)';
    settingsMenu.style.display = 'none';
    menuVisible = false;
    carImg.src = `img/car${selectedCar}.png`;
    headlight = false;
    caralertOn = false;
}

rain.onclick = function () {
    wrap.style.backgroundImage = 'url(https://static.vecteezy.com/system/resources/previews/000/420/025/large_2x/vector-background-scene-with-rain-and-thunders.jpg)';
    settingsButton.style.backgroundImage = 'url(/img/settingsWhite.png)';
    road.style.backgroundImage = 'url(/img/road_rain.png)';
    settingsMenu.style.display = 'none';
    menuVisible = false;
    carImg.src = `img/car${selectedCar}_night.png`;
    headlight = true;
    caralertOn = false;
}

night.onclick = function () {
    wrap.style.backgroundImage = 'url(https://i.pinimg.com/originals/c3/c8/77/c3c877175a3491f097c02b8eba2416df.jpg)';
    settingsButton.style.backgroundImage = 'url(/img/settingsWhite.png)';
    road.style.backgroundImage = 'url(/img/road_night.png)';
    settingsMenu.style.display = 'none';
    menuVisible = false;
    carImg.src = `img/car${selectedCar}_night.png`;
    headlight = true;
    caralertOn = false;
}

// Видимість вікна вибору машини
let carCangeVisible = false;

carChange.onclick = function () {
    if (carCangeVisible == false) {
        chooseCar.style.display = 'flex';
        carCangeVisible = true;
    } else {
        chooseCar.style.display = 'none';
        carCangeVisible = false;
    }
}


// Змінити машину
let selectedCar = 2;
let correctPassword = 'c2123'; // Замініть 'your_password' на реальний пароль

car_1.onclick = () => {
    // car.style.backgroundImage = 'url(img/car1.png)';
    carImg.src = 'img/car1.png';
    carName.innerText = 'Marcedes-Benz c63amg';
    selectedCar = 1;
    chooseCar.style.display = 'none';
    carCangeVisible = false;
    correctPassword = 'c1123';
    codeTxt.innerHTML = 'code: <br>c1123';


    carSalon.style.backgroundImage = 'url(img/c1_salon.jpg)';
    carSalon.style.backgroundPositionY = '0';
    bardachokOpenButton.style.top = '48%';
    bardachokOpenButton.style.right = '15%';
    bardachokOpen.style.backgroundImage = 'url(img/bardachok1.jpg)';
    bardachokOpen.style.backgroundPositionY = '-200px';
    envelopeButton.style.height = '100%';
    envelopeButton.style.width = '250px';
    envelopeButton.style.top = '0';
    envelopeButton.style.right = '20%';
    envelopeButton.style.transform = 'rotate(-55deg)';
}

car_2.onclick = () => {
    // car.style.backgroundImage = 'url(img/car2.png)';
    carImg.src = 'img/car2.png';
    carName.innerText = 'Marcedes-Benz s550';
    selectedCar = 2;
    chooseCar.style.display = 'none';
    carCangeVisible = false;
    correctPassword = 'c2123';
    codeTxt.innerHTML = 'code: <br>c2123';


    carSalon.style.backgroundImage = 'url(img/c2_salon.jpg)';
    carSalon.style.backgroundPositionY = '0';
    bardachokOpenButton.style.top = '47%';
    bardachokOpenButton.style.right = '15%';
    bardachokOpen.style.backgroundImage = 'url(img/bardachok2.jpg)';
    bardachokOpen.style.backgroundPositionY = '0'
    envelopeButton.style.height = '170px';
    envelopeButton.style.width = '570px';
    envelopeButton.style.top = '45%';
    envelopeButton.style.right = '25%';
    envelopeButton.style.transform = 'rotate(0deg)';
}

car_3.onclick = () => {
    // car.style.backgroundImage = 'url(img/car3.png)';
    carImg.src = 'img/car3.png';
    carName.innerText = 'Marcedes-Benz c43img';
    selectedCar = 3;
    chooseCar.style.display = 'none';
    carCangeVisible = false;
    correctPassword = 'c3123';
    codeTxt.innerHTML = 'code: <br>c3123';


    carSalon.style.backgroundImage = 'url(img/c3_salon.jpg)';
    carSalon.style.backgroundPositionY = '-40px';
    bardachokOpenButton.style.top = '50%';
    bardachokOpenButton.style.right = '17%';
    bardachokOpen.style.backgroundImage = 'url(img/bardachok3.jpg)';
    bardachokOpen.style.backgroundPositionY = '-150px';
    envelopeButton.style.height = '330px';
    envelopeButton.style.width = '800px';
    envelopeButton.style.top = '20%';
    envelopeButton.style.right = '25%';
    envelopeButton.style.transform = 'rotate(10deg)';
}

car_4.onclick = () => {
    // car.style.backgroundImage = 'url(img/car4.png)';
    carImg.src = 'img/car4.png'
    carName.innerText = 'Marcedes-Benz g550amg';
    selectedCar = 4;
    chooseCar.style.display = 'none';
    carCangeVisible = false;
    correctPassword = 'c4123';
    codeTxt.innerHTML = 'code: <br>c4123';


    carSalon.style.backgroundImage = 'url(img/c4_salon.jpg)';
    carSalon.style.backgroundPositionY = '0';
    bardachokOpenButton.style.top = '53%';
    bardachokOpenButton.style.right = '17%';
    bardachokOpen.style.backgroundImage = 'url(img/bardachok4.jpg)';
    bardachokOpen.style.backgroundPositionY = '0px';
    envelopeButton.style.height = '200px';
    envelopeButton.style.width = '500px';
    envelopeButton.style.top = '40%';
    envelopeButton.style.right = '10px';
    envelopeButton.style.transform = 'rotate(18deg)';
}


// Ввімкнути-вимкнути фари
let headlight = false;

carHeadLights.onclick = () => {
    if (headlight == false) {
        carImg.src = `img/car${selectedCar}_night.png`;
        // car.style.backgroundImage = `url(img/car${selectedCar}_night.png)`;
        headlight = true;
        caralertOn = false;
    }
    else {
        carImg.src = `img/car${selectedCar}.png`;
        // car.style.backgroundImage = `url(img/car${selectedCar}.png) `;
        headlight = false;
    }
}
// Ввімкнути-вимкнути аварійку
let caralertOn = false;

carAlert.onclick = () => {
    if (caralertOn == false) {
        carImg.src = `img/car${selectedCar}_a.png`;
        // car.style.backgroundImage = `url(img/car${selectedCar}_a.png)`;
        caralertOn = true;
        headlight = false;
    }
    else {
        carImg.src = `img/car${selectedCar}.png`;
        // car.style.backgroundImage = `url(img/car${selectedCar}.png)`;
        caralertOn = false;
    }
}
// Розвернути машину на 180градусів
let directionInfo = false;
direction.onclick = () => {
    if (directionInfo == false) {
        car.style.transform = 'scale(-1, 1)';
        directionInfo = true;
    }
    else {
        car.style.transform = 'scale(1, 1)';
        directionInfo = false;
    }
}


// Змінити швидкість/передачу машини
let speed = Number;
let time = 100;

transfer_1.onclick = function () {
    speed = 5;
    applyColors(1);
};
transfer_2.onclick = function () {
    speed = 10;
    applyColors(2);
};
transfer_3.onclick = function () {
    speed = 15;
    applyColors(3);
};
transfer_4.onclick = function () {
    speed = 20;
    applyColors(4);
};
transfer_5.onclick = function () {
    speed = 25;
    applyColors(5);
};
transfer_6.onclick = function () {
    speed = 30;
    applyColors(6);
};


// Функція для обробки подій клавіатури
function handleKeyPress(event) {
    if (isPasswordPopupVisible != true) {
        if (engaineOn) {
            // Отримуємо код клавіші
            const key = event.key;

            // Перевіряємо, чи натискана клавіша є цифрою (від 0 до 9)
            if (/^[0-6]$/.test(key)) {
                // Якщо так, оновлюємо значення speed
                applyColors(parseInt(key, 10));
                speed = parseInt(key, 10) * 5; // Конвертуємо рядок в число
                // console.log('Нове значення speed:', speed);
            }
        }
    }
}

// Додаємо обробник подій до документу
document.addEventListener('keydown', handleKeyPress);

// Змінити колір Pover коли змінюється передача
let colors = ['#6DCBFF', '#00CA14', '#ffff00', '#FF9900', '#FF0000', '#8B0000'];
function applyColors(transfer) {
    speed_1.style.backgroundColor = '';
    speed_2.style.backgroundColor = '';
    speed_3.style.backgroundColor = '';
    speed_4.style.backgroundColor = '';
    speed_5.style.backgroundColor = '';
    speed_6.style.backgroundColor = '';

    if (transfer >= 1) { speed_1.style.backgroundColor = colors[0]; }
    if (transfer >= 2) { speed_2.style.backgroundColor = colors[1]; }
    if (transfer >= 3) { speed_3.style.backgroundColor = colors[2]; }
    if (transfer >= 4) { speed_4.style.backgroundColor = colors[3]; }
    if (transfer >= 5) { speed_5.style.backgroundColor = colors[4]; }
    if (transfer >= 6) { speed_6.style.backgroundColor = colors[5]; }
};


// const speedFactor = 0.1; // Фактор швидкості

const container = document.getElementById('road');
const car = document.getElementById('car');

const carWidth = car.offsetWidth;
const carHeight = car.offsetHeight;

let roadBottomY = road.offsetTop + road.offsetHeight;

let curentX = 10;
let curentY1 = roadBottomY - carHeight * 2;
let curentY = curentY1;

let positionYAdd = false;
let positionYSubtract = false;

let engaineOn = false;

car.style.top = curentY + 'px';

// Вспливаюче вікно для введення пароля
let passwordPopup = document.getElementById('passwordPopup');
let passwordInput = document.getElementById('passwordInput');
let confirmPasswordButton = document.getElementById('confirmPasswordButton');



// Вікно заведення машини
let engainePopup = document.getElementById('engainePopup');

// Відображення вікна введення пароля при першому заведенні
let isFirstStart = true;
let isPasswordPopupVisible = false;

// Заведення машини
engaine.addEventListener('click', function () {
    if (engaineOn == false) {
        if (isFirstStart == true) {
            passwordPopup.style.display = 'block';
            isPasswordPopupVisible = true;
            // Додаємо обробник події для кнопки підтвердження пароля
            confirmPasswordButton.onclick = function () {


                const enteredPassword = document.getElementById('passwordInput').value;

                if (enteredPassword === correctPassword) {
                    engaine.style.backgroundImage = 'url(/img/test-drive-on.png)';
                    car.style.animation = 'tremble 0.5s infinite';
                    transmissionNotEngaine.style.display = 'none';
                    controlButtonsNotEngaine.style.display = 'none';
                    carHeadLightsNotEngaine.style.display = 'none';
                    engaineOn = true;
                    speed = 0;
                    applyColors(0);

                    // При правильному паролі закриваємо вікно введення пароля
                    passwordPopup.style.display = 'none';
                    isFirstStart = false; // Встановлюємо прапорець, що пароль вже був введений
                    isPasswordPopupVisible = false;
                } else {
                    // Вивести повідомлення про невірний пароль
                    alert("Incorrect password. Try again.");
                }
            }
        } else {
            engaine.style.backgroundImage = 'url(/img/test-drive-on.png)';
            car.style.animation = 'tremble 0.5s infinite';
            transmissionNotEngaine.style.display = 'none';
            controlButtonsNotEngaine.style.display = 'none';
            carHeadLightsNotEngaine.style.display = 'none';
            engaineOn = true;
            speed = 0;
            applyColors(0);
        }
    } else {
        engaine.style.backgroundImage = 'url(/img/test-drive-off.png)'
        car.style.animation = '';
        transmissionNotEngaine.style.display = 'flex';
        controlButtonsNotEngaine.style.display = 'flex';
        carHeadLightsNotEngaine.style.display = 'flex';
        engaineOn = false;
        speed = 0;
        applyColors(0);
    }
});


let fl = false;
let fr = false;
let ft = false;
let fb = false;
// Рух машини + Рух машини по колу
function moveCar(directionX, directionY) {
    curentX += directionX;
    curentY += directionY;

    // console.log(curentY);

    car.style.left = curentX + 'px';
    car.style.top = curentY + 'px';

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Перевірки чи машина в рамках дороги
    if (curentX < 0 - carWidth) {
        curentX = containerWidth;
    }
    else if (curentX > containerWidth) {
        curentX = -carWidth;
    }

    if (speed == 5) { positionCheck(5); }
    if (speed == 10) { positionCheck(10); }
    if (speed == 15) { positionCheck(15); }
    if (speed == 20) { positionCheck(25); }
    if (speed == 25) { positionCheck(25); }
    if (speed == 30) { positionCheck(35); }
};
// Перевірки чи машина в рамках дороги
function positionCheck(editingPositionY) {
    if (curentY + carHeight > roadBottomY - editingPositionY) {
        curentY = roadBottomY - carHeight - editingPositionY;
        positionYAdd = true;
        positionYSubtract = false;
    }
    else if (curentY < curentY1) {
        curentY = curentY1;
        positionYSubtract = true;
        positionYAdd = false;
    }
};

// Функція alert("Engaine = off")
function showPopupEngaine() {
    // Показати спливаюче вікно, коли машина вимкнена
    popup1.classList.add('show'); // Замінено стилізований display на клас

    // Закрити спливаюче вікно через 3 секунди (3000 мілісекунд)
    setTimeout(function () {
        popup1.classList.remove('show'); // Замінено стилізований display на клас
    }, 3000);
}
// Функція alert("Engaine = off")
function showPopupSpeed() {
    // Показати спливаюче вікно, коли швидкість дорівнює 0
    popup.classList.add('show'); // Замінено стилізований display на клас

    // Закрити спливаюче вікно через 3 секунди (3000 мілісекунд)
    setTimeout(function () {
        popup.classList.remove('show'); // Замінено стилізований display на клас
    }, 3000);

    // Заборонити рух при speed == 0
    // event.preventDefault();
}
// Закрити вікно пароля
closePasswordPopup.onclick = () => {
    passwordPopup.style.display = 'none'
}

// Обробник подій для кнопок руху
document.addEventListener('keydown', function (event) {
    if (isPasswordPopupVisible != true) {
        if (Number.isNaN(speed)) {
            speed = 5;
        }
        if (engaineOn == true && speed != 0) {
            if (event.key === 'ArrowLeft') {
                if (fl == false) {
                    isGoLeftPressed = true;
                    moveCarLeft();
                    fl = true;
                }
            } else if (event.key === 'ArrowRight') {
                if (fr == false) {
                    isGoRightPressed = true;
                    moveCarRight();
                    fr = true;
                    console.log("a");
                }

            } else if (event.key === 'ArrowUp') {
                if (ft == false) {
                    isGoTopPressed = true;
                    moveCarTop();
                    ft = true;
                }
            } else if (event.key === 'ArrowDown') {
                if (fb == false) {
                    isGoBottomPressed = true;
                    moveCarBottom();
                    fb = true;
                }
            }
            console.log(engaineOn, speed);

        } else if (engaineOn == false) {
            showPopupEngaine();
        } else {
            showPopupSpeed();
        }
    } else {
        popup1.style.display = 'none'
    }

});
document.addEventListener('keyup', function (event) {
    if (event.key === 'ArrowLeft') {
        isGoLeftPressed = false;
        fl--
    } else if (event.key === 'ArrowRight') {
        isGoRightPressed = false;
        fr--
    } else if (event.key === 'ArrowUp') {
        isGoTopPressed = false;
        ft--
    } else if (event.key === 'ArrowDown') {
        isGoBottomPressed = false;
        fb--
    }
});





let isGoLeftPressed = false;
let isGoRightPressed = false;
let isGoTopPressed = false;
let isGoBottomPressed = false;

// рух вліво
go_left.addEventListener('mousedown', function () {
    if (speed != 0) {
        isGoLeftPressed = true;
        moveCarLeft(); // Запускає функцію при натисканні
    }
    else {
        // Показати спливаюче вікно
        popup.classList.add('show'); // Замінено стилізований display на клас

        // Закрити спливаюче вікно через 3 секунди (3000 мілісекунд)
        setTimeout(function () {
            popup.classList.remove('show'); // Замінено стилізований display на клас
        }, 3000);
    }
});
go_left.addEventListener('mouseup', function () {
    isGoLeftPressed = false;
});
go_left.addEventListener('mouseout', function () {
    isGoLeftPressed = false;
});
// Функція для руху вліво
function moveCarLeft() {
    if (isGoLeftPressed == true) {
        if (positionYAdd == true) {
            curentY = curentY + speed * 0.5;
            positionYAdd = false;
        }
        if (positionYSubtract == true) {
            curentY = curentY - speed * 0.5;
            positionYSubtract = false;
        }
        moveCar(-speed * 0.5, 0); // Викликається функція руху з певними параметрами
        requestAnimationFrame(moveCarLeft); // Рекурсивно викликає функцію для плавного руху
    }
};



// Рух вправо
go_right.addEventListener('mousedown', function () {
    if (speed != 0) {
        isGoRightPressed = true;
        moveCarRight(); // Запускає функцію при натисканні
    }
    else {
        // Показати спливаюче вікно
        popup.classList.add('show'); // Замінено стилізований display на клас

        // Закрити спливаюче вікно через 3 секунди (3000 мілісекунд)
        setTimeout(function () {
            popup.classList.remove('show'); // Замінено стилізований display на клас
        }, 3000);
    }
});
go_right.addEventListener('mouseup', function () {
    isGoRightPressed = false;
});
go_right.addEventListener('mouseout', function () {
    isGoRightPressed = false;
});

// Функція для руху вправо
function moveCarRight() {
    if (isGoRightPressed == true) {
        if (positionYAdd == true) {
            curentY = curentY + speed * 0.5;
            positionYAdd = false;
        }
        if (positionYSubtract == true) {
            curentY = curentY - speed * 0.5;
            positionYSubtract = false;
        }


        moveCar(speed * 0.5, 0); // Викликається функція руху з певними параметрами
        requestAnimationFrame(moveCarRight); // Рекурсивно викликає функцію для плавного руху
    }
};



// Рух вверх
go_top.addEventListener('mousedown', function () {
    if (speed != 0) {
        isGoTopPressed = true;
        moveCarTop(); // Запускає функцію при натисканні
    }
    else {
        // Показати спливаюче вікно
        popup.style.display = 'block';
        // Закрити спливаюче вікно через 3 секунди (3000 мілісекунд)
        setTimeout(function () {
            popup.style.display = 'none';
        }, 3000);
    }
});
go_top.addEventListener('mouseup', function () {
    isGoTopPressed = false;
});
go_top.addEventListener('mouseout', function () {
    isGoTopPressed = false;
});

// Функція для руху вверх
function moveCarTop() {
    if (isGoTopPressed == true) {
        moveCar(0, -speed * 0.5); // Викликається функція руху з певними параметрами
        requestAnimationFrame(moveCarTop); // Рекурсивно викликає функцію для плавного руху
    }
};



// Рух вниз
go_bottom.addEventListener('mousedown', function () {
    if (speed != 0) {
        isGoBottomPressed = true;
        moveCarBottom(); // Запускає функцію при натисканні
    }
    else {
        // Показати спливаюче вікно
        popup.classList.add('show'); // Замінено стилізований display на клас

        // Закрити спливаюче вікно через 3 секунди (3000 мілісекунд)
        setTimeout(function () {
            popup.classList.remove('show'); // Замінено стилізований display на клас
        }, 3000);
    }
});
go_bottom.addEventListener('mouseup', function () {
    isGoBottomPressed = false;
});
go_bottom.addEventListener('mouseout', function () {
    isGoBottomPressed = false;
});
// Функція для руху вниз
function moveCarBottom() {
    if (isGoBottomPressed == true) {
        moveCar(0, speed * 0.5); // Викликається функція руху з певними параметрами
        requestAnimationFrame(moveCarBottom); // Рекурсивно викликає функцію для плавного руху
    }
};



// Відкриття / закриття салону
carSalonButton.onclick = () => {
    carSalon.style.display = 'flex';
    bardachokOpen.style.display = 'none';
    passwordPopup.style.display = 'none';
};
closeSalon.onclick = () => {
    carSalon.style.display = 'none';
    if (isPasswordPopupVisible == true) {
        passwordPopup.style.display = 'block';
    }
};

// Відкриття / закриття Бардачка
let bardachokIsOpen = false;
bardachokOpenButton.onclick = () => {
    bardachokOpen.style.display = 'flex';
    bardachokIsOpen = true;
};
closeBardachok.onclick = () => {
    if (bardachokIsOpen == true) {
        bardachokOpen.style.display = 'none';
        bardachokIsOpen = false;
    }
};

// Відкриття / закриття конверта
envelopeButton.onclick = () => {
    envelope.style.display = 'flex';
    closeBardachok.style.display = 'none';
    closeEnvelope.style.display = 'flex';
    // envelopeOpen = true;
};
closeEnvelope.onclick = () => {
    envelope.style.display = 'none';
    closeBardachok.style.display = 'flex';
    closeEnvelope.style.display = 'none';
};


// document.addEventListener('keydown', function (event) {
//     var key = event.key;
//     var numericValue = parseInt(key);
//     applyColors(numericValue);
//     speed = numericValue * 5
//     // if (engaineOn == true) {
//     //     // Перевірка, чи натискана клавіша є числовою і в діапазоні від 1 до 6
//     //     if (!isNaN(numericValue) && numericValue >= 1 && numericValue <= 6) {
//     //         if (engaineOn == false) {
//     //             popup1.classList.remove('show');
//     //             // Заборонити рух при вимкненій машині
//     //             event.preventDefault();
//     //         } else if (speed == 0) {

//     //             popup1.classList.remove('show');
//     //             // Заборонити рух при speed == 0
//     //             event.preventDefault();
//     //         } else {

//     //         }
//     //     }
//     // }
// });























// document.addEventListener('keydown', function(event) {
//     // Отримання коду клавіші
//     var keyCode = event.keyCode || event.which;

//     // Вивід коду клавіші у консоль
//     console.log('Код клавіші: ' + keyCode);

//     // Приклад перевірки для кнопок цифр (0-9)
//     if (keyCode >= 48 && keyCode <= 57) {
//         console.log('Натиснута кнопка цифри: ' + String.fromCharCode(keyCode));
//     }
// });




// document.addEventListener('keydown', function(event) {
//     var keyName = event.code;
//     console.log(keyName);
// });