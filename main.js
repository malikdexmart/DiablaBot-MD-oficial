process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = true;
import './config.js';
import { createRequire } from "module";
import path, { join } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { platform } from 'process';
global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.__dirname = function dirname(pathURL) { return path.dirname(global.__filename(pathURL, true)) }; global.__require = function require(dir = import.meta.url) { return createRequire(dir) };
import * as ws from 'ws';
import { writeFileSync, readdirSync, statSync, unlinkSync, existsSync, readFileSync, copyFileSync, watch, rmSync, readdir, stat, mkdirSync } from 'fs';
import yargs from 'yargs';
import { spawn } from 'child_process';
import lodash from 'lodash';
import chalk from 'chalk';
import syntaxerror from 'syntax-error';
import { tmpdir } from 'os';
import { format } from 'util';
import P from 'pino';
import { makeWASocket, protoType, serialize } from './lib/simple.js';
import { Low, JSONFile } from 'lowdb';
import { mongoDB, mongoDBV2 } from './lib/mongoDB.js';
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const { DisconnectReason, useMultiFileAuthState } = await import('@adiwajshing/baileys');
const { CONNECTING } = ws;
const { chain } = lodash;
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000;

protoType();
serialize();

global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.__dirname = function dirname(pathURL) { return path.dirname(global.__filename(pathURL, true)) }; global.__require = function require(dir = import.meta.url) { return createRequire(dir) }
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
global.timestamp = { start: new Date }
const __dirname = global.__dirname(import.meta.url)
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.prefix = new RegExp('^[' + (opts['prefix'] || 'xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-HhhHBb.aA').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')
global.db = new Low(/https?:\/\//.test(opts['db'] || '') ? new cloudDBAdapter(opts['db']) : new JSONFile(`${opts._[0] ? opts._[0] + '_' : ''}${dirP}database.json`))

global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(async function () {
if (!global.db.READ) {
clearInterval(this)
resolve(global.db.data == null ? global.loadDatabase() : global.db.data)
}
}, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read().catch(console.error)
global.db.READ = null
global.db.data = {
users: {},
chats: {},
stats: {},
msgs: {},
sticker: {},
settings: {},
...(global.db.data || {})
}
global.db.chain = chain(global.db.data)
}
loadDatabase()
global.authFile = join(__dirname, `sessions/`)
global.authFileRespald = join(__dirname, `sesionRespaldo/`)
global.temp = join(__dirname, 'tmp')
if (!existsSync(jadibts)) {
  mkdirSync(jadibts);
  console.log('Directorio jadibts creado exitosamente');
}
if (!existsSync(authFileRespald)) {
  mkdirSync(authFileRespald);
  console.log('Directorio sesionRespaldo creado exitosamente');
}
if (!existsSync(temp)) {
  mkdirSync(temp);
  console.log('Se a creado el directorio tmp correctamente');
}
const { state, saveState, saveCreds } = await useMultiFileAuthState(global.authFile)

const connectionOptions = {
logger: P({ level: 'silent' }),
printQRInTerminal: true,
auth: state,
browser: ['CuriosityBot-MD','Edge','1.0.0'], 

}

global.conn = makeWASocket(connectionOptions)
conn.isInit = false

if (!opts['test']) {
if (global.db) setInterval(async () => {
if (global.db.data) await global.db.write()
if (opts['autocleartmp'] && (global.support || {}).find) (tmp = [os.tmpdir(), 'tmp'], tmp.forEach(filename => cp.spawn('find', [filename, '-amin', '3', '-type', 'f', '-delete'])))}, 30 * 1000)}
if (opts['server']) (await import(join(__dirname, 'server.js'))).default(global.conn, PORT)

  const SESSION_DIR = authFile;
  const SESSION_BACKUP_DIR = authFileRespald;
  const CREDENTIALS_FILE = 'creds.json';
  const CREDENTIALS_BACKUP_FILE = 'creds.json';
  
function backupCreds() {
const credsFilePath = path.join(SESSION_DIR, CREDENTIALS_FILE);
  const backupFilePath = path.join(SESSION_BACKUP_DIR, CREDENTIALS_BACKUP_FILE);
  

  copyFileSync(credsFilePath, backupFilePath);
  console.log(`\nSe a creado el archivo de respaldo: ${backupFilePath}`);

}
        return (
          (fileInDir.startsWith('sender-key-') ||
            fileInDir.startsWith('sender-key-memory-') ||
            fileInDir.startsWith('sender-key-status@broadcast') ||
            fileInDir.startsWith('session')) &&
          mtime <= hourAgo
        );
      });
      if (DSBPreKeys.length === 0) {
        console.log('Ningún archivo encontrado');
      } else {
        SBprekey = [...SBprekey, ...DSBPreKeys];
        DSBPreKeys.forEach((fileInDir) => {
          unlinkSync(dirP+jadibts+filesInDir+'/'+fileInDir);
          console.log(`${fileInDir} fueron eliminados`);
        });
      }
    });
  }
  
  function purgeOldFiles() {
      const directories = [authFile, jadibts];
      const oneHourAgo = new Date(Date.now() - (60 * 60 * 1000));
     
      directories.forEach((dir) => {
          readdirSync(dir, (err, files) => {
          if (err) throw err;
          files.forEach((file) => {
            const filePath = path.join(dir, file);
            statSync(filePath, (err, stats) => {
              if (err) throw err;
              const createTime = new Date(stats.birthtimeMs);
              const modTime = new Date(stats.mtimeMs);
              const isOld = createTime < oneHourAgo || modTime < oneHourAgo;
              const isCreds = file === 'creds.json';
              if (stats.isFile() && isOld && !isCreds) {
                  unlinkSync(filePath, (err) => {
                  if (err) throw err;
                  console.log(`Archivos ${filePath} borrados con éxito`);
                });
              } else {
                console.log(`Archivo ${filePath} no borrado`);
              }
            });
          });
        });
      });
    }
    purgeOldFiles()

setInterval(async () => {
    backupCreds()
    console.log(chalk.whiteBright(`BACKUP_CREDS │ RESPALDO EXITOSO`))
    }, 15 * 60 * 1000)
setInterval(async () => {
    clearTmp()
    console.log(chalk.cyanBright(`AUTOCLEAR │ BASURA ELIMINADA`))
    }, 1000 * 60 * 3)
setInterval(async () => {
     purgeSession()
    console.log(chalk.yellowBright(`AUTOPURGESESSIONS │ ARCHIVOS ELIMINADOS`))
    }, 1000 * 60 * 60)
setInterval(async () => {
      purgeSessionSB()
     console.log(chalk.yellowBright(`AUTO_PURGE_SESSIONS_SUB-BOTS │ ARCHIVOS ELIMINADOS`))
    }, 1000 * 60 * 60)
setInterval(async () => {
     purgeOldFiles()
    console.log(chalk.yellowBright(`AUTO_PURGE_OLDFILES │ ARCHIVOS ELIMINADOS`))
    }, 1000 * 60 * 60)

_quickTest()
.then(() => conn.logger.info(`\n\nC A R G A N D O ⚡\n`))
.catch(console.error)
