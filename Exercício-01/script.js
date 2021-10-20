const cep = document.querySelector('#cep');
const cidade = document.querySelector('#cidade');
const rua = document.querySelector('#rua');
const numeroDaRua = document.querySelector('#numeroDaRua');

cep.addEventListener('change', function (event) {
    const cepProcurado = event.target.value;
    if (cepProcurado.length !== 8) {
        console.log('erro: o cep deve conter 8 digitos');
        return;
    }
    const promise = fetch(`https://viacep.com.br/ws/${cepProcurado}/json/`);

    promise.then(function (response) {
        const promiseResponse = response.json();

        promiseResponse.then(function (body) {
            if (!body.localidade) {
                console.log('erro: o cep digitado não existe');
                cidade.value = "";
                rua.value = "";
                numeroDaRua.value = "";
                return;
            }
            cidade.value = body.localidade;
            rua.value = body.logradouro;
            numeroDaRua.value = body.gia;

        })

    })

})