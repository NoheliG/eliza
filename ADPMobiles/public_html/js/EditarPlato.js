 function getParameterByName(name) {
                name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                        results = regex.exec(location.search);
                return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
            }
            var id = getParameterByName('id');
            function inicio() {
                document.getElementById("id_plato").value = id;
            }
            window.onload = inicio;
            
            var app = {
    // Application Constructor
    initialize: function () {

        $(document).ready(function () {

            var data = {id_plato: id};
            $.ajax({
                url: 'http://www.adpeat.pe.hu/prueba2/Vista/listarPlatoID.php',
                data: data,
                async: true,
                method: 'post',
                dataType: 'json',
                success: function (json) {
                    console.log(JSON.stringify(json.Data));
                    $.each(json.Data, function (posicion, valor) {
                        document.form.nombre_plato.value = valor.nombre_plato;
                        document.form.descrip_plato.value = valor.descrip_plato;
                        document.form.precio.value = valor.precio;
                        document.form.stock.value = valor.stock;
                    });
                }

            })
        })
    },

};

app.initialize();

$(document).ready(function () {
    $("#guardar").click(function () {
        var id = $("#id_plato").val();
        var nombre_plato = $("#nombre_plato").val();
        var descrip_plato = $("#descrip_plato").val();
        var precio = $("#precio").val();
        var stock = $("#stock").val();


        if (nombre_plato == '' || descrip_plato == '' || precio == '' || stock == '') {
            alert("campos vacios");

        } else {
            var data = {id_plato: id, nombre_plato: nombre_plato, descrip_plato: descrip_plato, precio: precio, stock: stock};
            $.ajax({
                url: 'http://www.adpeat.pe.hu/prueba2/Vista/actualizarPlato.php',
                data: data,
                async: true,
                method: 'post',
                dataType: 'json',
                success: function (json) {
                    console.log(JSON.stringify(json.Data));
                    alert("Datos actualizados ");
                    location.href = "categoria.php";
                },
                error: function (error) {
                    alert("error datos");
                }
            });
        }
    });
});