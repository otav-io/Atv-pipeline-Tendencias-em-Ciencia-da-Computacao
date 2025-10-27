const questions = [
    {
        question: "Como você prefere passar seu tempo livre?",
        options: [
            { text: "🧑‍💻 Trabalhando em projetos no computador", macaco: "programador", score: 5 },
            { text: "☕ Tomando um café e relaxando", macaco: "cafe", score: 4 },
            { text: "💰 Buscando oportunidades de negócio", macaco: "rico", score: 5 },
            { text: "🎵 Ouvindo música no Spotify", macaco: "spotify", score: 4 }
        ]
    },
    {
        question: "Qual é seu estilo de roupa favorito?",
        options: [
            { text: "👔 Roupas formais e elegantes", macaco: "rico", score: 5 },
            { text: "👕 Casual e confortável", macaco: "pançudo", score: 4 },
            { text: "🤡 Um visual único e descontraído", macaco: "palhaço", score: 5 },
            { text: "🎩 Estiloso e fashionista", macaco: "estiloso", score: 5 }
        ]
    },
    {
        question: "O que você faz quando está estressado no trabalho?",
        options: [
            { text: "😤 Aceita a bronca e continua trabalhando", macaco: "bronca no trabalho", score: 5 },
            { text: "🧘 Toma um tempo para relaxar", macaco: "cafe", score: 4 },
            { text: "💻 Foca em resolver os problemas", macaco: "programador", score: 5 },
            { text: "🎵 Coloca uma música para descontrair", macaco: "spotify", score: 4 }
        ]
    },
    {
        question: "Qual é sua relação com exercícios?",
        options: [
            { text: "💪 Treino regularmente", macaco: "estiloso", score: 4 },
            { text: "🍔 Prefiro relaxar e comer bem", macaco: "pançudo", score: 5 },
            { text: "🧘 Faço exercícios leves e yoga", macaco: "cafe", score: 4 },
            { text: "🪑 Prefiro ficar sentado", macaco: "sentado", score: 5 }
        ]
    },
    {
        question: "Como você gosta de se divertir?",
        options: [
            { text: "😂 Fazendo todo mundo rir", macaco: "palhaço", score: 5 },
            { text: "🎵 Dançando e curtindo música", macaco: "spotify", score: 5 },
            { text: "🪑 Relaxando em um lugar confortável", macaco: "sentado", score: 4 },
            { text: "📱 Passando tempo nas redes sociais", macaco: "mim de", score: 5 }
        ]
    },
    {
        question: "O que você sente quando vê uma oportunidade de ganhar dinheiro?",
        options: [
            { text: "💰 Fico super motivado e focado", macaco: "rico", score: 5 },
            { text: "🤔 Avalio se vale a pena o esforço", macaco: "programador", score: 4 },
            { text: "😊 Fico feliz mas sem pressa", macaco: "pançudo", score: 3 },
            { text: "🎉 Comemoro antes mesmo de conseguir", macaco: "palhaço", score: 4 }
        ]
    },
    {
        question: "Como você se posiciona nas fotos?",
        options: [
            { text: "🤳 Fazendo uma pose descontraída", macaco: "mim de", score: 5 },
            { text: "🧘 Da maneira mais confortável", macaco: "sentado", score: 4 },
            { text: "💼 Estiloso e profissional", macaco: "estiloso", score: 5 },
            { text: "😄 Sendo bem humorado e engraçado", macaco: "palhaço", score: 5 }
        ]
    },
    {
        question: "Qual é sua bebida preferida?",
        options: [
            { text: "☕ Café expresso", macaco: "cafe", score: 5 },
            { text: "🥤 Refrigerante ou suco", macaco: "pançudo", score: 4 },
            { text: "🍷 Drinks sofisticados", macaco: "rico", score: 5 },
            { text: "🍺 Cerveja ou drinks descontraídos", macaco: "spotify", score: 4 }
        ]
    },
    {
        question: "Como você lida com tarefas difíceis?",
        options: [
            { text: "💻 Mergulho de cabeça e resolvo", macaco: "programador", score: 5 },
            { text: "😤 Aceito o desafio com determinação", macaco: "bronca no trabalho", score: 5 },
            { text: "🤷 Contratato alguém para fazer", macaco: "rico", score: 4 },
            { text: "😅 Faço do jeito que der", macaco: "palhaço", score: 3 }
        ]
    },
    {
        question: "O que faz você se sentir bem?",
        options: [
            { text: "🛋️ Ficar em casa relaxando", macaco: "sentado", score: 5 },
            { text: "☕ Um ambiente calmo e tranquilo", macaco: "cafe", score: 5 },
            { text: "🎵 Música tocando o tempo todo", macaco: "spotify", score: 5 },
            { text: "🤳 Curtindo posts nas redes sociais", macaco: "mim de", score: 5 }
        ]
    },
    {
        question: "Qual é seu maior sonho?",
        options: [
            { text: "💸 Ficar milionário", macaco: "rico", score: 5 },
            { text: "👨‍💻 Ser um desenvolvedor de sucesso", macaco: "programador", score: 5 },
            { text: "😄 Fazer todos rirem", macaco: "palhaço", score: 5 },
            { text: "🎵 Ter sucesso na carreira musical", macaco: "spotify", score: 5 }
        ]
    },
    {
        question: "Como você prefere sair de casa?",
        options: [
            { text: "👔 Bem arrumado e elegante", macaco: "estiloso", score: 5 },
            { text: "🍔 Com fome e vontade de comer", macaco: "pançudo", score: 5 },
            { text: "🎧 Com fones de ouvido", macaco: "spotify", score: 5 },
            { text: "☕ Bem tranquilo e relaxado", macaco: "cafe", score: 4 }
        ]
    },
    {
        question: "O que você faz quando alguém te irrita?",
        options: [
            { text: "😤 Aceita e continua focando no trabalho", macaco: "bronca no trabalho", score: 5 },
            { text: "😂 Tenta descontrair a situação", macaco: "palhaço", score: 5 },
            { text: "🧘 Ignora e mantém a calma", macaco: "cafe", score: 4 },
            { text: "💻 Foca em outra coisa importante", macaco: "programador", score: 4 }
        ]
    },
    {
        question: "Qual é sua atitude em relação à vida?",
        options: [
            { text: "💰 Busco sempre prosperidade", macaco: "rico", score: 5 },
            { text: "😄 Aproveito cada momento", macaco: "palhaço", score: 5 },
            { text: "🧘 Vivo de forma tranquila", macaco: "cafe", score: 4 },
            { text: "🎵 Deixo a vida me levar", macaco: "spotify", score: 4 }
        ]
    },
    {
        question: "Como você gosta de passar o fim de semana?",
        options: [
            { text: "🪑 Em casa relaxando", macaco: "sentado", score: 5 },
            { text: "☕ Em um café tranquilo", macaco: "cafe", score: 5 },
            { text: "🍔 Comendo bem e descansando", macaco: "pançudo", score: 5 },
            { text: "🎵 Em festas ou eventos musicais", macaco: "spotify", score: 5 }
        ]
    },
    {
        question: "Qual é sua maior força?",
        options: [
            { text: "💪 Determinação no trabalho", macaco: "bronca no trabalho", score: 5 },
            { text: "🎨 Criatividade e estilo", macaco: "estiloso", score: 5 },
            { text: "😂 Senso de humor", macaco: "palhaço", score: 5 },
            { text: "💻 Habilidade técnica", macaco: "programador", score: 5 }
        ]
    },
    {
        question: "O que você prefere fazer em um tempo livre?",
        options: [
            { text: "🤳 Postar fotos nas redes sociais", macaco: "mim de", score: 5 },
            { text: "💻 Programar ou criar algo novo", macaco: "programador", score: 5 },
            { text: "🎵 Produzir ou ouvir música", macaco: "spotify", score: 5 },
            { text: "🪑 Apenas relaxar e descansar", macaco: "sentado", score: 5 }
        ]
    },
    {
        question: "Como você lida com pressão?",
        options: [
            { text: "😤 Aceita a pressão e entrega resultados", macaco: "bronca no trabalho", score: 5 },
            { text: "🧘 Mantém a calma", macaco: "cafe", score: 4 },
            { text: "😂 Tenta tornar a situação leve", macaco: "palhaço", score: 4 },
            { text: "💪 Dá o seu melhor", macaco: "estiloso", score: 4 }
        ]
    },
    {
        question: "Qual é seu maior foco na vida?",
        options: [
            { text: "💰 Construir riqueza", macaco: "rico", score: 5 },
            { text: "😄 Espalhar alegria", macaco: "palhaço", score: 5 },
            { text: "💻 Desenvolver habilidades técnicas", macaco: "programador", score: 5 },
            { text: "🎵 Seguir paixões musicais", macaco: "spotify", score: 5 }
        ]
    },
    {
        question: "Como você se descreveria?",
        options: [
            { text: "🪑 Sossegado e relaxado", macaco: "sentado", score: 5 },
            { text: "☕ Calmo e centrado", macaco: "cafe", score: 5 },
            { text: "🍔 Que gosta de se dar bem", macaco: "pançudo", score: 5 },
            { text: "🤳 Que adora se mostrar", macaco: "mim de", score: 5 }
        ]
    }
];

