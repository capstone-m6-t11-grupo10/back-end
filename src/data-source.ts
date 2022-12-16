import { DataSource } from "typeorm"
import "dotenv/config"

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"],
      }
    : {
        type: "postgres",
        host: process.env.DB_HOST,
        port: 5432,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PWD,
        database: process.env.POSTGRES_DB,
        logging: true,
        synchronize: false,
        entities: ["src/entities/*.ts"],
        migrations: ["src/migrations/*.ts"],
      }
)

export default AppDataSource

// export const AppDataSource = new DataSource({
//     type: 'postgres',

//     host: 'localhost',

//     port: 5432,

//     username: process.env.POSTGRES_USER,
//     password: process.env.POSTGRES_PWD,
//     database: process.env.POSTGRES_DB,

//     synchronize: false,

//     logging: true,

//     entities: ['src/entities/*.ts'],

//     migrations: ['src/migrations/*.ts'],
// });

// AppDataSource.initialize()
//     .then(() => {
//         console.log('Data Source initialized');
//     })
//     .catch((err) => {
//         console.error('Error during Data Source initialization', err);
//     });
