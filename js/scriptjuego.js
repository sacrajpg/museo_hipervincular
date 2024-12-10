document.addEventListener('alpine:init', () => {
    Alpine.data('gameData', () => ({
        questions: [
            { 
                image: "../juego/img/afichecontragatillofacil12abril98.jpg", 
                options: ["Barbara Kruger", "GAC", "Doris Salcedo", "Leon Ferrari"], 
                correct: "GAC" 
            },
            { 
                image: "../juego/img/barbarakrugeruntitled1989.jpg", 
                options: ["Boltansky", "James Turrell", "Barbara Kruger", "Doris Salcedo"], 
                correct: "Barbara Kruger" 
            },
            { 
                image: "../juego/img/danflavin3.jpg", 
                options: ["James Turrell", "Tracey Emin", "Boltansky", "Dan Flavin"], 
                correct: "Dan Flavin" 
            },
            { 
                image: "../juego/img/desarraigados.webp", 
                options: ["Doris Salcedo", "Vija Celmins", "Boltansky", "Graciela Sacco"], 
                correct: "Doris Salcedo" 
            },
            { 
                image: "../juego/img/desert1975.jpg", 
                options: ["Tracey Emin", "Vija Celmins", "Leon Ferrari", "GAC"], 
                correct: "Vija Celmins" 
            },
            { 
                image: "../juego/img/ferrari.png", 
                options: ["Doris Salcedo", "Graciela Sacco", "Leon Ferrari", "Boltansky"], 
                correct: "Leon Ferrari" 
            },
            { 
                image: "../juego/img/jamesturrellekebergparkensculpturepark.jpg", 
                options: ["James Turrell", "Barbara Kruger", "Dan Flavin", "Boltansky"], 
                correct: "James Turrell" 
            },
                    
            { 
                image: "../juego/img/traceyemineveryoneihaveeversleptwith19631995.jpg", 
                options: ["Doris Salcedo", "Barbara Kruger", "Dan Flavin", "Tracey Emin"], 
                correct: "Tracey Emin" 
            },
            { 
                image: "../juego/img/Bocanada3.jpg", 
                options: ["Barbara Kruger", "Graciela Sacco", "Boltansky", "Dan Flavin"], 
                correct: "Graciela Sacco" 
            },
            { 
                image: "../juego/img/thewhisperssoundinstallation2008.jpg", 
                options: ["Barbara Kruger", "James Turrell", "Tracey Emin", "Boltansky"], 
                correct: "Boltansky" 
            },
        ],
        currentIndex: 0,
        timer: 3, // Tiempo
        interval: null,
        score: 0,
        started: false, // Estado del inicio del juego

        // datos de la pregunta actual
        get currentQuestionImage() {
            return this.questions[this.currentIndex]?.image || "";
        },
        get currentOptions() {
            return this.questions[this.currentIndex]?.options || [];
        },
        get currentQuestionText() {
            return "¿Reconoces al artista detrás de esta obra?";
        },

        // Iniciar 
        startGame() {
            this.started = true;
            this.score = 0; // Reinicia puntaje 
            this.currentIndex = 0; // Reinicia preguntas
            this.startTimer();
        },

        // temporizador
        startTimer() {
            this.stopTimer();
            this.timer = 3; //3 segundos
            this.interval = setInterval(() => {
                this.timer--;
                if (this.timer <= 0) {
                    this.checkAnswer(null); // Tiempo agotado
                }
            }, 1000); // Disminuir segundo
        },

        // Detener temporizador
        stopTimer() {
            clearInterval(this.interval);
        },

        // Verificar respuesta
        checkAnswer(option) {
            this.stopTimer();
            const currentQuestion = this.questions[this.currentIndex];

            // Validar respuesta correcta
            if (option === currentQuestion?.correct) {
                this.score++; // Incrementar puntaje 
                alert("Respuesta Correcta");
            } else if (option === null) {
                alert("Tiempo agotado");
            } else {
                alert("Respuesta Incorrecta");
            }
            this.nextQuestion();
        },

        // siguiente pregunta
        nextQuestion() {
            if (this.currentIndex < this.questions.length - 1) {
                this.currentIndex++;
                this.startTimer();
            } else {
                this.endGame(); // función finalizar juego
            }
        },

        // Finalizar 
        endGame() {
            if (this.score >= 6) {
                alert(`¡Ganaste el juego! Respuestas correctas: ${this.score}`);
            } else {
                alert(`Perdiste, vuelve a intentarlo. Respuestas correctas: ${this.score}`);
            }
            this.resetGame();
        },

        // Reiniciar juego
        resetGame() {
            this.started = false;
            this.score = 0;
            this.currentIndex = 0;
            this.timer = 3;
        }
    }));
});
