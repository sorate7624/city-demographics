export let barChartOptions = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  indexAxis: 'x',
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

// 미디어 쿼리 적용
if (window.matchMedia('(max-width: 800px)').matches) {
  barChartOptions = {
    ...barChartOptions,
    indexAxis: 'y',
  };
}