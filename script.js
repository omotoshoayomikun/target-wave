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
                min: -0.2,
                max: 1
            }
        }
    }
});


const ctx2 = document.getElementById('movingWaveChart').getContext('2d');

const degrees2 = [];  // To store angle values (0° to 180°)
const waveValues2 = [];  // To store sine values (y = sin(θ))

const myChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: degrees,  // Angle values
        datasets: [{
            label: 'Wave Function',
            data: waveValues,  // Sine values
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false,
        }]
    },
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                title: {
                    display: true,
                    text: 'Degrees'
                },
                ticks: {
                    stepSize: 2  // Step size for X-axis labels
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Amplitude'
                },
                
            }
        }
    }
});


let degree = 0;

function updateChart() {
    if (degree <= 180) {
        degrees.push(degree);
        waveValues.push(Math.sin(degree * Math.PI / 180));  // Compute y = sin(θ)
        myChart.update();  // Update the chart with new data point
        degree++;
        setTimeout(updateChart, 50);  // Adjust speed of the animation here (50ms delay)
    }
}

updateChart();  // Start the animation