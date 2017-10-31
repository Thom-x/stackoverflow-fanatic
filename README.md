
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

If using Heroku, you can also use the [Heroku Scheduler](https://scheduler.heroku.com/dashboard), and the cronjob prepared for that (`./bin/request.js`). You will also have to setup the enviroment var `APP_URL`, and you can fully automate the load of the page:

![](https://monosnap.com/file/TMjP78NkluNICIJOxnZZNUv3rYUkJo.png)

That's it !

[0]: https://stackoverflow.com/help/badges/83/fanatic