import fetch from 'node-fetch';

var handler = async (m, { text, usedPrefix, command, conn }) => {
  if (!text) return conn.reply(m.chat, `🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *іᥒgrᥱsᥱ ᥙᥒᥲ ⍴ᥱ𝗍іᥴі᥆́ᥒ*\n\n[ ❕ ]Ejemplo, ${usedPrefix}${command} BaileyBot-MD?`, m)

  try {
    conn.sendPresenceUpdate('composing', m.chat);
    var api = await fetch(`https://delirius-api-oficial.vercel.app/api/gemini?query=${encodeURIComponent(text)}`);
    var res = await api.json();

    if (res.status === 'success') {
      await conn.reply(m.chat, res.result, m);
    } else {
      throw new Error('API returned error');
    }
  } catch (error) {
    console.error(error);
    return conn.reply(m.chat, `*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥆ᥴᥙrrі᥆ ᥙᥒ 𝖿ᥲᥣᥣ᥆*`, m);
  }
}

handler.command = ['ia', 'bard'];
handler.help = ['bard'];
handler.tags = ['ai'];

handler.premium = false;

export default handler;