
// script.js

document.getElementById('readmeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user input values
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const details = document.getElementById('details').value;
    const installation = document.getElementById('installation').value;
    const usage = document.getElementById('usage').value;
    const contribution = document.getElementById('contribution').value;
    const testing = document.getElementById('testing').value;
    const license = document.getElementById('license').value;
    const author = document.getElementById('author').value;
    const email = document.getElementById('email').value;
    const github = document.getElementById('github').value;
    const repository = document.getElementById('repository').value;
    const website = document.getElementById('website').value;

  <!-- Create README content with inline styles -->
const readmeContent = `
    <div id="readmeContent">
        <h1>${title}</h1>
        <div>
            <h2>Description</h2>
            <p>${description}</p>
        </div>
        <div>
            <h2>Detailed Information</h2>
            <p>${details}</p>
        </div>
        <div>
            <h2>Installation</h2>
            <p>${installation}</p>
        </div>
        <div>
            <h2>Usage</h2>
            <p>${usage}</p>
        </div>
        <div>
            <h2>Contribution Guidelines</h2>
            <p>${contribution}</p>
        </div>
        <div>
            <h2>Testing Instructions</h2>
            <p>${testing}</p>
        </div>
        <div>
            <h2>License</h2>
            <p>This project is licensed under the ${license}.</p>
        </div>
        <div>
            <h2>Author</h2>
            <ul>
                <li><strong>Name:</strong> ${author}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>GitHub:</strong> <a href="https://github.com/${github}">${github}</a></li>
            </ul>
        </div>
        <div>
            <h2>Project Links</h2>
            <ul>
                <li><strong>Repository:</strong> <a href="${repository}">${repository}</a></li>
                <li><strong>Website:</strong> <a href="${website}">${website}</a></li>
            </ul>
        </div>
    </div>


// Download README.md file
download('README.md', readmeContent);

function download(filename, text) {
            const element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', filename);

            element.style.display = 'none';
            document.body.appendChild(element);

            element.click();

            document.body.removeChild(element);
        }
