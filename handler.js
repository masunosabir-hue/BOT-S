import { smsg } from './lib/simple.js'
import { format } from 'util'
import * as ws from 'ws';
import { fileURLToPath } from 'url'
import path, { join } from 'path'
import { unwatchFile, watchFile } from 'fs'
import chalk from 'chalk'
import fetch from 'node-fetch'

const { proto } = (await import('@whiskeysockets/baileys')).default
const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
  clearTimeout(this)
  resolve()
}, ms))

export async function handler(chatUpdate) {
  this.msgqueque = this.msgqueque || []
  this.uptime = this.uptime || Date.now()
  if (!chatUpdate) return
  this.pushMessage(chatUpdate.messages).catch(console.error)
  let m = chatUpdate.messages[chatUpdate.messages.length - 1]
  if (!m) return;
  if (global.db.data == null) await global.loadDatabase()       
  
  try {
    m = smsg(this, m) || m
    if (!m) return
    if (!m.isGroup) {
      const text = (m.text || '').trim().toLowerCase()
      if (text !== '') return
    }

    m.exp = 0
    m.coin = false
    
    try {
      let user = global.db.data.users[m.sender]
      if (typeof user !== 'object') global.db.data.users[m.sender] = {}
      if (user) {
        if (!isNumber(user.exp)) user.exp = 0
        if (!isNumber(user.coin)) user.coin = 10
        if (!isNumber(user.joincount)) user.joincount = 1
        if (!isNumber(user.diamond)) user.diamond = 3
        if (!isNumber(user.lastadventure)) user.lastadventure = 0
        if (!isNumber(user.lastclaim)) user.lastclaim = 0
        if (!isNumber(user.health)) user.health = 100
        if (!isNumber(user.crime)) user.crime = 0
        if (!isNumber(user.lastcofre)) user.lastcofre = 0
        if (!isNumber(user.lastdiamantes)) user.lastdiamantes = 0
        if (!isNumber(user.lastpago)) user.lastpago = 0
        if (!isNumber(user.lastcode)) user.lastcode = 0
        if (!isNumber(user.lastcodereg)) user.lastcodereg = 0
        if (!isNumber(user.lastduel)) user.lastduel = 0
        if (!isNumber(user.lastmining)) user.lastmining = 0
        if (!('muto' in user)) user.muto = false
        if (!('premium' in user)) user.premium = false
        if (!user.premium) user.premiumTime = 0
        if (!('registered' in user)) user.registered = false
        if (!('genre' in user)) user.genre = ''
        if (!('birth' in user)) user.birth = ''
        if (!('marry' in user)) user.marry = ''
        if (!('description' in user)) user.description = ''
        if (!('packstickers' in user)) user.packstickers = null
        if (!user.registered) {
          if (!('name' in user)) user.name = m.name
          if (!isNumber(user.age)) user.age = -1
          if (!isNumber(user.regTime)) user.regTime = -1
        }
        if (!isNumber(user.afk)) user.afk = -1
        if (!('afkReason' in user)) user.afkReason = ''
        if (!('role' in user)) user.role = 'Nuv'
        if (!('banned' in user)) user.banned = false
        if (!('useDocument' in user)) user.useDocument = false
        if (!isNumber(user.level)) user.level = 0
        if (!isNumber(user.bank)) user.bank = 0
        if (!isNumber(user.warn)) user.warn = 0
      } else {
        global.db.data.users[m.sender] = {
          exp: 0, coin: 10, joincount: 1, diamond: 3, lastadventure: 0,
          health: 100, lastclaim: 0, lastcofre: 0, lastdiamantes: 0,
          lastcode: 0, lastduel: 0, lastpago: 0, lastmining: 0,
          lastcodereg: 0, muto: false, registered: false, genre: '',
          birth: '', marry: '', description: '', packstickers: null,
          name: m.name, age: -1, regTime: -1, afk: -1, afkReason: '',
          banned: false, useDocument: false, bank: 0, level: 0,
          role: 'Nuv', premium: false, premiumTime: 0,                 
        }
      }

      let chat = global.db.data.chats[m.chat]
      if (typeof chat !== 'object') global.db.data.chats[m.chat] = {}
      if (chat) {
        if (!('isBanned' in chat)) chat.isBanned = false
        if (!('welcome' in chat)) chat.welcome = true
        if (!('detect' in chat)) chat.detect = true
        if (!('antiLink' in chat)) chat.antiLink = true
        if (!('nsfw' in chat)) chat.nsfw = false
      } else {
        global.db.data.chats[m.chat] = {
          isBanned: false, welcome: true, detect: true, antiLink: true, nsfw: false, expired: 0, per: []
        }
      }

    } catch (e) {
      console.error(e)
    }

    let _user = global.db.data?.users?.[m.sender]
    const detectwhat = m.sender.includes('@lid') ? '@lid' : '@s.whatsapp.net';
    const isROwner = [...global.owner.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + detectwhat).includes(m.sender)
    const isOwner = isROwner || m.fromMe
    const isPrems = isROwner || _user?.premium

    if (m.isBaileys || (opts['self'] && !isROwner)) return

    let usedPrefix
    const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './plugins')

    // FIX: PROTECCIÓN PARA EVITAR EL ERROR 'IN' OPERATOR
    if (global.plugins) {
      for (let name in global.plugins) {
        let plugin = global.plugins[name]
        if (!plugin || plugin.disabled) continue
        
        const __filename = join(___dirname, name)
        
        if (typeof plugin.all === 'function') {
          try {
            await plugin.all.call(this, m, { chatUpdate, __dirname: ___dirname, __filename })
          } catch (e) {
            console.error(e)
          }
        }

        const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
        let _prefix = plugin.customPrefix ? plugin.customPrefix : global.prefix
        let match = (
          _prefix instanceof RegExp ? [[_prefix.exec(m.text), _prefix]] :
          Array.isArray(_prefix) ? _prefix.map(p => [new RegExp(str2Regex(p)).exec(m.text), new RegExp(str2Regex(p))]) :
          [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]]
        ).find(p => p[1])

        if (typeof plugin.before === 'function') {
          if (await plugin.before.call(this, m, { match, conn: this, isROwner, isOwner, isPrems, chatUpdate, __dirname: ___dirname, __filename })) continue
        }

        if (typeof plugin !== 'function') continue

        if ((usedPrefix = (match?.[0] || '')[0])) {
          let noPrefix = m.text.replace(usedPrefix, '')
          let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
          command = (command || '').toLowerCase()
          
          let isAccept = Array.isArray(plugin.command) ? plugin.command.includes(command) : plugin.command === command
          if (!isAccept) continue

          m.plugin = name
          // Ejecución del comando
          try {
            await plugin.call(this, m, { usedPrefix, noPrefix, args, command, conn: this, isROwner, isOwner, isPrems })
          } catch (e) {
            console.error(e)
            m.reply(format(e))
          }
          break
        }
      }
    }

  } catch (e) {
    console.error(e)
  }
}

global.dfail = (type, m, conn) => {
  const msg = {
    rowner: 'Solo mis creadores pueden usar esto.',
    owner: 'Solo mis desarrolladores pueden usar esto.',
    premium: 'Este comando es para usuarios Premium.',
    group: 'Este comando solo sirve en grupos.',
    admin: 'Solo los admins pueden usar esto.'
  }[type]
  if (msg) return conn.reply(m.chat, msg, m).then(_ => m.react('✖️'))
}

let file = global.__filename(import.meta.url, true)
watchFile(file, async () => {
  unwatchFile(file)
  console.log(chalk.magenta("Handler actualizado correctamente."))
})