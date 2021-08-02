# web-from-scratch

#### - Folder public
file library and modules for front-end. 
each module has: 
  + style folder: for css need import manually in jsx file
  + redux folder: include reduxed files (file after injected redux props) and reducer. Reducer will automatically add by **config/generated-client-reducers.js + public/modules/core/redux/store.js**
  + view folder: include jsx files express entire content of a route
  + components folder: include components for view files
  + services folder: include files for interact with server or do some interacting matter
  + config.js file: include info about routes in this moudule (commonly for view files). This info is automatically combine with others one in others modules by **config/generated-client-paths.js** and lazy loading in **public/modules/core/components/loadable-route.jsx**

#### - Folder config
file config

#### - Folder app
file for back-end
