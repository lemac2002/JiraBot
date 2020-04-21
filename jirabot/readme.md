# Notes

## Required Pieces

- Docker
- ngrok
- Bot Framework Emulator

NOTE: You will need to know the (internal) IP address of your machine

## Running the bot in docker 

```docker-compose up -d ```

This command will take a while the first time that it is run since it will build the Docker container. There will be many npm warnings...

### Examining the logs for the Hubot Docker container

```docker-compose logs -f hubot```

Will "follow" the logs (Ctrl-C to stop).

```docker-compose logs --tail 100 hubot```

Will display the last 100 lines of the logs.

## Configure the Bot Emulator

After installing the Bot Emulator, you'll need to set it up in order to connect to the bot and interact with it in a simple chat UI.

1. Run the Bot Emulator
2. Click on the gear icon in the lower left corner
3. Browse to locate ngrok on your machine
4. Update the "localhost override" with your machine's IP address
   1. Change this if you change networks
   2. Change this if your DHCP changes your IP address
5. Click Save

## Connect to your running Bot

To connect to a running bot requires the following:

1. Click on the "Chat" icon in the upper left hand corner to show the "Bot Explorer"
2. Click the "+" icon in "Endpoint"
3. For the Endpoint URL enter http://localhost:8080/api/messages
4. Name the Bot
5. Leave the remaining fields empty unless deploying the Bot in Azure or AWS
6. Click "Save"
7. Select the name in the Endpoint Section to open a tab to the bot
8. Type message to the bot in the "Type your message" area at the bottom...

**Examples:**

- ```@marcbot lulz```

- ```Open the pod bay doors```

- ```badger```

## Stopping the Docker container

To stop the docker container, type the following.

```docker-compose stop```

# Modifying code

The code for the bot is contained in the scripts directory. This folder is mounted directly into the Docker container.
