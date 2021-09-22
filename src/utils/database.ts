import {Sequelize} from 'sequelize-typescript';

const sequelizeDatabase = new Sequelize(
    {
        database: 'rpg',
        username: 'root',
        password: 'charlie2015',
        //storage: ':memory:',
        dialect: 'mysql',
        host:'localhost',
        models: [__dirname + '/**/*.model.ts']
    });

export default sequelizeDatabase;

