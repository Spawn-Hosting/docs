# RCON

## What is RCON?
RCON is an interface in various programs, such as game servers, 
with which remote maintenance as well as remote administration can be carried out.
This interface can be used to manage servers that are already running and accessible.
The interface can then be accessed with a specific remote maintenance program
and the server can thus be managed.

:::info
If Your Want To Enable ``RCON`` Open A Ticket On Discord And Ask For A Extra Port.
:::

## How do I use RCON in Minecraft?
In order to be able to use RCON with Minecraft, it must first be entered in the file `server.properties`
to be activated. To do this, look for the line with the following content:
`enable-rcon = false`

Remove the value `false` and enter` true` instead.
Now the interface needs a password so that not everyone can use it
Remote maintenance interface can connect. The password for this can be found in the line
with the following content:
`rcon.password =`

![](/img/rcon/rcon1.png)

To set the password, write your desired password after the equal sign.
Once that is done, all you have to do is find out what the port of your RCON interface is.
This can be read and specified in the line `rcon.port`. The port consists of one
up to five-digit number between `1` and` 65534`.

Once you have found out the port, open any RCON program with which you can access the
Interface. A recommendation on our part for an RCON-compatible program would be the [RCON Console](https://sourceforge.net/projects/rconconsole/).
Now enter the IP address of your server in the text field `Address` above. Right next to it the
RCON port of your game server and behind it the password. Now make sure that your game server is running
and is reachable and now connect to the program via RCON on your server.

If the connection is successful, you can now send Minecraft commands to your server. To do this, enter the commands in the
Enter the text field below of your RCON program and note the return of the console in the middle of the window.