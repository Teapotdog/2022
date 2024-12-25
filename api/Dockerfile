# Use Node.js base image
FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install --production

# Copy the rest of the application source code
COPY . .

# Expose the application port (adjust as needed)
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]
