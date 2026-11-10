# REST API — Introduction

### 1. What is an API?
API stands for Application Programming Interface.

It allows two applications to communicate with each other.

### 2. What is REST?
REST stands for Representational State Transfer.

It is an architectural style used to design web APIs.

### 3. What is a REST API?
A REST API allows clients and servers to communicate using HTTP requests and responses.

**Example:** A food delivery application uses APIs to:
- View restaurants.
- View menus.
- Place orders.
- Cancel orders.

### Client–Server Communication
- Client: Frontend that sends requests.
- Server: Backend that processes requests and sends responses.
- Database: Stores application data.

### Important Points
- REST is an architectural style.
- REST APIs commonly use HTTP methods.
- JSON is commonly used to exchange data.

# REST Principles — Part 1

### 1. Client–Server Architecture
Separates the application into two parts:
- Client: Handles the user interface.
- Server: Handles processing and data.

Both communicate through requests and responses.

### 2. Statelessness
The server does not depend on remembering previous client requests.

Each request must contain the necessary information to process it independently.

### 3. Cacheability
Caching means temporarily storing responses so they can be reused later.

Advantages:
- Improves performance.
- Reduces repeated requests.
- Reduces server workload.

# REST Principles — Part 2

### 4. Uniform Interface
Provides a consistent way for clients and servers to communicate.

Example:

| Operation | HTTP Method | Endpoint |
|---|---|---|
| Get all students | GET | /students |
| Get one student | GET | /students/101 |
| Add student | POST | /students |
| Update student | PATCH | /students/101 |
| Delete student | DELETE | /students/101 |

### 5. Layered System
REST architecture can contain multiple intermediate layers, such as:
- Security layers
- Proxies
- API gateways

The client does not need to know the internal structure of these layers.

### 6. Code on Demand (Optional)
The server can send executable code to the client.

Example: A server sends JavaScript code that the browser executes.

### REST Principles — Quick Revision
1. Client–Server
2. Statelessness
3. Cacheability
4. Uniform Interface
5. Layered System
6. Code on Demand (Optional)