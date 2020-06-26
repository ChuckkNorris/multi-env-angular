# MultiEnvApp
Example Angular app configured to use application configuration generated when app is deployed to Kubernetes.
Locally, app uses the `/src/assets/config/app.config.json` file.
In Kubernetes, variables would be used for the config values in the manifest and replaced during execution of the release pipeline

# Prerequisites
1. Docker for Desktop installed
2. Kubernetes enabled via Docker Desktop settings

# Running the App
1. Deploy to your Kubernetes cluster
  `kubectl apply -f manifest.yml`
3. Navigate to `localhost:31317` to view the app
