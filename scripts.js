// Cotacao de moedas do dia
const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;


// Obtendo os elementos do formulario
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector(" main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o imnt amout para receber somente numeros
amount.addEventListener("input", () => {


  // Removendo caracteres não numericos
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})


// Captando o evento de submit (enviar) do formulario
form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break

    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break

    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

// Função para converter a moeda 
function convertCurrency(amount, price, symbol) {
  
  try {
    // Exibindo a cotação da moeda sellecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // Calcula o valor total.
    let total = amount * price

    // Verifica se o resultado nao é um numero
    if (isNaN(total)) {
      return alert("Por favor,  digite o valor corretamente para converter.")
    }

    // Formata o valor total para o padrao brasileiro
    total = formatCurrencyBRL(total).replace("R$", "")

    // Exibe o resultado total.
    result.textContent = `${total} Reais`

    // aplica a classe que exibe o footer com o resultado
    footer.classList.add("show-result")
  } catch (error) {
    // Remove a classe do footer removendo ele da tela.
    footer.classList.remove("show-result")

    console.log(error)
    alert("Não foi possivel converter. Tente novamente mais tarde.")
  }
}
// Formata a moeda em real brasileiro
function formatCurrencyBRL(value) {
  // Converte para numero para utilizar o toLocaleString para formatar o padrao de moeda brasileiro
 return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}




