const { Client, RichEmbed } = require("discord.js");
const { prefix, token } = require("./data/config.json");
const client = new Client();

function nitroCodeGen() {
   var length = 18;
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

client.on("ready", () => {
  client.user.setActivity("Nitros", { type: "STREAMING", url: "https://www.twitch.tv/something" });
  console.log("[SYSTEM] The bot is online.");
});

client.on("message", async message => {
  
  if(message.author.bot) return;
  if(message.channel.id == "891355949695123516") {
    if(isNaN(message.content)) {
       message.delete();
    }
  }
  if(message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if(command === "nitro") {
	message.delete().catch(O_o=>{});
	message.reply("check your DM's.").then(msg => {
    msg.delete(5000)
  })
	message.author.send("I generated a nitro code for you, hope is good: discord.gift/" + nitroCodeGen());
  }
  if(command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
	
  }
});

//client.login(token);
client.login(process.env.TOKEN)
