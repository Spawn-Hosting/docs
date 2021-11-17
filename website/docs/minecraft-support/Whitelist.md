- The **Minecraft Whitelist** is a way to protect your server by only allowing selected players who are on the list to connect to the server. Because Minecraft does not offer a server password option by default like some other games.




## Activate whitelist 



### Server Files

- To activate the whitelist, the value of the ``whitelist`` in the ``server.properties`` Config must be set to ``true``. A restart of the server is then absolutely necessary for the change to take effect.

```
white-list = true
```

![](/img/whitelist/wl2.png)



### In Game

- Alternatively, the whitelist function can also be activated in the game.

```bash
/ whitelist on (activates the whitelist on the server)
/ whitelist off (deactivates the whitelist on the server)
```

- In order to activate the whitelist function via the game, operator rights are necessary!, this can also be done via the console (web interface). However,the commands must be executed without the **/** symbol.

![](/img/whitelist/wl1.png)


## Manage whitelist



### Add / remove player



**Chat**

- The following commands can be used to add or remove players from the whitelist:

```
/ whitelist add {playerName}
/ whitelist remove {playerName}
```


### Update list

If the players are added manually, the whitelist in the game has to be reloaded. In order not to have to restart the server, this can also be done using a command:

```
 / whitelist reload
```



### View the list

It is also possible to display all players who are on the whitelist using the following command: 

```
/ whitelist list
```
