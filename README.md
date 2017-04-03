#

demo app : **https://asset-manager24.herokuapp.com**
**Primary Objectives**

 * Create a simple web application that displays assets records using AngularJS 1.x
 	* use index.html in the **static** directory as your base html file
  	* JSON should be retrieved via AJAX and displayed as a simple list, similar to google search results
 	* show the name and description fields, and optionally show the type field, or an icon representing the type
 * Use any CSS framework you like (or none)
 * Utilize CRUD endpoint **http://localhost:3000/assets** (GET)
<br>
<br>

**Secondary Front-End Objectives** (choose any)

 * Add functionality that allows the user to delete assets
    * Utilize CRUD endpoint **/assets** (DELETE)
 * Create a view that allows users to add and modify assets
    * Utilize CRUD endpoint **/assets** (GET, POST, PUT)
 * Implement user-friendly sorting by name, type, or id (client-side only)
 * Use responsive CSS to make the app compatible with mobile devices and tablets
 * Optionally provide unit tests
<br>
<br>

**Secondary Full-Stack Objectives** (choose any)

 * Add a filter function to the assets endpoint (assetsController.js in the node.js server) to return only certain asset types
 	* example: GET **/assets?type=image** would only return image assets
 	    * KoaJS provides **this.query** within the CRUD functions (readAll, CreatOne...) as a javascript object of key/value pairs
 	* add some UI component to the front-end to allow the user to select the asset type to limit results to
 * (Advanced) Add a new data model for Users
    * Create front-end view and logic to handle CRUD operations on Users
    * Fields could be username, email, avatarUrl, age, gender, etc...
 * Optionally provide unit tests
<br>
<br>

### Installation:
#### NodeJS 6 or greater is required

Get started with:

```javascript
npm install
bower install
node server.js

```
Then load up **http://localhost:300/** in your favorite web browser, and get coding!
<br>
<br>
<br>
