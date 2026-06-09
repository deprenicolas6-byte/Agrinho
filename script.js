// Menu Mobile
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Animação ao scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    // Observar elementos hidden
    document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));
    
    // Animação do sensor na home
    animateSensor();
    
    // Inicializar questionário se estiver na página
    if (document.querySelector('.quiz-container')) {
        initQuiz();
    }
});

// Animação do sensor
function animateSensor() {
    const sensor = document.getElementById('heroSensor');
    if (sensor) {
        let value = 67;
        setInterval(() => {
            value = value === 67 ? 68 : 67;
            sensor.textContent = value + '%';
        }, 3000);
    }
}

// Questionário
let currentQuestion = 1;
const totalQuestions = 8;
let answers = {};

function initQuiz() {
    updateProgressBar();
    showQuestion(1);
}

function showQuestion(num) {
    document.querySelectorAll('.question').forEach(q => {
        q.classList.remove('active');
    });
    
    const question = document.querySelector(`[data-question="${num}"]`);
    if (question) {
        question.classList.add('active');
    }
    
    updateButtons();
    updateProgressBar();
}

function changeQuestion(direction) {
    // Validar questão atual
    const currentQ = document.querySelector(`[data-question="${currentQuestion}"]`);
    const selected = currentQ.querySelector('input[type="radio"]:checked');
    
    if (!selected && direction === 1) {
        alert('Por favor, selecione uma opção antes de continuar.');
        return;
    }
    
    // Salvar resposta
    if (selected) {
        const name = selected.name;
        answers[name] = selected.value;
    }
    
    currentQuestion += direction;
    
    if (currentQuestion < 1) currentQuestion = 1;
    if (currentQuestion > totalQuestions) currentQuestion = totalQuestions;
    
    showQuestion(currentQuestion);
}

function updateButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    prevBtn.disabled = currentQuestion === 1;
    
    if (currentQuestion === totalQuestions) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
    }
}

function updateProgressBar() {
    const progress = ((currentQuestion - 1) / totalQuestions) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('currentQ').textContent = currentQuestion;
    document.getElementById('totalQ').textContent = totalQuestions;
}

// Submeter questionário
document.addEventListener('submit', function(e) {
    if (e.target.id === 'quizForm') {
        e.preventDefault();
        
        // Salvar última resposta
        const currentQ = document.querySelector(`[data-question="${currentQuestion}"]`);
        const selected = currentQ.querySelector('input[type="radio"]:checked');
        if (selected) {
            answers[selected.name] = selected.value;
        }
        
        // Redirecionar para resultados
        localStorage.setItem('smartsoil_answers', JSON.stringify(answers));
        window.location.href = 'resultado.html';
    }
});

// Carregar resultados
function carregarResultados() {
    const answersData = localStorage.getItem('smartsoil_answers');
    
    if (!answersData) {
        window.location.href = 'questionario.html';
        return;
    }
    
    const answers = JSON.parse(answersData);
    const resultado = calcularResultado(answers);
    
    // Animar score
    animateScore(resultado.score);
    
    // Preencher conteúdo
    document.getElementById('resultadoTitulo').textContent = resultado.titulo;
    document.getElementById('resultadoSubtitulo').textContent = resultado.subtitulo;
    
    // Preencher recomendações
    const container = document.getElementById('recomendacoesContainer');
    container.innerHTML = '';
    
    resultado.recomendacoes.forEach(rec => {
        const card = document.createElement('div');
        card.className = 'recomendacao-card hidden';
        card.innerHTML = `
            <h4>${rec.icone} ${rec.titulo}</h4>
            <p>${rec.descricao}</p>
        `;
        container.appendChild(card);
    });
    
    // Preencher plano de ação
    const acaoList = document.getElementById('acaoList');
    acaoList.innerHTML = '';
    
    resultado.planoAcao.forEach(acao => {
        const item = document.createElement('div');
        item.className = 'acao-item';
        item.textContent = acao;
        acaoList.appendChild(item);
    });
    
    // Mostrar elementos com animação
    setTimeout(() => {
        document.querySelectorAll('.recomendacao-card').forEach(el => {
            el.classList.add('show');
        });
        document.getElementById('planoAcao').classList.add('show');
        document.getElementById('proximosPassos').classList.add('show');
        document.getElementById('ctaFinal').classList.add('show');
    }, 500);
}

