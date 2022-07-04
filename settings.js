//════════════(00)════════════════\\
//
//          RED DRAGON v6.0
//
//════════════(00)════════════════\\

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `***✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺***
*========------------========*

*🪀😍𝙷𝚎𝚢 𝚑𝚒 𝚝𝚑𝚎𝚛𝚎🤪🪀*

*🤑🍂𝗕𝗼𝘁 𝗶𝘀 𝗮𝗹𝗶𝘃𝗲 𝗻𝗼𝘄 🍃😎*

*𝗢𝘄𝗻𝗲𝗿: ➳ᴹᴿ✿ƙα𝚟ιყα🎃*

*💫𝗖𝗼𝗻𝘁𝗮𝗰𝘁 𝗺𝗲: http://Wa.me/+94769888167*

*-----🔥💓Red Dragon 𝗕𝗼𝘁💝🔥-----*` //Costomize Alive Message (type your message in `` )

global.owner = ['+94769888167'] //Owner number in aive msg
global.premium = ['+94769888167'] //Owner Number info
global.ownernomer = '+94769888167' //Owner Number <<<

global.ownername = '➳ᴹᴿ✿ƙα𝚟ιყα🎃' //Owner Name
global.botname = ' ☬RED༒DRAGON' //Bot Name

global.button = '🤭facebook📍' //Costomize A Button Name In Alive Message
global.btnurl = 'https://www.facebook.com/106989602009708/posts/134655649243103/?app=fbl' //Change Your Button's URL

global.region = 'Sri lanka, Southern Province, Buddhist' //Country Region

global.packname = '☬RED༒DRAGON࿐' //Bot Pacage Name
global.author = '➳ᴹᴿ✿ƙα𝚟ιყα🎃❯❯' //Author Name
global.prefa = ['','!','.','😂','❤','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '⭔' //A Charactor
global.dragonemoji = '🧩' // Menu emoji
global.footer = '©_➳ᴹᴿ✿ƙα𝚟ιყα🎃' //In list menu
global.chatbotpre = 'true'  // Chat bot true/false


global.ig = 'https://www.facebook.com/106989602009708/posts/134655649243103/?app=fbl' //Github Account!

global.mess = { // cOSTOMIZE WITH YOUR LANGUAGE
	
    success: 'Done ✅',
    admin: 'Only Admins can use it!😉',
    botAdmin: 'Bot wants to be an Admin😥',
    owner: 'Only Owner can use this!😉',
    group: 'Feature Used Only For Groups!',
    private: 'This Features Only For Private Chat!',
    bot: 'This Feature Is Only For Bot😝',
    wait: '👉👈Please Wait...',
    error: 'Error!!! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DragonMedia/image/red-_-dragon-kumuthu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
