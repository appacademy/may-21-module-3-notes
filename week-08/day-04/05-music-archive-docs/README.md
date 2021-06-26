
# API Docs for a Music Archive

In this project, you will document the request and response components for
API routes of a music archive server.

## Set up

To set up the server that you will test your routes on, run `npm install`
inside of the `server` folder. Please do not to look at the contents of the
`server` folder until you finish this project.

To start the server, run `npm start` inside of the `server` folder. This will
allow you to make requests to [http://localhost:5000] using any client (browser
and Postman).

To stop the server from listening to requests, press `CTRL + c` for
Windows/Linux or `CMD + c` for MacOS in the terminal that you started the server
(wherever you ran `npm start`).

## Resources

Below is a list of all the resources for this music archive server.

- artists:
  - artistId: unique identifier
  - name
- album:
  - albumId: unique identifier
  - name
  - artistId: of the artist that released the album
- song:
  - songId: unique identifier
  - name
  - lyrics
  - trackNumber: the order of the song in its album
  - albumId: of the album that the song was released with

## Documentation

The music archive server receives JSON request bodies and returns JSON response
bodies.

Below is a list of operations on the music archive server that you can perform.
For each operation, document what the components of the request should be and
what you should expect from the response. Document all the important components
of the request and the response. You can use a Google doc, VSCode for editing
a text/markdown file, or whatever text editor you want for creating the
API routes documentation for this music archive server.

Here's how to approach creating the documentation for the music archive server
operations:

1. Make a prediction based off of your knowledge of HTTP request and response
   components and API routes to determine what the request and response
   components of the given operation should be.
