let arrayElements = [];

function addElement() {
    const elementInput = document.getElementById('elementInput');
    const arrayContainer = document.getElementById('arrayContainer');
    const value = parseInt(elementInput.value, 10);
    
    if (!isNaN(value)) {
        arrayElements.push(value);
        
        const element = document.createElement('div');
        element.classList.add('array-element');
        element.textContent = value;
        arrayContainer.appendChild(element);
        
        elementInput.value = ''; // Clear input field
        elementInput.focus(); // Focus on input field for the next element
    } else {
        alert('Please enter a valid number.');
    }
}

function startBinarySearch() {
    const elements = document.querySelectorAll('.array-element');
    const targetInput = document.getElementById('targetInput');
    const resultDiv = document.getElementById('result');
    const target = parseInt(targetInput.value, 10);
    let left = 0;
    let right = elements.length - 1;

    resultDiv.textContent = ''; // Clear previous result

    if (isNaN(target)) {
        resultDiv.textContent = 'Please enter a valid target number.';
        return;
    }

    function searchStep() {
        if (left <= right) {
            const mid = Math.floor((left + right) / 2);
            elements.forEach((el, index) => {
                el.classList.remove('highlight', 'found', 'discolored');
                if (index === mid) {
                    el.classList.add('highlight');
                } else if (index < left || index > right) {
                    el.classList.add('discolored');
                }
            });

            setTimeout(() => {
                const midValue = parseInt(elements[mid].textContent, 10);
                if (midValue === target) {
                    elements[mid].classList.add('found');
                    resultDiv.textContent = `Target ${target} found at index ${mid}.`;
                } else if (midValue < target) {
                    left = mid + 1;  // Move the left pointer to mid + 1
                    searchStep();
                } else {
                    right = mid - 1;  // Move the right pointer to mid - 1
                    searchStep();
                }
            }, 1000);
        } else {
            resultDiv.textContent = `Target ${target} not found in the array.`;
        }
    }

    searchStep();
}
