
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA61U2a6bSBT8lVG/2hpjMJulSGEz2Bi842U0D21oFgMNbhpsHN1/H+F7bxIpmeSONDxBqzmnqk7V+QJwkVTIRi0YfwElSRpIUfdK2xKBMVDrMEQE9EEAKQRjwC73sIxaX5wOLfPstYeRumPXWj1ToXhdCn591F1zWx4OzOoTeOmDsj5nif+LgsbKZke71kVWywu37Hw87R3IuNns4igCbrcBXsWbquL2XFewqwgTkuDIKGOUIwIzG7VLmJCPwTcc1TxnMVydgoVJ4vw6tYxRe+jFjizjfRwpomzP6stV3B0/Bv+4ic+WHdDtnfV7y4MuneZ2GkUwNSO4L6rw3hts195IukTGK/wqiTAKpgHCNKHth3VHRqQ0s42qJQlJs9Ojldzc45i6muwDuJ4nPWul0sg7X4z0Y8BZz93lvg69Acfo211EHoZoL+cNdzk2jAlxz6uM/WJRi5foe+BL8u6V9L/ontuEFUNBKVyGhF5vbSqSzcsnmU/dx+ZsTwaKcMhO9g4azsfg7/cVRpJlnRvTq8t1QmZKw5yJX/iTlTfderntLXxBkVmcfoMPaU1+hbI3v6rFYRcttd51e9ovJHlD98FEzOcjTeiFSO61oTc5G1dzNSjT5rZBlqvkfpKwtswfFlLGbsWrlU4Jd7lJzCmd4IelR5+ejFLUTgMwHr70AUFRUlECaVLg7owb9gEMmg3yCaJPdcFhv+cYU71AWcR0GvD5Ix64vtMQX9Xvd8mZDlx9JBXNceN/An1QksJHVYUCK6loQVoHVRWMUAXGfz0H1XEmKC8omiUBGAN5KIscJw55QeY/V3/eYkgrWJZ/YkRBH4SkyB0ExpTUqA+eP7CyMWF1XRgxjMwMxRGjaByrG6zC65PJkBE7hvlr022So4rCvATjocgLDDdiBfml///gUAyR03VlKA5ZTlVlmddEQdMUWTNYTdCV4W9x/N0HGN3pq43fxQ8TUtEdrsusgMG7x79OxveLGtNNi32te0EEjL87RpQmOKo6ZjWGxI+TBmkdDzAOYVahr/NGBAXvXN52mFYEnQ1d29moqqSDDntX6AdtxuyP6mSvg2FYkZEFkR0KsiAPx+zn7rwPMOxKAS2GOID4jw2scph16rzh7toEiMIkq7przjVtmNvqgXJyXx2PykZRbEXprPXO8z0+r/6cP2QG7x1tbY5Wu1rjggO+57p53JrIj4JH2VOCpOZSrxxWPysCxiCKUhWHysqH+SB02To+OJKpLpb3y8NL06RUbsrSuU5X6sCWpvz1sDFdaHDiPIDx6TI5507qGu7ZuIn8teHb+5rzDUbrstYHAWoSH33f7HQleGdbEsbLdJfuFr451YRd1PK3OLvy7eqCBpk1X69HhjWtlvPLlpO9VVS501uwwK51XK2DspFmh+1xzVSiEzdU2eq312A/F0v2ttCTt8wlz88wQc/9+DaM3030FXfnO+al/12Jt4X7L0tL3UiDYDa8KOm6NibziHIeL52ie27cMZ5avhBG1pFQfgKDM3jpAlBmkIYFycEYQByQ4mkYUtSdkac4LH7RTFOYqfK20TJYUeVbOH6WN/711pIUpQWrGIwBFx5vmt05vVXKckMhfc8aULrHni3Ayz+sfF+slQgAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by ALI-MD", // // Input Yours custom...
MODE: process.env.MODE || "private", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "919733715695", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "DERK_SOUMYA😃 ‹³策", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "6.0.0",
ANTILINK: process.env.ANTILINK || "Warn", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𓆩ု᪳𝐀ɭīī 𝐌Ɗှ᪳𓆪", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/2ka956.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ALI MD ALIVE",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "true",
//not working for the moment do don't on it
GOODBYE: process.env.GOODBYE || "true", //not working for the moment do don't on it
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799,92", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
