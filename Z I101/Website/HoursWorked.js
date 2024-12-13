const ctx = document.getElementById("hourChartL").getContext("2d");
const HourChartL = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["<10 Hrs", "10-19 Hrs", "20-34 Hrs", ">35 Hrs"],
    datasets: [
      {
        label: "Male",
        data: [3.1, 9.1, 16.6, 9.8],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Female",
        data: [4.3, 10.6, 16.3, 10.1],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      x: {
        stacked: false,
        title: {
          display: true,
          text: "Number of Hours Worked",
        },
      },
      y: {
        beginAtZero: true,
        min: 2,
        max: 18,
        title: {
          display: true,
          text: "% of Students",
        },
      },
    },
  },
});
