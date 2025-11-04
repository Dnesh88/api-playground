# 🌿 Express 101

This project uses a simple server which services various endpoints. I also utilise middleware utilities for providing add-on features. To simulate errors, which can happen replying on 3rd party services, I use a mock error.

## 🖥️ Features & Design

- Middleware modules
  - Created modules for common functionalities such as logging, handling errors, and non-existing resources request.

```
const logger = require("./middleware/logger");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
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
