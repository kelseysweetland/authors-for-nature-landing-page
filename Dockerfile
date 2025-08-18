# Use Node.js 18 (regular image, not alpine)
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev dependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Build the frontend
RUN npm run build:frontend

# Expose port 5000 (as specified in server/index.ts)
EXPOSE 5000

# Set production environment
ENV NODE_ENV=production
ENV PORT=5000

# Use the dev command which works, but in production mode
CMD ["npx", "tsx", "server/index.ts"]