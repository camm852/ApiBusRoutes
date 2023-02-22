
# Api Bus Routes

Project to show a series of whereabouts at the following punctual time.


## clarifications

- You can find their respective front in https://github.com/camm852/busroutes

- For the login you must save a user in the database with a password in sha256 in hex.

## Enviroments

#### FRONTED_URL: 
- domain front. 

#### PORT: 
- Port for run server. 

#### MONGO_URI:
- string connection for mongo db.

## Installation

Install dependencies of the project and run it.

```bash
  npm ci
  npm run dev
```



## API Reference

#### Get all routes

```http
  GET /api/routes
```

#### New Route and Update Route

```http
  POST - PUT /api/routes
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Name for route |
| `hour` | `string` | **Required**. Hour for route |
| `busStops` | `{lat: number, lng: number, name}[]` | **Required**. BusStops |





#### Get route

```http
  GET - Delete /api/routes/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of route to fetch |



#### Get route by hour

```http
  GET  /api/routes/${hour}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `hour`      | `string` | **Required**. Id of route to fetch |

#### Login

```http
  POST  /api/auth/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. email admin |
| `password`      | `string` | **Required**. password admin |


