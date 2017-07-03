<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="format-detection" content="telephone=no">
        <meta name="msapplication-tap-highlight" content="no">
        <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">
        <link rel="stylesheet" type="text/css" href="css/index.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
        <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
        <script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>

        <title>Adomicilio Eat</title>
    </head>
    <body>
        <div data-role="page">
            <div data-role="header">
                <a href="categoria.php" data-inline="true" style="color: #df2727; width:330px; padding-bottom: 20px; padding-top: 20px; font-size: 20px;" data-role="button" class="ui-btn ui-icon-arrow-l ui-btn-icon-left">ACTUALIZAR DATOS PLATILLO</a>
            </div>
             <form class="form" id="form1" name ="form1">
                    <input class="inp" style="display:none" id="id_plato" type="text" name="id_plato" value="" />
                </form>
            <div  class="app" data-role="main" class="ui-content" style="margin-top: 100px; color:white; margin-left: 10px;" >

                <form class="form" id="form" name="form" action="#" method="post">
                    
                    <label id="texto">Nombre</label>
                    <input class="inp" style=" width: 360px;" id="nombre_plato" type="text" maxlength="20" name="nombre_plato" value=""/>
                    <label id="texto">Desripci&oacute;n</label>
                    <input class="inp" style=" width: 360px;" id="descrip_plato" type="text" maxlength="35" name="descrip_plato" value=""/>
                    <label id="texto">Precio</label> 
                    <input class="inp" style=" width: 360px;" id="precio" type="number" name="precio" oninput="if(value.length>2)value=value.slice(0,2)" value=""/>
                    <label id="texto">Stock</label><br/>
                    <input type="number" style=" width: 360px;" class="inp" id="stock" oninput="if(value.length>2)value=value.slice(0,2)" name="stock" value="">               
                    <div class="btn1"  style="float: none; width: 300px; margin-left: 30px;">       
                        <a data-inline="true" class="ui-btn" name="guardar" id="guardar" style=" float: none; margin-bottom: 10px">GUARDAR</a>     
                    </div>
                </form>
            </div>
            <script type="text/javascript" src="js/EditarPlato.js"></script>
        </div>
    </body>
</html>