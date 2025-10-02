const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// LocalAuth stores your session automatically
const client = new Client({
    authStrategy: new LocalAuth({ clientId: "bot" })
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log("Scan this QR code with WhatsApp to log in.");
});

client.on('ready', () => {
    console.log('WhatsApp bot is ready!');
});

client.on('message', message => {
    if (message.body === '!ping') {
        message.reply('Pong!');
    }
    if (message.body === '!hello') {
        message.reply(`Hello ${message.from}! 👋`);
    }
});

client.initialize();
