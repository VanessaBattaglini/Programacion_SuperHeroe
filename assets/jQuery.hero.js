jQuery.fn.hero = (function () {
    
    $.ajax({
        type: "GET",
        url: "https://www.superheroapi.com/api.php/10233251796096420/1",
        dataType: "json",
        success: function (data) {
            HTMLFormControlsCollection.log('La carga ha sido exitosa', data)
        },
        error: function (error) {
            console.log('Información no validada correctamente', error)
        },

    })

});
    
