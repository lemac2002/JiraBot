# Description:
#   Example scripts for you to examine and try out.
#
# Notes:
#   They are commented out by default, because most of them are pretty silly and
#   wouldn't be useful and amusing enough for day to day huboting.
#   Uncomment the ones you want to try and experiment with.
#
#   These are from the scripting documentation: https://github.com/github/hubot/blob/master/docs/scripting.md

module.exports = (robot) ->

  robot.respond /help/i, (res) ->
    help = "Here's the list of available commands:\n\n
help -- lists available commands\n\n
list -- returns a list of all the issues you've reported\n\n
details <issuekey> -- returns details for the specified issue\n\n
status <status> -- returns a list of issues with the specified status"
    res.send help

#some of the examples that came with this:
#  robot.hear /open the (.*) door/i, (res) ->
#    doorType = res.match[1]
#    if doorType is "pod bay"
#      res.send "I'm afraid I can't let you do that."
#    else
#      res.send "Opening #{doorType} doors"
#
#  robot.hear /I like pie/i, (res) ->
#    res.emote "makes a freshly baked pie"
#
#  lulz = ['lol', 'rofl', 'lmao']
#
#  robot.respond /lulz/i, (res) ->
#    res.send res.random lulz

 
