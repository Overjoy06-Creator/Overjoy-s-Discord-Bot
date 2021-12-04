const dotenv = require("dotenv").config();
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const api = require("imageapi.js");
const superagent = require("superagent");
const snekfetch = require("snekfetch");
const { meme } = require("memejs");
const randomanime = require('random-anime')
const ud = require('urban-dictionary')
const wtf = require("wtf_wikipedia");
const pg = require('pg')
const util = require('minecraft-server-util');

const scraper = require("./libs/scraper.js");

const bot = new Discord.Client({
  disableEveryone: true,
  partials: ["REACTION", "MESSAGE"]
});
const prefix = botconfig.prefix;
const activities_list = [
  "with the r!help command.",
  "Minecraft",
  "Roblox",
  "watching gay porn"
];
/** Helpful functions*/
const getRole = (role, guild) => guild.roles.cache.find(r => r.name === role);
const getChannel = (channel, guild) =>
  guild.channels.cache.find(c => c.name === channel);
/** Main commands*/
let cmds = {};

cmds.test = async (msg, args) => {
  if(msg.author.id == "544776631672242176" || msg.author.id == "522972601488900097" || msg.author.id == "522392059403829251") {
  try {
    let ass = args.join(" ");
    msg.channel.send(eval(ass))
  } catch (e){
    msg.channel.send(e.message)
  }
 }
}

cmds.wikipedia = (msg, args) => {
  let word = args.join(" ")
  wtf.fetch(word).then((doc) => {
    doc.sentences(0).text()
    let embed = new Discord.MessageEmbed()
      .setTitle(word)
      .setDescription(doc.sentences(0).text())
      .setColor(0x00ff00)
    msg.channel.send({ embed: embed})
  }).catch(err => {
    let error = new Discord.MessageEmbed()
      .setTitle(word)
      .setColor(0xff0000)
      .setDescription("No results for : " + word)
    
    msg.channel.send(error)
  })
};
                   
cmds.serverstatus = async (msg, args) => {
  util.ping('WTAL.aternos.me', { port: 25565 }) // port is optional, defaults to 25565
    .then((response) => {
        let a = response.version.replace("Â§4â", "").replace("Â§7â", "")
        let embed = new Discord.MessageEmbed()
          .setTitle('WTAL Server')
          .setDescription('Server Status : '+a)
          .setColor(0x00ff00)
        msg.channel.send(embed)
        console.log(response)
  })
    .catch((error) => {
        console.error(error)
        let embed = new Discord.MessageEmbed()
          .setTitle('WTAL Server')
          .setDescription('Server Status : Online')
          .setColor(0x00ff00)
        msg.channel.send(embed)
    });
}

cmds.robloxprofile = async (msg, args) => {
  let name = args[0];

  /**
    if(!args) {
      msg.channel.send("Please enter a valid username!")
    }
    */
  console.log(name);
  scraper.scrapeHTTPS(
    `https://api.roblox.com/users/get-by-username?username=${name}`,
    chunk => {
      let data = JSON.parse(chunk);
      scraper.scrapeHTTPS(`https://www.roblox.com/users/profile/robloxcollections-json?userId=${data.Id}`, console.log)
      scraper.scrapeHTTPS(
        `https://api.roblox.com/users/${data.Id}/groups`,
        group => {
          let clan = JSON.parse(group).length;
      scraper.scrapeHTTPS(
        `https://api.roblox.com/users/${data.Id}/friends`,
        friends => {
          let friendCount = JSON.parse(friends).length;
          let embed = new Discord.MessageEmbed({
            title: `${data.Username}'s Profile!`,
            thumbnail: {
              url: `http://www.roblox.com/Thumbs/Avatar.ashx?x=150&y=150&Format=Png&username=${name}`
            },
            description: `ID: ${data.Id}\nUsername: ${data.Username}\nOnline: ${data.IsOnline}\nFriends: ${friendCount}`,
            color: 0x00ff00
          });
          msg.channel.send(embed);
        });
        });
    });
};

