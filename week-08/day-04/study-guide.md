# Week 8 Day 4

## API Server

Learning Objectives:

- Compare and contrast a traditional server with a web API server
- Compare and contrast an application API with a web API
- Describe the frequency that a developer is expected to perform research in API
  documentation and the reasons that they would do so
- Analyze API documentation to write code that will retrieve specified data from
  an API
- Analyze API documentation to write code that will send specified data to a
  server
- Write usable and accessible API documentation

### What is a web API server?

- **API** - Application Programming Interface
  - interfaces that abstract away the inner workings of complex packages of code
    so that a developer can worry only about the input and output
- **web API** - an API in the form of a server
  - most common use is to store, share, and update data
  - a programmer should only be able to read server documentation to be able to
    read or update data through requests to the server
    - All you need to do is know where and how you need to send your request to
      get the data you need, or perform the action you desire.
  - different from traditional web server:
    - there is no HTML or CSS, only data sent back and forth from a web API
      server
    - the focus is interacting with data through making requests to the server,
      not through clicking links or submitting forms on an HTML page
  - examples of web API servers:
    - [GitHub API](https://docs.github.com/en/rest)
    - [Google Directions API](https://developers.google.com/maps/documentation/directions/get-directions)
    - [Weather API](https://openweathermap.org/api)

### Patterns of RESTful Endpoints for web API Servers

- no need for `GET` endpoints for viewing the HTML form pages

| Path Pattern             | HTTP Verb | Meaning                                          |
| ------------------------ | --------- | ------------------------------------------------ |
| /resource-name           | GET       | Index: Get all of the records for the resource   |
| /resource-name           | POST      | Create: Create a new record for the resource     |
| /resource-name/record-id | GET       | Details: Get the details of the specified record |
| /resource-name/record-id | PUT/PATCH | Update: Update the specified record              |
| /resource-name/record-id | DELETE    | Delete: Delete the specified record              |

For Nested Resources:

| Path Pattern                             | HTTP Verb | Meaning                                                                                |
| ---------------------------------------- | --------- | -------------------------------------------------------------------------------------- |
| /resource-name/record-id/nested-resource | GET       | Index: Get all of the records for the nested resources related to the specified record |
| /resource-name/record-id/nested-resource | POST      | Create: Create a new record for the nested resource related to the specified record    |
| /nested-resource/nested-record-id        | GET       | Details: Get the details of the specified nested resource's record                     |
| /nested-resource/nested-record-id        | PUT/PATCH | Update: Update the specified nested resource's record                                  |
| /nested-resource/nested-record-id        | DELETE    | Delete: Delete the specified nested resource's record                                  |

## JSON

- Describe the role of JSON in modern web development
- Identify formatting errors in a JSON file
- Compare and contrast the format of JSON and JavaScript Objects
- Use JavaScript to serialize JavaScript objects into JSON and deserialize JSON
  into JavaScript objects

### What is JSON?
