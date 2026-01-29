// ========================================
// Digital Divides Website - Main JavaScript
// ========================================

// Mobile Menu Toggle
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Initialize when page loads
window.addEventListener('DOMContentLoaded', function() {
  console.log('Digital Divides Website Loaded');
  
  // Create charts if we're on a page that needs them
  if (document.getElementById('connectivityChart')) {
    createConnectivityChart();
  }
  
  if (document.getElementById('skillsChart')) {
    createSkillsChart();
  }
  
  if (document.getElementById('disparityChart')) {
    createDisparityChart();
  }
  
  if (document.getElementById('investmentChart')) {
    createInvestmentChart();
  }
});

// ========================================
// Chart Functions
// ========================================

// Internet Connectivity by Region
function createConnectivityChart() {
  const ctx = document.getElementById('connectivityChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['North America', 'Europe', 'Latin America', 'Middle East', 'Asia-Pacific', 'Africa'],
      datasets: [{
        label: 'Internet Penetration (%)',
        data: [93, 89, 68, 64, 62, 33],
        backgroundColor: '#3b82f6',
        borderColor: '#2563eb',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

// Digital Skills Gap
function createSkillsChart() {
  const ctx = document.getElementById('skillsChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Basic Skills', 'Intermediate', 'Advanced'],
      datasets: [
        {
          label: 'Developed Countries',
          data: [85, 65, 45],
          backgroundColor: '#3b82f6'
        },
        {
          label: 'Developing Countries',
          data: [42, 28, 15],
          backgroundColor: '#f97316'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });
}

// Income Disparity Chart
function createDisparityChart() {
  const ctx = document.getElementById('disparityChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['High Income', 'Upper Middle', 'Lower Middle', 'Low Income'],
      datasets: [{
        label: 'Internet Access (%)',
        data: [92, 71, 48, 22],
        backgroundColor: '#9333ea',
        borderColor: '#7e22ce',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

// Investment Gap Chart
function createInvestmentChart() {
  const ctx = document.getElementById('investmentChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['2020', '2021', '2022', '2023'],
      datasets: [
        {
          label: 'Required Investment',
          data: [428, 445, 462, 480],
          backgroundColor: '#16a34a'
        },
        {
          label: 'Actual Investment',
          data: [180, 195, 210, 225],
          backgroundColor: '#86efac'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Billions USD'
          }
        }
      }
    }
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
