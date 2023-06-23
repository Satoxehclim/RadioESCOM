<?php
include_once("Cconexion.php");
include_once("pedirPublicacion.php");
function ReadDataNewPublicaionForo(){
        try{            
            $descripcion =$_POST['descripcion'];
            $tipo =$_POST['tipo'];
            $id_usuario =$_POST['id_usuario'];
            $conn = OpenConnection();
            $tsql = "EXEC RegistroPublicacion @descripcion='$descripcion',@tipo='$tipo',@id_usuario=$id_usuario;";
            $getProducts = sqlsrv_query($conn, $tsql);
            if ($getProducts == FALSE)
                die(FormatErrors(sqlsrv_errors()));
            while($row = sqlsrv_fetch_array($getProducts, SQLSRV_FETCH_ASSOC)){
            }
            echo json_encode($publi);
            sqlsrv_free_stmt($getProducts);
            sqlsrv_close($conn);
        }catch(Exception $e){
            echo("Error!");
        }
    }
    ReadDataNewPublicaionForo();
?>