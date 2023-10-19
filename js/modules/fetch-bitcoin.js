<<<<<<< HEAD
export default function fetchBitcoin(url, target) {
  fetch(url)
=======
export default function initFetchBitcoin() {
  console.log("Teste");
  fetch("https://blockchain.info/ticker")
>>>>>>> main
    .then((response) => response.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
