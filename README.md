# search-filter

install json server 
```
npm install -g json-server
```
create ``db.json``

```
//data base 
// db.json 

  [
    "item":{
     "id": 1 , 
     "title" : "json servr",
     "price" : 15.99
    }
  ]
```

start json server

```
json-server --watch db.json
```
