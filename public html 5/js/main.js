
// Функция проверок на ошибки
function errorСhecking(variable){

    let isObject = ['Машины','Животные','Игры']

    if(variable==='' || variable===null || !isObject.includes(variable))
    {
        let practWork1 = document.querySelector('.practical-work-1')

        let resultConsole = document.createElement('div')                // Где будет заголовок и результат
        resultConsole.className = 'result-console'
        practWork1.appendChild(resultConsole)
        
        let resultConsoleHeading = document.createElement('h3')         // Заголовок 
        resultConsoleHeading.className = 'result-console-heading'
        resultConsole.appendChild(resultConsoleHeading)
        
        let showResultConsole = document.createElement('div')          // Результат 
        showResultConsole.className = 'show-result-console'
        resultConsole.appendChild(showResultConsole) 

        resultConsoleHeading.textContent = 'Console ERROR'
        if(typeof variable === 'string' && variable==''){ // Проверка на пустую строку
            showResultConsole.innerHTML = '<p>Поле <span>promt()</span> === "" | Поле не должно быть пустым!</p>'
        }
        else if (variable != 'object' && variable===null){ // Проверка на null
            showResultConsole.innerHTML = '<p>Поле <span>promt()</span> === null | Поле не должно быть равным нулю!</p>'
        }
        else if (!isObject.includes(variable)){ // Проверка на существование объекта
            showResultConsole.innerHTML = `<p>Объекта <span>${variable}</span> не существует | Проверьте написание объекта!</p>`
        }
    }
}



// Создание и заполнение обюъекта
const messagePromt = {
    car: 'Машины',
    animal: 'Животные',
    games: 'Игры',
}
Object.freeze(messagePromt)

let message = prompt(`Какие фотографии вы хотите посмотреть?\n${messagePromt.car}, ${messagePromt.animal}, ${messagePromt.games}`)
errorСhecking(message)

// message = ('Машины') ? console.log(`Успешно загружены фотографии из каталога ${message}`) : 
// ('Животные') ? console.log(`Успешно загружены фотографии из каталога ${message}`) :  
// ('Игры') ? console.log(`Успешно загружены фотографии из каталога ${message}`) : alert(`Каталога ${message} не существует!`)



// Помещение в div элемента div1  
let div = document.querySelector('.result-practical-work-1');

let div1 = document.createElement('div');
div1.className = 'wrapper-catalog';
div.appendChild(div1);

// Создание многоуровневых массивов
const cars = {
    'id:1': {
        heading: "LADA GRANTA CLASSIC'22",
        src_img: 'img/cars1.png',
        content: '<ul><li>Электропривод и обогрев наружных зеркал</li><li>Электроусилитель рулевого управления</li><li>Электростеклоподъемники передних дверей</li><li>Регулируемая по высоте рулевая колонка</li></ul>',
    },
    'id:2': {
        heading: 'LADA VESTA COMFORT LIGHT',
        src_img: 'img/cars2.png',
        content: '<ul><li>Сиденье водителя с регулировкой по высоте и поясничной поддержкой</li><li>Подогрев передних сидений</li><li>Датчики парковки задние</li><li>Аудиоподготовка</li></ul>',
    },
    'id:3': {
        heading: 'LADA LARGUS LUXE',
        src_img: 'img/cars3.png',
        content: '<ul><li>Камера заднего вида</li><li>Датчики дождя и света</li><li>Круиз-контроль и ограничитель скорости</li><li>Обогрев ветрового стекла в пакете Prestige</li></ul>',
    },
}

const animals = {
    'id:1' : {
        heading: "Малый Веретенник",
        src_img: 'img/animals1.jpg',
        content: 'Официальное название птицы – Limosa lapponica. Малый веретенник относится к семейству бекасовых. Внешне он похож на вид большого веретенника, только не имеет такого массивного тела. Популяция обитает неподалеку от водоемов, мигрирует в зимний период.',
    },
    'id:2' : {
        heading: 'Малый Черноголовый Дубонос',
        src_img: 'img/animals2.jpg',
        content: 'Официальное название популяции – Eophona migratoria. Малый черноголовый дубонос отличается небольшим размером, укороченным клювом яркого цвета. У взрослой особи длинный хвост, высокая скорость полета. Для обитания вид выбирает лесистую местность.',
    },
    'id:3' : {
        heading: 'Сизоворонка',
        src_img: 'img/animals3.jpg',
        content: 'Официальное название птицы – Coracias garrulus. Сизоворонка отличается ярким окрасом, небольшим весом. Размером вид похож на дрозда. Другие названия птицы: ракша, обыкновенная сизоворонка. Местом обитания является степь.',
    },
}

