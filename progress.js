<script>
let interval;

function startCounter() {
    let target = parseInt(document.getElementById("targetInput").value);
    let count = 0;

    if (isNaN(target) || target <= 0) {
        alert("Please enter a valid number");
        return;
    }

    clearInterval(interval);

    interval = setInterval(() => {
        if (count < target) {
            count++;
            document.getElementById("counter").innerText = count;
        } else {
            clearInterval(interval);
        }
    }, 100);
}
</script>
