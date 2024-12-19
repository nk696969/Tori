window.onload = function() {
    var countdownElement = document.getElementById('countdown');
    var downloadMessage = document.getElementById('download-message');
    var retryMessage = document.getElementById('retry-message');
    var countdown = 10;

    var interval = setInterval(function() {
        countdown--;
        countdownElement.textContent = countdown;

        if (countdown <= 0) {
            clearInterval(interval);
            window.location.href = 'files/Tori_Injector.zip';
            downloadMessage.style.display = 'none';
            retryMessage.style.display = 'block';
        }
    }, 1000);
};

document.getElementById('generateKeyButton').addEventListener('click', function() {
    this.classList.add('hidden');

    setTimeout(() => {
        this.style.display = 'none';
        document.getElementById('keyDisplay').textContent = generateRandomKey();
    }, 300);
});

function generateRandomKey() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 15; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
