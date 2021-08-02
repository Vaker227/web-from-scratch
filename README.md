# web-from-scratch

#### - Folder public
file library and modules for front-end. 
each module has: 
  + *Folder style*: for css need import manually in jsx file
  + *Folder redux*: include reduxed files (file after injected redux props) and reducer. Reducer will automatically add by **config/generated-client-reducers.js + public/modules/core/redux/store.js**
  + *Folder view*: include jsx files express entire content of a route
  + *Folder components*: include components for view files
  + *Folder services*: include files for interact with server or do some interacting matter
  + *File config.js*: include info about routes in this moudule (commonly for view files). This info is automatically combine with others one in others modules by **config/generated-client-paths.js** and lazy loading in **public/modules/core/components/loadable-route.jsx**

#### - Folder config
File config

#### - Folder app
File for back-end

#### - File server.js
File root. It will run files in config folder
