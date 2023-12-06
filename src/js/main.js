const $form = document.getElementById("form");
const $input = document.getElementById("input");
const $qrCode = document.getElementById("qrcode");
const $container = document.getElementById("container");

function generarCodigoQR() {
  const qr = new QRCode($qrCode, {
    text: $input.value,
    width: 128,
    height: 128,
  });
}

$form.addEventListener("submit", (e) => {
  e.preventDefault();
	$form.classList.add("hidden");
	$container.classList.remove("hidden")
	$container.classList.add("flex")
  generarCodigoQR();
});
