let currentQuestion = 0;
        const questions = document.querySelectorAll(".question");
        let totalPoints = 0; // Variable to store the total points

        function nextQuestion() {
            if (currentQuestion < questions.length - 1) {
                questions[currentQuestion].style.display = "none";
                currentQuestion++;
                questions[currentQuestion].style.display = "block";
            }
        }

        function calculatePoints(selectedValue) {
            // Convert the selectedValue to a number
            const numericValue = parseInt(selectedValue);
        
            // Calculate points based on the numeric value (adjust as needed)
            const points = numericValue * 5; // For example, multiplying by 5 to get points
        
            // Add the calculated points to the totalPoints
            totalPoints += points;
        }
        

        function submitQuestionnaire() {
            // Calculate points for each selected answer
            for (let i = 1; i <= questions.length; i++) {
                const selectedValue = document.querySelector(`input[name="q${i}"]:checked`);
                if (selectedValue) {
                    calculatePoints(selectedValue.value);
                }
            }
            console.log(totalPoints);

            // Display the result based on total points
            let resultMessage = "";
            if (totalPoints > 150) {
                resultMessage = "Your mental health is excellent!";
            } else if (totalPoints > 100) {
                resultMessage = "Your mental health is good.";
            } else if (totalPoints > 60) {
                resultMessage = "Your mental health is fair.";
            } else {
                resultMessage = "Your mental health needs attention. Consider seeking help. (Us bro us)";
            }

            // Display the result message
            const resultContainer = document.createElement("div");
            resultContainer.innerHTML = `<h4>Result:</h4><p>${resultMessage}</p>`;
            document.querySelector(".container").appendChild(resultContainer);

            // Hide the questionnaire form
            document.getElementById("questionnaireForm").style.display = "none";
        }

        // Display the first question initially
        questions[currentQuestion].style.display = "block";