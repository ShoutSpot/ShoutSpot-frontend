# Use an official Node.js runtime as a parent image
FROM node:22

# Set the working directory in the container
WORKDIR /app

# Install 'serve' globally
RUN npm install -g serve

# Copy the dist directory to the container
COPY /dist /app/dist

# The port that your app will run on
EXPOSE 3000

# Command to serve the app using 'serve'
CMD ["npx", "serve", "dist"]