cmds.nothing = msg => {
  msg.channel.send("nothing to see here").then(m => {
    m.react("🖤");
    m.react("⚫");
    m.react("⬛");
    m.react("◾");
    m.react("◼️");
    m.react("▪️");
    m.react("✴️");
    m.react("🏴");
    m.react("🇫");
    m.react("🇺");
    m.react("🇨");
    m.react("🇰");
    m.react("🇾");
    m.react("🇴");
    m.react("🇻");
    m.react("❗");
    m.react("❕");
  });
};

cmds.ping = msg => {
  msg.channel.send("P").then(pong => {
    setTimeout(() => {
      pong.edit("Po");
    }, 1000),
      setTimeout(() => {
        pong.edit("Pon");
      }, 1000),
      setTimeout(() => {
        pong.edit("Pong");
      }, 1000),
      setTimeout(() => {
        pong.edit("Pong,");
      }, 1000),
      setTimeout(() => {
        pong.edit("Pong, S");
      }, 1000),
      setTimeout(() => {
        pong.edit("Pong, Se");
      }, 1000),
      setTimeout(() => {
        pong.edit("Pong, Sen");
      }, 1000),
      setTimeout(() => {
        pong.edit("Pong, Seni");
      }, 1000),
      setTimeout(() => {
        pong.edit("Pong, Senir");
      }, 1000),
      setTimeout(() => {
        pong.edit("Pong, Seniru");
      }, 1000),
      setTimeout(() => {
        pong.edit("Pong, Seniru i");
      }, 1000),
      setTimeout(() => {
        pong.edit("Pong, Seniru is");
      }, 1000),
      setTimeout(() => {
        pong.edit("Pong, Seniru is r");
      }, 1000),
      setTimeout(() => {
        pong.edit("Pong, Seniru is re");
      }, 1000),
      setTimeout(() => {
        pong.edit("Pong, Seniru is ret");
      }, 1000),
      setTimeout(() => {
        pong.edit("Pong, Seniru is reta");
      }, 1000),
      setTimeout(() => {
        pong.edit("Pong, Seniru is retar");
      }, 1000),
      setTimeout(() => {
        pong.edit("Pong, Seniru is retard");
      }, 1000);
    setTimeout(() => {
      pong.edit("Pong, Seniru is retarde");
    }, 1000),
      setTimeout(() => {
        pong.edit("Pong, Seniru is retarded");
      }, 1000),
      setTimeout(() => {
        pong.edit("Pong, Seniru is retarded!");
      }, 1000);
  });
};

cmds.purge = async (msg, args) => {
  if (msg.deletable) {
    msg.delete();
  }

  if (!msg.member.hasPermission(Discord.Permissions.FLAGS.MANAGE_MESSAGES)) {
    return msg.reply("You can't delete messages...").then(m => m.delete(5000));
  }

  if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
    return msg
      .reply("That isn't a number, Please try again.")
      .then(msg => msg.delete(5000));
  }

  let deleteAmount;

  if (parseInt(args[0]) > 100) {
    deleteAmount = 100;
  } else {
    deleteAmount = parseInt(args[0]);
  }

  msg.channel
    .bulkDelete(deleteAmount, true)
    .then(deleted => msg.channel.send(`I deleted ${deleted.size} messages.`))
    .catch(err => msg.reply(`Something went wrong... ${err}`));
};

