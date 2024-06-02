import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
	let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        let lvl =  `
> *メ L E V E L  -  U P* 

╒═══════════════════
│╭───────────────···         
┴╰★ *🍭 Nombre* : \`${name}\`
✰│✩ *⭐ Nivel* : \`${user.level}\`
┬╭★ *🔖 XP* : \`${user.exp - min}/${xp}\`
│╰────────────────···
╘═══════════════════
Te falta *${max - user.exp}* de *XP* para subir de nivel
> *By : な Bᴜᴄᴏ.Xᴍʟ*`.trim()
conn.sendMessage(m.chat, {
text: lvl,
contextInfo: { 
forwardingScore: 9999, 
isForwarded: true, 
externalAdReply: {
title: gcname,
body: 'Startmoon Team | ©2024 hosted by:optiklink',
thumbnailUrl: 'https://telegra.ph/file/5363728046674b1dd80a4.jpg',
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `Bien hecho ${conn.getName(m.sender)}    Nivel:`
        let str = `
> *メ L E V E L  -  U P* 

╒═══════════════════
│╭───────────────···
┴╰★ *🍭 Nombre* : \`${name}\`
✰│✩ *📈 Nivel Actual* : \`${user.level}\`
┬╭★ *📉 Nivel Anterior* : \`${before}\`
│╰────────────────···
╘═══════════════════

> *_Cuanto más interactúes con Roxy Migurdia, mayor será tu nivel_*
> *By: な Bᴜᴄᴏ.Xᴍʟ*`.trim()

conn.sendMessage(m.chat, {
text: str,
contextInfo: { 
forwardingScore: 9999, 
isForwarded: true, 
externalAdReply: {
title: gcname,
body: 'Startmoon Team | ©2024 hosted by:optiklink',
thumbnailUrl: 'https://telegra.ph/file/5363728046674b1dd80a4.jpg',
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
            //m.reply(str)
        }
    }

handler.help = ['levelup']
handler.tags = ['econ']

handler.command = ['nivel', 'lvl', 'levelup', 'level'] 
handler.register = true 
export default handler