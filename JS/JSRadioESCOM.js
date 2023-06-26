function maximo(campo,limite){
    if(campo.value.length>=limite){
        campo.value=campo.value.substring(0,limite);
    }
}
$(function(){
    //variables globales
    var cont1=0;
    var cont2=0;
    var cont3=0;
    var cont4=0;
    var id=0;
    var nombre='';
    var appat='';
    var apmat='';
    var correo='';
    var password='';
    //Cosas que mostrar iniciando sesion
    $('#NuevoForo').hide();
    $('#NuevoMenu').hide();
    $('#NuevoMercado').hide();
    $('#navCloseSesion').hide();
    $('#NombreSesion').hide();
    ///////////////////////////
    $('#iniciarSesion').click(function(){
        correo = $('#correoIS').val();
        password = $('#passwordIS').val();
        $.post('http://localhost:8080/conexion-base/sesion.php',{correo: correo,password: password},null,'json').done(function(response){
            for(var i=0;i<response.length;i++){
                console.log(response);
                id=response[i].id;
                nombre=response[i].nombre;
                appat=response[i].appat;
                apmat=response[i].apmat;
                document.getElementById("correoIS").value = "";
                document.getElementById("passwordIS").value = "";
                $('#NuevoForo').show();
                $('#NuevoMenu').show();
                $('#NuevoMercado').show();
                $('#navCloseSesion').show();
                $('#NombreSesion').show().html("Bienvenido "+nombre);
                $('#sesion').hide();
                $('#inicio').show();
                $('#navSesion').hide();
            }
        });
    });
    $('#Registro').click(function(){
        nombre = $('#nombreR').val();
        appat = $('#appatR').val();
        apmat = $('#apmatR').val();
        correo = $('#correoR').val();
        password = $('#passwordR').val();
        $.post('http://localhost:8080/conexion-base/registro.php',{nombre: nombre,appat: appat,apmat: apmat,correo: correo,password: password},null,'json').done(function(response){
            for(var i=0;i<response.length;i++){
                console.log(response);
                id=response[i].id;
                nombre=response[i].nombre;
                appat=response[i].appat;
                apmat=response[i].apmat;
                document.getElementById("nombreR").value = "";
                document.getElementById("appatR").value = "";
                document.getElementById("apmatR").value = "";
                document.getElementById("correoR").value = "";
                document.getElementById("passwordR").value = "";
                $('#NuevoForo').show();
                $('#NuevoMenu').show();
                $('#NuevoMercado').show();
                $('#navCloseSesion').show();
                $('#NombreSesion').show().html("Bienvenido "+nombre);
                $('#sesion').hide();
                $('#inicio').show();
                $('#navSesion').hide();
            }
        });
    });
    $('#navCloseSesion').click(function(){
        $('#navSesion').show();
        $('#NuevoForo').hide();
        $('#NuevoMenu').hide();
        $('#NuevoMercado').hide();
        $('#navCloseSesion').hide();
        $('#NombreSesion').hide();
        $('#programas').hide();
        $('#noticias').hide();
        $('#foro').hide();
        $('#menu').hide();
        $('#escomercado').hide();
        $('#sesion').hide();
        $('#inicio').show();
        id=0;
        nombre='';
        appat='';
        apmat='';
        correo='';
        password='';
    });
    ////////////////////////////
    //Agrega Publicaciones//
    $('#ForoNuevo').click(function(){
        var descripcion=$('#descripcionForoNuevo').val();
        $.post('http://localhost/conexion-base:8080/nuevaPublicacion.php',{descripcion: descripcion,tipo: 'Foro',id_usuario:id}).done(function(){
            var fecha = new Date().toLocaleDateString();
            var des = $('#descripcionForoNuevo').val();
            document.getElementById("descripcionForoNuevo").value = "";
            var cards=  '<div class="col">'+
                                    '<div class="card h-100">'+
                                        '<input id="prodId" name="prodId" type="hidden" value="'+id+'">'+
                                        '<img src="./assets/ForoLogo.png" class="card-img-top" >'+
                                        '<div class="card-body">'+
                                            '<h5 class="card-title">'+nombre+' '+appat+' '+apmat+'</h5>'+
                                            '<p class="card-text">'+des+'</p>'+
                                        '</div>'+
                                        '<div class="card-footer">'+
                                            '<small class="text-body-secondary">Fecha de creacion '+fecha+'</small>'
                                        '</div>'+
                                    '</div>'+
                                '</div>';
                    $("#SeccionForo").append(cards);
        });  
    });
    $('#MenuNuevo').click(function(){
        var descripcion=$('#descripcionMenuNuevo').val();
        $.post('http://localhost:8080/conexion-base/nuevaPublicacion.php',{descripcion: descripcion,tipo: 'Menu',id_usuario:id}).done(function(){
            var fecha = new Date().toLocaleDateString();
            var des = $('#descripcionMenuNuevo').val();
            document.getElementById("descripcionMenuNuevo").value = "";
            var cards=  '<div class="col">'+
                                    '<div class="card h-100">'+
                                        '<input id="prodId" name="prodId" type="hidden" value="'+id+'">'+
                                        '<img src="./assets/MenuLogo.png" class="card-img-top" >'+
                                        '<div class="card-body">'+
                                            '<h5 class="card-title">'+nombre+' '+appat+' '+apmat+'</h5>'+
                                            '<p class="card-text">'+des+'</p>'+
                                        '</div>'+
                                        '<div class="card-footer">'+
                                            '<small class="text-body-secondary">Fecha de creacion '+fecha+'</small>'
                                        '</div>'+
                                    '</div>'+
                                '</div>';
                    $("#SeccionMenu").append(cards);
        });  
    });
    $('#MercadoNuevo').click(function(){
        var descripcion=$('#descripcionMercadoNuevo').val();
        $.post('http://localhost:8080/conexion-base/nuevaPublicacion.php',{descripcion: descripcion,tipo: 'Mercado',id_usuario:id}).done(function(){
            var fecha = new Date().toLocaleDateString();
            var des = $('#descripcionMercadoNuevo').val();
            document.getElementById("descripcionMercadoNuevo").value = "";
            var cards=  '<div class="col">'+
                                    '<div class="card h-100">'+
                                        '<input id="prodId" name="prodId" type="hidden" value="'+id+'">'+
                                        '<img src="./assets/ESCOMercadologo.png" class="card-img-top" >'+
                                        '<div class="card-body">'+
                                            '<h5 class="card-title">'+nombre+' '+appat+' '+apmat+'</h5>'+
                                            '<p class="card-text">'+des+'</p>'+
                                        '</div>'+
                                        '<div class="card-footer">'+
                                            '<small class="text-body-secondary">Fecha de creacion '+fecha+'</small>'
                                        '</div>'+
                                    '</div>'+
                                '</div>';
                    $("#SeccionMercado").append(cards);
        });  
    });
    ///////////////////////////////
    $('#programas').hide();
    $('#noticias').hide();
    $('#foro').hide();
    $('#menu').hide();
    $('#escomercado').hide();
    $('#sesion').hide();
    $('#inicio').show();
    $('#navPrincipal').click(function(){
        $('#programas').hide();
        $('#noticias').hide();
        $('#foro').hide();
        $('#menu').hide();
        $('#escomercado').hide();
        $('#sesion').hide();
        $('#inicio').show();
    });
    $('#navProgramas').click(function(){
        $('#programas').show();
        $('#noticias').hide();
        $('#foro').hide();
        $('#menu').hide();
        $('#escomercado').hide();
        $('#sesion').hide();
        $('#inicio').hide();
        
    });
    $('#navNoticias').click(function(){
        $('#programas').hide();
        $('#noticias').show();
        $('#foro').hide();
        $('#menu').hide();
        $('#escomercado').hide();
        $('#sesion').hide();
        $('#inicio').hide();
        if (cont1==0) {
            $.post('http://localhost:8080/conexion-base/pedirPublicacion.php',{data:'Noticias'},null,'json').done(function(response){
                for(var i=0;i<response.length;i++){
                    var id =response[i].id;
                    var fecha = response[i].fecha.date.split(' ');
                    var descripcion =response[i].descripcion;
                    var nombre=response[i].nombre;
                    var appat=response[i].appat;
                    var apmat=response[i].apmat;
                    var cards=  '<div class="col">'+
                                    '<div class="card h-100">'+
                                        '<input id="prodId" name="prodId" type="hidden" value="'+id+'">'+
                                        '<img src="./assets/Noticias Logo.png" class="card-img-top" >'+
                                        '<div class="card-body">'+
                                            '<h5 class="card-title">'+nombre+' '+appat+' '+apmat+'</h5>'+
                                            '<p class="card-text">'+descripcion+'</p>'+
                                        '</div>'+
                                        '<div class="card-footer">'+
                                            '<small class="text-body-secondary">Fecha de creacion '+fecha[0]+'</small>'
                                        '</div>'+
                                    '</div>'+
                                '</div>';
                    $("#SeccionNoticias").append(cards);
                }
                cont1=1;
            });
        }
    });
    $('#navForo').click(function(){
        $('#programas').hide();
        $('#noticias').hide();
        $('#foro').show();
        $('#menu').hide();
        $('#escomercado').hide();
        $('#sesion').hide();
        $('#inicio').hide();
        if (cont2==0) {
            $.post('http://localhost:8080/conexion-base/pedirPublicacion.php',{data:'Foro'},null,'json').done(function(response){
                for(var i=0;i<response.length;i++){
                    var id =response[i].id;
                    var fecha = response[i].fecha.date.split(' ');
                    var descripcion =response[i].descripcion;
                    var nombre=response[i].nombre;
                    var appat=response[i].appat;
                    var apmat=response[i].apmat;
                    var cards=  '<div class="col">'+
                                    '<div class="card h-100">'+
                                        '<input id="prodId" name="prodId" type="hidden" value="'+id+'">'+
                                        '<img src="./assets/ForoLogo.png" class="card-img-top" >'+
                                        '<div class="card-body">'+
                                            '<h5 class="card-title">'+nombre+' '+appat+' '+apmat+'</h5>'+
                                            '<p class="card-text">'+descripcion+'</p>'+
                                        '</div>'+
                                        '<div class="card-footer">'+
                                            '<small class="text-body-secondary">Fecha de creacion '+fecha[0]+'</small>'
                                        '</div>'+
                                    '</div>'+
                                '</div>';
                    $("#SeccionForo").append(cards);
                }
                cont2=1;
            });
        }
    });
    $('#navMenu').click(function(){
        $('#programas').hide();
        $('#noticias').hide();
        $('#foro').hide();
        $('#menu').show();
        $('#escomercado').hide();
        $('#sesion').hide();
        $('#inicio').hide();
        if (cont3==0) {
            $.post('http://localhost:8080/conexion-base/pedirPublicacion.php',{data:'Menu'},null,'json').done(function(response){
                for(var i=0;i<response.length;i++){
                    var id =response[i].id;
                    var fecha = response[i].fecha.date.split(' ');
                    var descripcion =response[i].descripcion;
                    var nombre=response[i].nombre;
                    var appat=response[i].appat;
                    var apmat=response[i].apmat;
                    var cards=  '<div class="col">'+
                                    '<div class="card h-100">'+
                                        '<input id="prodId" name="prodId" type="hidden" value="'+id+'">'+
                                        '<img src="./assets/MenuLogo.png" class="card-img-top" >'+
                                        '<div class="card-body">'+
                                            '<h5 class="card-title">'+nombre+' '+appat+' '+apmat+'</h5>'+
                                            '<p class="card-text">'+descripcion+'</p>'+
                                        '</div>'+
                                        '<div class="card-footer">'+
                                            '<small class="text-body-secondary">Fecha de creacion '+fecha[0]+'</small>'
                                        '</div>'+
                                    '</div>'+
                                '</div>';
                    $("#SeccionMenu").append(cards);
                }
                cont3=1;
            });
        }
    });
    $('#navEscomercado').click(function(){
        $('#programas').hide();
        $('#noticias').hide();
        $('#foro').hide();
        $('#menu').hide();
        $('#escomercado').show();
        $('#sesion').hide();
        $('#inicio').hide();
        if (cont4==0) {
            $.post('http://localhost:8080/conexion-base/pedirPublicacion.php',{data:'Mercado'},null,'json').done(function(response){
                for(var i=0;i<response.length;i++){
                    var id =response[i].id;
                    var fecha = response[i].fecha.date.split(' ');
                    var descripcion =response[i].descripcion;
                    var nombre=response[i].nombre;
                    var appat=response[i].appat;
                    var apmat=response[i].apmat;
                    var cards=  '<div class="col">'+
                                    '<div class="card h-100">'+
                                        '<input id="prodId" name="prodId" type="hidden" value="'+id+'">'+
                                        '<img src="./assets/ESCOMercadologo.png" class="card-img-top" >'+
                                        '<div class="card-body">'+
                                            '<h5 class="card-title">'+nombre+' '+appat+' '+apmat+'</h5>'+
                                            '<p class="card-text">'+descripcion+'</p>'+
                                        '</div>'+
                                        '<div class="card-footer">'+
                                            '<small class="text-body-secondary">Fecha de creacion '+fecha[0]+'</small>'
                                        '</div>'+
                                    '</div>'+
                                '</div>';
                    $("#SeccionMercado").append(cards);
                }
            cont4=1;
            });
        }
    });
    $('#navSesion').click(function(){
        $('#programas').hide();
        $('#noticias').hide();
        $('#foro').hide();
        $('#menu').hide();
        $('#escomercado').hide();
        $('#sesion').show();
        $('#inicio').hide();
    });
    $('#navProgramas1').click(function(){
        $('#programas').show();
        $('#noticias').hide();
        $('#foro').hide();
        $('#menu').hide();
        $('#escomercado').hide();
        $('#sesion').hide();
        $('#inicio').hide();
    });
    $('#navNoticias1').click(function(){
        $('#programas').hide();
        $('#noticias').show();
        $('#foro').hide();
        $('#menu').hide();
        $('#escomercado').hide();
        $('#sesion').hide();
        $('#inicio').hide();
        if (cont1==0) {
            $.post('http://localhost:8080/conexion-base/pedirPublicacion.php',{data:'Noticias'},null,'json').done(function(response){
                for(var i=0;i<response.length;i++){
                    var id =response[i].id;
                    var fecha = response[i].fecha.date.split(' ');
                    var descripcion =response[i].descripcion;
                    var nombre=response[i].nombre;
                    var appat=response[i].appat;
                    var apmat=response[i].apmat;
                    var cards=  '<div class="col">'+
                                    '<div class="card h-100">'+
                                        '<input id="prodId" name="prodId" type="hidden" value="'+id+'">'+
                                        '<img src="./assets/Noticias Logo.png" class="card-img-top" >'+
                                        '<div class="card-body">'+
                                            '<h5 class="card-title">'+nombre+' '+appat+' '+apmat+'</h5>'+
                                            '<p class="card-text">'+descripcion+'</p>'+
                                        '</div>'+
                                        '<div class="card-footer">'+
                                            '<small class="text-body-secondary">Fecha de creacion '+fecha[0]+'</small>'
                                        '</div>'+
                                    '</div>'+
                                '</div>';
                    $("#SeccionNoticias").append(cards);
                }
                cont1=1;
            });
        }
    });
    $('#navForo1').click(function(){
        $('#programas').hide();
        $('#noticias').hide();
        $('#foro').show();
        $('#menu').hide();
        $('#escomercado').hide();
        $('#sesion').hide();
        $('#inicio').hide();
        if (cont2==0) {
            $.post('http://localhost:8080/conexion-base/pedirPublicacion.php',{data:'Foro'},null,'json').done(function(response){
                for(var i=0;i<response.length;i++){
                    var id =response[i].id;
                    var fecha = response[i].fecha.date.split(' ');
                    var descripcion =response[i].descripcion;
                    var nombre=response[i].nombre;
                    var appat=response[i].appat;
                    var apmat=response[i].apmat;
                    var cards=  '<div class="col">'+
                                    '<div class="card h-100">'+
                                        '<input id="prodId" name="prodId" type="hidden" value="'+id+'">'+
                                        '<img src="./assets/ForoLogo.png" class="card-img-top" >'+
                                        '<div class="card-body">'+
                                            '<h5 class="card-title">'+nombre+' '+appat+' '+apmat+'</h5>'+
                                            '<p class="card-text">'+descripcion+'</p>'+
                                        '</div>'+
                                        '<div class="card-footer">'+
                                            '<small class="text-body-secondary">Fecha de creacion '+fecha[0]+'</small>'
                                        '</div>'+
                                    '</div>'+
                                '</div>';
                    $("#SeccionForo").append(cards);
                }
                cont2=1;
            });
        }
    });
    $('#navMenu1').click(function(){
        $('#programas').hide();
        $('#noticias').hide();
        $('#foro').hide();
        $('#menu').show();
        $('#escomercado').hide();
        $('#sesion').hide();
        $('#inicio').hide();
        if (cont3==0) {
            $.post('http://localhost:8080/conexion-base/pedirPublicacion.php',{data:'Menu'},null,'json').done(function(response){
                for(var i=0;i<response.length;i++){
                    var id =response[i].id;
                    var fecha = response[i].fecha.date.split(' ');
                    var descripcion =response[i].descripcion;
                    var nombre=response[i].nombre;
                    var appat=response[i].appat;
                    var apmat=response[i].apmat;
                    var cards=  '<div class="col">'+
                                    '<div class="card h-100">'+
                                        '<input id="prodId" name="prodId" type="hidden" value="'+id+'">'+
                                        '<img src="./assets/MenuLogo.png" class="card-img-top" >'+
                                        '<div class="card-body">'+
                                            '<h5 class="card-title">'+nombre+' '+appat+' '+apmat+'</h5>'+
                                            '<p class="card-text">'+descripcion+'</p>'+
                                        '</div>'+
                                        '<div class="card-footer">'+
                                            '<small class="text-body-secondary">Fecha de creacion '+fecha[0]+'</small>'
                                        '</div>'+
                                    '</div>'+
                                '</div>';
                    $("#SeccionMenu").append(cards);
                }
                cont3=1;
            });
        }
    });
    $('#navEscomercado1').click(function(){
        $('#programas').hide();
        $('#noticias').hide();
        $('#foro').hide();
        $('#menu').hide();
        $('#escomercado').show();
        $('#sesion').hide();
        $('#inicio').hide();
        if (cont4==0) {
            $.post('http://localhost:8080/conexion-base/pedirPublicacion.php',{data:'Mercado'},null,'json').done(function(response){
                for(var i=0;i<response.length;i++){
                    var id =response[i].id;
                    var fecha = response[i].fecha.date.split(' ');
                    var descripcion =response[i].descripcion;
                    var nombre=response[i].nombre;
                    var appat=response[i].appat;
                    var apmat=response[i].apmat;
                    var cards=  '<div class="col">'+
                                    '<div class="card h-100">'+
                                        '<input id="prodId" name="prodId" type="hidden" value="'+id+'">'+
                                        '<img src="./assets/ESCOMercadologo.png" class="card-img-top" >'+
                                        '<div class="card-body">'+
                                            '<h5 class="card-title">'+nombre+' '+appat+' '+apmat+'</h5>'+
                                            '<p class="card-text">'+descripcion+'</p>'+
                                        '</div>'+
                                        '<div class="card-footer">'+
                                            '<small class="text-body-secondary">Fecha de creacion '+fecha[0]+'</small>'
                                        '</div>'+
                                    '</div>'+
                                '</div>';
                    $("#SeccionMercado").append(cards);
                }
            cont4=1;
            });
        }
    });
});