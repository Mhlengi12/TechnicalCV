// Get the GitHub username input form
const gitHubForm = document.getElementById('gitHubForm');

window.onload = function()
{ 
    // Run GitHub API function, passing in the GitHub username
    requestUserRepos("Mhlengi12");
}

//Repos API, Star Wars API
function requestUserRepos(username) {

    // Create new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // GitHub endpoint, dynamically passing in specified username
    const url = `https://api.github.com/users/${username}/repos`;

    // Open a new connection, using a GET request via URL endpoint
    // Providing 3 arguments (GET/POST, The URL, Async True/False)
    xhr.open('GET', url, true);

    // When request is received
    // Process it here
    xhr.onload = function() {

        // Parse API data into JSON
        const data = JSON.parse(this.response);
        let root = document.getElementById('userRepos');
        while (root.firstChild) {
            root.removeChild(root.firstChild);
        }
        if (data.message === "Not Found") {
            let ul = document.getElementById('userRepos');

            // Create variable that will create li's to be added to ul
            let li = document.createElement('li');

            // Add Bootstrap list item class to each li
            li.classList.add('list-group-item')
                // Create the html markup for each li
            li.innerHTML = (`
                <p><strong>No account exists with username:</strong> ${username}</p>`);
            // Append each li to the ul
            ul.appendChild(li);
        } else {

            // Get the ul with id of of userRepos
            let ul = document.getElementById('userRepos');
            let ul1 = document.getElementById('userRepos1');
            let ul2 = document.getElementById('userRepos2');
            let ul3 = document.getElementById('gituser');

            
            // Loop over each object in data array
            
                // Create variable that will create li's to be added to ul
                let li = document.createElement('li');
                let li1 = document.createElement('li1');
                let li2 = document.createElement('li2');
                let li3 = document.createElement('li3');

                // Add Bootstrap list item class to each li
                li.classList.add('list-group-item')
                li1.classList.add('list-group-item')
                li2.classList.add('list-group-item')
                li3.classList.add('list-group-item')

                // Create the html markup for each li
                li.innerHTML = (`
                <p><strong>Repo:</strong> ${data[0].name}</p>
                <p><strong>Description:</strong> ${data[0].description}</p>
                <p><strong>URL:</strong> <a href="${data[0].html_url}">${data[0].html_url}</a></p>
                
                `);
            
                li1.innerHTML = (`
                <p><strong>Repo:</strong> ${data[2].name}</p>
                <p><strong>Description:</strong> ${data[2].description}</p>
                <p><strong>URL:</strong> <a href="${data[2].html_url}">${data[2].html_url}</a></p>
                
                `);

                li2.innerHTML = (`
                <p><strong>Repo:</strong> ${data[5].name}</p>
                <p><strong>Description:</strong> ${data[5].description}</p>
                <p><strong>URL:</strong> <a href="${data[5].html_url}">${data[5].html_url}</a></p>
                
                `);

                li3.innerHTML = (`
                <p><strong>User:</strong> ${data[0].owner.login}</p>
                <p><strong>Projects:</strong> ${data[0].owner.repos_url}</p>
                <p><strong>User URL:</strong> <a href="${data[0].owner.html_url}">${data[5].owner.html_url}</a></p>
                
                `);

                document.getElementById("prog").innerHTML = data[0].language;
                document.getElementById("prog1").innerHTML = data[2].language;
                document.getElementById("prog2").innerHTML = data[5].language;

                // Append each li to the ul
                ul.appendChild(li);
                ul1.appendChild(li1);
                ul2.appendChild(li2);
                ul3.appendChild(li3);
        }
    }

    // Send the request to the server
    xhr.send();

}
