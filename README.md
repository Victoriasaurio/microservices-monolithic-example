## Microservices
This is a example about Microservices. There are an Monolithic architecture on which microservices are based. <br>
Running all microservices and monolithic architecture with
**`sudo docker-compose up --build`**

Paths to query monolithic architecture:
- **`http://localhost:8080/v1/api/books`**
- **`http://localhost:8080/v1/api/users`**
- **`http://localhost:8080/v1/api/cars`**

In monolithic architecture, all the paths are in a single file.

Paths to query microservices:
- **`http://localhost:8080/v2/api/books`**
- **`http://localhost:8080/v1/api/users`**
- **`http://localhost:8080/v1/api/cars`**

In microservices, each path is in its own file.