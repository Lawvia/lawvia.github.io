const mysqlConfig = require('../config/mysql.json')
const mysql = require('mysql2/promise');

module.exports = {
    connectAsync: async function(){
        return true
    },
    queryAsync: async function(sql){
        const connection = await mysql.createConnection({
            host: mysqlConfig.db_host,
            user: mysqlConfig.db_user,
            password: mysqlConfig.db_pass,
            database: mysqlConfig.database,
            multipleStatements:true,
        })
        var[rows, fields] = await connection.query(sql)
        await connection.end()
        return [rows, fields]
    },
    executeAsync: async function(sql, data){
        const connection = await mysql.createConnection({
            host: mysqlConfig.db_host,
            user: mysqlConfig.db_user,
            password: mysqlConfig.db_pass,
            database: mysqlConfig.database,
            multipleStatements:true,
        })
        var[rows, fields] = await connection.query(sql, data)
        await connection.end()
        return [rows, fields]
    },
    endPool: async function(){
        return true
    }
}