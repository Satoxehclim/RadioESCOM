<?php
include_once("Cconexion.php");
function ReadDataSesion(){
        try{            
            $nombre =$_POST['nombre'];
            $appat =$_POST['appat'];
            $apmat =$_POST['apmat'];
            $correo =$_POST['correo'];
            $password =$_POST['password'];
            $conn = OpenConnection();
            $tsql = "EXEC Registro @nombre='$nombre',@appat='$appat',@apmat='$apmat',@correo='$correo',@password='$password';";
            $getProducts = sqlsrv_query($conn, $tsql);
            if ($getProducts == FALSE)
                die(FormatErrors(sqlsrv_errors()));
            while($row = sqlsrv_fetch_array($getProducts, SQLSRV_FETCH_ASSOC)){
            }
            $tsql = "EXEC Sesion @correo='$correo',@password='$password';";
            $getProducts = sqlsrv_query($conn, $tsql);
            if ($getProducts == FALSE)
                die(FormatErrors(sqlsrv_errors()));
            while($row = sqlsrv_fetch_array($getProducts, SQLSRV_FETCH_ASSOC)){
                $id_usuario=$row['id_usuario'];
                $nombre=$row['nombre'];
                $appat=$row['appat'];
                $apmat=$row['apmat'];
                $publi[] = array("id" => $id_usuario,
                    "coreo" => $correo,
                    "contraseña" => $password,
                    "nombre" => $nombre,
                    "appat" => $appat,
                    "apmat" => $apmat);
            }
            echo json_encode($publi);
            sqlsrv_free_stmt($getProducts);
            sqlsrv_close($conn);
        }catch(Exception $e){
            echo("Error!");
        }
    }
ReadDataSesion();
?>