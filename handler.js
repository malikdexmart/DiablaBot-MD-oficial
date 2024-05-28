import { generateWAMessageFromContent } from "@whiskeysockets/baileys"
import { smsg } from './lib/simple.js'
import { format } from 'util'
import { fileURLToPath } from 'url'
import path, { join } from 'path'
import { unwatchFile, watchFile } from 'fs'
import chalk from 'chalk'
import fs from 'fs'
import moment from 'moment-timezone'
 
const { proto } = (await import('@whiskeysockets/baileys')).default
const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
clearTimeout(this)
resolve()
}, ms))
 
export async function handler(chatUpdate) {

this.msgqueque = this.msgqueque || [];
this.uptime = this.uptime || Date.now();
if (!chatUpdate)
return
this.pushMessage(chatUpdate.messages).catch(console.error)
let m = chatUpdate.messages[chatUpdate.messages.length - 1]
if (!m)
return
if (global.db.data == null)
await global.loadDatabase()
try {
m = smsg(this, m) || m
if (!m)
return
m.exp = 0
m.diamond = false
try {

// TODO: Usa un bucle para insertar datos en lugar de esto.
let user = global.db.data.users[m.sender]
if (typeof user !== 'object')
global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.exp)) user.exp = 0
if (!isNumber(user.money)) user.money = 10
if (!isNumber(user.lastclaim)) user.lastclaim = 0
if (!isNumber(user.health)) user.health = 100
if (!isNumber(user.potion)) user.potion = 5
if (!isNumber(user.diamond)) user.diamond = 20
if (!isNumber(user.emerald)) user.emerald = 0
if (!isNumber(user.gold)) user.gold = 0
if (!isNumber(user.iron)) user.iron = 0
if (!isNumber(user.coal)) user.coal = 0
if (!isNumber(user.stone)) user.stone = 0
if (!isNumber(user.pickaxe)) user.pickaxe = 0
if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 100
if (!isNumber(user.common)) user.common = 0
if (!isNumber(user.uncommon)) user.uncommon = 0
if (!isNumber(user.cat)) user.cat = 0
if (!isNumber(user.dog)) user.dog = 0
if (!isNumber(user.fox)) user.fox = 0
if (!('registered' in user)) user.registered = false
 
//--Usuario registrado
if (!user.registered) {
if (!('name' in user)) user.name = m.name
if (!isNumber(user.age)) user.age = -1
if (!isNumber(user.regTime)) user.regTime = -1
}

//--Usuario número
if (!isNumber(user.afk)) user.afk = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!('banned' in user)) user.banned = false
if (!isNumber(user.warn)) user.warn = 0
if (!isNumber(user.level)) user.level = 0
if (!('role' in user)) user.role = 'Novato'
if (!('autolevelup' in user)) user.autolevelup = true
if (!('simi' in user)) user.simi = false
if (!('muto' in user)) user.muto = false
if (!('premium' in user)) user.premium = false

} else

global.db.data.users[m.sender] = {
exp: 0,
money: 10,
lastclaim: 0,
health: 100,
potion: 5,
diamond: 20,
emerald: 0,
gold: 0,
iron: 0,
coal: 0,
stone: 0,
pickaxe: 1,
pickaxedurability: 100,
cat: 0,
dog: 0,
fox: 0,
common: 0,
uncommon: 0,
registered: false,
name: m.name,
age: -1,
regTime: -1,
afk: -1,
afkReason: '',
banned: false,
warn: 0,
level: 0,
role: 'Novato',
autolevelup: true,
simi: false,
let chats = global.db.data.chats[id], text = ''
if (!chats?.detect) continue
if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || conn.sDesc || 'Descripción cambiada a \n@desc').replace('@desc', groupUpdate.desc)
if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || conn.sSubject || 'El nombre del grupo cambió a \n@group').replace('@subject', groupUpdate.subject)
if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || conn.sIcon || 'El icono del grupo cambió a').replace('@icon', groupUpdate.icon)
if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || 'El enlace del grupo cambia a\n@revoke').replace('@revoke', groupUpdate.revoke)
if (!text) continue
await this.sendMessage(id, { text, mentions: this.parseMention(text) })
}}