const games = {
    'id:1' : {
        heading: "RUST",
        src_img: 'img/games1.jpg',
        content: 'The only aim in Rust is to survive.Everything wants you to die - the island’s wildlife and other inhabitants, the environment, other survivors. Do whatever it takes to last another night.',
    },
    'id:2' : {
        heading: 'Ruft',
        src_img: 'img/games2.jpg',
        content: 'Raft throws you and your friends into an epic oceanic adventure! Alone or together, players battle to survive a perilous voyage across a vast sea! Gather debris, scavenge reefs and build your own floating home, but be wary of the man-eating sharks!',
    },
    'id:3' : {
        heading: 'The Forest',
        src_img: 'img/games3.jpg',
        content: 'As the lone survivor of a passenger jet crash, you find yourself in a mysterious forest battling to stay alive against a society of cannibalistic mutants. Build, explore, survive in this terrifying first person survival horror simulator.',
    },
}

// message = ('Машины') ? console.log(Object.values(cars)) : 
// ('Животные') ? console.log(Object.values(animals)) :  
// ('Игры') ? console.log(Object.values(games)) : alert(`Каталога ${message} не существует!`)

// Вывод в консоль
if (message == 'Машины') {
    console.log(`Успешно загружены фотографии из каталога ${message}`)
    console.log(Object.values(cars))
} else if (message == 'Животные') {
    console.log(`Успешно загружены фотографии из каталога ${message}`)
    console.log(Object.values(animals))
} else if (message == 'Игры') {
    console.log(`Успешно загружены фотографии из каталога ${message}`)
    console.log(Object.values(games))
} else {
  alert(`Каталога ${message} не существует!`)
}

// Создание элементов для заголовка и объектов
let h3 = document.createElement('h3'); // Заголовок типа: Каталог - Машины
div1.appendChild(h3);

let cards = document.createElement('div') // Элемент для хранения карточек
cards.className = 'cards'
div1.appendChild(cards)

h3.innerHTML = `Каталог - <span class="heading-catalog">${message}</span>`;
switch (message) {

    case 'Машины':
        
        let itemCar = Object.values(cars)

        itemCar.forEach((car) => {

            let card = document.createElement('div') // Создание элемента card для хранения heading, crc_img и content
            card.className = 'card'
            cards.appendChild(card)

            let h5 = document.createElement('h5'); // Создание заголовка h5, где будет хранится название
            h5.textContent = car.heading
            card.appendChild(h5)

            let img = document.createElement('img') // Создание элемента для хранения изображения
            img.src = car.src_img
            card.appendChild(img)

            let p = document.createElement('p') // Создание элемента p для хранения описания 
            p.className = 'pCars'
            p.innerHTML = car.content
            card.appendChild(p)
        })
    break;

    case 'Животные':
        
        let itemAnimal = Object.values(animals)

        itemAnimal.forEach((animal) => {

            let card = document.createElement('div') 
            card.className = 'card'
            cards.appendChild(card)

            let h5 = document.createElement('h5'); 
            h5.textContent = animal.heading
            card.appendChild(h5)

            let img = document.createElement('img') 
            img.src = animal.src_img
            card.appendChild(img)

            let p = document.createElement('p') 
            p.innerHTML = animal.content
            card.appendChild(p)
        })
    break;

    case 'Игры':
        
        let itemGame = Object.values(games)

        itemGame.forEach((game) => {

            let card = document.createElement('div') 
            card.className = 'card'
            cards.appendChild(card)

            let h5 = document.createElement('h5'); 
            h5.textContent = game.heading
            card.appendChild(h5)

            let img = document.createElement('img') 
            img.src = game.src_img
            card.appendChild(img)

            let p = document.createElement('p') 
            p.innerHTML = game.content
            card.appendChild(p)
        })
    break;
    default: 
        h3.innerHTML = `<span class="heading-catalog">Каталога ${message} не существует!</span>`;
}


