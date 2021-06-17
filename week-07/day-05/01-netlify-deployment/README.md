# Guided Project: Deploy to Netlify

[Netlify] is a popular hosting service for deploying static sites and front-ends
for full-stack web applications.  They have a free tier that allows developers
to deploy small sites with low traffic at no cost.  You'll use it now to deploy
one of the projects you've constructed this week, and it will remain an excellent
choice for your future projects.

## The Objective

At the end of this guide, you will have deployed your `App Academy Times`
project to the internet with **Netlify**.  You should be able to follow the same
process to deploy any future front-end projects as well.

## Phase 0: Setup

If you haven't already, make sure you've pushed your completed work to GitHub.
If you've been [keeping your garden green], you're already done with this step!

## Phase 1: Sign up for a Netlify account

Navigate to [Netlify] and click the `Sign Up` button.  Use your GitHub account
to sign up.  Otherwise, you'll just have to link it to Netlify later.

After completing the signup process, you'll be greeted with the dashboard.  It
will be empty at first.

## Phase 2: Deploy a site with continuous deployment via GitHub

Click the `New Site from Git` button. Click the `GitHub` button and follow the
prompts to authorize the installation.  Later on, you can see and modify this
authorization from the _Settings_ tab in your repository on `GitHub`.

You'll see a list of all of your repositories.  Find the one you want, in this
case the repository for `App Academy Times,` and click on it.

Under most circumstances, the default settings are fine.  You'll want to confirm
that the default team is your name.  If you're a part of any teams on Netlify,
those will show up here.  This is how you would deploy for a company, instead of
yourself.

Confirm that the branch selected is the branch you want to deploy from.  It's
fine to leave it as `main/master` for now, but remember that any change you push
to this branch will immediately go live.  Some organizations work under this
expectation and only merge to `main/master` when they are ready for this. Others
set up a separate branch for deployment and merge to that branch when ready to
update the site.

You don't need these now, but the remaining settings can be used to run a
command to build the site or change the directory the site is deployed from. You
can also set up environment variables by clicking the `Advanced` button.

Click the `Deploy Site` button.

## Phase 3: Test and debug if necessary

You should see a page showing a progress report as the site is built.  There
will also be links to set up a custom domain and HTTPS.  You can skip those for
now as you'll be learning about these steps in a different practice.

Instead, open the link at the top of the page in a new tab.  It will be named
something random, like hopeful-bell-3818be.netlify.app.  Clicking the link
should take you to your site, live and on the internet!

If something went wrong, don't panic.  Google any error messages.  Netlify is
fairly simple, so most errors have plenty of help for what has gone wrong.

Check the site and make sure all the links work as expected.  Now is when you'll
first notice if you've accidentally put an absolute link to a file on your
computer.

## Phase 4: Change the name

The names Netlify gives you are often clever and unique but don't tell anyone
else what the site is or what it's for.  It's best for your major portfolio
projects to have their own registered domain, but it's ok to skip that step for
smaller and less important ones.

However, you should change the name to something more recognizable.

Click on the `Site Settings` button from the `Site Overview` page.  In the info
panel on the right, click the `Change site name` button.  Enter a new name.
Keep in mind that this name must be one that no one else has used before, as
this will be the new URL for the site.

Click the `Save` button and confirm that [your-site-name].netlify.app works.

## Phase 5: Deploy all the things

Now that you've deployed one site, now is a great time to deploy anything else
you want to show off to your friends and family.

You now have the power to put stuff on the internet.  Use it wisely!

[keeping your garden green]: https://open.appacademy.io/learn/student-handbook/code-of-conduct/committing-with-a-a-projects
[Netlify]: https://www.netlify.com/
