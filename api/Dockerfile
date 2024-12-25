# Use Node.js base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /api

# Copy only the package.json and package-lock.json files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Expose the application port (adjust as needed)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
