<?php     
     function OpenConnection(){
        $serverName = "DESKTOP-142MO04\SQLEXPRESS";
        $connectionOptions = array("Database"=>"RadioESCOM",
            "Uid"=>"userRadio", "PWD"=>"hola");
        try{
            $conn = sqlsrv_connect($serverName, $connectionOptions);
            //echo "se conecto a la base de datos";
        }catch(PDOException $exp){
            if($conn == false)
                die(FormatErrors(sqlsrv_errors()));
        }
        return $conn;
    }
?>