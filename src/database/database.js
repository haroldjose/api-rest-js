import { Sequelize }  from "sequelize";

export const sequelize=new Sequelize(
    'apiproject_db', //db name
    'postgres',  //username
    'postgress',   //password
    {
        host:'localhost',
        dialect:'postgres',
    }
);