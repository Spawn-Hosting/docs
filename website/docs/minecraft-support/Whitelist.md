The ** Minecraft Whitelist ** is a way to protect your server by only allowing selected players who are on the list to connect to the server. Because Minecraft does not offer a server password option by default like some other games.

! [img] (https://screensaver01./index.php/s/MzNpHycMNAFTMjB/preview)



## Activate whitelist



###  Activation (Config)

To activate the whitelist, the value of the command in the ** server.properties ** Config must be set to ** true **. A restart of the server is then absolutely necessary for the change to take effect.

``
white-list = true
``



###  activation (chat)

Alternatively, the whitelist function can also be activated in the game or via the live console:

``
/ whitelist on (activates the whitelist function)
/ whitelist off (deactivates the whitelist function)
``



In order to activate the whitelist function via the game, operator rights are absolutely necessary! Alternatively, this can also be done via the live console (web interface). However, it should be noted that the commands there must be executed without the ** / ** symbol.



! [img] (https://screensaver01./index.php/s/TYnXZY4DfjSfNNg/preview)



## Manage whitelist



###  Add / remove player



** Chat **

The following commands can be used to add or remove players from the whitelist:

``
/ whitelist add playerName
/ whitelist remove player name
``



** white-list.json **

If the player's UUID is known, the player can also be added manually via the ** white-list.json **. You can access and edit these via an FTP connection. Instructions for connecting via FTP can be found here: [FTP file access] (gameserver_ftpaccess.md)

``
[
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "Player1"
  },
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "Player2"
  },
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "Player3"
  }
]
``



###  Update list

If the players are added manually, the whitelist in the game has to be reloaded. In order not to have to restart the server, this can also be done using a command:

``
 / whitelist reload
``



### 🗃 View the list

In order not to have to open the whitelist file via FTP every time, it is also possible to display all players who are on the whitelist using the following command: 

``
/ whitelist list
``
