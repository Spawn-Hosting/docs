## How to Convert Worlds from Vanilla to Spigot  

:::danger
Keep A ``BACK-UP`` Of The Server Files Just In Case Something Goes Wrong 🙂.
::: 

:::info
It Is Recommended To Download The File On Your Computer To Do The Conversion.
:::

- This guide is for converting your worlds from Vanilla to Spigot and other forks.  
If you change to Spigot and want to transfer your dimensions, you can follow these steps:

1. Log into your FTP File Access using an FTP client of your choice or via ``File-Manager`` in the Web-Interface. We recommend
using ``FileZilla`` or ``Winscp``. (If you do not know how to use ``FTP`` There is a guild you can follow it)  

2. Once connected, open the world folder.  
    1. If you want to convert your Nether world Download it from, ``open /world/DIM-1``.  
    2. If you want to convert your End world Download it from, ``open /world/DIM1``.  
    3. Don't forgrt to donwload the ``region`` folder.  

- Vanilla Files.(World file)  
![](/img/worldconversion/vc1.png)  

- Spigot Files.  
![](/img/worldconversion/vc2.png)  

3. Navigate to your spigot server files.  
    1. Paste the file which you got from the Vanilla. (Overwrite The file when you paste them / Replace the file.)  
    2. Paste the ``DIM-1`` to ``world_nether`` and ``DIM1`` to ``world_the_end`` in your spigot server.  
    3. Paste ``region`` folder in ``world`` folder of the spigot server.  


![](/img/worldconversion/vc3.gif)