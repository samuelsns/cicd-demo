// DOM Elements
const versionBadge = document.getElementById('version-badge');
const environmentBadge = document.getElementById('environment-badge');
const versionSpan = document.getElementById('version');
const environmentSpan = document.getElementById('environment');
const timestampSpan = document.getElementById('timestamp');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operationSelect = document.getElementById('operation');
const calculateBtn = document.getElementById('calculate-btn');
const resultSpan = document.getElementById('result');

// Fetch deployment information from the API
async function fetchDeploymentInfo() {
    try {
        const response = await fetch('/api/version');
        const data = await response.json();
        
        // Update the UI with deployment information
        versionSpan.textContent = data.version;
        versionBadge.textContent = `v${data.version}`;
        environmentSpan.textContent = data.environment;
        environmentBadge.textContent = data.environment;
        timestampSpan.textContent = new Date(data.timestamp).toLocaleString();
        
        // Set environment-specific styling
        if (data.environment === 'production') {
            environmentBadge.style.backgroundColor = '#e74c3c'; // Red for production
        } else if (data.environment === 'staging') {
            environmentBadge.style.backgroundColor = '#f39c12'; // Orange for staging
        } else {
            environmentBadge.style.backgroundColor = '#2ecc71'; // Green for development
        }
    } catch (error) {
        console.error('Error fetching deployment info:', error);
        versionSpan.textContent = 'Error loading version';
        environmentSpan.textContent = 'Error loading environment';
        timestampSpan.textContent = 'Error loading timestamp';
    }
}

// Perform calculation using the API
async function performCalculation() {
    const num1 = num1Input.value;
    const num2 = num2Input.value;
    const operation = operationSelect.value;
    
    // Basic validation
    if (!num1 || !num2) {
        resultSpan.textContent = 'Please enter both numbers';
        return;
    }
    
    try {
        const response = await fetch(`/api/calculate/${operation}/${num1}/${num2}`);
        const data = await response.json();
        
        // Display the result
        resultSpan.textContent = data.result;
    } catch (error) {
        console.error('Error performing calculation:', error);
        resultSpan.textContent = 'Error performing calculation';
    }
}

// Event listeners
calculateBtn.addEventListener('click', performCalculation);

// Handle Enter key press in input fields
num1Input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performCalculation();
});

num2Input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performCalculation();
});

// Initialize the app
function init() {
    fetchDeploymentInfo();
}

// Start the app when the page loads
document.addEventListener('DOMContentLoaded', init);
