const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA61Uy46jRhT9lai2bQ1vGyy1FAy2edgYjI0fURbVUEDZ5uGibDeMLEVZZJdlFlnl3+YL8gkRdnempZlMOlJYFUVx7zm3zjkfQV7gCtmoBv2PoCT4DClql7QuEeiDwSmOEQEdEEEKQR/4tr1oJpOlZLrzrmVW0Uw7+PVic3SwstvOrEtpGmWaMCIbPoJrB5SnpwMOv1EQSWKmpQZ6SBbieTbjQm2ySJeJsA+NB1TpSH+oQ3a+chW1eATXtiLEBOfJsExRhgg82Kh2ISbvgz9UnSTQLsl2zuvVSniSHLEcr8ZMtM8CutsGqxEpnVhjd+vN++BLC6d+Zifng7ya6SqxHc8ZrR1/HvZ2Zp17psUSnKoXjnjeHX6FkxxFZoRyimn97rnP1CMMu42Hl+rDc8ZIGYnZiTsZIojoFGuGdLJtd/Nw2K6L9wF/UJqVAgkTupUY1tgan9aycaQX+BQ9K8neC3Z4tK5FYbM33wJ3yatW9v9l7r56Zh/ONmqKOU7VqcCZYy6HxZyUtLzIw33XofRkmRKb7d8Hf8AuN4HoZ7oSWkzPGqBNvgoSjtaBvnGUzJ2sFSMTk12pi5/hQ3oi30KpNcZ6nfHusDG1bL8qTW/alUTFzXBUDwqBa3QtCQaitRDYqYR6hlayg+5IY9yAw9FgsxB4BgVPtjzzT5MpZnYmruxUfbwx2qPajECfu3YAQQmuKIEUF3m7x7NCB8Do7KOQIHobLziMF44XOSfqN7IxnC15V8159yL5hSQL3Wa7QJnGks1MxMtH0AElKUJUVSgycEULUk9RVcEEVaD/w+2mWtIEZQVFFo5AH/CS2BMUQVB4Vvm++nBJIa1gWX7IEQUdEJMimyLQp+SEOuD2g6yIA5Fn1aGuSJzKi1xPECR+pAqSpmnDId9SzO5NFzhDFYVZCfpcT1R6PNvjxWvn/8HBsSOlJ2k8L3S5kSDxck9XhyNN1nlV7vY44V9wSNcfOyBHz/Su43b6Xa4DYkwqusxP5aGA0avIXz/CMCxOOfXrPNTaBSKg/2YbUYrzpGqZnXJIwhSfkdbyAP0YHir094UjgqJXLi8hphVRq0OLF3k9cBagxd4W+mI2fY7/cjyH27Gu0ON4jpMElpd4vj3Y7ndADttaYJlHKMY5ir7784/ff/7006+ffvmtHdIL/LZbhCjEh6o1gHWMD8dwNDShcqzM8VitElVLVPCZ7quN7jINmlUeb7VAGzbcyHsOIzimO1XRlfRyxJxRUwuqqyN7DPP941eKtPmvN4ttluKZ4kaRPrsol5CUlhQtZVE3T2G0HTPTZ33L8Cp20c6Cvm4uiuHYMHt6I005fs+nsupGwcVzxtF4X8gXWRokj223CJ1xiN42s8TNTnaYCyFrtpvaKZxufbq1F6mq0aqRxpVvdsvj5ZTOV4EJN8/abMfQGVMvN7496wqD6uylzLQ3n8hSVsKibOIm3iV3g98C5vAS7PjFevj2GmN0y8mXK/nXi70Db/XHXjtvarwk7z9FYhBypcB7By+dKvPldG2sUrK5uB6zCe2CzmXir5LRkdq5JYFra4TyAGlckAz0AcwjUtx0Q4pTK2gzj4tvReXANAfenfkBVlT9bJKv+Y69n3JJURqwSlsj22JqiK3ia7UsfQrpq+eA2j7uQAXXvwCWwfd0nggAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "undefined",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "undefined",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'undefined',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/533oqh.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
                  ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
                  DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'yes',
                  ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
                  AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
