import os from 'os'
import moment from 'moment-timezone'
import speed from 'performance-now'

let handler = async (m, { conn, usedPrefix }) => {
  try {
    await m.react('🌸')
    conn.sendPresenceUpdate('composing', m.chat)

    // Definición de variables que faltaban (puedes cambiarlas)
    let vs = '1.0.0'
    let libreria = 'Baileys'
    let botname = 'SABIR OFC BOT'
    let textbot = 'The Best Bot WhatsApp'
    let redes = 'https://www.instagram.com/omar.granda'

    let mentionedJid = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    let totalCommands = Object.keys(global.plugins).length
    const iconos = [
      'https://qu.ax/TPfmC.jpg'
    ]
    const randomIcono = iconos[Math.floor(Math.random() * iconos.length)]

    let timestamp = speed()
    let ping = (speed() - timestamp).toFixed(2)

    let uptime = clockString(process.uptime() * 1000)
    let total = (os.totalmem() / 1024 / 1024).toFixed(0)
    let free = (os.freemem() / 1024 / 1024).toFixed(0)
    let used = (total - free)

    let fecha = moment.tz('America/Lima').format('DD/MM/YYYY')
    let hora = moment.tz('America/Lima').format('HH:mm:ss')
    let dia = moment.tz('America/Lima').format('dddd')

    // AQUÍ ESTABA EL ERROR: Se arreglaron las comillas iniciales
    let menu = `╭───────────────╮
│ SABIR OFC BOT 🔥🦆🦆
│ 👤 Usuario: *@${mentionedJid.split('@')[0]}*
│ 💼 Comandos: *${totalCommands}*
│ ⚙️ Versión: *${vs}*
│ 💠 Librería: *${libreria}*
│ 🤖 Modo: *${(conn.user.jid == global.conn.user.jid ? 'Principal' : 'Sub-Bot')}*
│ ⏳ Uptime: *${uptime}*
╰───────────────────────╯

│ 💻 RAM Total: *${total} MB*
│ 📈 RAM En uso: *${used} MB*
│ 📉 RAM Libre: *${free} MB*
│ ⚡ Ping actual: *${ping} ms*
╰───────────────────────╯

╭─╼「 🕓 FECHA Y HORA 」
│ 📅 Día: *${dia}*
│ 🗓️ Fecha: *${fecha}*
│ ⏰ Hora actual: *${hora}*
╰───────────────────────╯

╭─━━━💰 𝐌𝐄𝐍𝐔 𝐄𝐂𝐎𝐍𝐎𝐌𝐈́𝐀 💰
│✨ Comandos para ganar dinero
│
│🏗️ 𝗧𝗥𝗔𝗕𝗔𝗝𝗢𝗦
│• 💼 #work | #w | #trabajar
│• 💋 #slut | #prostituirse
│• ⛏️ #miming | #minar
│• 🏕️ #aventura | #adventure
│• 🦌 #cazar | #hunt
│• 🎣 #fish | #pescar
│• ⚔️ #mazmorra | #dungeon
│
│🎲 𝗔𝗣𝗨𝗘𝗦𝗧𝗔𝗦
│• 🎰 #casino | #slot
│• 🪙 #coinflip | #cf
│• 🎯 #roulette | #rt
│• 🚨 #crime | #crimen
│
│🏦 𝗕𝗔𝗡𝗖𝗢
│• 💳 #balance | #bal
│• 💰 #deposit | #dep
│• 💸 #withdraw | #with
│• 💎 #givecoins | #pay
│• 🏅 #economyboard
│
│🎁 𝗥𝗘𝗖𝗢𝗠𝗣𝗘𝗡𝗦𝗔𝗦
│• ⏰ #daily | #diario
│• 🗓️ #weekly
│• 📅 #monthly
│• 🧰 #cofre
│
│💀 𝗔𝗖𝗖𝗜𝗢𝗡𝗘𝗦
│• 🦹 #steal | #robar
│• ❤️‍🩹 #curar | #heal
│
╰───────────────────────╯

╭─━━━📥 𝐌𝐄𝐍𝐔 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 📥
│🎶 𝗠𝗨́𝗦𝗜𝗖𝗔 𝘆 𝗩𝗜́𝗗𝗘𝗢𝗦
│• 🎧 #play | #play2
│• 🎵 #ytmp3 | #ytmp4
│• 🔍 #ytsearch
│
│📱 𝗥𝗘𝗗𝗘𝗦
│• 🎬 #tiktok | #tt
│• 📸 #ig | #instagram
│• 🐦 #twitter | #x
│• 📘 #facebook | #fb
│• 📍 #pinterest | #pin
│
│📂 𝗔𝗥𝗖𝗛𝗜𝗩𝗢𝗦
│• 🗂️ #mediafire | #mf
│• 📦 #mega | #mg
│• 📱 #apk | #modapk
│• 🖼️ #image | #imagen
│
╰───────────────────────╯

╭─━━━🎴 𝐌𝐄𝐍𝐔 𝐆𝐀𝐂𝐇𝐀 🎴
│💠 𝗖𝗢𝗠𝗣𝗥𝗔 𝗬 𝗖𝗟𝗔𝗜𝗠
│• 💎 #buycharacter
│• 🧧 #claim | #c
│• 🗑️ #delclaimmsg
│• 💬 #setclaimmsg
│
│🎨 𝗜𝗠𝗔́𝗚𝗘𝗡𝗘𝗦 𝗬 𝗜𝗡𝗙𝗢
│• 🖼️ #charimage
│• 📜 #charinfo
│• 📚 #serieinfo
│• 💫 #gachainfo
│
│🤝 𝗜𝗡𝗧𝗘𝗥𝗖𝗔𝗠𝗕𝗜𝗢
│• 💰 #sell | #vender
│• 🛍️ #removesale
│• 🔄 #trade
│• 🎁 #givechar
│
│🔥 𝗝𝗨𝗘𝗚𝗢𝗦
│• 🎲 #rollwaifu | #rw
│• 💖 #robwaifu
│• 👑 #favoritetop
│• 🏆 #waifusboard
│• 💌 #harem | #claims
│
╰───────────────────────╯

╭─━━━🛠️ 𝐌𝐄𝐍𝐔 𝐔𝐓𝐈𝐋𝐈𝐃𝐀𝐃𝐄𝐒 🛠️
│📜 𝗜𝗡𝗙𝗢
│• 💬 #help | #menu
│• 🧾 #sc | #script
│• 🐞 #reporte
│
│🧮 𝗧𝗢𝗢𝗟𝗦
│• ➗ #calcular
│• 🪪 #getpic
│• 🗣️ #say
│
│🎨 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦
│• 🧷 #sticker | #s
│• 🖼️ #toimg | #img
│• 🎭 #brat | #qc
│• ⚡ #enhance | #remini
│
│🌐 𝗜𝗔 𝗬 𝗕𝗨𝗦𝗤𝗨𝗘𝗗𝗔
│• 🔍 #google
│• 🌎 #wiki
│• 💭 #ia | #gemini
│• 🧠 #dalle | #flux
│
╰───────────────────────╯

👑 © Powered By *OmarGranda*`

    await conn.sendMessage(m.chat, {
      video: { url: 'https://qu.ax/AjjHr.mp4' },
      caption: menu,
      contextInfo: {
        mentionedJid: [mentionedJid],
        isForwarded: true,
        externalAdReply: {
          title: botname,
          body: textbot,
          mediaType: 1,
          mediaUrl: redes,
          sourceUrl: redes,
          thumbnailUrl: randomIcono,
          showAdAttribution: false,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m })

  } catch (e) {
    console.error(e)
    m.reply('Ocurrió un error al generar el menú.')
  }
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help']
handler.register = true

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':')
}