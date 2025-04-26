# Todo API Documentation

This documentation describes the RESTful API endpoints for managing todo items.

## Base URL

```
/api/todo
```

## Endpoints

### Get All Todos

Retrieves all todo items.

- **URL**: `/api/todo`
- **Method**: `GET`
- **Response**: List of todo objects
- **Example Response**:
  ```json
  [
    {
      "id": 1,
      "todo": "Complete API documentation"
    },
    {
      "id": 2,
      "todo": "Buy groceries"
    }
  ]
  ```

### Create Todo

Creates a new todo item.

- **URL**: `/api/todo`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "todo": "New todo item"
  }
  ```
- **Response**: The created todo object with generated ID
- **Example Response**:
  ```json
  {
    "id": 3,
    "todo": "New todo item"
  }
  ```

### Update Todo

Updates an existing todo item by ID.

- **URL**: `/api/todo/{id}`
- **Method**: `PUT`
- **URL Parameters**: `id` - The ID of the todo to update
- **Request Body**:
  ```json
  {
    "todo": "Updated todo item"
  }
  ```
- **Response**: The updated todo object
- **Example Response**:
  ```json
  {
    "id": 1,
    "todo": "Updated todo item"
  }
  ```

### Delete Todo

Deletes a todo item by ID.

- **URL**: `/api/todo/{id}`
- **Method**: `DELETE`
- **URL Parameters**: `id` - The ID of the todo to delete
- **Response**: Success message or status code indicating deletion
- **Example Response**:
  ```json
  {
    "message": "Todo deleted successfully"
  }
  ```

## Todo Object Structure

| Field | Type | Description |
|-------|------|-------------|
| id | Integer | Unique identifier for the todo item (automatically generated) |
| todo | String | The text content of the todo item |