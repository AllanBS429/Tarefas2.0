import 'dotenv/config'; // carrega variáveis de ambiente do arquivo .env

// configuração compartilhada entre os ambientes (development e production)
const shared = {
    // Define qual driver de banco de dados o Knex deve usar (neste caso, PostgreSQL)
    client: 'pg', // driver do banco de dados (PostgreSQL)

    connection: {
        // parâmetros de conexão vindos das variáveis de ambiente
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT) || 5432, // usa porta padrão 5432 se não informada
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },

    migrations: {
        tableName: 'knex_migrations', // nome da tabela que o Knex usa para controlar migrações
        directory: './app/database/migration', // pasta onde estão os arquivos de migração
    },

    seeds: {
        directory: './app/database/seed', // pasta onde estão os arquivos de seed de dados
    },
};

export default {
    development: { ...shared }, // ambiente de desenvolvimento usa a configuração padrão compartilhada

    production: {
        ...shared,
        pool: { min: 2, max: 20 }, // define tamanho mínimo/máximo do pool de conexões em produção
    },
};