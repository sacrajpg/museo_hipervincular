document.addEventListener('alpine:init', () => {
    Alpine.data('gameData', () => ({
        questions: [
            { 
                image: "../juego/img/afiche_contra_gatillo_facil_12_abril_98.jpg", 
                options: ["Barbara Kruger", "GAC", "Doris Salcedo", "Leon Ferrari"], 
                correct: "GAC" 
            },
            { 
                image: "../juego/img/barbarakruger_untitled_1989.jpg", 
                options: ["Boltansky", "James Turrell", "Barbara Kruger", "Doris Salcedo"], 
                correct: "Barbara Kruger" 
            },
            { 
                image: "../juego/img/dan_flavin_3.jpg", 
                options: ["James Turrell", "Tracey Emin", "Boltansky", "Dan Flavin"], 
                correct: "Dan Flavin" 
            },
            { 
                image: "../juego/img/desarraigados.webp", 
                options: ["Doris Salcedo", "Vija Celmins", "Boltansky", "Graciela Sacco"], 
                correct: "Doris Salcedo" 
            },
            { 
                image: "../juego/img/desert_1975.jpg", 
                options: ["Tracey Emin", "Vija Celmins", "Leon Ferrari", "GAC"], 
                correct: "Vija Celmins" 
            },
            { 
                image: "../juego/img/ferrari.png", 
                options: ["Doris Salcedo", "Graciela Sacco", "Leon Ferrari", "Boltansky"], 
                correct: "Leon Ferrari" 
            },
            { 
                image: "../juego/img/james_turrell_ekebergparken_sculpture_park.jpg", 
                options: ["James Turrell", "Barbara Kruger", "Dan Flavin", "Boltansky"], 
                correct: "James Turrell" 
            },
                    
            { 
                image: "../juego/img/tracey emin_everyone_i_have_ever_slept_with_1963_1995.jpg", 
                options: ["Doris Salcedo", "Barbara Kruger", "Dan Flavin", "Tracey Emin"], 
                correct: "Tracey Emin" 
            },
            { 
                image: "../juego/img/Bocanada3.jpg", 
                options: ["Barbara Kruger", "Graciela Sacco", "Boltansky", "Dan Flavin"], 
                correct: "Graciela Sacco" 
            },
            { 
                image: "../juego/img/the_whispers_sound_installation_2008.jpg", 
                options: ["Barbara Kruger", "James Turrell", "Tracey Emin", "Boltansky"], 
                correct: "Boltansky" 
            },
        ],
        currentIndex: 0,
        timer: 3, // Tiempo por pregunta
        interval: null,
        score: 0,
        started: false, // Estado del inicio del juego

        // Getters para los datos de la pregunta actual
        get currentQuestionImage() {
            return this.questions[this.currentIndex]?.image || "";
        },
        get currentOptions() {
            return this.questions[this.currentIndex]?.options || [];
        },
        get currentQuestionText() {
            return "¿Reconoces al artista detrás de esta obra?";
        },

        // Iniciar el juego
        startGame() {
            this.started = true;
            this.score = 0; // Reinicia el puntaje al iniciar
            this.currentIndex = 0; // Reinicia el índice de preguntas
            this.startTimer();
        },

        // Iniciar el temporizador
        startTimer() {
            this.stopTimer();
            this.timer = 3; // Reinicia el temporizador a 3 segundos
            this.interval = setInterval(() => {
                this.timer--;
                if (this.timer <= 0) {
                    this.checkAnswer(null); // Tiempo agotado
                }
            }, 1000); // Disminuir el contador cada segundo
        },

        // Detener el temporizador
        stopTimer() {
            clearInterval(this.interval);
        },

        // Verificar respuesta
        checkAnswer(option) {
            this.stopTimer();
            const currentQuestion = this.questions[this.currentIndex];

            // Validar respuesta correcta
            if (option === currentQuestion?.correct) {
                this.score++; // Incrementar puntaje si la respuesta es correcta
                alert("Respuesta Correcta");
            } else if (option === null) {
                alert("Tiempo agotado");
            } else {
                alert("Respuesta Incorrecta");
            }
            this.nextQuestion();
        },

        // Pasar a la siguiente pregunta
        nextQuestion() {
            if (this.currentIndex < this.questions.length - 1) {
                this.currentIndex++;
                this.startTimer();
            } else {
                this.endGame(); // Llamar a la función para finalizar el juego
            }
        },

        // Finalizar el juego
        endGame() {
            if (this.score >= 6) {
                alert(`¡Ganaste el juego! Respuestas correctas: ${this.score}`);
            } else {
                alert(`Perdiste, vuelve a intentarlo. Respuestas correctas: ${this.score}`);
            }
            this.resetGame();
        },

        // Reiniciar el juego
        resetGame() {
            this.started = false;
            this.score = 0;
            this.currentIndex = 0;
            this.timer = 3;
        }
    }));
});
