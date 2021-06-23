# Practice: HTML Form Submission

Now you know the flow of a typical HTML form submission, it's time to put it
into practice!

## Phase 1: Creating a Cat

Clone the project from the [starter].

There are two HTML files with forms in the `views` folder. The first is the
`cat-form.html`. You can see this form in the browser by starting your server
and navigating to [http://localhost:5000] and clicking the `Create a Cat` link.

Create a route that handles the submission of this form.

When the form is submitted, it should process the form data by creating a
`new Cat` with the data from the form input fields and save it to the `cat`
variable declared right before the server is created.

Once you process the form data, redirect the user to the home page, `"/"`.
If you do things correctly, you should be redirected to the home page once you
submit the form. Your terminal should also have logged the newly created cat's
information!

## Phase 2: Creating a Dog

Similar to the cat form, for the second form, `dog-form.html`, create a route
that handles the submission of this form. When the form is submitted, it should
create a `new Dog` and save it to the `dog` variable declared right before the
server is created. It should also redirect the user to the home page.

If done correctly, you should be redirected when you submit the dog form and
the newly created dog's information should be logged in the terminal!

[starter]: https://github.com/appacademy-starters/practice-html-form-submission