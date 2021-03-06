[![Build Status](https://travis-ci.org/czarjulius/Politico.svg?branch=develop)](https://travis-ci.org/czarjulius/Politico)
[![Coverage Status](https://coveralls.io/repos/github/czarjulius/Politico/badge.svg?branch=develop)](https://coveralls.io/github/czarjulius/Politico?branch=develop)
<a href="https://codeclimate.com/github/czarjulius/Politico/maintainability"><img src="https://api.codeclimate.com/v1/badges/6e9fba1aa95c4391ff09/maintainability" /></a>
# Politico
Politico enables citizens give their mandate to politicians running for different government offices while building trust in the process through transparency.



### Installing

filepath> git clone https://github.com/czarjulius/Politico
npm install 
npm start



### Break down into end to end tests

# API

- Heroku - https://julius-politico.herokuapp.com/api/v1

 | Method | Description | Endpoints      | Role |
 | ------ | ----------- | -------------- | ---- |
 | POST |Create new party  | /api/v1/parties| Admin |
 | GET | Get all parties  | /api/v1/parties | User |
 | GET | Get a party  by ID (ID must be a number) | /api/v1/parties/ | Admin |
 | PATCH | Update existing party  | /api/v1/parties/ | Admin |
 | DELETE | Delete existing party  | /api/v1/parties/ | Admin |
 | POST |Create new office  | /api/v1/offices| Admin |
 | GET | Get all offices  | /api/v1/offices | User |
 | GET | Get an office  by ID (ID must be a number) | /api/v1/offices/ | Admin |



## Deployment

https://czarjulius.github.io/Politico/index.html

## Built With

* https://www.pivotaltracker.com/n/projects/2239862 - Management Tool


## Authors

* **Julius Ngwu**


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments


* Andela Nigeria

