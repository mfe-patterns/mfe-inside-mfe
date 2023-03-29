# mfe-inside-mfe
### Example with multiple micro frontends in the same page

#### Use node version 14.X.X for seamless working fo the application.


## To run the container app

- `cd container`

- `npm install`

- `npm start`

This will start the webpack dev server at 8080 port.


## To run catalog mfe

- `cd catalog`

- `npm install`

- `npm start`

This will start the webpack dev server at 8081 port.


## To run cart mfe

- `cd cart`

- `npm install`

- `npm start`

This will start the webpack dev server at 8082 port.


## To run reviews mfe which will get rendered inside product details page of catalog mfe

- `cd reviews`

- `npm install`

- `npm start`

This will start the webpack dev server at 8083 port.



Each micro frontend is running on their own port and via a container app running on 8080 port. 

Clicking on a product on catalog page with render the product details page and Catalog micro frontend from 8083 port.



