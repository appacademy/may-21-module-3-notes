# Week 8 Review

## Suggested Study Plan

- Take the practice assessment at least 5 times over
  - Finish the practice assessment in under half the allotted time (around 1
    hour or less)
- Do both the Monday HTTP Basics project and Thursday Music Archive Docs project
  - use the JSON format in the practice assessment when writing documention
  - Repeat this as many times as it takes to get comfortable (under 1 hour
    each)
  - Making the requests in both Postman and `fetch`
- Do the Wednesday Create and Handle Promises Practice Part 2 and Wednesday
  Async/Await Practice Part 2 as many times as it takes to get comfortable with
  Promises
- Go through study guides from Monday, Wednesday, and Thursday

## Suggested Practices to Review

- Monday's HTTP Basics Project
- All the Promise and `fetch` practices (especially bonus) on Wednesday
- Thursday's Music Archive Docs Project (not the Server project)

## Assessment Points Breakdown

- 13 Multiple Choice Quiz questions - worth 4 points each - 52 points
- 6 `fetch`/Promise project test specs - worth 4 points each - 24 points
- 10 problems/scenarios - 70 HTML Web Server project test specs - worth 1 point each
- 9 problems/scenarios - 63 JSON API Server project test specs - worth 1 point each

## HTML Form Submission

Example of submitting an HTML form like the one in [this HTML document](../day-02/05-html-form-submission/views/cat-form.html):

```plaintext
POST /cat
Content-Type: application/x-www-form-urlencoded

name=Fluffy&pattern=calico&size5&description=very+fluffy
```

## HTTP Request and Response Components

### Traditional Web Application

Possible Headers:

- Content-Type:
  - application/x-www-form-urlencoded for the request
  - text/html for the response
- Location:
  - url to redirect to

### JSON API Server

Possible Headers:

- Content-Type:
  - application/json for both request and response
