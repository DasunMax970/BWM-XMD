const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU25KqOBT9l7xiHwG5WtVVA2ijIt7AW0+dhwgBI1dJEKHLf59Cu6v7YU5PD0+phKy9stba+w2kGSbIQjXov4G8wBdIUbukdY5AH+hlEKACdIAPKQR9YE263cYRyRiH1VicxuzeZbsZOVZzPxxK09VVNkZJhQ5RZD+DWwfk5SHG3jeAV82MzJFmuH41OvVsnbNmp2u0K4auzkwdqleUoz47mFpYeQa3FhHiAqfhMD+iBBUwtlC9gLj4Gf1ywO6r/UnxhVd16Ex8jjAJv2p2ai0ojMiNTodtzhw0pvuS/Yx+5tgDFy1X8QVziueZA0U/LM6KFjaaVV5zZr4ZEK2SK5FfP+gTHKbIH/sopZjWP9Zd0+3ZdOUcNlxkFO4CXRevdJZx0UJHwWm5iKaT7WHZ3SrU3P+MOE8Mbo6uUM0KW9ZGzoyTo/1seWocg7yYcEeFs+CwWfTaq74SXxQfWYn+j+5Y117EOAnMEtqFMWqK0c47i9ZV3nAnmY1muZxU3X3JM9z4Z/TXG2uUSrU6r+w4tZzpdrOc5GejweG63M0DfWyMMEc9RttEn/QhLYtvReZg1GVmRN87eTgl5hymzYysBurGPMa1p8aTSudc2mUKGdGaPw0tHe9fxIvs56uTtV/xpmS97C+nimpdq9mXQbjZ6dXz/UURqsc+6HO3DihQiAktIMVZet+TxA6A/sVBXoHoXV6AT9d1b7rVNvCAdnaO97SqPGU1qRtpVtHNer3NeqN1OfTR8Bl0QF5kHiIE+SNMaFbUNiIEhoiA/t+/OyBFV/owri3X4zogwAWh67TM4wz6H65+HELPy8qUOnXqGe0CFaDPfm4jSnEaklbHMoWFd8QXZBwhJaAfwJigWwf46II91OKBKBjFyXIyd+26EblZqq9S/alqKR+z9PEL5KDnCZzyxPmc9yQIvvSkegf5SRUOUPZ43hOgCDoAv/dMe+ePFs4WKqOjNCjGTNQbLA8X6uaWde4RYX234aE9KpAP+rQoUQccoBeVuZtFKP0Gt4F41xPd/WRd76j7SpEiF1rurgN7+QX34Snov33OKSPzWzzLFm11oOxAByT3COL25aog8ywvCKrC9XnxL/KranWEef4rRbSFfde8veAjCnFMQB8YCz46Ee1lOMZMKhPT1JahZoQa+PToI+yPMImrYLmXvSaBgTxYkAnkU0FC7GDbUH1QuUaYCK8Se9wttuzzv4CAPqgv9uSqQpWnjlpuOWHGOd1U43uK4jVFVmvCAJ8VPbpCu3GqUlPc1YjXBSMWmy5Vgm05MxJr7L9eHRKMaSAqmUR8I3xuqz2y8rVY2KyGZnTEF9OLwqEdWfJkHDvVDg+y6VWV0Fk7jjXZ5JXNllGbZmMgnl3nzEkZnVnMDqStMhapcp3VWyni+MSQtMgzlo82vI+B+H384nuDvL0nK8DoPs1S2Dr0H958zTh763yBeB+Pf8iRjtY71pz3bDFJmaqRjS3NmXlKNY7Iy6UyrLJJaSI63jQcBbfb7w7IY0iDrEjaRkn9IsM+6IAYEqp9tqmLE0QoTHLQ5+SeoEisKEkdkNRanjsU0o/uBlr7TV4ouP0DXdNIPvkHAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "94720244981",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "no",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
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