2. Formulate the request using Postman and submit the request to see what the
   response is. The music archive server can be accessed at
   [http://localhost:5000].
3. If the request or response is not what you predicted it to be, then update
   your documentation.

If you don't see the response you want, or if you see an error status code, then
the components of the request are wrong. Try playing around with the request
components to get closer to the response you expect.

If you get stuck, make sure to ask for help!

The request and response components to get all the artists are filled out for
you as an example.

### Get all the artists

Request components:

- Method: GET
- URL: /artists
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
  - Content-Type: application/json
- Body: information about all the artists

  ```json
  [
    {
      "artistId": 1,
      "name": "Red Hot Chili Peppers"
    }
  ]
  ```

Test this in Postman or by using `fetch` in the browser.

### Get a specific artist's details based on artistId

Request components:

- Method: GET
- URL: /artists/:artistId
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
  - Content-Type: application/json
- Body: information about a specific artist and their albums

  ```json
  {
    "artistId": 1,
    "name": "Red Hot Chili Peppers",
    "albums": [
      {
        "albumId": 1,
        "name": "Stadium Arcadium"
      }
    ]
  }
  ```

### Add an artist

Request components:

- Method: POST
- URL: /artists
  - Content-Type: application/json
- Body: information about the artist to be created

  ```json
  {
    "name": "Led Zeppelin"
  }
  ```

Response components:

- Status Code: 201
- Headers:
  - Content-Type: application/json
- Body: information about the newly created artist

  ```json
  {
    "artistId": 2,
    "name": "Led Zeppelin"
  }
  ```

### Edit a specified artist by artistId

Request components:

- Method: PUT or PATCH
- URL: /artists/:artistId
- Headers:
  - Content-Type: application/json
- Body: information about the artist to be editted

  ```json
  {
    "name": "Led Zeppelin"
  }
  ```

Response components:

- Status Code: 200
- Headers:
  - Content-Type: application/json
- Body: information about the editted artist

  ```json
  {
    "artistId": 2,
    "name": "Led Zeppelin"
  }
  ```

### Delete a specified artist by artistId

Request components:

- Method: DELETE
- URL: /artists/:artistId
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
  - Content-Type: application/json
- Body: message of success

  ```json
  {
    "message": "Successfully deleted"
  }
  ```

### Get all albums of a specific artist based on artistId

Request components:

- Method: GET
- URL: /artists/:artistId/albums
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
  - Content-Type: application/json
- Body: information about all the albums of a specific artist

  ```json
  [
    {
      "albumId": 1,
      "name": "Stadium Arcadium",
      "artistId": 1
    }
  ]
  ```

### Get a specific album's details based on albumId

Request components:

- Method: GET
- URL: /albums/:albumId
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
  - Content-Type: application/json
- Body: information about a specific album and their songs

  ```json
  {
    "albumId": 1,
    "name": "Stadium Arcadium",
    "artistId": 1,
    "artist": {
      "artistId": 1,
      "name": "Red Hot Chili Peppers"
    },
    "songs": [
      {
        "songId": 1,
        "name": "Dani California",
        "trackNumber": 1
      }
    ]
  }
  ```

### Add an album to a specific artist based on artistId

Request components:

- Method: POST
- URL: /artist/:artistId/albums
- Headers:
  - Content-Type: application/json
- Body: information about the album to be created

  ```json
  {
    "name": "Stadium Arcadium"
  }
  ```

Response components:

- Status Code: 201
- Headers:
  - Content-Type: application/json
- Body: information about the newly created album

  ```json
  {
    "albumId": 1,
    "name": "Stadium Arcadium",
    "artistId": 1
  }
  ```

### Edit a specified album by albumId

Request components:

- Method: PUT or PATCH
- URL: /albums/:albumId
- Headers:
  - Content-Type: application/json
- Body: information about the album to be editted

  ```json
  {
    "name": "Stadium Arcadium"
  }
  ```

Response components:

- Status Code: 200
- Headers:
  - Content-Type: application/json
- Body: information about the editted album

  ```json
  {
    "albumId": 1,
    "name": "Stadium Arcadium",
    "artistId": 1
  }
  ```

### Delete a specified album by albumId

Request components:

- Method: DELETE
- URL: /albums/:albumId
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
  - Content-Type: application/json
- Body: success message

  ```json
  {
    "message": "Successfully deleted"
  }
  ```

### Get all songs of a specific artist based on artistId

Request components:

- Method: GET
- URL: /artists/:artistId/songs
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
  - Content-Type: application/json
- Body: information about all the songs of a specific artist

  ```json
  [
    {
      "songs": 1,
      "name": "Dani California",
      "albumId": 1
    }
  ]
  ```

### Get all songs of a specific album based on albumId

Request components:

- Method: GET
- URL: /albums/:albumId/songs
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
  - Content-Type: application/json
- Body: information about all the songs of a specific album

  ```json
  [
    {
      "songs": 1,
      "name": "Dani California",
      "albumId": 1
    }
  ]
  ```

### Get a specific song's details based on songId

Request components:

- Method: GET
- URL: /songs/:songId
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
  - Content-Type: application/json
- Body: information about a specific song

  ```json
  {
    "songId": 1,
    "name": "Dani California",
    "trackNumber": 1,
    "lyrics": "...",
    "albumId": 1,
    "artist": {
      "artistId": 1,
      "name": "Red Hot Chili Peppers"
    },
    "album": {
      "albumId": 1,
      "name": "Stadium Arcadium",
      "artistId": 1
    }
  }
  ```

### Add a song to a specific album based on albumId

Request components:

- Method: POST
- URL: /albums/:albumId/songs
- Headers:
  - Content-Type: application/json
- Body: information about the song to be created

  ```json
  {
    "name": "Dani California",
    "trackNumber": 1,
    "lyrics": "..."
  }
  ```

Response components:

- Status Code: 201
- Headers:
  - Content-Type: application/json
- Body: information about the newly created song

  ```json
  {
    "songId": 1,
    "name": "Dani California",
    "trackNumber": 1,
    "lyrics": "...",
    "albumId": 1
  }
  ```

### Edit a specified song by songId

Request components:

- Method: PUT or PATCH
- URL: /songs/:songId
- Headers:
  - Content-Type: application/json
- Body: information about the song to be editted

  ```json
  {
    "name": "Dani California",
    "trackNumber": 1,
    "lyrics": "..."
  }
  ```

Response components:

- Status Code: 200
- Headers:
  - Content-Type: application/json
- Body: information about the editted song

  ```json
  {
    "songId": 1,
    "name": "Dani California",
    "trackNumber": 1,
    "lyrics": "...",
    "albumId": 1
  }
  ```

### Delete a specified song by songId

Request components:

- Method: DELETE
- URL: /songs/:songId
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
  - Content-Type: application/json
- Body: success message

  ```json
  {
    "message": "Successfully deleted"
  }
  ```

[http://localhost:5000]: http://localhost:5000
