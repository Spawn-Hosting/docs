
## Assign OP rights

:::caution

The Server Should Be ``ON`` In Order To Run Commands.

:::

- So that you can assign OP rights to yourself or other players, you must first go the console, provided that no other player has sufficient OP rights so that the assignment is possible in the game itself.


- First open the server your want to get ``OP Rights`` via The panel. When you arrive at the server interface, you will find the entry "Console".

![](/img/op/op1.png)

- You should now see a dark window showing server's console. An input field can be seen underneath, where you can enter your commands. In order to set the OP rights, the command ``op {Player-Name}`` (without "/") must be entered in the input field and then hit enter so that the command is sent to the console .

![](/img/op/op2.png)

- After a few seconds, the command sent should appear in the console, followed by the message "Made player a server operator", which marks the process as successful. Now the respective player has all operating rights and can, for example, change the game mode.

![](/img/op/op3.png)

:::info

The distribution of OP rights is now also possible in the game itself, so that you should adjust the rights level as explained in the next step, if you wish.

:::

## Rights level

The OP rights are divided into four levels, whereby level 4 is always set by default. The respective levels contain different rights, so that the rights can be roughly divided depending on the player. The respective rights of a level are as follows:

| Level | Designation | Rights |
| : -----: |: -------------: | : -----: |
| 1 | Moderator | Changes can be made within the protected spawn area. |
| 2 | Gamemaster | Set and edit command blocks and execute various cheat commands (e.g. / gamemode). |
| 3 | Admin | Kicking and banning players, as well as other commands that are part of the general administration of the server. Further operators can also be appointed. |
| 4 | Owner | There are no more restrictions. |

:::info
By installing a rights plug-in such as LuckPerms on your Bukkit / Spigot server, the rights can be set in a much more specific and detailed manner. In addition, several groups can be created, which simplifies the distribution of rights.

:::

### Assign rights level

- In order to adjust the level of a player, he/she must first be appointed as operator, as explained under "Assigning OP rights". So that the level can be adjusted, the file ``ops.json`` has to be edited in file manager.

- You have to navigate to the respective directory of the server. left-click on the file to open the file and edit the file".

![](/img/op/op4.png)

- Now the value of "level" has to be set to the desired level for the desired player, whereupon the file has to be saved with ** CTRL + S OR Hit Save Content**.

![](/img/op/op5.png)

- In order for the changes to take effect, the server must be restarted, which can be done in the console tab of the server's interface.