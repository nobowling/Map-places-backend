# Map-places-backend
- Node.js backend for Map places program using Google Maps API.
- Developed using Microsoft Windows and Google Chrome.
- Backend uses Express framework
- Backend communicates with Mlab cloud databse service which I set up for this project
- Uses frontend as it's static build
- Frontend for this project is made with HTML, CSS and vanilla Javascript. You can find it here: https://github.com/nobowling/Map-places-frontend (or in dist folder)

- I recommend using Google Chrome and a system that runs Google Maps,
but program should be supported most of the other known browsers as well.

- Program is usable at: https://mapplaces.herokuapp.com

Instructions for using:
- This is a simple app for adding, saving and editing places on Google Maps
- Click on the map to add a marker and input the information regarding the place as you like
- Clicking "Save" will save your marker and add it and its content in to the database I've set up for this project
- As you can see, the place you added now loads on to the map. Clicking the appeared icon, will open a info window in which you can edit your places information. Marker for favorite palces is displayed as a yellow marker with a star as default one being the default red marker by Google
- You can edit the information of your place as you like, and by clicking "Save edits" button new edited version of your place will replace the old one
- You can filter which markers are shown on the map. Currently you can filter places by their title, keywords and favorite status
- Have fun!

Known issues (working on it):
- Every now and then when loading the page a problem occurs with the axios library which causes that markers won't load, saving edits won't take effect or saving marker fails
- I think the root of this problem is in axios itself rather than my code (hopefully), working on a solution for this one
- As a user you can just reload the page which'll get it going again!
- Editing and saving a marker place requires a page reload to take effect
- There's a built-in function that realoads the page when the actions are made, but it slightly disrupts the flow of using the app
- Had some issues attaching static build of frontend to backend, which led me to do some refactoring I'm not fully satisfied, working on beautifying the code later on
- When adding/removing marker to and from favorites, page needs to be reloaded in order to make it work with the favorite filter

Developers notes:

- Hours spent on this project: ~55
- Due to tight schedule I had to make this in, program still needs refactoring making it more developer and user friendly, which I will continue in the future


 

