var handler = m => m
handler.all = async function (m) {

let chat = global.db.data.chats[m.chat]

if (/^Hola|ola$/i.test(m.text) && !chat.isBanned) {

conn.sendPresenceUpdate('composing', m.chat)    
conn.reply(m.chat, '*💖 𝗛𝗼𝗹𝗮, 𝗖𝗼𝗺𝗼 𝗲𝘀𝘁𝗮𝘀?*\n*𝗣𝗼𝗻 .allmenu 𝗽𝗮𝗿𝗮 𝘃𝗲𝗿 𝗺𝗶 𝗹𝗶𝘀𝘁𝗮 𝗱𝗲 𝗰𝗼𝗺𝗮𝗻𝗱𝗼𝘀*', m, fake, )}

return !0

}
export default handler
