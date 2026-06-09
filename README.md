<div align="center">

```
███████╗███╗   ███╗ █████╗ ██████╗ ████████╗    ███████╗ ██████╗ ██╗██╗
██╔════╝████╗ ████║██╔══██╗██╔══██╗╚══██╔══╝    ██╔════╝██╔═══██╗██║██║
███████╗██╔████╔██║███████║██████╔╝   ██║       ███████╗██║   ██║██║██║
╚════██║██║╚██╔╝██║██╔══██║██╔══██╗   ██║       ╚════██║██║   ██║██║██║
███████║██║ ╚═╝ ██║██║  ██║██║  ██║   ██║       ███████║╚██████╔╝██║███████╗
╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝       ╚══════╝ ╚═════╝ ╚═╝╚══════╝
```

### 🌱 *Agricultura de precisão acessível para quem realmente produz o Brasil*

<br>

[![Agrinho 2026](https://img.shields.io/badge/Agrinho-2026-2d5016?style=for-the-badge&labelColor=4a7c23)](https://github.com)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Status](https://img.shields.io/badge/Status-Concluído-8fbc5f?style=for-the-badge)](https://github.com)

<br>

> **"Transformamos dados do solo em decisões lucrativas"**

</div>

---

## 🎬 Demo

<div align="center">

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│   🌱 SMART SOIL          ⚡ Tempo Real              │
│  ─────────────────────────────────────────────────  │
│                                                     │
│      ╭──────────╮     ╭──────────╮                  │
│      │  💧 67%  │     │  🧪 pH   │                  │
│      │ Umidade  │     │   6.2    │                  │
│      ╰──────────╯     ╰──────────╯                  │
│                                                     │
│      ╭──────────╮     ╭──────────╮                  │
│      │ 🌡️ 24°C  │     │ 🌿 NPK  │                  │
│      │   Solo   │     │ 12-8-15  │                  │
│      ╰──────────╯     ╰──────────╯                  │
│                                                     │
│   ████████████████░░░░  67% solo hidratado ✅       │
│                                                     │
│   [  Ver Recomendações  ]  [ ⚠️ 1 Alerta ]          │
│                                                     │
└─────────────────────────────────────────────────────┘
```

*Interface do aplicativo Smart Soil — monitoramento em tempo real*

</div>

---

## 🧭 Navegação do Projeto

```
🏠 index.html          →   Landing page + mockup animado
🔍 problema.html       →   Dados e estatísticas do agronegócio
💡 solucao.html        →   Como o sistema funciona (4 etapas)
📋 questionario.html   →   Quiz interativo de diagnóstico (8 perguntas)
📊 resultado.html      →   Recomendações personalizadas geradas pelo quiz
👥 sobre.html          →   Missão, equipe e contato
🎨 style.css           →   Design system completo + responsivo
⚙️  script.js          →   Toda a lógica: quiz, scoring, animações
```

---

## 💥 O Problema que Resolvemos

<div align="center">

| 📊 Estatística | 💀 Impacto |
|---|---|
| **78%** dos produtores não monitoram o solo | Decisões no escuro |
| **R$ 2,5 bilhões** perdidos por ano em insumos | Dinheiro enterrado literalmente |
| **40%** de perda média de produtividade | Colheita abaixo do potencial |
| **35%** de fertilizantes desperdiçados | Custo sem retorno |

</div>

> A maioria dos pequenos produtores rurais toma decisões sobre irrigação e adubação **pela intuição** — sem dados, sem tecnologia, sem suporte técnico acessível. O Smart Soil existe para mudar isso.

---

## ✨ Funcionalidades

```
📱  MOCKUP ANIMADO      Sensor de umidade com animação em tempo real na home
📋  QUIZ INTERATIVO     8 perguntas com progresso visual e validação
🧠  ALGORITMO PRÓPRIO   Score + recomendações personalizadas por perfil
🎞️  ANIMAÇÕES SCROLL    Elementos surgem com IntersectionObserver
📲  MOBILE FIRST        Menu hambúrguer + layout responsivo
💾  PERSISTÊNCIA        Respostas salvas via localStorage entre páginas
```

---

## 🗺️ Fluxo do Usuário

```
                    ┌──────────────┐
                    │  index.html  │
                    │   🏠 Home    │
                    └──────┬───────┘
                           │
          ┌────────────────┼────────────────┐
          ▼                ▼                ▼
   ┌─────────────┐  ┌────────────┐  ┌─────────────┐
   │ problema    │  │  solucao   │  │    sobre    │
   │ 📉 Dados    │  │ 💡 Como    │  │  👥 Quem    │
   └─────────────┘  │  funciona  │  └─────────────┘
                    └────────────┘
                           │
                           ▼
                  ┌─────────────────┐
                  │ questionario    │
                  │  📋 8 perguntas │
                  │  ████████░░ 80% │
                  └────────┬────────┘
                           │
                           ▼ localStorage
                  ┌─────────────────┐
                  │   resultado     │
                  │  🎯 Score: 75   │
                  │  Alta Prioridade│
                  │  Recomendações  │
                  └─────────────────┘
```

---

## 🎨 Design System

<div align="center">

| Token | Cor | Hex | Uso |
|---|---|---|---|
| Verde Escuro | 🟢 | `#2d5016` | Navbar, fundo, textos |
| Verde Médio | 🟢 | `#4a7c23` | Botões, destaques |
| Verde Claro | 🟩 | `#8fbc5f` | CTAs, acentos |
| Marrom | 🟤 | `#8b6f47` | Bordas, detalhes |
| Terra | 🟠 | `#d4a574` | Elementos quentes |
| Bege | 🟡 | `#f5f5dc` | Background geral |

**Tipografia:** `Playfair Display` (títulos) + `Inter` (corpo)

</div>

---

## 🧠 Como o Algoritmo de Diagnóstico Funciona

```javascript
// Cada resposta tem peso diferente:

analise === 'nunca'       → +30 pts  // nunca analisou o solo
analise === 'as_vezes'    → +15 pts  // análise irregular
desafio === 'agua'        → +25 pts  // problema crítico de irrigação
desafio === 'fertilizante'→ +25 pts  // gasto excessivo com NPK
decisao === 'tentativa'   → +20 pts  // total improviso
decisao === 'experiencia' → +10 pts  // empírico sem dados
internet !== 'nao'        → +10 pts  // viável usar o sistema

// Score final → Diagnóstico:
score >= 70  →  ⚠️  "Alta Prioridade"
score >= 40  →  📈  "Média Prioridade"
score <  40  →  ✅  "Boa Gestão"
```

---

## 🚀 Rodando o Projeto

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/smart-soil.git

# 2. Entre na pasta
cd smart-soil

# 3. Abra no navegador
# Opção A — direto:
open index.html

# Opção B — com Live Server (VS Code):
# instale a extensão Live Server e clique em "Go Live"
```

> ⚠️ **Não precisa de servidor, npm, build ou qualquer dependência.** HTML + CSS + JS puro.

---

## 📁 Estrutura

```
smart-soil/
├── 📄 index.html          # Home
├── 📄 problema.html       # O problema
├── 📄 solucao.html        # Nossa solução
├── 📄 questionario.html   # Quiz de diagnóstico
├── 📄 resultado.html      # Resultado personalizado
├── 📄 sobre.html          # Sobre o projeto
├── 🎨 style.css           # Estilos globais + responsivo
└── ⚙️  script.js          # Lógica completa
```

---

## 👥 Equipe

<div align="center">

| 👨‍🌾 | 👩‍💻 | 👨‍🔬 |
|---|---|---|
| **Nicolas Francisco** | **Maria Clara** | **Gabriel Souza** |
| Desenvolvedor | Desenvolvedora | Desenvolvedor |

</div>

---


---

<div align="center">

**Feito com 🌱 e muito JavaScript para o Agrinho 2026**

*Democratizando a agricultura de precisão, um sensor por vez.*

</div>
