# Team G-force

## Softwares:
- React
- Node: 8.12.0
- NPM: 6.4.1
- MySQL: 8.0.12
## Install and run MySQL for linux
1. download deb package at: https://dev.mysql.com/downloads/repo/apt/
2. run this command: `sudo dpkg -i mysql-apt-config_0.8.10-1_all.deb`
3. Adding the mysql apt repo: `sudo apt-get update`
4. Install: ` sudo apt-get install mysql-server`
   -   set your password to ***g-force*** 
5. To start mysql: `sudo service mysql start`
6. To stop mysql: ` sudo service mysql stop`
7. To check mysql status: `sudo service mysql status`

## Install Node and NPM for linux:
1. Check if **curl** install by typing following command: `curl --version`, if not installed: run `sudo apt-get install curl`
2. Update node repo version via curl: `curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -`
3. Install node/npm via apt: `sudo apt-get install -y nodejs`
4. Check node version: `node --version`
5. Check npm version: `npm --version`

## Install Sequelize-cli
`npm install -g sequelize-cli`

## Install Git:
`sudo apt-get install git`

# Download and Run the project:
## Download and Install all the server and client dependences:
1. `git clone https://github.com/weihaichen/g-force.git`

2. `cd g-force`

3. `npm install`

4. `npm run client-install`

## Using Sequelize to create/migrate/seed database:

1. `cd server`

2. Create the database by running: `sequelize db:create`

3. Create defined tables by running: `sequelize db:migrate`

4. Adding Data to the tables by running: `sequelize db:seed:all`

## Running the project:
`npm run dev`

## To create your own working branch:
- `git checkout -b *branch name*`