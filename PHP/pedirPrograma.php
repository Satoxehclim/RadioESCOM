<?php
include_once("Cconexion.php");
function ReadDataProgramas(){
    try{            
        $conn = OpenConnection();
        $tsql = "EXEC Programas;";
        $getProducts = sqlsrv_query($conn, $tsql);
        if ($getProducts == FALSE)
            die(FormatErrors(sqlsrv_errors()));
        while($row = sqlsrv_fetch_array($getProducts, SQLSRV_FETCH_ASSOC)){
            $id_programa=$row['id_programa'];
            $programa=$row['programa'];
            $publi[] = array("id" => $id_programa,
                "programa" => $programa);
        }
        echo json_encode($publi);
        sqlsrv_free_stmt($getProducts);
        sqlsrv_close($conn);
    }catch(Exception $e){
        echo("Error!");
    }
}
ReadDataProgramas();
?>