# Dockerfile
FROM node:latest

# Working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install
RUN npm install react-scripts

# Copy source code
COPY . .

# Start the application
CMD ["npm", "start"]
