I # 📝 Log Output Microservice (Kubernetes Course – Exercise 1.1)

This is a simple Node.js microservice for logging output to standard output. It generates a random UUID when started and logs that ID along with the current timestamp every 5 seconds.

This microservice is built for deployment into a Kubernetes cluster, such as one created using `k3d`.

---

## ✅ Features

- Generates a UUID on startup
- Logs timestamped UUID to console every 5 seconds
- Dockerized and ready to run in Kubernetes
- Lightweight (based on `node:18-alpine`)

---

## 📁 Project Structure

log-output/
├── Dockerfile # Docker configuration
├── index.js # Application logic
├── package.json # Node.js dependencies



---

## 🧠 Application Logic

### `index.js`

```js
const { v4: uuidv4 } = require('uuid');

const id = uuidv4();

setInterval(() => {
  console.log(`${new Date().toISOString()}: ${id}`);
}, 5000);
🐳 Docker Instructions
Build and Push Docker Image
bash

docker build -t samyak2605/log-output:1.1 .
docker push samyak2605/log-output:1.1
Alternatively, if using only k3d without Docker Hub:

bash

k3d image import log-output:1.1
☸️ Kubernetes Deployment
Create deployment using kubectl:


kubectl create deployment log-output-dep \
  --image=samyak2605/log-output:1.1
Check Pod Logs

bash

kubectl get pods
kubectl logs -f <pod-name>
Expected Output:

makefile

2025-06-08T14:32:15.000Z: 123e4567-e89b-12d3-a456-426614174000
2025-06-08T14:32:20.000Z: 123e4567-e89b-12d3-a456-426614174000
...
