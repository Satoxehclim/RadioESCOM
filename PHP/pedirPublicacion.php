<?php
include_once("Cconexion.php");
function ReadData()
    {
        try
        {
            $conn = OpenConnection();
            $tsql = "EXEC Sesion @correo='xehclim1@gmail.com',@password='DaftPunk';";
            $getProducts = sqlsrv_query($conn, $tsql);
            if ($getProducts == FALSE)
                die(FormatErrors(sqlsrv_errors()));
            $productCount = 0;
            while($row = sqlsrv_fetch_array($getProducts, SQLSRV_FETCH_ASSOC))
            {
                echo($row['nombre']);
                echo("<br/>");
                $productCount++;
            }
            sqlsrv_free_stmt($getProducts);
            sqlsrv_close($conn);
        }
        catch(Exception $e)
        {
            echo("Error!");
        }
    }
    ReadData();
?>