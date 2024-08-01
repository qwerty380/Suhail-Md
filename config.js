const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "https://cloud.mongodb.com/v2#/org/66a0cca55dfabc4d4c91568b/access/users"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263784511419";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_37_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgOSxcbiAgICAgICAgODgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTksXG4gICAgICAgIDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA3LFxuICAgICAgICA0MSxcbiAgICAgICAgODAsXG4gICAgICAgIDI4LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDc5LFxuICAgICAgICA3MixcbiAgICAgICAgMTk4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMwLFxuICAgICAgICA1NyxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzksXG4gICAgICAgIDc0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTgsXG4gICAgICAgIDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUyLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1LFxuICAgICAgICA0MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA5LFxuICAgICAgICA3NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNCxcbiAgICAgICAgODEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDk2LFxuICAgICAgICA3NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjE5LFxuICAgICAgICA0NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAxLFxuICAgICAgICA4NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk4LFxuICAgICAgICA1MixcbiAgICAgICAgNzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc4LFxuICAgICAgICA3NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY1LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMixcbiAgICAgICAgODcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTU4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjE4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDM5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDc4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTcwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzksXG4gICAgICAgIDc1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODksXG4gICAgICAgIDQzLFxuICAgICAgICA3NixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDU1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDcsXG4gICAgICAgIDM0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwialdxNGY0eG1QSzJ5YnF5NU1ZdjV4UWdtS0tWb3hpbUNiYzhWT0dYcGhvMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRzhnSmh5WklUaTJSc0ZVNHAzeUpPZ1wiLFxuICBcInBob25lSWRcIjogXCIyYzNkOWE1Zi03YzNjLTRlYTItOTZiMC04YTRkODU5MTkwOTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTAsXG4gICAgICA4MyxcbiAgICAgIDE2MSxcbiAgICAgIDIyOSxcbiAgICAgIDU1LFxuICAgICAgMzUsXG4gICAgICAyNDEsXG4gICAgICAyMjgsXG4gICAgICA0MCxcbiAgICAgIDE0OSxcbiAgICAgIDU3LFxuICAgICAgNjgsXG4gICAgICAxNDMsXG4gICAgICAyMzYsXG4gICAgICAxMTQsXG4gICAgICAyMjcsXG4gICAgICA2NSxcbiAgICAgIDExLFxuICAgICAgMjA3LFxuICAgICAgMjQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NCxcbiAgICAgIDE4NCxcbiAgICAgIDEwOSxcbiAgICAgIDE1NCxcbiAgICAgIDEwNyxcbiAgICAgIDE4MixcbiAgICAgIDE0NixcbiAgICAgIDE0LFxuICAgICAgMTQzLFxuICAgICAgMTI2LFxuICAgICAgMjEsXG4gICAgICAxMDIsXG4gICAgICAxMTMsXG4gICAgICAxMDMsXG4gICAgICAyMTUsXG4gICAgICAyMixcbiAgICAgIDE1NCxcbiAgICAgIDIyMixcbiAgICAgIDIzNixcbiAgICAgIDQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVQUUdOTkQ2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3ODQ1MTE0MTk6MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3MDM2OTAyMTM5MTA1MzozM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNObXJ5TThDRUxDVWc3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk5zK2FPb2lmVXovRlFPOWZsZHFEa0dPU2h1Qk4vZEd1TVVNM3pNSC9MeEk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwia1Y3Z0E4TXZueitFaGZ4WmluUUV2dmRTK3RxdUxnUVJqYVBCenJGNnhhZXREd05VNm1xUzlMakFSTEduVUl2cjExY2tkSDZGWWlXNjBQcEkwY3RoQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidk41clpLZXZZTFB0MnQ5Ym0yZXo0azRHRElBMFpLMDNNMTR1SVpid0FacmZHK2U4elhRK0ROZTlZZ0VyVUVid2pocUpFTmlTVDU2MXlSdW5nSXlsaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzg0NTExNDE5OjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE4MTM1NTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMNW1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUw1bS5qc29uIjogIntcImtleURhdGFcIjpcImxNZXJGTUVUWEo4L0M4UjRlRVNjWVdVSUI4OTh6ZHhFRG5NV1Q1cmNPRlU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzAzNzMxMTU3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIxNzcwNjgyNDk1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "wick",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
