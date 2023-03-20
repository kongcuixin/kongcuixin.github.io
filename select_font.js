$(document).ready(function () {
    var html_font = "";
    var html_color_text = "";
    var font_arr = [
        "Font-1-2-25-44-50","Font1-5-6-23-36-55-71-76-BH3","Font2-5-6-23-36-55-71-76-BH3","Font3-5-6-23-36-55-71-76-BH3","Font-7-8-38-46-BH4","Font-1-2-74-BH1","Font-9-10-26-63","Font-13-14-34-61-64","Font-21-29-37-43","Font-15-16-26",
        "Font-1-2-25-44-50","Font-57","Font-80","Font-45-62-65-72","Font-75","Font-3-4-30-33-40-47-52-66-69-77-78-BH2","Font1-5-6-23-36-55-71-76-BH3","Font2-5-6-23-36-55-71-76-BH3","Font-45-62-65",
        "Font-20","Font-21","Font-17-18","Font-19-20-gianthe","Font-19-20-phonthe","Font-19-20"
    ];
    var color_text_arr = [
        "White","Blue","Green","Yellow","Orange","Pink","Gray","Red","Brown","Purple","Black"
    ]
    //Font
    font_arr.forEach((element) => { 
        html_font += `
            <div class="form-check" style="width: 150px; padding-right: 15px">
                <input
                    class="form-check-input"
                    type="radio"
                    name="noto-sans"
                    id="${element}"
                    value="${element}"
                    checked
                />
                <label class="form-check-label" for="${element}">
                ${element}
                </label>
            </div>
        `;

        $(".select-font-china").html(html_font);
    });

    $(".form-check-input").click(function(){
        let element_value = $(this).val();
        $(".box").css("font-family", element_value);
        $(".colorx").css("font-family", element_value);
    })

    //Color text
    color_text_arr.forEach(element => {
        html_color_text += `
        <div class="form-check" style="width: 150px; padding-right: 15px">
            <input
                class="form-check-color"
                type="radio"
                name="color_text"
                id="${element}"
                value="${element}"
                checked
            />
            <label class="form-check-label" for="${element}">
            ${element}
            </label>
        </div>
        `;
        $(".select-color-text").html(html_color_text);
    });

    $(".form-check-color").click(function(){
        let element_value = $(this).val();
        $(".box").css("color", element_value);
        $(".colorx").css("color", element_value);
    })

    //Tăng size chữ
    $("#range_size").click(function(){
        let element_value = $("#range_size").val();
        $(".tang-size-chu").css("font-size", element_value+'px');
        $("#text-size").val(element_value);
    })

    $("#text-size").change(function(){
        let element_value = $("#text-size").val();
        $("#range_size").val(element_value);
        $(".tang-size-chu").css("font-size", element_value+'px');
    })

    $("#range_size_doc_phai").click(function(){
        let element_value = $("#range_size_doc_phai").val();
        $("#btn-doc-phai").val(element_value);
        $('#btn-doc-phai').trigger('change');
    })

    $("#range_size_doc_trai").change(function(){
        let element_value = $("#range_size_doc_trai").val();
        $("#btn-doc-trai").val(element_value)
        $('#btn-doc-trai').trigger('change');
    })

});
