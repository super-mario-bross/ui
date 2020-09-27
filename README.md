# Ratings & Review UI

This React SPA is responsible for user flow for the Review and Ratings .

# Configurations
The application can run by setting the below environment variables.
Note: The backend repository must be running if running from local in order to point to the local apis.

 - **BASE_API_URL:** Microservice Review and Ratings Base API Url.


BASE_API_URL=http://localhost:4444/v1/

 Default ENV values to run in local development


**Clone the git repo**
 
`git clone git@github.com:super-mario-bross/ui.git`

The application runs in the port 3000 by default at http://localhost:3000

Once setup you can now install the package and dependencies:

```console
$ npm i
```

``` bash
# Navigate to the project root directory.
cd supermariobros/

# set your .env file with the ENV values shhown above
touch .env

# Install dependencies
npm install


# Start development mode
npm run start

# Production build
npm run build


# Unit test cases
npm run test

```