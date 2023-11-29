//Archivo de configuración para conexión con BD

//Importar el modulo MySQL
const mysql = require('mysql')

//Creando la conexión con MySQL
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234567',
    database: 'hospital'
})

conexion.connect(function (error){
    if(error){
       console.log(`ocurrio un error en la conexion ${error}`)
       return;
    }else{
        console.log('Conexion exitosa')   
    }
})

module.exports = {conexion}

