
$("#boton").on("click", leerApi);

        function leerApi() {
            alert('Solicitando datos de BCRA...');

            $.ajax({
                url: 'https://api.estadisticasbcra.com/uva',
                type: 'GET',
                data:{d: "2021-01-10"},
                // tipo de autorizacion, 'Bearer'  y token del BCRA
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', 'Bearer YOURAPI_KEY');
                },

                success: function (res) {

                    // res en la consola, para debug.
                    console.log(res);

                    var listaAPI = $("#lista-api");

                    $.each(res, function (index, miembro) {
                        listaAPI.append(
                            '<div>' +
                            '<p>' + 'Fecha Cotizacion: ' + miembro.d + '<br>' +
                            'Importe: $ ' + miembro.v + '<br>' +
                            '<br>' + '______________________________________' +
                            '</div>'
                        );
                    });
                }, //fin function res

                error: function () {
                    alert("Hubo un error");
                    console.log("Hubo un error al leer la API");
                }

            });
        }