function calcularResultado(answers) {
    let score = 0;
    let recomendacoes = [];
    let planoAcao = [];
    
    // Calcular score baseado nas respostas
    if (answers.analise === 'nunca') score += 30;
    if (answers.analise === 'as_vezes') score += 15;
    if (answers.desafio === 'agua' || answers.desafio === 'fertilizante') score += 25;
    if (answers.decisao === 'tentativa') score += 20;
    if (answers.decisao === 'experiencia') score += 10;
    if (answers.internet !== 'nao') score += 10;
    
    score = Math.min(score, 100);
    
    // Gerar recomendações baseadas nas respostas
    if (answers.cultura === 'grãos') {
        recomendacoes.push({
            icone: '🌾',
            titulo: 'Monitoramento de Umidade',
            descricao: 'Para grãos, o controle preciso da umidade do solo é essencial. Recomendamos sensores a 20cm e 40cm de profundidade.'
        });
    }
    
    if (answers.cultura === 'hortaliças') {
        recomendacoes.push({
            icone: '🥬',
            titulo: 'Irrigação Precisa',
            descricao: 'Hortaliças exigem irrigação constante. Sensores de umidade ajudarão a evitar estresse hídrico.'
        });
    }
    
    if (answers.desafio === 'fertilizante' || answers.analise === 'nunca') {
        recomendacoes.push({
            icone: '🧪',
            titulo: 'Análise de Nutrientes',
            descricao: 'Sensores de NPK vão ajudar a otimizar o uso de fertilizantes, reduzindo custos em até 30%.'
        });
        planoAcao.push('Realizar análise de solo inicial');
        planoAcao.push('Instalar sensores de pH e nutrientes');
    }
    
    if (answers.desafio === 'agua') {
        recomendacoes.push({
            icone: '💧',
            titulo: 'Controle de Irrigação',
            descricao: 'Sistema de alerta automático quando a umidade estiver abaixo do ideal para sua cultura.'
        });
        planoAcao.push('Configurar alertas de umidade no app');
        planoAcao.push('Ajustar sistema de irrigação conforme dados');
    }
    
    if (answers.tamanho === 'pequena') {
        recomendacoes.push({
            icone: '📱',
            titulo: 'Kit Inicial Econômico',
            descricao: 'Para propriedades menores, começe com 2-3 sensores nas áreas mais críticas.'
        });
    }
    
    recomendacoes.push({
        icone: '📊',
        titulo: 'Acompanhamento Contínuo',
        descricao: 'Monitore os dados diariamente e ajuste as práticas conforme as recomendações do sistema.'
    });
    
    planoAcao.push('Baixar aplicativo Smart Soil');
    planoAcao.push('Configurar perfil da propriedade');
    planoAcao.push('Revisar recomendações semanalmente');
    
    let titulo, subtitulo;
    
    if (score >= 70) {
        titulo = 'Alta Prioridade';
        subtitulo = 'Sua propriedade precisa urgentemente de monitoramento. Você está perdendo produtividade e gastando mais do que deveria.';
    } else if (score >= 40) {
        titulo = 'Média Prioridade';
        subtitulo = 'Há espaço para melhorias significativas na gestão do solo. Tecnologia pode ajudar muito.';
    } else {
        titulo = 'Boa Gestão';
        subtitulo = 'Você já tem boas práticas, mas pode otimizar ainda mais com dados precisos.';
    }
    
    return {
        score,
        titulo,
        subtitulo,
        recomendacoes,
        planoAcao
    };
}

function animateScore(finalScore) {
    const element = document.getElementById('scoreValue');
    let current = 0;
    const increment = finalScore / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= finalScore) {
            current = finalScore;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 30);
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});