// APP 1
const app1Button = document.querySelector('.app1 button');

if (app1Button) {
    app1Button.addEventListener('click', () => {
        alert('Você clicou no APP 1!');
    });
}

// APP 2
const app2Button = document.querySelector('.app2 button');

if (app2Button) {
    app2Button.addEventListener('click', () => {
        document.body.style.background = '#dff9fb';
    });
}

// APP 3
const app3Button = document.querySelector('.app3 button');

if (app3Button) {
    app3Button.addEventListener('click', () => {
        console.log('APP 3 ativado!');
    });
}