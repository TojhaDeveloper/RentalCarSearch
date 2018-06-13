#This App based out of Famous Three Tier Based Application.
#Front End is under the Client Directory and Boiler Plate is Taken
#From Create React App
#Middleware is a Light WeightNode server wrapped by Express.

#Application State is Managed by Redux and Middleware used for that part is Redux Thunk
#Reason for use of Redux Thunk is as it provides a well defined pattern known as Observer Pattern which dispatches any action as a broadcast to all the reducers and The respective Reducers is responsible for Change/Managing the state.Thus state management is centralised and since small parts changes in a peice of state its easier to maintain and reason about.

#Bootstrap and fontawseome is also used for beautification.

#At the backend Express Api calls the HotWires Rental car Api for our data needs.
#This design is chosen to mitigate CORS request and Hotwire api doesnt have whitelisting for All.
#The request response flow is as follows

#User --> Submits a Form attached on a Container which eventually goes via action creator From Action Creator

# request flows to our Express Server which takes in the request

# forwards out the request to Hotwire Rental Car Api.

#Once response is back from that third party api to Express

# It is process bu Redux Thunk middleware to dispatch to right #reducers which is responsible for changing the application #states and hence rendering the elements at the View Layer

#Create React App is back by a Proxy Server to fool Browser to think that request are coming from backend server hosted at localhost:5000

#Routes App has two routes :
#Home Route and Carlists Route on which Car Details are rendered.

#Steps to Run this Application

#1) Please Clone from the repository
#Url : https://github.com/TojhaDeveloper/RentalCarSearch.git
#2)npm install
#3)npm client install
#4)Please make user your current directory is at the root before
#step2 and step3
#5)at the root level run command npm run dev
#6)This with the help of oncurrently spawns two parrallel #processes, one for react side(client) at localhost:3000

# other is server side at localhost:5000
