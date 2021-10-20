const btcMaiorPrecoUnit = document.querySelector('.bitcoin .maior-preco b');
const btcMaiorQtd = document.querySelector('.bitcoin .maior-qtd b');
const btcMaiorOffer = document.querySelector('.bitcoin .maior-oferta b');
const ethMaiorPrecoUnit = document.querySelector('.ethereum .maior-preco b');
const ethMaiorQtd = document.querySelector('.ethereum .maior-qtd b');
const ethMaiorOffer = document.querySelector('.ethereum .maior-oferta b');
const ltcMaiorPrecoUnit = document.querySelector('.litecoin .maior-preco b');
const ltcMaiorQtd = document.querySelector('.litecoin .maior-qtd b');
const ltcMaiorOffer = document.querySelector('.litecoin .maior-oferta b');

 const btcPromise = fetch('https://www.mercadobitcoin.net/api/BTC/ticker/');
 btcPromise.then(function(response){
     const promiseResponse = response.json();

        promiseResponse.then(function(body){
            btcMaiorPrecoUnit.textContent = "R$" + Number(body.ticker.high).toFixed(2);
            btcMaiorQtd.textContent = body.ticker.vol;
            btcMaiorOffer.textContent =  "R$" +  Number(body.ticker.buy).toFixed(2);
        })
 });

 const ethPromise = fetch('https://www.mercadobitcoin.net/api/ETH/ticker/');
 ethPromise.then(function (response){
    const promiseResponse = response.json();

    promiseResponse.then(function(body){
        ethMaiorPrecoUnit.textContent = "R$" + Number(body.ticker.high).toFixed(2);
        ethMaiorQtd.textContent = body.ticker.vol;
        ethMaiorOffer.textContent =  "R$" +  Number(body.ticker.buy).toFixed(2);
    })
 })

 const ltcPromise = fetch('https://www.mercadobitcoin.net/api/LTC/ticker/');
 ltcPromise.then(function(response){
     const promiseResponse = response.json();

        promiseResponse.then(function(body){
            ltcMaiorPrecoUnit.textContent = "R$" + Number(body.ticker.high).toFixed(2);
            ltcMaiorQtd.textContent = body.ticker.vol;
            ltcMaiorOffer.textContent =  "R$" +  Number(body.ticker.buy).toFixed(2);
        })
 });
