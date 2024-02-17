$(document).ready(function () {
    
    $("#form").submit(function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente el evento submit

        // Capturar el valor del campo de búsqueda con la información ingresada por el usuario
        let valorBusqueda = $("#busqueda").val();

        $("#busqueda").val(""); //Se limpia el valor del input
        
        

        // Validar que solo ingrese números
        let validarNumeros = /^[0-9]+$/;
        if (!validarNumeros.test(valorBusqueda)) {
            alert("Debes ingresar sólo números");
            return;
        }
        
        $.ajax({
            type: "GET",
            url: `https://www.superheroapi.com/api.php/10233251796096420/${valorBusqueda}`,
            dataType: "json",
            success: function (data) {
                if (data.response === "success") { //Diseño de las Cards por superheroe
                    let superHero = `
    <h3 class="text-center bg-success">Super Heroe Encontrado</h3>
    <div class="card bg-primary-subtle">
        <div class="row">
            <div class="col-md-4">
            <img src="${data.image.url}" class="card-img" alt="hero" />
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title bg-warning-subtle">Nombre: ${data.name} </h5>
                <p class="card-text">
                Conexiones:${data.connections["group-affiliation"]}
                </p>
            <ul class="list-group">
                <li class="list-group-item bg-body-secondary">
                    <em>Publicado por </em>: ${data.biography.publisher}
                </li>
                <li class="list-group-item bg-body-secondary">
                    <em>Ocupación: ${data.work.occupation} </em>
                </li>
                <li class="list-group-item bg-body-secondary">
                    <em>Primera Aparición:
                    ${data.biography["first-appearance"]}</em>
                </li>
                <li class="list-group-item bg-body-secondary">
                    <em>Altura: ${data.appearance.height.join(" - ")} </em>
                </li>
                <li class="list-group-item bg-body-secondary">
                    <em>Peso: ${data.appearance.weight.join(" - ")} </em>
                </li>
                <li class="list-group-item bg-body-secondary">
                    <em>Aliases:  ${data.biography.aliases}</em>
                </li>
            </ul>
        </div>
        </div>
        </div>
    </div>            
    `;
        $("#resultado").append(superHero);

    //Diseño de gráficos por con los poderes de cada super heroe

        let poderes = [];
        for (let value in data.powerstats) {
        poderes.push({
            label: value,
            y: parseInt(data.powerstats[value]),
        });
        }

        console.log(poderes);

        let option = {
            title: {
            text: `Estadísticas de Poder para ${data.name}`,
            },
            data: [
            {
            type: "pie",
            startAngle: 45,
            showInLegend: "true",
            legendText: "{label}",
            indexLabel: "{label} ({y})",
            yValueFormatString: "#,##0.#" % "",
            dataPoints: poderes,
            },
            ],
        };

        $("#chartContainer").CanvasJSChart(option);
        } else {
        alert("Debes ingresar un número menor a 732");
        }
    },
                
            
        })
    })
});