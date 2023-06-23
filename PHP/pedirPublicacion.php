<?php
include_once("Cconexion.php");
function ReadData(){
        try{            
            $tipo =$_POST['data'];
            $conn = OpenConnection();
            $tsql = "EXEC Publicaciones @tipo='$tipo';";
            $getProducts = sqlsrv_query($conn, $tsql);
            if ($getProducts == FALSE)
                die(FormatErrors(sqlsrv_errors()));
            while($row = sqlsrv_fetch_array($getProducts, SQLSRV_FETCH_ASSOC)){
                $id_publicacion=$row['id_publicacion'];
                $fecha=$row['fecha'];
                $descripcion=$row['descripcion'];
                $nombre=$row['nombre'];
                $appat=$row['appat'];
                $apmat=$row['apmat'];
                $publi[] = array("id" => $id_publicacion,
                    "fecha" => $fecha,
                    "descripcion" => $descripcion,
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
ReadData();
?>