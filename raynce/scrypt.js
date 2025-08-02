$(document).ready(function () {
    $("form").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: 'form-handler.php',
            data: formNm.serialize(),
            success: function (data) {
                // Вывод текста результата отправки
               $(formNm).html(data);
               
               
               
            },
            error: function () {
                $(formNm).html(error); 
                
               
            }
        });
        return false;
    });
});
$('#formmain')[0].reset();