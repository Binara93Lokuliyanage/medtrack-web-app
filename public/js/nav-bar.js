
document.addEventListener("DOMContentLoaded", function () {
    fetch('../components/nav-bar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));
});