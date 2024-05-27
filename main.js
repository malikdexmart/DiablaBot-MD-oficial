process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '1'
import './config.js'
import './store.js'
import {createRequire} from 'module'
import path, {join} from 'path'
import {fileURLToPath, pathToFileURL} from 'url'
import {platform} from 'process'
import * as ws from 'ws'
import {readdirSync, statSync, unlinkSync, existsSync, readFileSync, rmSync, watch} from 'fs'
import yargs from 'yargs'
import {spawn} from 'child_process'
import lodash from 'lodash'
import chalk from 'chalk'
import readline from 'readline'
import NodeCache from 'node-cache'
import syntaxerror from 'syntax-error'
import fs from 'fs'
import { tmpdir } from 'os'
import { format } from 'util'
import P from 'pino'
import pino from 'pino'
import Pino from 'pino'
import {Boom} from '@hapi/boom'
import {makeWASocket, protoType, serialize} from './lib/simple.js'
import {Low, JSONFile} from 'lowdb'
import {mongoDB, mongoDBV2} from './lib/mongoDB.js';
import store from './lib/store.js'
const { proto} = (await import('@whiskeysockets/baileys')).default;
const { DisconnectReason, useMultiFileAuthState, MessageRetryMap, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, jidNormalizedUser, PHONENUMBER_MCC } = await import('@whiskeysockets/baileys')
const {CONNECTING} = ws
const {chain} = lodash
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000

protoType()
serialize()

global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') {
return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString();
}; global.__dirname = function dirname(pathURL) {
return path.dirname(global.__filename(pathURL, true));
}; global.__require = function require(dir = import.meta.url) {
return createRequire(dir)
}

global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({...query, ...(apikeyqueryname ? {[apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]} : {})})) : '')

global.timestamp = {start: new Date}
global.videoList = []
global.videoListXXX = []

