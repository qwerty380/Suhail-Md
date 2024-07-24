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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "263784511419";
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
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_07_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDg5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTgsXG4gICAgICAgIDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDUwLFxuICAgICAgICAzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzNixcbiAgICAgICAgMjI4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MSxcbiAgICAgICAgMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDczLFxuICAgICAgICAxNjAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA5LFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjksXG4gICAgICAgIDUzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjIyLFxuICAgICAgICA2NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMixcbiAgICAgICAgODksXG4gICAgICAgIDgwLFxuICAgICAgICA2LFxuICAgICAgICA4MixcbiAgICAgICAgOTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICAwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTksXG4gICAgICAgIDM5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjIwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDcyLFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA3NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgzLFxuICAgICAgICA5NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxODQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTgsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYyLFxuICAgICAgICA2MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk2LFxuICAgICAgICA3NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDUyLFxuICAgICAgICA0NixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDM2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjIzLFxuICAgICAgICA4OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDksXG4gICAgICAgIDU5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNixcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwLFxuICAgICAgICA3OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWGxxZ3dQeG83QzhqY09aT0EzcTNrMDF5ekE2dTkra2dVMnk1VEtzZWJuWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3ODQ1MTE0MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNCMzgxNkEwNjdDQzA2QzY3OTVDMDIwRDE0QjQyODc1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTgyMjgyMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4MlBiODNIM1QtZTVuTy1WeGVtVGhnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJhOWU5ZTYzLWRmZGUtNDU3OC1iNTc3LTZjYjE3NDIzMzg0YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NyxcbiAgICAgIDIzNyxcbiAgICAgIDExMyxcbiAgICAgIDc2LFxuICAgICAgNzEsXG4gICAgICAxNCxcbiAgICAgIDEyNyxcbiAgICAgIDI0NyxcbiAgICAgIDIwOSxcbiAgICAgIDQ0LFxuICAgICAgMTA2LFxuICAgICAgOSxcbiAgICAgIDI1NCxcbiAgICAgIDY2LFxuICAgICAgNzgsXG4gICAgICAxODcsXG4gICAgICAyNDAsXG4gICAgICAzNyxcbiAgICAgIDE2NCxcbiAgICAgIDYyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MyxcbiAgICAgIDExNCxcbiAgICAgIDEwMCxcbiAgICAgIDksXG4gICAgICA4NCxcbiAgICAgIDI4LFxuICAgICAgMjI5LFxuICAgICAgNTgsXG4gICAgICAyNDYsXG4gICAgICAxMjksXG4gICAgICAxMTgsXG4gICAgICAxMDUsXG4gICAgICA5MCxcbiAgICAgIDMyLFxuICAgICAgMTUyLFxuICAgICAgMTAsXG4gICAgICA0NixcbiAgICAgIDI0OSxcbiAgICAgIDEyMCxcbiAgICAgIDE3MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYWTdKQTFDVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzg0NTExNDE5OjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzAzNjkwMjEzOTEwNTM6MzRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwid2NreXl5eVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05xcnlNOENFTnJjZzdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTnMrYU9vaWZVei9GUU85ZmxkcURrR09TaHVCTi9kR3VNVU0zek1IL0x4ST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJabEVJR1VqVlI5Y2R4QXBQSEcvMU16MFRTOGtPMGRrWHRwZ295UWdYNWp0QkEwYTdPRnFIWUtPcEhLaGRNWGFGZGE1eDJrTTYzUGFjanc0SWhZOXlBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJydVRHWElMU0dEY25RMzBSU3RKMzVMc0JIQlZ0UjYyOUVNcnRreW5UZlNVSVBXaC8xTkZFMXYxVWpqMm1ObWVjNHJLQXBJT2NKZ01RYURQb0t5WFRoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3ODQ1MTE0MTk6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTgyMjgxNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUw1dVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTDV1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiaytCYTF5WVlSMTBoUURtd2NmUWY5aVlrUVdXZDBFQVVzN1JBc1F6UTBxUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MDM3MzExNjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "wickie579",
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
