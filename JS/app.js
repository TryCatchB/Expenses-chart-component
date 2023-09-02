import { getData, updateChartPrices } from "./functions.js";

const charts = document.querySelectorAll("#chart");

charts.forEach((chart) =>
  chart.addEventListener("click", (event) => {
    getData("data.json").then((data) => {
      updateChartPrices(data, event);
    });
  })
);
