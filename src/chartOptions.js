export const chartOptions = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  scales: {
    x: {
      grid: {
        color: 'rgba(255,255,255,.2)',
      },
      ticks: {
        color: '#DDE6ED',
      },
      stacked: true,
    },
    y: {
      grid: {
        color: 'rgba(255,255,255,.2)',
      },
      ticks: {
        color: '#DDE6ED',
      },
      stacked: true,
    },
  },
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: '#DDE6ED',
      },
    },
  },
};