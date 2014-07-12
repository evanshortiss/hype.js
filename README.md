hype.js
=======

Client-side JavaScript library to consume the Hype Machine JSON API.

## Hype Machine API
The Hype Machine JSON API is largely undocumented so this wrapper may be
incomplete. If anything is missing make a Pull Request with the new feature
I've missed!

## Install
This module is super easy to use. If used with browserify it can be required
once you do a:

```
$ npm install hypejs --save
```

If used as a standalone JavaScript file it will bind to *window.hypejs*.

## Usage
All functions take a callback which accepts two arguments similar to the
Node.js callback style as shown:


```javascript
var hypejs = require('hypejs');

hypejs.latest.all(3, function (err, res) {
  if (err) {
    // Something went wrong...
  } else {
    // res is a json object from the API
  }
});
```

## Provided Functions
### latest

##### all
latest.all([page,] callback)

##### fresh
latest.fresh([page,] callback)

##### remixes
latest.remixes([page,] callback)

##### noRemixes
latest.noRemixes([page,] callback)


### popular

##### threeDay
popular.threeDay([page,] callback)

##### lastweek
popular.lastweek([page,] callback)

##### remixes
popular.remixes([page,] callback)

##### noRemixes
popular.noRemixes([page,] callback)

##### twitter
popular.twitter([page,] callback)

##### noRemix
popular.noRemix([page,] callback)


### profile

##### loved
profile.loved(name, [page,] callback)

##### history
profile.history(name, [page,] callback)

##### obsessed
profile.obsessed(name, [page,] callback)
