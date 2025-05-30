const mineflayer = require('mineflayer');
const { mineflayer: mineflayerViewer } = require('prismarine-viewer');

const bot = mineflayer.createBot({
  host: 'oyna.chickennw.com',
  port: 25565,
  username: 'NialBaba',
  auth: 'offline',
  version: '1.20.4'
});

bot.once('spawn', () => {
  console.log('Bot sunucuya bağlandı.');

  // Ekran görüntüsü başlat
  mineflayerViewer(bot, { port: 3007, firstPerson: true });

  // Kayıt ol
  bot.chat('/kayıt NialBaba1 NialBaba1');

  // Warp komutu
  bot.chat('/is warp NayilNayil54321 casino');

  // Menüde 11. slota tıklama
  setTimeout(() => {
    const slot = 10; // 0'dan başladığı için 11. slot = 10
    const item = bot.inventory.slots[slot];
    if (item) {
      bot.activateItem();
      console.log(`Slot ${slot + 1} tıklandı.`);
    } else {
      console.log(`Slot ${slot + 1} boş.`);
    }
  }, 5000);
});
