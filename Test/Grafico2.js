const ctx2 = document.getElementById('doughnut').getContext('2d')

new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['Comida', 'Eu', 'Fixo', 'Outros',],
    datasets: [{
      label: 'GASTOS',
      // Primeiro = Comida, Segundo = Eu, Terceiro = Fixo, Quarto = Outros
      data: [1, 1, 1, 1],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 192, 86, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(100, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(54, 162, 235, 1)',
      'rgba(255, 192, 86, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(100, 159, 64, 1)'
    ]
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
