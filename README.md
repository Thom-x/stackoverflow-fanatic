
# Stack Overflow Fanatic

NodeJS, automated log in for Stack Overflow. [The *Fanatic* badge][0] is just begging for it!


## Installation

- Deploy the app (heroku for example)
- Set the environment vars :

	```BASH
	$ export MAIL=your email
	$ export PASSWORD=your password
	```

- Schedule a cron :

	```bash
	$ crontab -e
	> 0 5,22 * * * wget -O - -q your-heroku-app.herokuapp.com # every day at 5h/22h
	```

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/Thom-x/stackoverflow-fanatic)

That's it !

[0]: https://stackoverflow.com/help/badges/83/fanatic