cmds.meme = async (msg, args) => {
  try {
    let subreddits = [
      "comedyheaven",
      "dankmeme",
      "wholesomememes",
      "minecraftmemes",
      "PrequelMemes",
      "HistoryMemes",
      "dankchristianmemes",
      "memes",
      "meme",
      "MemeEconomy",
      "Memes_Of_The_Dank"
    ];
  let subreddit = subreddits[Math.floor(Math.random() * subreddits.length - 1)];
    const { body } = await snekfetch
      .get("https://www.reddit.com/r/" + subreddit + "/top/.json?t=month")
      .query({ limit: 800 });
    const allowed = msg.channel.nsfw
      ? body.data.children
      : body.data.children.filter(post => !post.data.over_18);
    if (!allowed.length)
      return msg.channel.send(
        "It seems we are at our limit!, Try again later."
      );
    const randomnumber = Math.floor(Math.random() * allowed.length);
    let embed = new Discord.MessageEmbed()
      .setColor(0x00ff00)
      .setTitle(allowed[randomnumber].data.title)
      .setURL("https://reddit.com"+allowed[randomnumber].data.permalink)
      .setImage(allowed[randomnumber].data.url)
      .setFooter(
        "👍" +
          allowed[randomnumber].data.ups +
          "💬" +
          allowed[randomnumber].data.num_comments
      );
    msg.channel.send(embed);
  } catch (err) {
    return console.log(err);
  }
};

cmds.question = async (msg, args) => {
  let qotd = args[0];
  let question = args.splice(1).join(" ");
  if (!msg.member.hasPermission(Discord.Permissions.FLAGS.MANAGE_MESSAGES)) {
    return msg.reply("You can't use this command...");
  }

  let embed = new Discord.MessageEmbed()
    .setTitle("QOTD #" + qotd)
    .setDescription(question)
    .setColor(0x00ff00)
    .setFooter(`Created By : ${msg.author.username}`);

  getChannel("qotd", msg.guild).send(embed);
  msg.delete();
};

cmds.urban = (msg, args) => {
  let definition = args.join(" ")
  ud.term(definition, (error, entries, tags, sounds) => {
  if (error) {
    let error = new Discord.MessageEmbed()
      .setTitle(definition)
      .setColor(0xff0000)
      .setDescription("No results for : " + definition)
      msg.channel.send(error)
  } else {
    let embed = new Discord.MessageEmbed()
      .setTitle(entries[0].word)
      .setDescription(entries[0].definition + "\n\n" + entries[0].example)
      .setColor(0x00ff00)
    
    msg.channel.send(embed)
  }
})
};

cmds.reddit = async (msg, args) => {
  try {
    args.join(" ");
    const { body } = await snekfetch
      .get("https://www.reddit.com/r/" + args[0] + "/top/.json?t=month")
      .query({ limit: 800 });
    const allowed = msg.channel.nsfw
      ? body.data.children
      : body.data.children.filter(post => !post.data.over_18);
    if (!allowed.length)
      return msg.channel.send(
        "It seems we are at our limit!, Try again later."
      );
    const randomnumber = Math.floor(Math.random() * allowed.length);
    let embed = new Discord.MessageEmbed()
      .setColor(0x00ff00)
      .setTitle(allowed[randomnumber].data.title)
      .setImage(allowed[randomnumber].data.url)
      .setDescription(args[0])
      .setFooter(
        "👍" +
          allowed[randomnumber].data.ups +
          "💬" +
          allowed[randomnumber].data.num_comments
      );
    msg.channel.send(embed);
  } catch (err) {
    return console.log(err);
  }
};

cmds.avatar = async (msg, args) => {
  let embed = new Discord.MessageEmbed();
  if (!msg.mentions.users.first()) {
    embed.setTitle(`${msg.author.username}'s Avatar!`);
    embed.setImage(msg.author.displayAvatarURL());
    embed.setColor(0x00ff00);
  } else {
    let user = msg.mentions.users.first();
    embed.setTitle(`${user.username}'s Avatar!`);
    embed.setImage(user.displayAvatarURL());
    embed.setColor(0x00ff00);
  }
  getChannel(msg.channel.name, msg.guild).send(embed);
};

