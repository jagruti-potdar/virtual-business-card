const websiteLink = "https://jagruti-potdar.github.io/virtual-business-card/";

new QRCode(document.getElementById("qrcode"), {
    text: websiteLink,
    width: 100,
    height: 100
});

