const ctx = document.getElementById("ageChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["16-24", "25-29", "30-39", "40-49"],
    datasets: [
      {
        label: "Amount of Students Employeed",
        data: [39.9, 47.0, 45.4, 43.6],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      x: {
        title: {
          display: true,
          text: "Age Ranges",
        },
      },
      y: {
        beginAtZero: true,
        min: 35,
        max: 50,
        title: {
          display: true,
          text: "% of Students Working",
        },
      },
    },
  },
});
