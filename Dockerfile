# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory in the container to the root directory of your Angular application to Built
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./
#COPY .htaccess /app

# Install the dependencies
RUN npm install

# Copy the entire content of your Angular application to the container
COPY . .

# Build your Angular application inside the container
RUN npm run build --prod

# Use nginx as the web server
FROM nginx:latest

# Copy the built Angular application from the previous stage
RUN rm -rf /usr/share/nginx/html/*
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY --from=0 /app/nginx /etc/nginx/conf.d/
COPY --from=0 /app/dist/PropertyappsPortal /usr/share/nginx/html
#COPY --from=0 /app/.htaccess /usr/share/nginx/html/

# Set the working directory in the container to the root directory of your Angular application
WORKDIR /usr/share/nginx/html 

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
