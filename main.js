let input = document.querySelector('.input'),
    btn = document.querySelector('.btn'),
    gameTime = document.querySelector('.time'),
    gameBox = document.querySelector('.game__box'),
    score = 0,
    time = 0,
    interval = 0;
    
btn.addEventListener('click', (event) => {
    event.preventDefault()
    if(input.value > 4) {
        time = input.value
        input.value = ''
        score = 0
        clearInterval(interval)
        start()
        btn.classList.add('disabled')
        let result = document.querySelector('.result')
        if(result) {
            result.style.display = 'none'
        }
    }
})

gameBox.addEventListener('click', (event) => {
    if(event.target.classList.contains('ball')) {
        score++
        event.target.remove()
        createBall()
    }
})


function start() {
    interval =  setInterval(() => decrease(), 1000);
    createBall()
    
}

function decrease() {
    if(time == 0) {
        end()
    }else {
        time = --time
        gameTime.innerHTML = time
    }
}

function end() {
    gameBox.innerHTML = `<h2 class="result"> Вы набрали ${score} баллов </h2>`
    btn.classList.remove('disabled')
}


function createBall() {
    let ball = document.createElement('div')
    ball.classList.add('ball')
    let size = Size();
    ball.style.width = ball.style.height = Size() + 'px'
    ball.style.background = getColor()
    ball.style.clipPath = workShape()
    let cor = gameBox.getBoundingClientRect()
    console.log(cor);
    let { width, height } = cor
    let x = random(0, 350)
    let y = random(0, 350)
    
    
    ball.style.left = x + 'px'
    ball.style.top = y + 'px'
    
    gameBox.append(ball)
    // randShape(ball);
    
    
}

function random(min,max) {
    return Math.floor(Math.random() * (max + 1 - min ) + min)
}

let colors = ['red','yellow','blue','green','gold','gray'];
let sizes = [40,50,60,70,80,90,100];
let shape = [
    'polygon(50% 0%, 0% 100%, 100% 100%)',
    'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
    'polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)',
    'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
    'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)'];
    
    function getColor() {
            let index = Math.floor(Math.random() * colors.length)
            return colors[index]
    
    }
    function Size() {
        let index = Math.floor(Math.random() * sizes.length)
        return sizes[index]
    }
    function workShape() {
        let index = Math.floor(Math.random() * shape.length)
        return shape[index]
    }
    // function randShape(el){
    //     el.style.clipPath = workShape()
    // }