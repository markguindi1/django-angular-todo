# django-angular-todo

A basic project I'm working on to learn the basics of the Django Rest Framework, Angular, and how to integrate them to build a basic fully-functional web app. 

### Todo Schema: ###

```
Todo {
  text: String, 
  done: boolean, 
  id: int // Autogenerated by Django ORM 
}
```

### Api Endpoints: ###
`GET /api/todos` Get list of all Todos
Response
```
[
    {
        "id": number,
        "text": "string",
        "done": boolean
    },
    ...
]
```

`POST /api/todos` Create Todo
Request
```
{
	"text": "string", 
	"done": boolean
}
```
Response
```
{
    "id": number,
    "text": "string",
    "done": boolean
}
```

`GET /api/todos/<id>` Get Todo by ID
Response
```
{
    "id": number,
    "text": "string",
    "done": boolean
}
```

`PUT /api/todos/<id>` Update Todo by ID
Request
```
{
	"text": "string", 
	"done": boolean
}
```
Response
```
{
    "id": number,
    "text": "string",
    "done": boolean
}
```

`DELETE /api/todos/<id>` Delete Todo by ID
(No Request or Response body)
