let media = gataVidMenu.getRandom()
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `💕 𝘽𝙀𝙉𝙑𝙄𝙉𝘿𝙊(𝘼) 𝘼 𝙊𝙎 𝙂𝙍𝙐𝙋𝙊𝙎 𝙊𝙁𝙄𝘾𝙄𝘼𝙄𝙎

💞 𝙒𝙀𝙇𝘾𝙊𝙈𝙀 𝙏𝙊 𝙏𝙃𝙀 𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇 𝙂𝙍𝙊𝙐𝙋𝙎
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝐂𝐨𝐧𝐯𝐢𝐝𝐨 𝐯𝐨𝐜𝐞̂ 𝐚 𝐬𝐞 𝐣𝐮𝐧𝐭𝐚𝐫 𝐚̀ 𝐜𝐨𝐦𝐮𝐧𝐢𝐝𝐚𝐝𝐞 𝐆𝐚𝐭𝐚𝐁𝐨𝐭. ✨ 𝐃𝐢𝐯𝐢𝐫𝐭𝐚-𝐬𝐞 𝐞 𝐢𝐧𝐭𝐞𝐫𝐚𝐣𝐚 𝐜𝐨𝐧𝐨𝐬𝐜𝐨. 😸

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𓃠 *Versão de ${gt}*
➥ ${vs}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝙂𝙍𝙐𝙋𝙊 𝙊𝙁𝙄𝘾𝙄𝘼𝙇 ${gt}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✨ *Informate de las Novedades!!!*
🐈 *${channel1}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 *${channel2}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
🐈 *${channel3}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 𝐒𝐨𝐩𝐨𝐫𝐭𝐞 𝐆𝐚𝐭𝐚𝐁𝐨𝐭
*${nna2}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 𝐆𝐫𝐮𝐩𝐨 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 𝟏
*${nn}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 𝐆𝐫𝐮𝐩𝐨 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 𝟐
*${nnn}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 𝐆𝐫𝐮𝐩𝐨 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 𝟑
*${nnnt}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 𝐆𝐫𝐮𝐩𝐨 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 𝟒
*${nnntt}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 𝐆𝐫𝐮𝐩𝐨 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 𝟓
*${nnnttt}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *COLABORAÇÃO COM* ${gt}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 𝐆𝐚𝐭𝐚𝐁𝐨𝐭 × xxxxx 🌟
*${nnnttt1}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 𝐆𝐚𝐭𝐚𝐁𝐨𝐭 × xxxxx ✨
*${nnnttt2}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 𝐆𝐚𝐭𝐚𝐁𝐨𝐭 × xxxxx 💫
*${nnnttt3}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 𝐆𝐚𝐭𝐚𝐁𝐨𝐭 × xxxxx 🍧
*${nnnttt4}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
🐈 💝 𝐌𝐔𝐋𝐓𝐈-𝐁𝐎𝐓𝐒 💝 🐈 
*${nnnttt5}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
ᥫ᭡༶A༶T༶M༶M༶ᰔᩚ 
*${nnnttt6}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Por favor, não entrem com números de Bots, é mantenha o respeto.*`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}
/*conn.sendHydrated(m.chat, str, `𝙂𝘼𝙏𝘼 𝘿𝙄𝙊𝙎 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼\n${asistencia}\n\n` + wm, media, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', '.cuentasgb'],
['🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/

handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupgb$/i
handler.exp = 33

export default handler
