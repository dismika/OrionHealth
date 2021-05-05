How to run API
Clone this repository

open the project from intellij and run the project.
About the Service
The service is just a simple record and display the medications of patient REST service. It uses an in-memory database (H2) to store the data. You can also do with a relational database like MySQL or PostgreSQL. If your database connection properties work, you can call some REST endpoints defined in Controller on port 8888.
You can use this sample service to understand the conventions and configurations that allow you to create a DB-backed RESTful service. Once you understand and get comfortable with the sample app you can add your own services following the same patterns as the sample service.
User List : GET
http://localhost:8080/users/list
Add User : POST
http://localhost:8080/users/add
Medication List : GET
http://localhost:8080/medication/view/1
Add Medication : POST
http://localhost:8080/medication/add

About Spring Boot
Spring Boot is an "opinionated" application bootstrapping framework that makes it easy to create new RESTful services (among other types of applications). It provides many of the usual Spring facilities that can be configured easily usually without any XML. In addition to easy set up of Spring Controllers, Spring Data, etc. Spring Boot comes with the Actuator module that gives the application the following endpoints helpful in monitoring and operating the service:
To view your H2 in-memory datbase
The 'test' profile runs on H2 in-memory database.

How to run Frontend (REACT JS)
1.	Go to the webapp folder using terminal
cd src/main/webapp
2.	type npm install
3.	npm test
4.	npm start
