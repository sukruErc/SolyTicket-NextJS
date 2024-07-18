# Stage 1: Build
FROM node:18-alpine AS builder

# Install build tools to compile native dependencies
RUN apk add --no-cache \
  g++ \
  make \
  python3

WORKDIR /app

COPY package*.json ./

# Install dependencies, including sharp
RUN npm install

COPY . .

ARG NEXT_PUBLIC_ENDPOINT_BASE
ENV NEXT_PUBLIC_ENDPOINT_BASE=$NEXT_PUBLIC_ENDPOINT_BASE


# Build the Next.js application
RUN npm run build

# Stage 2: Run
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app ./

# Install only production dependencies
RUN npm ci --only=production

# Expose the port that the app runs on
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "start"]