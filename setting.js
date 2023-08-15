const chalk = require('chalk')
const fs = require('fs')

//SELEBIHNYA JIKA MAU SETTING ADA DI FOLDER JS 

//api ibeng
global.apiibeng = 'M3fAsTprq2' // letakan apikey kalian daftar dlu ya
// •> https://api.ibeng.tech
//lalu klian daftar jika sudah daftar di dashboard ada tulisan apikey kalian salin aja Paste di 'APIKEY'





global.owner = ['6281994858551'] 
global.ownernomer = "6281994858551"
global.socialmedia = "IG: @raihans.___"
global.yutub = "BASE CODE : irfnadi_"
global.lokasi = "Indonesia, Tanjungpinang, Kepri"
global.sakuraurl = 'https://panel.irfncode.live'
global.packgename = "by" 
global.author = "Raihan" 
global.title = 'RAI-BOT'
global.body = 'RAI MULTI DEVICE'
global.welcome = false //false mati true nyala
global.left = false //false mati true nyala
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Telah di update'${__filename}'`))
	delete require.cache[file]
	require(file)
})