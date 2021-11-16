**What Are Commands?**   
Commands can be used in Minecraft to perform additional functions or special functions. Minecraft itself already contains over 100 commands without any modification.  
## Commands  
## tp
With this command, administrators can teleport to other players or even teleport a player to a desired target player. The command can also be used to teleport mobs or to teleport themselves to this location by entering coordinates as an example.

**Examples:**

``/tp PlayerA``

Teleports the executor of the command to another player.

``/tp PlayerA PlayerB``

Teleports playerA to playerB. No matter who executes the command, the specified players get teleported. If the executor of the command is PlayerB, PlayerA would be teleported to himself.

``/tp -100 75 985`` **(X=-100, Y=75, Z=985)**

The executor of the command is teleported to the specified coordinates. By specifying a player in front of the coordinates (/tp PlayerA -100 75 985), the command would teleport the specified player there instead of teleporting itself.

## Locate
With this ``/locate`` command it is possible to get the coordinates of the building you are looking for, like a Villager village.Beispiele:

``/locate fortress``

Finds and prints the position of the next Nether fortress when you are in the Nether.

``/locate village``

Finds and displays the position in the same way as for Netherfestaus, but in this case for a Villager village.

## Worldborder
With this command a world border can be created within the current world. This prevents players from exploring the world any further than specified with this command.

**Examples:**

``/worldborder center 0 0``

This sets the center point of the world to the coordinates 0;0, from where the radius is calculated and set.

``/worldborder set 16000``

Sets the limit to 16,000x16,000 blocks. So this would be 8,000 blocks radius in each direction.

## Effect
This allows players (or even entities) to be given normal potion effects. Some effects can only be obtained by using commands, like the luck effect, which hasn't been given any function yet.

The command has changed during the course of the versions and has been further expanded and modified. The examples for the commands shown below are from the latest version and may therefore look different in older versions!

**Examples:**

``/effect give PlayerA minecraft:speed``

This will give the player PlayerA a speed effect of **Sss 1.

## Gamerule
This command can be used to change special settings in a world or to enable/disable special functions. For example, as shown in the example below, it can be activated that players keep their inventory in case of death.

**Examples:**

``/gamerule keepInventory true``

This is a setting for the world which allows players to keep their inventory (including experience) in case of death.

``/gamerule mobGriefing false``

This command is used to define if monsters like a Creeper can do no damage to the world.

``/save-all``
The server saves the world every 5 minutes and writes the data to disk. With this command the world is saved immediately and the countdown for automatic saving is reset to 5 minutes.

``/tps``
This command can be used to check the TPS (ticks per second) for Spigot and Paper Spigot. TPS provides information about the performance of the server. The maximum and best TPS the server can achieve is 20. The TPS shows the last 60 seconds, the two following values are the average of 5 and 15 minutes.

## Ban
This command can be used to exclude a player from the server, so that the player can no longer enter the server under any circumstances. The player account is banned based on its UUID.

On servers with deactivated online mode, players can change their names and regain access. In such a case, an IP ban through plugins would be the best solution.

**Examples:**

``/ban PlayerA``

In this example the player PlayerA gets banned from the server.

``/ban @a``

By executing this command all current players on the server get banned by the server. Administrators with OP privileges are not affected and stay on the server.

## Pardon (AKA Unban)
By using this command it is possible to unban (as described one point above) so that the player can re-enter the server.

**Examples:**

``/pardon Player``

The player Player will be removed from the ban list and can re-enter the server.

## Kick

This command closes the connection between the server and the specified player. This forces the player to leave the server but he can still reconnect.

**Examples:**

``/kick {PlayerA}``

This throws the player PlayerA off the server with the message "Kicked by an operator.

``/kick {PlayerA} Reason``

This throws the player PlayerA off the server with the message "Reason".