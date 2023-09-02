export async function getData(url = "") {
  const respone = await fetch(url);
  const result = await respone.json();

  return result;
}

export function updateChartPrices(data, event) {
  data.forEach((item) => {
    const parentNode = event.target.closest(".chart");
    const price = parentNode.querySelector(`.price_${item.day}`);

    updatePriceElement(price, item.amount);

    removeClassFromPrice(price);
  });
}

function updatePriceElement(price, amount) {
  if (price) {
    addClassToPrice(price);
    setPriceText(price, amount);
  }
}

function addClassToPrice(price) {
  price.classList.add("active");
}

function setPriceText(price, amount) {
  price.textContent = amount;
}

function removeClassFromPrice(price) {
  document.addEventListener("click", () => {
    if (price !== null) {
      price.classList.remove("active");
    }
  });
}
