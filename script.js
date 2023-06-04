document.getElementById("url-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        generateCode();
    }
});

let qrCodeOutput = document.getElementById("qrcode-output");

function generateCode() {
    let urlInput = document.getElementById("url-input").value;
    if (urlInput) {
      let qrcodeContainer = document.getElementById("qrcode-output");
      qrcodeContainer.innerHTML = "";
      new QRCode(qrcodeContainer, urlInput);

      let canvas = qrcodeContainer.querySelector("canvas");
      let downloadLink = document.getElementById("download-link");
      downloadLink.href = canvas.toDataURL("image/png");
      downloadLink.style.display = "block";
      qrCodeOutput.style.display = "block";
    } else {
        qrCodeOutput.style.display = "block";
        qrCodeOutput.innerHTML = "Please enter valid url"
    }

}