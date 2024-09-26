import { getData, updateChartPrices } from "./functions.js";

const charts = document.querySelector(".charts");

charts.addEventListener("click", async (event) => {
  const chart = event.target.closest(".chart");

  if (chart) {
    const url = "data.json";
    const data = await getData(url);

    updateChartPrices(data, event);
  }
});
