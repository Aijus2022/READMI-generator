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

    // Create README content with Markdown syntax
    const readmeContent = `
# ${title}

## Description
${description}

## Detailed Information
${details}

## Installation
${installation}

## Usage
${usage}

## Contribution Guidelines
${contribution}

## Testing Instructions
${testing}

## License
This project is licensed under the ${license}.

## Author
- **Name:** ${author}
- **Email:** ${email}
- **GitHub:** [@${github}](https://github.com/${github})

## Project Links
- **Repository:** [${repository}](${repository})
- **Website:** [${website}](${website})
`;

    // Download README.md file
    download('README.md', readmeContent);
});

function download(filename, text) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
