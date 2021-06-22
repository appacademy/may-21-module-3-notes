
# HTTP Response Components Exercise

Based on the following scenarios discuss and determine what the HTTP response
components should be in each scenario.

For example, the response components for viewing the home page of Google could
include:

- status code: 200
- headers:
  - Content-Type: text/html
- body: home page

The body doesn't have to be exact. Instead, describe what the contents of the
body might include for the scenario.

## Scenarios

1. Click a link to an Instagram post that your friend thought was funny.
   - status code: 200
   - headers:
     - Content-Type: text/html
   - body: post information
2. Edit a Facebook comment that isn't your own
   - status code: 403
   - headers:
     - Content-Type: not clear (can be text/html)
   - body: message saying something like you don't have the authority to edit
     this comment
3. Upload your sick mixtape to SoundCloud successfully
   - status code: 201
   - headers:
     - Content-Type: not clear (can be text/html)
   - body: message saying that the upload was successful
4. Attempt to submit an Amazon review for a product through an HTML form, but
   you aren't logged in yet
   - One possibility:
     - status code: 302
     - headers:
       - Location: /login
   - Another possibility:
     - status code: 401
     - headers:
       - Content-Type: not clear (can be text/html)
     - body: message saying that you are not logged in
5. Sell one of your stocks on Robinhood, but Robinhood is having issues with
   their server because so many people are trying to sell that stock. The
   browser is displaying what seems like an infinite loading screen.
   - One possibility:
     - status code: 504
     - headers: none
     - body: not clear
   - Another possibility:
     - status code: 500
     - headers: none
     - body: not clear
6. Browse GIPHY for a cute puppy gif but there are no cute puppy gifs!
   - status code: 404
   - headers: none
   - body: not clear (maybe its a cute cat gif recommendation to make up for
     the lack of cute puppy gifs)
7. Send a picture to a friend on Snapchat
   - status code: 201
   - headers: none
   - body: not clear
