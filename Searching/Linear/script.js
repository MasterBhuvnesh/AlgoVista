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

function startLinearSearch() {
    const elements = document.querySelectorAll('.array-element');
    const targetInput = document.getElementById('targetInput');
    const resultDiv = document.getElementById('result');
    const target = parseInt(targetInput.value, 10);
    let found = false;

    resultDiv.textContent = ''; // Clear previous result

    if (isNaN(target)) {
        resultDiv.textContent = 'Please enter a valid target number.';
        return;
    }

    function searchStep(index) {
        if (index < elements.length) {
            elements.forEach((el, i) => {
                el.classList.remove('highlight', 'found', 'discolored');
                if (i === index) {
                    el.classList.add('highlight');
                } else if (i < index) {
                    el.classList.add('discolored');
                }
            });

            setTimeout(() => {
                const value = parseInt(elements[index].textContent, 10);
                if (value === target) {
                    elements[index].classList.add('found');
                    resultDiv.textContent = `Target ${target} found at index ${index}.`;
                    found = true;
                } else {
                    searchStep(index + 1);
                }
            }, 1000);
        } else if (!found) {
            resultDiv.textContent = `Target ${target} not found in the array.`;
        }
    }

    searchStep(0);
}
