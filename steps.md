1. create file structure and install file structure ( express generator not used here)
2. npm i express, requirre it in app.js and write port
3. To run, 'npx nodemon app.js' ( because app.js is inside src, so default nodemon cant find it )
4. make routs
5. created normal html pages, css and js(these are called static files) inside the Public folder
5. used bootstrap for the pages
6. for the view engine.insted of ejs, used hbs(handlebars)
view engines are used for dynamic programm
also use "app.set('view engine', 'hbs');"  ---- in app.js to tell the view engine you're using
"app.set('views', path.join(__dirname, '../views'));" ---- To define the path for the hbs folder
7. now copy paste html contents to hbs page and deleted the html page.