const __dirname = global.__dirname(import.meta.url)

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
global.prefix = new RegExp('^[' + (opts['prefix'] || '*/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-.@').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')

global.db = new Low(/https?:\/\//.test(opts['db'] || '') ? new cloudDBAdapter(opts['db']) : new JSONFile(`${opts._[0] ? opts._[0] + '_' : ''}database.json`))

global.DATABASE = global.db; 
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) {
return new Promise((resolve) => setInterval(async function() {
if (!global.db.READ) {
clearInterval(this)
resolve(global.db.data == null ? global.loadDatabase() : global.db.data)
}
}, 1 * 1000))
}
if (global.db.data !== null) return
global.db.READ = true
await global.db.read().catch(console.error)
global.db.READ = null
global.db.data = {
users: {},
chats: {},
stats: {},

conn.sdemote = '@user 🚫 𝐄𝐑𝐑𝐎𝐑 🚫 !ᥲᑲᥲᥒძ᥆ᥒᥲ ᥱᥣ grᥙ⍴᥆!'

conn.sDesc = '🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 sᥱ һᥲ m᥆ძі𝖿і́ᥴᥲძ᥆ ᥣᥲ ძᥱsᥴrі⍴ᥴі᥆́ᥒ ძᥱᥣ grᥙ⍴᥆'

conn.sSubject = '🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎́𝐍 🚫 sᥱ һᥲ m᥆ძі𝖿іᥴᥲძ᥆ ᥱᥣ 𝗍і́𝗍ᥙᥣ᥆ ძᥱᥣ grᥙ⍴᥆'

conn.sIcon = '🚫 𝐄𝐑𝐑𝐎𝐑 🚫 sᥱ һᥲ ᥴᥲmᑲіᥲძ᥆ ᥣᥲ 𝖿᥆𝗍᥆ ძᥱᥣ grᥙ⍴᥆'

conn.Revoke = '*Se a cambiado el enlace del grupo*'
        

conn.handler = handler.handler.bind(global.conn)
conn.participantsUpdate = handler.participantsUpdate.bind(global.conn)
conn.groupsUpdate = handler.groupsUpdate.bind(global.conn)
conn.onDelete = handler.deleteUpdate.bind(global.conn)
conn.onCall = handler.callUpdate.bind(global.conn)
conn.connectionUpdate = connectionUpdate.bind(global.conn)
conn.credsUpdate = saveCreds.bind(global.conn, true)

const currentDateTime = new Date()
const messageDateTime = new Date(conn.ev)
if (currentDateTime >= messageDateTime) {
const chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map((v) => v[0])
} else {
const chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map((v) => v[0])
}

conn.ev.on('messages.upsert', conn.handler)
conn.ev.on('group-participants.update', conn.participantsUpdate)
conn.ev.on('groups.update', conn.groupsUpdate)
conn.ev.on('message.delete', conn.onDelete)
conn.ev.on('call', conn.onCall)
conn.ev.on('connection.update', conn.connectionUpdate)
conn.ev.on('creds.update', conn.credsUpdate)
isInit = false
return true
}

const pluginFolder = global.__dirname(join(__dirname, './plugins/index'))
const pluginFilter = (filename) => /\.js$/.test(filename);
global.plugins = {}
async function filesInit() {
for (const filename of readdirSync(pluginFolder).filter(pluginFilter)) {
try {
const file = global.__filename(join(pluginFolder, filename))
const module = await import(file)
global.plugins[filename] = module.default || module
} catch (e) {
conn.logger.error(e)
delete global.plugins[filename]
}}}
filesInit().then((_) => Object.keys(global.plugins)).catch(console.error)

global.reload = async (_ev, filename) => {
if (pluginFilter(filename)) {
const dir = global.__filename(join(pluginFolder, filename), true)
if (filename in global.plugins) {
if (existsSync(dir)) conn.logger.info(`Se acaba de actualizar el plugin: '${filename}'`)
else {
conn.logger.warn(`Se acaba de eliminar el plugin: '${filename}'`)
return delete global.plugins[filename]
}
} else conn.logger.info(`Nuevo plugin: '${filename}'`)
const err = syntaxerror(readFileSync(dir), filename, {
sourceType: 'module',
allowAwaitOutsideFunction: true,
})
if (err) conn.logger.error(`Error de sintaxis al cargar '${filename}'\n${format(err)}`)
else {
try {
const module = (await import(`${global.__filename(dir)}?update=${Date.now()}`))
global.plugins[filename] = module.default || module
} catch (e) {
conn.logger.error(`Error require plugin '${filename}\n${format(e)}'`)
} finally {
global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b)))
}}}}

Object.freeze(global.reload)
watch(pluginFolder, global.reload)
await global.reloadHandler()
async function _quickTest() {
const test = await Promise.all([
spawn('ffmpeg'),
spawn('ffprobe'),
spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
spawn('convert'),
spawn('magick'),
spawn('gm'),
spawn('find', ['--version']),
].map((p) => {
return Promise.race([
new Promise((resolve) => {
p.on('close', (code) => {
resolve(code !== 127)
})}),
new Promise((resolve) => {
p.on('error', (_) => resolve(false))
})])}))
const [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test
const s = global.support = {ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find}
Object.freeze(global.support)
}
setInterval(async () => {
if (stopped === 'close' || !conn || !conn.user) return
const a = await clearTmp()
console.log(chalk.cyanBright(`\nAUTOCLEAR │ BASURA ELIMINADA\n`))
}, 180000)
setInterval(async () => {
if (stopped === 'close' || !conn || !conn.user) return
await purgeSession()
console.log(chalk.cyanBright(`\nAUTOPURGESESSIONS │ BASURA ELIMINADA\n`))
}, 100000)
setInterval(async () => {
if (stopped === 'close' || !conn || !conn.user) return;
await purgeSessionSB()
console.log(chalk.cyanBright(`\nAUTO_PURGE_SESSIONS_SUB-BOTS │ BASURA ELIMINADA\n`))
}, 1000 * 60 * 60)
setInterval(async () => {
if (stopped === 'close' || !conn || !conn.user) return
await purgeOldFiles()
console.log(chalk.cyanBright(`\nAUTO_PURGE_OLDFILES │ BASURA ELIMINADA\n`))
}, 1000 * 60 * 60)
_quickTest().catch(console.error)
