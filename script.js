const websiteLink = "https://example.com";

new QRCode(document.getElementById("qrcode"), {
    text: websiteLink,
    width: 100,
    height: 100
});
