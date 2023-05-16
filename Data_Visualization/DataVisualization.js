new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
        labels: ["Dr. Jart CC Cream", "Skin1004 Sunscreen", "La Roche Posay Cleanser", "Innissfree Green Tea", "Skin1004 Blue Serum"],
      datasets: [
        {
          label: "Ratings",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [5000,5200,5900,5700,5100]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Meggie Cheng - Skincare Product Ratings'
      }
    }
});

new Chart(document.getElementById("polar-chart"), {
    type: 'polarArea',
    data: {
        labels: ["Dr. Jart CC Cream", "Skin1004 Sunscreen", "La Roche Posay Cleanser", "Innissfree Green Tea", "Skin1004 Blue Serum"],
        datasets: [
            {
                label: "Ratings",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                data: [5000, 5200, 5900, 5700, 5100]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Meggie Cheng - Skincare Product Ratings'
        }
    }
});