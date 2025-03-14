document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    let count = 0;

    // Simulate the hunger death count (this is a placeholder; replace with real data if available)
    const updateCounter = () => {
        count += Math.floor(Math.random() * 10); // Increment by a random number for simulation
        counterElement.textContent = count.toLocaleString(); // Format number with commas
    };

    // Update the counter every second
    setInterval(updateCounter, 1000);
});