# Use the official Node.js 14 image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Make the entrypoint script executable
RUN chmod +x entrypoint.sh

# Set the entrypoint to run the entrypoint script
ENTRYPOINT ["./entrypoint.sh"]