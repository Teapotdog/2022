# Use Node.js base image
FROM node:16-alpine

WORKDIR /app/api

COPY api/package.json ./


RUN npm install --production

# Copy the rest of the application source code
COPY api/ ./

# Expose the application port (adjust as needed)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
