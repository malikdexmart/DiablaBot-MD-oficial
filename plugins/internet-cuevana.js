import axios from 'axios'

const TMDB_API_KEY = '703e37b8'
const LANGUAGE = 'es' 

var handler = async (m, { text, usedPrefix, command, conn }) => {
  if (!text) return conn.reply(m.chat, `🎌 *Ingrese el nombre de una película*\n\nEjemplo, ${usedPrefix}${command} merlina`, m)
  conn.reply(m.chat, '⏰ Espere un momento', m)
  let results
  let img

  try {
    results = await searchMovie(text)
    img = 'https://cinefilosoficial.com/wp-content/uploads/2021/07/cuevana.jpg'
  } catch (err) {
    console.error(err)
    return conn.reply(m.chat, '🚩 *Error al buscar la película*', m)
  }

  if (!results || results.length === 0) return conn.reply(m.chat, '🚩 *Sin resultados*', m)
  const res = results.map((v) => `⬡ *Nombre:* ${v.title}\n⬡ *Año:* ${v.release_date ? v.release_date.split('-')[0] : 'N/A'}\n⬡ *Descripción:* ${v.overview}\n⬡ *Enlace:* https://www.themoviedb.org/movie/${v.id}`).join('\n\n───────────────\n\n')
  const ads = '⬡ *Bloqueador de anuncios recomendado:* Block This\n⬡ *Enlace:* https://block-this.com/block-this-latest.apk\n\n≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣\n\n'
  await conn.sendMessage(m.chat, { text: ads + res, contextInfo: { externalAdReply: { mediaType: 1, renderLargerThumbnail: true, thumbnailUrl: img, title: 'Resultados de búsqueda' }}})
}

handler.help = ['pelisplus']
handler.tags = ['internet']
handler.command = ['cuevana', 'pelisplus']

handler.register = true

export default handler

async function searchMovie(query) {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
      params: {
        api_key: TMDB_API_KEY,
        query: query,
        language: LANGUAGE
      }
    })
    if (response.data.results) {
      return response.data.results
    } else {
      return []
    }
  } catch (err) {
    console.error(err)
    throw err
  }
}