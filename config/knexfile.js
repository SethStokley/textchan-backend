module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://root:password@localhost:5432/textchan',
        migrations: {
            directory: __dirname + '/../src/db/migrations'
        },
        seeds: {
            directory: __dirname + '/../src/db/seeds'
        }
    }
}