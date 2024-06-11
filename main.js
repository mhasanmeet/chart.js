const ctx = document.getElementById('myChart');

fetch('data.json')
.then(function(response){
    if(response.ok == true){
        return response.json();
    }
})
.then(function(data){
    createChart(data, 'bar');
})

function createChart(data, type){
    new Chart(ctx, {
        type: type,
        // type: 'doughnut', //pie chart
        data: {
            labels: data.map(row => row.month),
            datasets: [{
                label: '# of Votes',
                data: data.map(row => row.income),
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            maintainAspectRatio: false //use for mobile responsive
        }
    });
}
