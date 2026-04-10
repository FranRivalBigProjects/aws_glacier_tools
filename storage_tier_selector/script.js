function calc(){
let storage=parseFloat(document.getElementById('a').value)||0;
let speed=parseFloat(document.getElementById('b').value)||0;
let requests=parseFloat(document.getElementById('c').value)||0;

// simplified glacier model
let cost = storage * 0.004;
let retrievalTime = (10 / (speed || 1)).toFixed(2);

let level = cost < 5 ? "Very low cost ✅" :
            cost < 50 ? "Moderate cost ⚖️" :
            "High archive cost ⚠️";

let insights = "";
if(speed < 2) insights += "Slow retrieval. Use faster tier.<br>";
if(storage > 10000) insights += "Large archive. Optimize lifecycle.<br>";
if(requests > 1000) insights += "High retrieval frequency. Consider S3 standard.<br>";

document.getElementById('result').innerHTML =
"Estimated Cost: $" + cost.toFixed(2) + "<br><br>" +
"Retrieval Time (hrs): " + retrievalTime + "<br><br>" +
level + "<br><br>" + insights;
}
