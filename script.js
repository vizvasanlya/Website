document.addEventListener("DOMContentLoaded", function () {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach((question) => {
        question.addEventListener("click", function () {
            const answer = this.nextElementSibling;

            // Close other open answers
            document.querySelectorAll(".faq-answer").forEach((item) => {
                if (item !== answer) {
                    item.style.display = "none";
                }
            });

            // Toggle the clicked answer
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        });
    });
});
