## FoodieExpress API
* A lightweight, functional REST API built with Node.js and Express to power a food delivery ecosystem. This system allows user to register, verify
their accounts with an otp, get list of food orders, and admin can create or add new food items to cart. 
## Prerequisites
- Node.js (v14 or higher)
- npm (package manager)

## Installation
- Clone the repository:

- Bash
git clone https://github.com/your-username/truemind-foodApp.git

- cd truemind-foodApp

## Install dependencies:

# Bash
- npm install

## Start the server:
# Bash
- node server.js
- The API will be live at http://localhost:3000.

## API Documentation

1. User Authentication
- Endpoint	    Method	    Description	                    Payload Example
- /signup	    POST	    Register a new user account     {"email": "user@example.com"}
- /verify	    POST	    Verify account (OTP: 1234)	    {"email": "user@example.com", "otp": "1234"}

2. Menu Management
- Endpoint       Method     Description
- /foods	    GET	        List all available food items
- /foods	    POST	    Add a new food item (Admin Only)
