# Step 1: Clear npm Cache
<b> Clear npm Cache
# Step 2: Delete node_modules and package-lock.json
<b> rm -rf node_modules package-lock.json
# Step 3: Reinstall Dependencies
<b> npm install
<b> npm install express body-parser ejs sequelize sqlite3
<b> npm install --save-dev nodemon
<b> npm start
# Step #: Stop the server
<b> CTRL + C
# Step #: Update database
<b> node src/seed.js
