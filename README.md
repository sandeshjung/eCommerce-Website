# eCommerce-Website
This is a simple ecommerce website with all the features a ecommerce website should have. It was built using mern stack. You can try it yourself on the following link:
https://nepshop.herokuapp.com/
![image](https://user-images.githubusercontent.com/11364442/197216309-49ac4448-b258-4838-bcb8-b8d64cdb2842.png)
## Features
* Full featured shopping cart
* Product reviews and ratings
* Top products carousel
* Product pagination
* Product search feature
* User profile with orders
* Admin product management
* Admin user management
* Admin Order details page
* Mark orders as delivered option
* Checkout process (shipping, payment method, etc)
* PayPal / credit card integration
* Database seeder (products & users)

## Env Variables
Create a .env file in root folder and add the following
```bash
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

## Install Dependencies (frontend & backend)
```bash
npm install
cd frontend
npm install
```

## Run
```bash
Run frontend (:3000) & backend (:5000)
npm concurrently
npm run dev
```

## Run backend only
```bash
npm run server
```

## Seed Database
You can use the following commands to seed the database with some sample users and products as well as destroy all data
```bash
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

## Sample User Logins
```bash
admin@example.com (Admin)
123456

ram@example.com (Customer)
123456

hari@example.com (Customer)
123456
```