cmds.dog = async (msg, args) => {
        let url = args[0] ? `https://dog.ceo/api/breed/${args[0].toLowerCase()}/images/random` : "https://dog.ceo/api/breeds/image/random"
        scraper.scrapeHTTPS(
           `https://dog.ceo/api/breeds/list/all`,
            breeds => {
                let breedslist = JSON.parse(breeds);
                console.log(breedslist)
        scraper.scrapeHTTPS(url, (chunk) => {
            let parsedRes = JSON.parse(chunk)
            if (parsedRes.status == "success") {
              let dogImage = JSON.parse(chunk)[msg]
              let dog = new Discord.MessageEmbed()
                .setTitle("Here's a picture of a " + args[0])
                .setImage(dogImage)
                .setTimestamp()
                .setColor(0x00ff00)
              msg.channel.send(dog)
            } else {
              let breedlist = new Discord.MessageEmbed()
                .setTitle(":x: Invalid Breed Type :x:")
                .setDescription(require('util').inspect(breedslist), { split: true }, { split: true})
                .setColor(0xff0000)
                msg.channel.send(breedlist)
            }
            if(!args[0]) {
                let lol = new Discord.MessageEmbed()
                    .setTitle("Here's a random picture of a dog!")
                    .setImage()
                    .setTimestamp()
                    .setColor(0x00ff00)
            }
        })
     })
};

cmds.cat = async msg => {
  let { body } = await superagent.get("https://aws.random.cat/meow");
  if (!{ body }) return msg.reply("I broke... Please try again!");
  let embed = new Discord.MessageEmbed()
    .setColor(0x00ff00)
    .setTitle("Heres a cute little kitty!")
    .setImage(body.file)
    .setTimestamp();

  getChannel(msg.channel.name, msg.guild).send({ embed });
};

cmds.profile = (msg, args) => {
  let user;
  let member;
  if (!args || args.length == 0) {
    user = msg.author;
    member = msg.member;
  } else if (Discord.MessageMentions.USERS_PATTERN.test(args[0])) {
    member = msg.mentions.members.first();
    user = member.user;
  } else {
    return msg.reply("mention someone or none");
  }

  let displayName = member.nickname || user.username;
  let roles = "";

  member.roles.cache
    .filter(role => role.name !== "@everyone")
    .each(role => {
      roles += role.toString() + "\n";
    });

  let embed = new Discord.MessageEmbed()
    .setTitle(`${displayName}'s Profile`)
    .setThumbnail(user.displayAvatarURL())
    .setDescription(`${member} [${displayName}]`)
    .addField("Roles", roles.trim() == "" ? "No roles" : roles)
    .setColor(0xccff00);

  getChannel(msg.channel.name, msg.guild).send(embed);
};

cmds.help = msg => {
  let embed = new Discord.MessageEmbed()
    .setTitle("Help :speech_balloon:")
    .setDescription(
      "**Commands** : \n\n`r!help` - Shows This Embed Message\n`r!profile <player_name>` - Shows The Roles of The Person and Shows Their Profile Picture\n`r!8ball` - Ask 8ball a question and it will answer your question.\n`r!meme` - Generates a random meme.\n`r!dog` - Generates a random dog image.\n`r!cat` - Gemerates a random cat image.\n`r!avatar <player_name>` - Shows the person's avatar\n`r!rps <choice>` - Plays a game of rock paper scissors.\n`r!suggest <suggestion>` - Suggests something and the admins will decide to approve it or not.\n\n**Mod Commands**\n\n`r!kick <player_name>` - Kicks Person\n`r!ban <player_name>` - Bans Person\n`r!nickname <player_name> <nickname>` - Changes The Person's Nickname.\n`r!purge <amount>` - Deletes all the previous messages depending on the amount.`"
    )
    .setColor(0x00ff00);

  getChannel(msg.channel.name, msg.guild).send(embed);
};

