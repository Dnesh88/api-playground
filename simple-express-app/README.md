# 🌿 Express 101

This project uses a simple server which services various endpoints. I also utilise middleware utilities for providing add-on features. To simulate errors, which can happen replying on 3rd party services, I use a mock error.

## 🖥️ Features & Design

- Server setup
- Routes setup
- Middleware modules
  - Logging
  - Handling errors
  - Handling non-existing resource requests

```
const logger = require("./middleware/logger");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
```

- **Security:** Avoid exposing entire object to consumers as it can leak various internal details which can be a security concern.

```
res.json({
    message: err.message,

    // exposing the entire error object is a security concern
    // error: err,
  });
```

## ⚙️ Technologies Used

- JavaScript
- Node.js
- Express

## 🛠️ Tools Used

- VS Code
- Git and GitHub

## 🤝 Authors

- [Dinesh Sherpa](https://github.com/Dnesh88)
