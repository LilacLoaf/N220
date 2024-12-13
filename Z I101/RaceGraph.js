const ctx4 = document.getElementById("raceChartR").getContext("2d");
const RaceChartR = new Chart(ctx4, {
  type: "bar",
  data: {
    labels: ["White", "Black", "Hispanic", "Asian"],
    datasets: [
      {
        label: "",
        data: [44.1, 36.6, 39, 31.1],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Races of Students",
        },
      },
      y: {
        beginAtZero: true,
        min: 30,
        max: 50,
        title: {
          display: true,
          text: "% of Students",
        },
      },
    },
  },
});
