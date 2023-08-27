const charts = document.querySelectorAll("#chart");

charts.forEach((chart) =>
  chart.addEventListener("click", (event) => {
    getData("data.json").then((data) => {
      data.forEach((item) => {
        const parentNode = event.target.closest(".chart");
        const price = parentNode.querySelector(".chart__price");

        if (price) {
          price.classList.add("active");
          price.textContent = item.amount;
        }
      });
    });
  })
);

async function getData(url = "") {
  const respone = await fetch(url);
  const result = await respone.json();

  return result;
}
