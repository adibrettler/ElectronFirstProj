var ctx = document.getElementById("myChart");

const data = {
  datasets: [
    {
      label: "Scatter Dataset",
      showLine: true,
      data: [
        { x: 2, y: 4 },
        { x: 4, y: 7 },
        { x: 7, y: 9 },
      ],
      borderColor: "blue",
    },
    {
      label: "Scatter Dataset2",
      data: [{ x: 6, y: 8 }],
      radius: 10,
      backgroundColor: "red",
    },
  ],
};

const c1 = new Chart(ctx, {
  type: "scatter",
  data: data,
  options: {},
});
