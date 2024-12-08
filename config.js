const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="millian2992@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://whatsapp.com/2348103061692";
global.gurl  =process.env.GURL  || "https://whatsapp.com/2348103061692";
global.website=process.env.GURL || "https://whatsapp.com/2348103061692" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "POWERED BY MILLIAN" 


global.devs = "2348103061692" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348103061692";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 1
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2349116343226,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_47_11_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODksXG4gICAgICAgIDk3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTkxLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI3LFxuICAgICAgICA5OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNixcbiAgICAgICAgMjcsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODMsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDMyLFxuICAgICAgICA4NixcbiAgICAgICAgMjQsXG4gICAgICAgIDQyLFxuICAgICAgICA3OCxcbiAgICAgICAgNixcbiAgICAgICAgMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQwLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY2LFxuICAgICAgICA3LFxuICAgICAgICA1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIwLFxuICAgICAgICAwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA5LFxuICAgICAgICA5MyxcbiAgICAgICAgODQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTA3LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTU4LFxuICAgICAgICA5OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDc2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDUwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMixcbiAgICAgICAgMjM0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDU1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJQN0FEdWt6TXdwdlk3ZUJnL2ZReVhmS0VyN1NrMCt2T0ZnU2Q2Y2RXVlVvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMDMwNjE2OTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBQ0Y2MjIxQjUxMUU5N0I5MTY1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjgzMDQ0NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5dTN2c3hfR1M4cTlwaXZKYmhyZ0xnXCIsXG4gIFwicGhvbmVJZFwiOiBcImM0Y2JlNzA4LWEzZjAtNDIyOS05NDRmLTdmNzBkMjNiMTRjM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzEsXG4gICAgICAyNTMsXG4gICAgICA2MSxcbiAgICAgIDE0NSxcbiAgICAgIDQ2LFxuICAgICAgNzcsXG4gICAgICAyMDcsXG4gICAgICAxMTIsXG4gICAgICAyMSxcbiAgICAgIDIwNSxcbiAgICAgIDQ2LFxuICAgICAgMTgzLFxuICAgICAgMjA4LFxuICAgICAgMTAsXG4gICAgICA2NixcbiAgICAgIDIyMCxcbiAgICAgIDEzNixcbiAgICAgIDQ1LFxuICAgICAgMTk2LFxuICAgICAgNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNixcbiAgICAgIDIsXG4gICAgICAyMjksXG4gICAgICA5OSxcbiAgICAgIDU1LFxuICAgICAgMTQsXG4gICAgICAyNDQsXG4gICAgICAxNjcsXG4gICAgICA5OCxcbiAgICAgIDg1LFxuICAgICAgMjE1LFxuICAgICAgMTIsXG4gICAgICAxNDMsXG4gICAgICAzLFxuICAgICAgMTYsXG4gICAgICA3MSxcbiAgICAgIDE4OCxcbiAgICAgIDE2NSxcbiAgICAgIDE5MyxcbiAgICAgIDIxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09XeCtKOExFT2JKbzdvR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaGxUTkJoN05JQkdUaGxJcGhQYzF0dlNZMTZDTTB0eHNPeVRBSXF5OGN6ST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJTV1NJZE1YMUx2eUhqL1FNQnd3VUNiWS93MVVrQkpKSWxYYloybWFFWFI0K0o4aUF4eWNHZitiUE5UM1MzQ0R2dmV5Wm1PNWpkb0s5NzVyL2p2TzNCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJuMXlSUndSdnptSjkxWDByK0ZKTDJHdkJpMzY4U3N5WFlteGIrYXVzQlAxV0xUTzRrbU11dW5kbk5xMEJ6ajZqTUkycnRXdW5vdXRrK2hCdGp6cUlqZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDMwNjE2OTI6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTEyMzAzMDY3NTU5MDo4QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIldITyBJUyBNSUxMSUFOP1wiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwMzA2MTY5Mjo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjgzMDQ0MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZiblwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRmJuLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZXdSZUoySHFiL1ZiMkpMcFlvZHNxcjl4UUR2MFp5L3kxcFYxNm5OeTN3QT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMDE5Nzc0MTgxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzI4MTkxNjk2NzJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFjQUFGYm8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3bUttQ04wWUdjczZUSk5iZVNnKy8xdTNCUDJkUTRIandhTzlTWWp6MEhrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMwMTk3NzQxODEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOls3LDBdfSxcInRpbWVzdGFtcFwiOlwiMTczMjgxOTIwNTc3OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 Powered by Millian ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • MillTech』*\n wa.me/2348103061692"),
 
  author : process.env.PACK_AUTHER|| "Millian",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "MILLIAN-MD",
  ownername:process.env.OWNER_NAME|| "Millian",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "null", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
