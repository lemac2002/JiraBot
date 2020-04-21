FROM node:current-alpine
EXPOSE 8080

# ARG app_id
# ARG app_password

ENV OWNER="Marc Boudreau <mboudreau@techinsights.com>"
ENV NAME=JiraBot
ENV DESCRIPTION="Bots; huh... why"

# ENV BOTBUILDER_APP_ID=$app_id
# ENV BOTBUILDER_APP_PASSWORD=$app_password

RUN adduser --disabled-password --home /hubot hubot

RUN npm install -g coffeescript yo

WORKDIR /hubot
USER hubot

RUN npm install --save generator-hubot && \
    yo hubot --owner="Marc Boudreau <mboudreau@techinsights.com>" \
      --name="JiraBot" \
      --description="Bots; huh... why" \
      --defaults --adapter=botframework && \
    npm install hubot-botframework hubot-catme hubot-has-no-idea --save && \
    npm install && \
    rm -rf /hubot/hubot-scripts.json && \
    npm install botbuilder@3.15.0

CMD ["/bin/sh", "-c", "/hubot/bin/hubot -a botframework"]
