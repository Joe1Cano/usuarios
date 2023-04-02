class inventario {

    constructor(dg) {
        this.dg = dg;        
    }

    insertRecord(jsonData, callBack) {

        var sql = "insert into usuarios (name, l_name, correo, password, tipo) values (?, ?, ?, ?, ?)"; 

        var params = [];

        params.push(jsonData["name"]);  
        params.push(jsonData["l_name"]);
        params.push(jsonData["correo"]); 
        params.push(jsonData["password"]);
        params.push(jsonData["tipo"]);

        this.dg.execute(sql, params, callBack);          
    }

    getRecords(resourceId, callBack) {

         var sql = "select usuario_id, name, l_name, correo, password, tipo from usuarios";

         var params = []; 

         if (resourceId != "") {
             sql = sql + " where usuario_id = ?";               
             params.push(resourceId);    
         }

         this.dg.query(sql, params, callBack);
    }

    updateRecord(resourceId, jsonData, callBack) {

        

        var sql = "update tipo set name = ?, l_name = ?, correo = ?, password = ?, tipo = ? where usuario_id = ?";

        console.log(sql);

        var params = [];

        params.push(jsonData["name"]);  
        params.push(jsonData["l_name"]);
        params.push(jsonData["correo"]);
        params.push(jsonData["password"]);
        params.push(jsonData["tipo"]);
        params.push(resourceId); 

        console.log(params);
        console.log(resourceId);

        this.dg.execute(sql, params, callBack);
    }

    deleteRecord(resourceId, callBack) {

        var sql = "delete from usuarios where usuario_id = ?";

        var params = [];

        params.push(resourceId);   

        this.dg.execute(sql, params, callBack);       
    }
}

module.exports = inventario;
