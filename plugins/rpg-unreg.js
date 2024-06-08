let handler = async (m, { conn, text }) => {

let user = global.db.data.users[m.sender]
  
user.registered = false
m.reply(`*[🪷] ᩭ𝐔𝐒𝐓𝐄𝐃 𝐘𝐀 𝐍𝐎 𝐄𝐒𝐓𝐀 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐀𝐃𝐎ঔৣ᭢*`)

}
handler.command = ['unreg']
handler.register = true
export default handler
