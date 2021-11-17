## How To Convert a Spigot / Paper World to Vanilla Minecraft?  

We will show you how to convert your Spigot/ Paper world to Vanilla format.  

Spigot/Paper worlds have seperate folders for the Nether and The End worlds. the Nether and The End won't load because Vanilla requires both dimensions to be within a single folder.  

Keep your Spigot / Paper world files in an easy to access area on your computer or server.
{YOURWORLDNAME} : This is the main world file.
{YOURWORLDNAME_nether} : This is the Nether dimension world file.
{YOURWORLDNAME_the_end} : This is the End dimension world file.
In this tutorial, our world names are called paper-world, paper-world_nether and paper-world_the_end.
Download the world files to your local machine
To migrate your Nether, open the YOURWORLDNAME_nether folder and copy the DIM-1 folder and then navigate to your main world folder and paste the copied DIM-1 folder into that main folder. If the DIM-1 folder already exists in your main world, rename this DIM-1 folder to DIM-1_backup for safe keeping. In this tutorial, we are copying paper-world_nether/DIM-1 to paper-world/DIM-1.
Take the DIM-1 folder from the nether and put it in the main world
To migrate The End, open the YOURWORLDNAME_the_end folder and copy the DIM1 folder and then navigate to your main world folder and paste the copied DIM1 folder into that folder. If the DIM1 folder already exists in your main world, rename this DIM1 folder to DIM1_backup for safe keeping. In this tutorial, we are copying paper-world_the_end/DIM1 to paper-world/DIM1.
Take the DIM1 folder from the end and put it in the main-world
Once complete, your main world folder should have both the DIM1 and DIM-1 folders.
main world with dim folders
If you performed these changes on your computer, you'll need to upload your main world to your server using your chosen FTP client.
Reupload the world to your server
Proceed to load your converted world when installing a Vanilla server on the Server Manager installer. Congratulations! You've converted your Paper/Spigot world to a Vanilla world.
If you're still facing issues with converting the world, feel free to contact our support team at https://serverminer.com/contact and we will happily look into it for you!