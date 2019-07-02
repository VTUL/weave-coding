This is a data coding app for the Weave workshops taking place in the University Libraries.

To run your own version, you will need access to a REST api.

Instructions:

Clone the repo, and then navigate to the folder from the command line. 

Use the command "npm install" to download the dependencies.

Rename example-config.js to config.js and rename example-secrets.js to secrets.js

Add your own values to the fields. See the comments for more information about what goes in both files.

Then use the command "npm build" to build a production version of the app.

At that point, you should have a folder called "build" appeared. Run the index.html file within that folder to use the app locally.

Note: This app is designed for local use, not to be deployed to a public-facing server. It does not currently have an API server for protecting API keys, and if deployed as is to a public server, API keys will be exposed to the client. 
