# Base image

FROM node:14-alpine

# Set the working directory

WORKDIR /app

# Copy the package.json and package-lock.json files to the container

COPY package*.json ./

# Install dependencies

RUN npm install

# Copy the rest of the application files to the container

COPY . .

# Build the application

RUN npm run build

# Expose the port that the application is running on

EXPOSE 3000

# Start the application

CMD ["npm", "start"]

