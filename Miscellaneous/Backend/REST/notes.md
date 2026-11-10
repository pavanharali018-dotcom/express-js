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