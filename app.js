(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

function sendEmail() {
    var link = document.getElementById('send_email');
    var name = document.getElementById('fullName').value;
    var subject = document.getElementById('subject').value;
    var queryEmail = document.getElementById('email').value;
    var message = "Hello my name is " + name + " -- " + 'and my email is '+ queryEmail + " -- " + document.getElementById('comment').value;
    var email = "manujk321@gmail.com";
    var href = "mailto:" + email + "?subject=" + subject + "&body=" + message;
    //console.log(href);
    link.setAttribute("href", href);
}