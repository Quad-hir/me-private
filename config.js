/**
   * Create By QUADHIR
   * Base by Dika Ardnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}


global.ownername = 'π―UΝ‘Νπ-π­πΊπ'
global.autorecording = false //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = false //status online (online)
// Other
global.owner = ['2347082252014','79818648925','79603485925']
global.premium = ['2347082252014']
global.packname = 'π―UΝ‘Νπ-π­πΊπ'
global.author = 'WhatsApp Bot'
global.wlcm = []
global.sessionName = 'session'
global.prefa = ['','!','.','π¦','π€','πΏ']
global.sp = 'β­'
global.mess = {
    success: 'β Success',
    admin: 'Group Admin Special Features!',
    botAdmin: 'Make.Bot Admin First!',
    owner: 'Bot Owner Special Features',
    group: 'This Feature Can Only Be Used In Groups!',
    private: 'This Feature Can Only Be Used InPrivate Chat!',
    bot: 'Bot Number User Special Features',
    wait: 'Loading...Be patient',
    endLimit: 'Your Daily Limit Has Expired, The Limit Resets After Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/jo.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
