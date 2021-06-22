
# HTTP Request Components Exercise

Based on the following scenarios discuss and determine what the HTTP requests
components should be in each scenario.

For example, the request components for viewing the home page of Google could
include:

- method: GET
- URI: /
- headers:
  - Host: google.com (OPTIONAL)
- body: none

> The `Host` header is optional is in this exercise.

The URI and body don't have to correct. Instead, make up your own URI or
description of the body contents that would make sense for the scenario.

## Scenarios

1. Click a link to an Instagram post that your friend thought was funny.
   - method: GET
   - URI: /p/funny-post-name
   - headers:
     - Host: instagram.com
   - body: none
2. Edit your Facebook comment
   - method: PATCH
   - URI: /my-post-name/comment-id
   - headers:
     - Host: facebook.com
     - Content-Type: x-www-form-urlencoded
   - body:
     - contains information like the text that I want to edit in my comment and my
       reaction
3. Upload your sick mixtape to SoundCloud
   - method: POST
   - URI: /audio
   - headers:
     - Host: soundcloud.com
     - Content-Type: audio/mpeg
   - body: the mixtape
4. Submit an Amazon review for a product through an HTML form
   - method: POST
   - URI: /product-name/review
   - headers:
     - Host: amazon.com
     - Content-Type: x-www-form-urlencoded
   - body: the product review, the rating of the product
5. Sell one of your stocks on Robinhood
   - method: DELETE, or PUT/PATCH
   - URI: /stock-tag/number-of-stocks
   - headers:
     - Host: robinhood.com
   - body: none
6. Browse GIPHY for a cute puppy gif
   - method: GET
   - URI: /cute-puppy-gif
   - headers:
     - Host: giphy.com
   - body: none
7. Send a picture to a friend on Snapchat
   - method: POST
   - URI: /friend-name/snap
   - headers:
     - Host: snapchat.com
     - Content-Type: image/png
   - body: the picture you want to send
