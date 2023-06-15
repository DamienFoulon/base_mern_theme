# Base React Theme

A simple react project template. 

This template is using : 

* React 
* Recoil
* React Router Dom
* Axios
* Sass 


## Environment Variables

To use axios instance, you'll need to update `REACT_APP_API_URL`


## Installation

Download the repo
```bash
  git clone git@github.com:DamienFoulon/client.git
  cd client
```

Install the dependencies
```bash
  npm install
```
    
## Run Locally

```bash
  npm run start
```


## Deployment

You can Dockerizing the theme too, by following these instructions :

```bash
  # Build the docker image
  docker build . -t dockerized-client

  # Check the image was correctly created
  docker images | grep dockerized-client

  # Deploy the image with port 3000 mapped on 3000 localhost
  docker run -p 3000:3000 -d dockerized-client
```
## Authors

- [@DamienFoulon](https://www.github.com/DamienFoulon)

*Feel free to use and share this repo, a small star would be welcome.*

