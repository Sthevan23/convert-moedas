// // Cotacao de moedas do dia
// const USD = 4.87;
// const EUR = 5.32;
// const GBP = 6.08;


// // Obtendo os elementos do formulario
// const form = document.querySelector("form")
// const amount = document.getElementById("amount")
// const currency = document.getElementById("currency")
// const footer = document.querySelector(" main footer")
// const description = document.getElementById("description")
// const result = document.getElementById("result")

// // Manipulando o imnt amout para receber somente numeros
// amount.addEventListener("input", () => {


//   // Removendo caracteres não numericos
//   const hasCharactersRegex = /\D+/g
//   amount.value = amount.value.replace(hasCharactersRegex, "")
// })


// // Captando o evento de submit (enviar) do formulario
// form.onsubmit = (event) => {
//   event.preventDefault()

//   switch (currency.value) {
//     case "USD":
//       convertCurrency(amount.value, USD, "US$")
//       break

//     case "EUR":
//       convertCurrency(amount.value, EUR, "€")
//       break

//     case "GBP":
//       convertCurrency(amount.value, GBP, "£")
//       break
//   }
// }

// // Função para converter a moeda 
// function convertCurrency(amount, price, symbol) {
  
//   try {
//     // Exibindo a cotação da moeda sellecionada
//     description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

//     // Calcula o valor total.
//     let total = amount * price

//     // Verifica se o resultado nao é um numero
//     if (isNaN(total)) {
//       return alert("Por favor,  digite o valor corretamente para converter.")
//     }

//     // Formata o valor total para o padrao brasileiro
//     total = formatCurrencyBRL(total).replace("R$", "")

//     // Exibe o resultado total.
//     result.textContent = `${total} Reais`

//     // aplica a classe que exibe o footer com o resultado
//     footer.classList.add("show-result")
//   } catch (error) {
//     // Remove a classe do footer removendo ele da tela.
//     footer.classList.remove("show-result")

//     console.log(error)
//     alert("Não foi possivel converter. Tente novamente mais tarde.")
//   }
// }
// // Formata a moeda em real brasileiro
// function formatCurrencyBRL(value) {
//   // Converte para numero para utilizar o toLocaleString para formatar o padrao de moeda brasileiro
//  return Number(value).toLocaleString("pt-BR", {
//     style: "currency",
//     currency: "BRL",
//   })
// }



// Cotação de moedas do dia
const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

// Obtendo os elementos do formulário
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

// Manipulando o input amount para receber somente números e vírgula
amount.addEventListener("input", () => {
  const hasCharactersRegex = /[^0-9,]/g; // Permitir apenas números e vírgula
  amount.value = amount.value.replace(hasCharactersRegex, "");

  // Garantir que apenas uma vírgula seja usada como separador decimal
  const parts = amount.value.split(",");
  if (parts.length > 2) {
    amount.value = parts[0] + "," + parts[1].slice(0, 2); // Limitar a 2 casas decimais após a vírgula
  }
});

// Captando o evento de submit (enviar) do formulário
form.onsubmit = (event) => {
  event.preventDefault();

  // Converte o valor de entrada para número, substituindo vírgula por ponto
  let amountValue = amount.value.replace(",", ".");

  switch (currency.value) {
    case "USD":
      convertCurrency(amountValue, USD, "US$");
      break;

    case "EUR":
      convertCurrency(amountValue, EUR, "€");
      break;

    case "GBP":
      convertCurrency(amountValue, GBP, "£");
      break;
  }
};

// Função para converter a moeda
function convertCurrency(amount, price, symbol) {
  try {
    // Exibindo a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    // Calcula o valor total. Certifica-se de que o valor seja numérico
    let total = parseFloat(amount) * price;

    // Verifica se o resultado não é um número
    if (isNaN(total)) {
      return alert("Por favor, digite o valor corretamente para converter.");
    }

    // Formata o valor total para o padrão brasileiro
    let formattedTotal = formatCurrencyBRL(total);

    // Ajuste para a exibição correta (apenas um ponto como separador decimal)
    formattedTotal = formatCustomCurrency(formattedTotal);

    // Exibe o resultado total
    result.textContent = `${formattedTotal} Reais`;

    // Aplica a classe que exibe o footer com o resultado
    footer.classList.add("show-result");
  } catch (error) {
    // Remove a classe do footer removendo ele da tela.
    footer.classList.remove("show-result");

    console.log(error);
    alert("Não foi possível converter. Tente novamente mais tarde.");
  }
}

// Formata a moeda em real brasileiro
function formatCurrencyBRL(value) {
  // Converte para número para utilizar o toLocaleString para formatar o padrão de moeda brasileiro
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

// Função personalizada para formatar com ponto único como separador
function formatCustomCurrency(value) {
  // Separar a parte inteira e a parte decimal do número
  const [integerPart, decimalPart] = value.split(".");

  // A parte inteira é separada por ponto
  const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Se houver parte decimal, manter ela com ponto
  if (decimalPart) {
    return `${formattedIntegerPart}.${decimalPart}`;
  }

  return formattedIntegerPart; // Se não houver decimal, apenas a parte inteira
}




