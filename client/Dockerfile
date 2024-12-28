# Use an official Node.js runtime as the base image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app/client

# Copy package.json and package-lock.json files
COPY client/package*.json ./

# Install dependencies
RUN npm install

# Copy the application source code
COPY client/ ./ 

# Expose the port the application runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]



