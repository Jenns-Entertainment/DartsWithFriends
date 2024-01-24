const env = process.env;
const db = {
    host: env.DB_HOST,
    user: env.MYSQL_USER,
    password: env.MYSQL_PASSWORD,
    database: env.MYSQL_DATABASE || 'dart_db',
    port: env.DB_PORT || 3306
};

module.exports = db;