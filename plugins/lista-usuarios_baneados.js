let handler = async (m, { conn, isOwner }) => {
let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
let caption = `
*╭•·–| 👥 𝙐𝙎𝙐𝘼𝙍𝙄𝙊𝙎 𝘽𝘼𝙉𝙄𝘿𝙊𝙎 : |–·•*
│ *Total : ${users.length} Usuarios* ${users ? '\n' + users.map(([jid], i) => `
│
│ *${i + 1}.* ${conn.getName(jid) == undefined ? 'Sem Usuarios Banidos' : conn.getName(jid)}
│ ${isOwner ? '@' + jid.split`@`[0] : jid}\n│ - - - - - - - - -`.trim()).join('\n') : ''}
│ *Estes usuarios não pode Usar a GataBot*
*╰•·–––––––––––––––––––·•*`.trim()

await conn.reply(m.chat, caption, m, { mentions: await conn.parseMention(caption) })}
/*conn.sendButton(m.chat, caption, `*Estos usuarios no puedes Usar a GataBot*\n\n` + wm, null, [ 
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], m, { mentions: await conn.parseMention(caption) })}*/
handler.command = /^listabanidos|listausuarios|listbanuser|listabaneados|listban$/i

export default handler