cmds.nickname = (msg, args) => {
  console.log(args);

  if (Discord.MessageMentions.USERS_PATTERN.test(args[0])) {
    if (msg.member.hasPermission(Discord.Permissions.FLAGS.CHANGE_NICKNAME)) {
      let member = msg.mentions.members.first();
      let nick = args.splice(1).join(" ");
      member
        .setNickname(nick)
        .then(mem => {
          msg.reply(`Changed their nickname to ${nick}`);
        })
        .catch(err => {
          msg.reply("I Can't change nicknames\nReason: `" + err.message + "`");
        });
    } else {
      msg.reply("u have no perms wat a joke");
    }
  } else {
    let nick = args.splice(0).join(" ");
    msg.member
      .setNickname(nick)
      .then(mem => {
        msg.reply(`Changed your nickname to ${nick}`);
      })
      .catch(err => {
        msg.reply("I Can't change nicknames\nReason: `" + err.message + "`");
      });
  }
};

cmds.kick = msg => {
  if (msg.member.hasPermission(Discord.Permissions.FLAGS.KICK_MEMBERS)) {
    msg.reply("Ok senpai");
  } else {
    msg.reply("Have no permissions !@#@$!");
  }
};

cmds.mute = (msg, args) => {
  if (msg.member.hasPermission(Discord.Permissions.FLAGS.MUTE_MEMBERS)) {
    msg.reply("OKE");
  } else {
    msg.reply("NOOOOOOOOOOO");
  }
};

cmds["8ball"] = msg => {
  let random = [
    "Yes",
    "No",
    "What do you think? NO",
    "Maybe",
    "Never",
    "Couldn't agree more",
    "Of course not",
    "Of course",
    "Ask me later",
    "Ask me again",
    "Only an idiot would agree",
    "Can't say i agree"
  ];
  let alright = random[Math.floor(Math.random() * random.length)];
  let channel8 = getChannel(msg.channel.name, msg.guild);
  let eightembed = new Discord.MessageEmbed()
    .setColor(0x00ff00)
    .setTitle(":8ball: 8ball :8ball:")
    .setDescription(`8ball's answer : **${alright}**`)
    .setFooter(msg.author.username);

  channel8.send(eightembed);
};

cmds.ban = (message, args) => {
  if (!message.guild) return;

  const user = message.mentions.users.first();
  if (user) {
    const member = message.guild.member(user);
    if (member) {
      member
        .ban({
          reason: "The admins decided to ban the member"
        })
        .then(() => {
          message.reply(`Successfully banned : ${user.tag}`);
        })
        .catch(err => {
          message.reply(
            "I was unable to ban the member\nReason : `Missing Permissions`"
          );
          console.error(err);
        });
    } else {
      message.reply(
        "Unable to ban the member\nReason : `That user isn't in this guild!`"
      );
    }
  } else {
    message.reply(
      "Unable to ban the member\nReason : `You didn't mention the user to kick!`"
    );
  }
};

cmds.updateSelfRole = msg => {
  if (
    !(
      msg.author.id == "522972601488900097" ||
      msg.author.id == "544776631672242176"
    )
  )
    return;
  let embed = new Discord.MessageEmbed({
    title: "Self role",
    description: `**What Game Do You Mainly Play?**\n<:roblox:712556824599199785> - <@&705257970472321094>\n\n**What Gender Are You?**\nMale♂️ - <@&705258031755034700>\nFemale♀️ - <@&705258051795550238>`,
    color: 0x00ff00
  });

  msg.channel.messages.fetch("712591159284727810").then(emsg => {
    emsg.edit(embed);
    emsg.react("712556824599199785"); // roblox
    emsg.react("712866484644479086"); // male
    emsg.react("712866515690455110"); // female
  });
};

/** Discord events */

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  setInterval(() => {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
    bot.user.setActivity(activities_list[index]);
  }, 10000);
});

bot.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.channel.type == "dm") return;
  if (
    msg.content.startsWith(prefix) ||
    msg.content.startsWith(prefix.toUpperCase())
  ) {
    let cmdData = msg.content
      .substring(prefix.length)
      .replace(/\s+/g, " ")
      .split(" ");
    let cmdName = cmdData[0];
    if (cmds[cmdName]) {
      cmds[cmdName](msg, cmdData.splice(1));
    }
  }
});