const macacosInfo = {
    "bronca no trabalho": {
        image: "imgs/macaco bronca no trabalho.jpg",
        title: "Macaco Bronca no Trabalho",
        description: "Você é o macaquinho que sofre calado. Toma bronca do chefe, faz cara de quem entendeu e pensa \"eu devia era estar na floresta\". Vive no limite entre o colapso mental e o café das 15h."
    },
    "cafe": {
        image: "imgs/macaco cafe.jpg",
        title: "Macaco Café",
        description: "Viciado em cafeína e em fingir produtividade. Se o café acabar, o sistema cai junto. Já está na 7ª xícara e ainda acha que é \"só pra acordar um pouquinho\"."
    },
    "estiloso": {
        image: "imgs/macaco estiloso.jpg",
        title: "Macaco Estiloso",
        description: "O rei da selva maqueica. Usa banana como acessório e ainda faz pose pro reflexo da poça d'água. Os outros macacos te invejam, mas secretamente querem saber onde você compra as folhas."
    },
    "mim de": {
        image: "imgs/macaco mim de.jpg",
        title: "Macaco Mim Dê",
        description: "O pidão oficial da tribo. Se tem algo brilhando, você quer. Se outro macaquinho tem comida, você pede. E se dizem \"não\", você faz aquela carinha de fome até te darem oque voce quer."
    },
    "palhaço": {
        image: "imgs/macaco palhaço.jpg",
        title: "Macaco Palhaço",
        description: "O bobo alegre do grupo. Ninguém te leva a sério, mas todo mundo ri contigo (ou de ti). Você resolve os problemas com piadas, mesmo quando o problema é você."
    },
    "pançudo": {
        image: "imgs/macaco pançudo.jpg",
        title: "Macaco Pançudo",
        description: "A barriga fala antes do cérebro. Sempre comendo, sempre feliz. Se alguém disser \"não tem comida\", você aparece com um lanche \"de emergência\" que tava guardado no bolso."
    },
    "programador": {
        image: "imgs/macaco programador.jpg",
        title: "Macaco Programador",
        description: "Vive no GitHub e come bugs no café da manhã. Dorme pouco, reclama do JavaScript e fala \"funcionava na minha máquina\" como filosofia de vida."
    },
    "rico": {
        image: "imgs/macaco rico.jpg",
        title: "Macaco Rico",
        description: "Esse é o macaco que venceu na vida. Só fala de investimento e tem uma bananeira própria. Não encosta em nada que não seja premium e usa folhas importadas pra se abanar."
    },
    "sentado": {
        image: "imgs/macaco sentado.jpg",
        title: "Macaco Sentado",
        description: "O símbolo do sossego. Nada te abala, nem o caos da selva. Enquanto o resto surta, você só observa e pensa: \"pra quê tanto estresse se dá pra ficar sentado?\"."
    },
    "spotify": {
        image: "imgs/macaco spotify.jpg",
        title: "Macaco Spotify",
        description: "O DJ da floresta. Vive com fone no ouvido, criando trilha sonora até pra tomar água. Provavelmente tem uma playlist chamada \"Bananas e Bad Vibes\"."
    }
};

