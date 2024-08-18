// Get the canvas element
const ctx = document.getElementById('waveChart').getContext('2d');

// Generate data points
const degrees = [];
const waveValues = [];
for (let i = 0; i <= 180; i++) {
    degrees.push(i);
    waveValues.push(Math.sin(i * Math.PI / 180)); // Convert degrees to radians and compute sine
}

// Create the chart
const waveChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: degrees,
        datasets: [{
            label: 'Wave Function',
            data: waveValues,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Degrees'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Wave Function Value'
                },
                min: -1,
                max: 1
            }
        }
    }
});
