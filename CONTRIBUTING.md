
# Contributing to the project 🔥✨

Contributions are always welcome, no matter how large or small!🙂

### Install Git

* In order to contribute, you need to have Git (a version control software) installed in your machine.
* Refer this 👉 https://docs.github.com/en/github/getting-started-with-github/set-up-git#setting-up-git to install and setup Git 🚀.

### Fork and clone this repository

* Fork this repository using the button in the top-right corner of the page. Refer https://docs.github.com/en/github/getting-started-with-github/fork-a-repo for more details.

* Having forked the repository, clone the repository to your local machine using the below command in the terminal :
```
git clone https://github.com/YOUR-GITHUB-USERNAME/paste.land
```

## Setting up

* Having cloned the copy to your local machine, enter into the `paste.land` directory using the `cd` command.
```
cd paste.land
```

* Great, you are now present in the source code of the project. You can take a look at the contents of the project using the `ls` command.
```
ls
```

* #### Install Deno 
    This API 🤖 is written in Deno. Thus, in order to install Deno, follow the doc here 👉 https://deno.land/#installation


* Having set up the project and installed deno, we are ready to go 🚀. Start the server by
```
deno run --allow-net  mod.ts
```

The output should be 
```
Listening on http://localhost:8000/
```

## Making Pull-Requests (Contributions)

Having setup the project and tested its working, if you want to contribute to it, follow the steps below :

* Make a new branch of the project using the `git checkout` command :
```
git checkout -b "Name-of-the-branch"
```
* Make changes according to the issues. Test the working of the changes.
* Run
```
deno fmt
```
to format/prettify your code

* Add the changes to staging area using the `git add` command :
```
git add .
```
* Commit the changes made using the `git commit` commad :
```
git commit -m "Commit-message"
```
* Push the changes to your branch on Github using the `git push` command :
```
git push -u origin "Name-of-the-branch-from-step-1"
```
* Then, go to your forked repository and make a Pull Request 🎉. Refer [this](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) for more details.

## Resources 📚

### Git and Github

* Egghead Course on [How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github) by Kent C. Dodds.
* [Learn Git](https://www.codecademy.com/learn/learn-git) by Codecademy
* [Github Learning Lab](https://lab.github.com/)

### Javascript

* [Eloquent Javascript](https://eloquentjavascript.net/)
* [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### Typescript

* [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)

### Deno

* [Deno Manual](https://deno.land/manual)
* Why Deno? The creator of Deno as well as Node.Js talks about it at [10 Things I Regret About Node.js](https://www.youtube.com/watch?v=M3BM9TB-8yA)

## Chat 🔊

* Feel free to check out our [Telegram channel](https://t.me/paste_land). Always happy to help out!
