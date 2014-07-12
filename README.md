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

hypejs.latest.all(2, function (err, res) {
  if (err) {
    // Something went wrong...
  } else {
    // res is a json object from the API
  }
});
```

The JSON returned looks as follows 

```json
{
	"page_cur": "/latest/1",
    "page_num": "1",
    "page_mode": "all",
	"page_name": "latest",
	"tracks": [{
		"type": "normal",
		"id": "25dgh",
		"time": 203,
		"ts": 1405154222,
		"postid": 2493553,
		"posturl": "http://www.indieshuffle.com/the-mispers-rio/",
		"fav": 0,
		"key": "42f1806a636bbce6ab2d6129301100b1",
		"artist": "The Mispers",
		"song": "Rio",
		"is_sc": true,
		"is_bc": false
	}],
    "title": "Latest songs from music blogs worldwide / Hype Machine",
    "page_next": "/latest/2"
}
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

##### now
popular.now([page,] callback)

##### lastweek
popular.lastweek([page,] callback)

##### remixes
popular.remixes([page,] callback)

##### noRemixes
popular.noRemixes([page,] callback)

##### artists
popular.artists([page,] callback)

##### noRemix
popular.noRemix([page,] callback)


### profile

##### feed
profile.feed(name, [page,] callback)

##### loved
profile.loved(name, [page,] callback)

##### history
profile.history(name, [page,] callback)

##### obsessed
profile.obsessed(name, [page,] callback)