export async function callUpdate(callUpdate) {

let isAnticall = global.db.data.settings[this.user.jid].antiCall
if (!isAnticall) return
for (let cs of callUpdate) {
if (cs.isGroup == false) {
if (cs.status == "offer") {
let callmsg = await this.reply(nk.from, `Hola *@${cs.from.split('@')[0]}*, Las ${cs.isVideo ? 'videollamadas' : 'llamadas'} están prohibidas, seras bloqueado`, false, { mentions: [cs.from] })
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;Azami 👑;;;\nFN:Azami\nORG:Azami 👑\nTITLE:\nitem1.TEL;waid=18134039996:+598 9999\nitem1.X-ABLabel:Azami 👑\nX-WA-BIZ-DESCRIPTION:Solo cosas del bot.\nX-WA-BIZ-NAME:Azami 👑\nEND:VCARD`
await this.sendMessage(cs.from, { contacts: { displayName: 'Azami 👑', contacts: [{ vcard }] }}, {quoted: callmsg})
await this.updateBlockStatus(cs.from, 'block')
}}}
}

export async function deleteUpdate(message) {
try {
const { fromMe, id, participant } = message
if (fromMe) return 
let msg = this.serializeM(this.loadMessage(id))
let chat = global.db.data.chats[msg?.chat] || {}
if (!chat?.delete) return 
if (!msg) return 
if (!msg?.isGroup) return 
await this.sendMessage(msg.chat, {text: `🔎 BORRO UN MENSAJE
🧃 *NOMBRE:* @${participant.split`@`[0]}\n
𝙿𝙰𝚁𝙰 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙴𝚂𝚃𝙰 𝙾𝙿𝙲𝙸𝙾́𝙽 𝚄𝚂𝙰𝚁: #disable delete`, mentions: [participant]}, {quoted: msg})
this.copyNForward(msg.chat, msg).catch(e => console.log(e, msg))
} catch (e) {
console.error(e)
}}

//let fotos = ImgAll.getRandom()

global.dfail = (type, m, conn) => {

let msg = {
 rowner: '🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *ᥱs𝗍ᥱ ᥴ᥆mᥲᥒძ᥆ s᥆ᥣ᥆ mі ძᥱsᥲrr᥆ᥣᥣᥲძ᥆r ᥣ᥆ ⍴ᥙᥱძᥱ ᥙsᥲr*', 
 owner: '🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *ᥱs𝗍ᥱ ᥴ᥆mᥲᥒძ᥆ s᥆ᥣ᥆ mі ⍴r᥆⍴іᥱ𝗍ᥲrі᥆ ᥣ᥆ ⍴ᥙᥱძᥱ ᥙsᥲr*', 
 mods: '🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *ᥱs𝗍ᥲ 𝖿ᥙᥒᥴі᥆́ᥒ s᥆ᥣ᥆ ᥱs ⍴ᥲrᥲ mіs m᥆ძᥱrᥲძ᥆rᥱs*', 
 premium: '🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *ᥱs𝗍ᥲ 𝖿ᥙᥒᥴі᥆́ᥒ s᥆ᥣ᥆ ES ⍴ᥲrᥲ ᥙsᥙᥲrі᥆s ⍴rᥱmіᥙm*', 
 group:  '🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *ᥣᥲ 𝖿ᥙᥒᥴі᥆́ᥒ s᥆ᥣ᥆ ⍴ᥙᥱძᥱ sᥱr ᥱȷᥱᥴᥙ𝗍ᥲძᥲ ᥱᥒ grᥙ⍴᥆s*', 
 private: '🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *ᥱs𝗍ᥲ 𝖿ᥙᥒᥴі᥆ᥒᥴs᥆ᥣ᥆ ⍴ᥙᥱძᥱ sᥱr ᥙsᥲძᥲ ᥱᥒ ᥱᥣ ᥴһᥲ𝗍 ⍴rі᥎ᥲძ᥆*', 
 admin: '🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *ᥱs𝗍ᥱ ᥴ᥆mᥲᥒძ᥆ s᥆ᥣ᥆ ⍴ᥙᥱძᥱ sᥱr ᥙsᥲძ᥆ ⍴᥆r ADMINS*', 
 botAdmin: '🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *⍴ᥲrᥲ ᥙsᥲr ᥱs𝗍ᥲ 𝖿ᥙᥒᥴі᥆́ᥒ ძᥱᑲ᥆ sᥱr ᥲძmіᥒ*', 
 unreg: '🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *һᥱᥡ! ᥲᥣ𝗍᥆ ᥲһі ᥒ᥆ ᥱs𝗍ᥲs rᥱgіs𝗍rᥲძ᥆, rᥱgі́s𝗍rᥱsᥱ ⍴ᥲrᥲ ᥙsᥲr ᥱs𝗍ᥲ 𝖿ᥙᥒᥴі᥆́ᥒ ᥱsᥴrіᑲіᥱᥒძ᥆:*\n\n• */reg nombre.edad*\n\n*_❕ Ejemplo_* : */reg Ax.25*',
restrict: '🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *ᥱs𝗍ᥲ ᥴᥲrᥲᥴ𝗍ᥱrі́s𝗍іᥴᥲ ᥱs𝗍ᥲ ძᥱsᥲᥴ𝗍і᥎ᥲძᥲ*' 
}[type]
if (msg) return conn.reply(m.chat, msg, m, { contextInfo:{ externalAdReply: {title: ' ' + saludo + ' ' + nombre , body: dev, sourceUrl: global.channel, thumbnailUrl: ImgAll.getRandom() }}})

}
const file = global.__filename(import.meta.url, true);
watchFile(file, async () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'handler.js\''));
  if (global.reloadHandler) console.log(await global.reloadHandler());
  
  if (global.conns && global.conns.length > 0 ) {
    const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
    for (const userr of users) {
      userr.subreloadHandler(false)
    }
  }
  
});
