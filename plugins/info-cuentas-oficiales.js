let media = 'https://qu.ax/NqZN.mp4'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `💙 𝘽𝙀𝙉𝙑𝙄𝙉𝘿𝙊(𝘼) 𝘼 𝘼𝙎 𝘾𝙊𝙉𝙏𝘼𝙎 𝙊𝙁𝙄𝘾𝙄𝘼𝙄𝙎
💜 𝐁𝐄𝐌-𝐕𝐈𝐍𝐃𝐎 𝐀𝐒 𝐂𝐎𝐍𝐓𝐀𝐒 𝐎𝐅𝐈𝐂𝐈𝐀𝐈𝐒
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
💖 𝐌𝐀𝐆𝐔𝐈𝐍𝐇𝐎 𝐎𝐅𝐂 🐈
${bot}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *GITHUB*
*${md}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *INSTAGRAM - ASSISTÊNCIA*
*${ig}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *YOUTUBE*
*${yt}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *FACEBOOK*
*${fb}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*𝚂𝚎 𝚟𝚘𝚌𝚎̂ 𝚝𝚒𝚟𝚎𝚛 𝚍𝚞́𝚟𝚒𝚍𝚊𝚜, 𝚜𝚞𝚐𝚎𝚜𝚝𝚘̃𝚎𝚜 𝚘𝚞 𝚙𝚎𝚛𝚐𝚞𝚗𝚝𝚊𝚜 𝚎́ 𝚜𝚘́ 𝚌𝚑𝚊𝚖𝚊 𝚗𝚘 𝙸𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖.*`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}
/*conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝙂𝙧𝙤𝙪𝙥𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧𝙖 | 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 💗', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/

handler.command = /^contasoficiais|gataig|contasgb|contasofc|accounts|gataaccounts|account|iggata|cuentasdegata|cuentasdegatabot|cuentagatabot|cuentasgatabot$/i
handler.exp = 35
export default handler
