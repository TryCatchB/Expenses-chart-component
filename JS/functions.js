export async function getData(url = "") {
  const respone = await fetch(url);
  const result = await respone.json();

  return result;
}

export function updateChartPrices(data, event) {
  const parentNode = event.target.closest(".chart");
  const day = parentNode.querySelector(".chart__day").textContent;
  const priceElement = parentNode.querySelector(`.price-${day.toLowerCase()}`);

  const item = data.find(
    (item) => item.day.toLowerCase() === day.toLowerCase()
  );

  if (item) {
    updatePriceElement(priceElement, item.amount);
    removeClassFromPrice(priceElement);
  }
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
