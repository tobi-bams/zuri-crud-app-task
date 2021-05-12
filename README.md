# CRUD APPLICATION

## Hosted Link
https://zuri-crud-app-task.herokuapp.com/


## GET ALL USERS ROUTE
* url: '/'
* type: "GET"
* returns: {message: String,
    data: []
}


## CREATE A NEW USER
* url: '/user'
* type: "POST"
* payloads: {
    name: String,
    email: String,
    country: String
}
* returns: data{
    message: string,
    data: Object
}

## UPDATE A USER
* URL:'/user/:id'
* :id: id is the parameter you pass to the URL to update a particular user
* type: "PUT"
* payload: {
    name: String
}
* returns: {message: String}

## DELETE A USER
*URL: '/user/:id'
* :id: id is the parameter you pass to the URL to delete a particular user
* type: "DELETE"
* returns: {message: String}


