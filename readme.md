# mean cms
this project is a very basic cms build with the mean stack (mongo, express, angular(6), and node).
aside from installation no prior coding experience is required to use it

#installation guide
    first make shure you have nodejs, mongo and the angular cli installed
    to make shure node is installed type `node -v` in the command line and it should display a vM.P.F for me its v8.11.3 lower versions might not work. mongo is required however it doesn't need to be installed on your computer perse. there is a (free) service that provides you with hosted mongo databases. go to mLab to make a account, create a db and copy the link that looks like this:
    `mongodb://<dbuser>:<dbpassword>@ds000000.mlab.com:00000/database-name` create a user on the db by clicking on the users 'button' replace the <dbuser> and <dbpassword> with the password and username you chose and copy the link into your .env file and replace what ever comes after `MONGOURI =`. then take the normal steps when it comes to installing a node app. go to the root of this project (the folder this readme is located in) and type `npm i` in the command line (that is opened on the project root) that will install all the packages and will also build the angular app. then finnaly type npm start and the node server will start up. you can now acces the cms locally on: localhost:3000 . and if you got a website just visit that

# coming soon
 - image upload - no longer will you have to use images stored somewhere on the internet you can now upload your images to the database     and load them from yoursite.com/images/image-name.
 - the cms can now create forms! (needs some work both with dynamic forms on the angular side and on the node server)
 - other features, request them!!!!
 - currently pages have only one version i would like to store up to 5-20 old versions of a page, it would also be nice to have a option to set pages to draft, publised, so you can save changes without updating the content of your site before it is ready!

 feel free to contribute

