# JWT Node.js example

Example application code for my blog post on [implementing JWT based authentication in Node.js](https://www.sohamkamani.com/nodejs/jwt-authentication).

To run this application, first install dependencies:

```
npm install
```

Then, run the command:

```sh
node ./index
```

Now, using any HTTP client with support for cookies (like [Postman](https://www.getpostman.com/apps), or your web browser) make a sign-in request with the appropriate credentials:

```
POST http://localhost:8000/signin

{"username":"user1","password":"password1"}
```

You can now try hitting the welcome route from the same client to get the welcome message:

```
GET http://localhost:8000/welcome
```

Hit the refresh route, and then inspect the clients cookies to see the new value of the `token` cookie:

```
POST http://localhost:8000/refresh
```
