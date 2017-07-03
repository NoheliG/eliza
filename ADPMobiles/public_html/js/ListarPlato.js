var app = {
    // Application Constructor
    initialize: function () {
        $(document).ready(function () {
//    $("#btnMenun").click(function () {
            var data = {};
            $.ajax({
                url: 'http://www.adpeat.pe.hu/prueba2/Vista/ListarPlatos.php',
                data: data,
                async: true,
                method: 'post',
                dataType: 'json',
                success: function (json) {
                    console.log(JSON.stringify(json.Data));
                    var trHTML = '';
                    $.each(json.Data, function (posicion, valor) {
                        trHTML += '<tr><td>' + valor.id_plato + '</td><td>' + valor.nombre_plato + '</td><td>' + valor.precio + '</td>\n\
                                <td><button  type = "button" onclick="eliminar(' + valor.id_plato + ')">Eliminar</button></td>\n\
                                <td><a href="editarPlato.php?id=' + valor.id_plato + '" id=' + valor.id_plato + '><button  type = "button" >Editar</button></a></td></tr>';
                    });
                    $('#tablajson').append(trHTML);
                },
                error: function (error) { }
            });
//    });
        });
    },

};
app.initialize();
function eliminar(id) {
    var data = {id_plato: id};
    alert(id);
    $.ajax({
        url: 'http://www.adpeat.pe.hu/prueba2/Vista/eliminarplato.php',
        data: data,
        method: 'post',
        dataType: 'json',
        success: function (json) {
            console.log(JSON.stringify(json.Data));
            alert("eliminado");
            location.href = "categoria.php";
        },
        error: function (error) {
            alert("seleccione registro");
        }
    });
}