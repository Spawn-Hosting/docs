# Custom Domain
:::info

Get a custom domain for your Minecraft server!

:::

- Firstly you have to buy a domain or get a free one from **https://freenom.com**.
- Setup the domain on **https://www.cloudflare.com/**.

# Getting a domain

- Get a domain of your choice from freenom.
- Click add a website on cloudflare and put the domain.
    - Copy the cloudflare nameservers.
    - Click **Manage Domain**.
    - Click **Managment Tools**.
        - Click **Name Servers**.
        - Paste the new nameservers in the custom nameserver section.

# Setting up Cloudflare

- In cloudflare click DNS
    - Add an **A record**
        - The **Name** should be yourdomain.com
        - The IPv4 IP should be the IP of your server **without** the port.
    - Add a **SRV record**
        - The **Name** should be the sub-domain.
        - The **Service** should be **_minecraft**.
        - The **Port** should be the port of your server.
        - The **Target** should be yourdomain.com


You can now join your server from the custom IP.