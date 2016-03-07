# expressrestapi #
##### This is simple demo app to create rest apis using MongoDB, NodeJS, Express #####

### restapi ###
##### **** This is simple example of writing rest api using Node + Express + MongoDB **** #####

Here are the steps to setup the environment:
> ##### Install NodeJS #####
    ###### This is only necessory for MAC ######
    > Before you install Node.JS, make sure you have install below two on MAC:
        - xCode from Apple App Stre
        - Homebrew: Simply run this command on MAC 
                ```
                    ruby -e "$(curl -fsSL
                    https://raw.githubusercontent.com/Homebrew/install/master/install)"
                ```
        - Run this command on commandLine:
        ```
            brew install node
        ```
    ###### For All OS ######
(If you follow above steps, skip first step)

1. Install Node.JS from this site: [CLICK HERE FOR NODEJS] JS](https://nodejs.org/en/)
2. Install MongoDB using this url: [CLICK HERE FOR MONGODB Installation](https://docs.mongodb.org/manual/installation/)
3. Clone this repo: git clone <this repo url> **
4. cd to cloned repo **
5. run command: 
    ```npm install . ```
6. Now start mongodb using this command 
    ``` mongod ```
7. From inside the repo directory run this command to start the server 
  ```node restapi.js ```
8. Go to postman or any other api client software and use any of these api end pints

##### Here is the list of api end points: #####
     GET => http://localhost:7000/ **
        > Show all the data from mongodb
     POST => http://localhost:7000/ **
        json data = {"name": "banana", "color": "green"}
        > Save the data in mongodb
     PUT => http://localhost:7000/:fruit_id **
        json data = {"name": "banana", "color": "red"}
        > update the fruit information
     DELET => http://localhost:7000/{fruit_id}
        > delete the specific fruit row from mongodb
Name of the monog db schema is : fruits  
