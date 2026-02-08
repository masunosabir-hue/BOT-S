import os from 'os'
import moment from 'moment-timezone'
import speed from 'performance-now'

let handler = async (m, { conn, usedPrefix }) => {
  try {
    await m.react('🌸')
    conn.sendPresenceUpdate('composing', m.chat)

    // Variables locales para evitar errores de "undefined"
    let vs = '1.0.5'
    let libreria = 'Baileys'
    let botname = 'SABIR OFC BOT'
    let textbot = 'Bot de WhatsApp estable'
    let redes = 'https://www.instagram.com/omar.granda'

    let mentionedJid = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    let totalCommands = Object.keys(global.plugins).length
    
    // Imagen de respaldo rápida (puedes cambiar este link por cualquier foto tuya)
    let iconoBackup = 'https://telegra.ph/file/24377c11f445103ec5422.jpg'

    let timestamp = speed()
    let ping = (speed() - timestamp).toFixed(2)

    let uptime = clockString(process.uptime() * 1000)
    let total = (os.totalmem() / 1024 / 1024).toFixed(0)
    let free = (os.freemem() / 1024 / 1024).toFixed(0)
    let used = total - free

    let fecha = moment.tz('America/Lima').format('DD/MM/YYYY')
    let hora = moment.tz('America/Lima').format('HH:mm:ss')
    let dia = moment.tz('America/Lima').format('dddd')

    let menu = `╭───────────────╮
│ SABIR OFC BOT 🔥🦆🦆
│ 👤 Usuario: *@${mentionedJid.split('@')[0]}*
│ 💼 Comandos disponibles: *${totalCommands}*
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
│✨ Comandos para ganar y administrar tu dinero
│
│🏗️ 𝗧𝗥𝗔𝗕𝗔𝗝𝗢𝗦
│• 💼 #work | #w | #trabajar
│• 💋 #slut | #prostituirse
│• ⛏️ #miming | #minar | #mine
│• 🏕️ #aventura | #adventure
│• 🦌 #cazar | #hunt
│• 🎣 #fish | #pescar
│• ⚔️ #mazmorra | #dungeon
│
│🎲 𝗔𝗣𝗨𝗘𝗦𝗧𝗔𝗦 𝘆 𝗝𝗨𝗘𝗚𝗢𝗦
│• 🎰 #casino | #slot [cantidad]
│• 🪙 #coinflip | #flip | #cf [cantidad]
│• 🎯 #roulette | #rt [red/black]
│• 🚨 #crime | #crimen
│
│🏦 𝗕𝗔𝗡𝗖𝗢 𝘆 𝗚𝗘𝗦𝗧𝗜𝗢́𝗡
│• 💳 #balance | #bal | #bank
│• 💰 #deposit | #dep | #d [cantidad]
│• 💸 #withdraw | #with | #retirar
│• 💎 #givecoins | #pay
│• 🏅 #economyboard | #baltop
│
│🎁 𝗥𝗘𝗖𝗢𝐌𝗣𝗘𝗡𝗦𝗔𝗦
│• ⏰ #daily | #diario
│• 🗓️ #weekly | #semanal
│• 📅 #monthly | #mensual
│• 🧰 #cofre | #coffer
│
│💀 𝗔𝗖𝗖𝗜𝗢𝗡𝗘𝗦
│• 🦹 #steal | #robar | #rob
│• ❤️‍🩹 #curar | #heal
│
╰───────────────────────╯

╭─━━━📥 𝐌𝐄𝐍𝐔 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 📥
│🎶 𝗠𝗨́𝗦𝗜𝗖𝗔 𝘆 𝗩𝗜́𝗗𝗘𝗢𝗦
│• 🎧 #play | #play2 + [canción]
│• 🎵 #ytmp3 | #ytmp4 + [link]
│• 🔍 #ytsearch | #search + [búsqueda]
│
│📱 𝗥𝗘𝗗𝗘𝗦 𝗬 𝗣𝗟𝗔𝗧𝗔𝗙𝗢𝗥𝗠𝗔𝗦
│• 🎬 #tiktok | #tt + [link]
│• 📸 #ig | #instagram + [link]
│• 🐦 #twitter | #x + [link]
│• 📘 #facebook | #fb + [link]
│• 📍 #pinterest | #pin + [búsqueda]
│
│📂 𝗔𝗥𝗖𝗛𝗜𝗩𝗢𝗦 𝗬 𝗔𝗣𝗞𝗦
│• 🗂️ #mediafire | #mf + [link]
│• 📦 #mega | #mg + [link]
│• 📱 #apk | #modapk + [búsqueda]
│• 🖼️ #image | #imagen + [búsqueda]
│
╰───────────────────────╯

╭─━━━🎴 𝐌𝐄𝐍𝐔 𝐆𝐀𝐂𝐇𝐀 🎴
│💠 𝗖𝗢𝗠𝗣𝗥𝗔 𝗬 𝗖𝗟𝗔𝗜𝗠
│• 💎 #buycharacter | #buychar
│• 🧧 #claim | #c | #reclamar
│• 🗑️ #delclaimmsg | #deletewaifu
│• 💬 #setclaimmsg | #setclaim
│
│🎨 𝗜𝗠𝗔́𝗚𝗘𝗡𝗘𝗦 𝗬 𝗜𝗡𝗙𝗢
│• 🖼️ #charimage | #waifuimage
│• 📜 #charinfo | #winfo | #waifuinfo
│• 📚 #serieinfo | #ainfo
│• 💫 #gachainfo | #ginfo
│
│🤝 𝗜𝗡𝗧𝗘𝗥𝗖𝗔𝗠𝗕𝗜𝗢 𝗬 𝗩𝗘𝗡𝗧𝗔
│• 💰 #sell | #vender + [precio]
│• 🛍️ #removesale | #removerventa
│• 🔄 #trade | #intercambiar
│• 🎁 #givechar | #regalar
│
│🔥 𝗝𝗨𝗘𝗚𝗢𝗦 𝗬 𝗥𝗔𝗡𝗞𝗜𝗡𝗚𝗦
│• 🎲 #rollwaifu | #rw | #roll
│• 💖 #robwaifu | #robarwaifu
│• 👑 #favoritetop | #favtop
│• 🏆 #waifusboard | #wtop
│• 💌 #harem | #claims
│
╰───────────────────────╯

╭─━━━🛠️ 𝐌𝐄𝐍𝐔 𝐔𝐓𝐈𝐋𝐈𝐃𝐀𝐃𝐄𝐒 🛠️
│📜 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢́𝗡
│• 💬 #help | #menu
│• 🧾 #sc | #script
│• 🐞 #reporte | #reportar
│
│🧮 𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦 𝗨́𝗧𝗜𝗟𝗘𝗦
│• ➗ #calcular | #cal
│• 🪪 #getpic | #pfp + [@usuario]
│• 🗣️ #say + [texto]
│
│🎨 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦 𝗬 𝗘𝗗𝗜𝗖𝗜𝗢́𝗡
│• 🧷 #sticker | #s | #wm
│• 🖼️ #toimg | #img {sticker}
│• 🎭 #brat | #qc | #emojimix
│• ⚡ #enhance | #remini | #hd
│
│🌐 𝗡𝗔𝗩𝗘𝗚𝗔𝗖𝗜𝗢́𝗡 𝗬 𝗜𝗔
│• 🔍 #google
│• 🌎 #wiki | #wikipedia
│• 💭 #ia | #gemini
│• 🧠 #dalle | #flux
│
╰───────────────────────╯

👑 © Powered By *OmarGranda*`

    // ENVÍO DE MENSAJE SIN CANAL Y SIN VIDEO EXTERNO
    await conn.sendMessage(m.chat, {
      text: menu,
      contextInfo: {
        mentionedJid: [mentionedJid],
        isForwarded: true,
        forwardingScore: 99,
        externalAdReply: {
          title: botname,
          body: textbot,
          mediaType: 1,
          sourceUrl: redes,
          thumbnailUrl: iconoBackup,
          renderLargerThumbnail: false,
          showAdAttribution: true
        }
      }
    }, { quoted: m })

  } catch (e) {
    console.error(e)
    m.reply('Ocurrió un error interno al mostrar el menú.')
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