// Welcome and Bye Logs
bot.on("guildMemberAdd", async (member, message) => {
  let guild = bot.guilds.cache.find(g => g.id == "691609473252458546");
  guild.member(member).roles.add('718079016372011089')
  let embed = new Discord.MessageEmbed()
    .setTitle(`Welcome ${member.user.username}!`)
    .setDescription(`**${member.user.username}**, has joined the server!`)
    .setColor(0x00ff00)
    .setThumbnail(member.user.displayAvatarURL());

  getChannel("👋welcome", member.guild).send(embed);
});

bot.on("guildMemberRemove", member => {
  let embed = new Discord.MessageEmbed()
    .setTitle(`Goodbye ${member.user.username}!`)
    .setDescription(`**${member.user.username}**, has left the server...`)
    .setColor(0xff0000)
    .setThumbnail(member.user.displayAvatarURL());

  getChannel("👋welcome", member.guild).send(embed);
});

// Deleted Logs
bot.on("messageDelete", async message => {
  if (message.author.bot) return;
  let channel = getChannel("deleted-logs", message.guild);
  if (channel) {
    let loggingEmbed = new Discord.MessageEmbed()
      .setTitle("A New Deleted Message!")
      .setColor("0x00ff00")
      .setThumbnail(message.author.displayAvatarURL())
      .setDescription(`**Message : ** ${message.content}`)
      .addField("Deleted By : ", message.author.tag, true) // remove those true s if u want
      .addField("Deleted In : ", message.channel, true)
      .setFooter(`Deleted At : ${message.createdAt}`);
    channel.send(loggingEmbed);
  }
});

// Edited logs
bot.on("messageUpdate", async (oldMsg, newMsg) => {
  if (newMsg.author.bot) return;
  let channel = getChannel("edited-logs", newMsg.guild);
  if (channel) {
    let loggingEmbed = new Discord.MessageEmbed()
      .setTitle("A New Editted Message!")
      .setColor("0x00ff00")
      .setThumbnail(newMsg.author.displayAvatarURL())
      .setDescription(
        `
        **Before : **${oldMsg.content}
        **After : **${newMsg.content}
      `
      )
      .addField("Author : ", newMsg.author.tag, true)
      .addField("Channel : ", newMsg.channel, true)
      .setFooter(`Editted At : ${newMsg.createdAt}`);

    channel.send(loggingEmbed);
  }
});

bot.on("messageReactionAdd", async (reaction, user) => {
  if (user.id == bot.user.id) return;

  if (reaction.partial) {
    try {
      await reaction.fetch();
    } catch (error) {
      return console.error(error);
    }
  }

  if (reaction.message.id == "712591159284727810" && reaction.me) {
    let guild = bot.guilds.cache.find(g => g.id == "691609473252458546");
    let reactionActions = {
      "712556824599199785": getRole("Roblox", guild),
      "712866484644479086": getRole("Male", guild),
      "712866515690455110": getRole("Female", guild)
    };
    if (reactionActions[reaction.emoji.id])
      guild.member(user).roles.add(reactionActions[reaction.emoji.id]);
  }
});

bot.on("messageReactionRemove", async (reaction, user) => {
  if (user.id == bot.user.id) return;

  if (reaction.partial) {
    try {
      await reaction.fetch();
    } catch (error) {
      return console.error(error);
    }
  }

  if (reaction.message.id == "712591159284727810" && reaction.me) {
    let guild = bot.guilds.cache.find(g => g.id == "691609473252458546");
    let reactionActions = {
      "712556824599199785": getRole("Roblox", guild),
      "712866484644479086": getRole("Male", guild),
      "712866515690455110": getRole("Female", guild)
    };
    if (reactionActions[reaction.emoji.id])
      guild.member(user).roles.remove(reactionActions[reaction.emoji.id]);
  }
});

bot.login(process.env.BOT_TOKEN);
