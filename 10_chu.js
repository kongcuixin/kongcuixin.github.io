$(document).ready(function () {
    
    $("#success-alert").hide();
    $('.btn-10-chu').click(function (e) { 
        e.preventDefault();
        var text_one = $("#input_text_10_1").val();
        var text_two = $("#input_text_10_2").val();
        var arr_text_10_1 = text_one.split('')
        var arr_text_10_2 = text_two.split('')



        if (text_one != "" && text_two != ""){
            $('.ok1').removeClass("d-none");
            $('.ok').remove()
            let html = ''
            let html1 = ''
            arr_text_10_1.forEach(element => {
                html += `<div class="row ok resert-css-mg-pd"><p class="tang-size-chu resert-css-mg-pd" style="font-size: 54px;">${element}</p></div>`;
            });
            arr_text_10_2.forEach(element => {
                html1 += `<div class="row ok resert-css-mg-pd"><p class="tang-size-chu resert-css-mg-pd" style="font-size: 54px;">${element}</p></div>`;
            });
            $(".content-10-1").html(html)
            $(".content-10-2").html(html1)
        }
        if (text_one != "" && text_two == ""){
            $('.ok').remove()
            $('.ok1').addClass("d-none");
            let html = ''
            arr_text_10_1.forEach(element => {
                console.log(element)
                html += `<div class="row ok resert-css-mg-pd"><p class="tang-size-chu text-center resert-css-mg-pd" style="font-size: 54px;">${element}</p></div>`;
            });
            $(".content-10-1").html(html)
        }
    });

    $(".download-img").click(function () {
        $("#success-alert").show();
        domtoimage.toBlob(this).then(function (blob) {
            window.saveAs(blob, "image.jpg");
            $("#success-alert").hide();
        });
    });
})