let currentQuestion = 0;
let scores = {};
let totalQuestions = questions.length;

// Inicializar pontuações
Object.keys(macacosInfo).forEach(macaco => {
    scores[macaco] = 0;
});

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function startQuiz() {
    currentQuestion = 0;
    scores = {};
    Object.keys(macacosInfo).forEach(macaco => {
        scores[macaco] = 0;
    });
    showScreen('quiz-screen');
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question-text').textContent = question.question;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option.text;
        button.onclick = () => selectAnswer(option);
        optionsContainer.appendChild(button);
    });
    
    updateProgress();
}

function selectAnswer(option) {
    scores[option.macaco] += option.score;
    currentQuestion++;
    
    if (currentQuestion < totalQuestions) {
        showQuestion();
    } else {
        showResult();
    }
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / totalQuestions) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('current-question').textContent = currentQuestion + 1;
    document.getElementById('total-questions').textContent = totalQuestions;
}

function showResult() {
    const winnerMacaco = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    const info = macacosInfo[winnerMacaco];
    
    document.getElementById('result-image').src = info.image;
    document.getElementById('result-image').alt = info.title;
    document.getElementById('result-title').textContent = info.title;
    document.getElementById('result-description').textContent = info.description;
    
    showScreen('result-screen');
}

// Event Listeners
document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('restart-btn').addEventListener('click', () => {
    showScreen('home-screen');
});
