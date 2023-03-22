$(document).ready(function () {
    //=========Dịch=========
    $(".btn-generate").click(function () {
        let name = $("#input_text_header").val();
        let translate = "";
        //Translate API
        var urlAPI = `https://api.mymemory.translated.net/get?q=${name}&langpair=vi|zh`;
        fetch(urlAPI)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                translate = data.responseData.translatedText;
                $("#input_text").val(translate);
            });
    });
    //======================
    $("#success-alert").hide();
    list_images = "";
    var background_arr = [];

    //Thêm hình ảnh và gán id
    var background_arrs = localStorage.getItem("img");
    var background_arrs_obj = JSON.parse(background_arrs);

    var count_id_img = [];
    count_id = 0;
    if (background_arrs_obj != null) {
        background_arrs_obj.forEach((element) => {
            count_id_img.push((count_id += 1));
        });
    }
    console.log(count_id_img);
    x = -1;

    if (background_arrs_obj != null) {
        background_arrs_obj.forEach((element) => {
            list_images += `
                <div class="col-sm-6 col-lg-2">
                    <div class="row">
                        <img class="mt-3" src="${element["image"]}" id="bg${
                count_id_img[x + 1]
            }" alt="Background" style="width: 157px; height: 157px; padding: 0px; margin: 0 auto;">   
                    </div>
                    <div class="row">
                        <button class="btn-remove-img btn btn-outline-secondary mt-2" style="width: 100px; margin: 0 auto;" id="${
                            count_id_img[x + 1]
                        }">Xóa</button>
                    </div>
                </div>
              `;
            $(".list-images").html(list_images);
            x += 1;
        });
    }

    //Remove hình ảnh
    $(".btn-remove-img").click(function (e) {
        let id = $(this).attr("id");
        let element = id - 1;
        console.log(element);
        background_arrs_obj.splice(element, 1);
        localStorage.setItem("img", JSON.stringify(background_arrs_obj));
        location.reload();
    });

    const image_input = document.querySelector("#image-input");
    image_input.addEventListener("change", function () {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            const uploaded_image = reader.result;
            var data = {
                image: uploaded_image,
            };
            background_arr.push(data);

            var img_get = localStorage.getItem("img");
            img = JSON.parse(img_get);
            if (img == null) {
                localStorage.setItem("img", JSON.stringify(background_arr));
            } else {
                img.push(data);
                localStorage.setItem("img", JSON.stringify(img));
            }
            location.reload();
        });
        reader.readAsDataURL(this.files[0]);
    });

    //===========================

    //Get id image, gán chữ và show hình ảnh con dấu
    var string_text_arr = [];
    $("img").click(function (e) {
        e.preventDefault();
        src_img = $(this).attr("src");
        $(".box")
            .css("background", `url(${src_img})`)
            .css("background-size", "cover")
            .css("background-size", "fixed")
            .css("background-repeat", "no-repeat");

        // Format text
        let text = $("#input_text").val();
        let length_text = text.length;
        var string_text = "";
        for (var i = 0; i < length_text; i++) {
            string_text += " " + text.charAt(i);
        }
        string_text_arr = string_text.split(" ");
        string_text_arr.shift();
 // Enhance text quality
    $(".box").css("text-shadow", "2px 2px #000");
        // Xắp xếp
        if (string_text_arr.length == 4) {
            //Hiden
            console.log("hello");
            $(".box-2-2").addClass("d-none");
            $(".box-1-1").removeClass("d-none");
            $(".box-3-3").addClass("d-none");

            //Render text
            $(".box1-1").html(`${string_text_arr[0]}`);
            $(".box1-2").html(`${string_text_arr[1]}`);
            $(".box1-3").html(`${string_text_arr[2]}`);
            $(".box1-4").html(`${string_text_arr[3]}`);

            $(".box1-4-1").html(`${string_text_arr[2]}`);
            $(".box1-4-2").html(`${string_text_arr[0]}`);
            $(".box1-4-3").html(`${string_text_arr[3]}`);
            $(".box1-4-4").html(`${string_text_arr[1]}`);
        }
        if (string_text_arr.length == 3) {
            $(".box-1-1").addClass("d-none");
            $(".box-2-2").addClass("d-none");
            $(".box-3-3").removeClass("d-none");

            $(".box-text-3-1-1").html(`${string_text_arr[0]}`);
            $(".box-text-3-1-2").html(`${string_text_arr[1]}`);
            $(".box-text-3-1-3").html(`${string_text_arr[2]}`);

            $(".box-text-3-2-3").html(`${string_text_arr[2]}`);
            $(".box-text-3-2-1").html(`${string_text_arr[0]}`);
            $(".box-text-3-2-2").html(`${string_text_arr[1]}`);

            $(".box-text-3-3-1").html(`${string_text_arr[0]}`);
            $(".box-text-3-3-2").html(`${string_text_arr[1]}`);
            $(".box-text-3-3-3").html(`${string_text_arr[2]}`);

            $(".box-text-3-4-2").html(`${string_text_arr[1]}`);
            $(".box-text-3-4-3").html(`${string_text_arr[2]}`);
            $(".box-text-3-4-1").html(`${string_text_arr[0]}`);

            $(".box-text-3-5-1").html(`${string_text_arr[0]}`);
            $(".box-text-3-5-2").html(`${string_text_arr[1]}`);
            $(".box-text-3-5-3").html(`${string_text_arr[2]}`);

            $(".box-text-3-6-1").html(`${string_text_arr[0]}`);
            $(".box-text-3-6-2").html(`${string_text_arr[2]}`);
            $(".box-text-3-6-3").html(`${string_text_arr[1]}`);

            $(".box-text-3-7-1").html(`${string_text_arr[0]}`);
            $(".box-text-3-7-2").html(`${string_text_arr[1]}`);
            $(".box-text-3-7-3").html(`${string_text_arr[2]}`);

            $(".box-text-3-8-1").html(`${string_text_arr[0]}`);
            $(".box-text-3-8-2").html(`${string_text_arr[1]}`);
            $(".box-text-3-8-3").html(`${string_text_arr[2]}`);
        }
        if (string_text_arr.length == 2) {
            //Hiden
            $(".box-1-1").addClass("d-none");
            $(".box-3-3").addClass("d-none");
            $(".box-2-2").removeClass("d-none");

            console.log(string_text_arr);

            $(".box-text-2-1-1").html(`${string_text_arr[0]}`);
            $(".box-text-2-1-2").html(`${string_text_arr[1]}`);

            $(".box-text-2-2-2").html(`${string_text_arr[1]}`);
            $(".box-text-2-2-1").html(`${string_text_arr[0]}`);

            $(".box-text-2-3-1").html(`${string_text_arr[0]}`);
            $(".box-text-2-3-2").html(`${string_text_arr[1]}`);
        }
        if (string_text_arr.length == 1) {
            console.log("=====>1");
        }
        if (string_text_arr.length > 4) {
            console.log("=====>>4");
            $(".box1-1").html(``);
            $(".box1-2").html(``);
            $(".box1-3").html(``);
            $(".box1-4").html(``);

            $(".box1-4-1").html(``);
            $(".box1-4-2").html(``);
            $(".box1-4-3").html(``);
            $(".box1-4-4").html(``);
        }
    });
    //================download images==========
    $(".download-img").click(function () {
        $("#success-alert").show();
        domtoimage.toBlob(this).then(function (blob) {
            window.saveAs(blob, "image.jpg");
            $("#success-alert").hide();
        });
    });

    //===============Resert value=============
    $(".chon-chu").click(function(){
        $("#btn-doc-phai").val(0);
        $("#btn-doc-trai").val(0);
    })
    $(".chon-con-dau").click(function(){
        $("#btn-doc-phai").val(0);
        $("#btn-doc-trai").val(0);
    })

    //====================Dịch chuyển chữ trong khung 4,3,2,1==============
    
    $("#btn-doc-phai").change(function () {
        var chon_chu = $(".chon-chu").val();
        var chon_con_dau = $(".chon-con-dau").val();
        //1
        if(chon_chu == "1" && chon_con_dau == "1"){
            let element_value = $("#btn-doc-phai").val();
            if (string_text_arr.length == 4){
                $("div.hinh-1 > div > div > div > div > p.chu-1").css("margin-right", element_value + "px")
            }
            if (string_text_arr.length == 3){
                $("div.hinh-1 > div > div > div > p.chu-1").css("margin-right", element_value + "px")
            }
            if (string_text_arr.length == 2){
                $("div.hinh-1 > div > div > div > p.chu-1").css("margin-right", element_value + "px")
            }
            
        }
        if(chon_chu == "2" && chon_con_dau == "1"){
            let element_value = $("#btn-doc-phai").val();
            if (string_text_arr.length == 4){
                $("div.hinh-1 > div > div > div > div > p.chu-2").css("margin-right", element_value + "px")
            }
            if (string_text_arr.length == 3){
                $("div.hinh-1 > div > div > div > div > div > p.chu-2").css("margin-right", element_value + "px")
            }
            if (string_text_arr.length == 2){
                $("div.hinh-1 > div > div > div > p.chu-2").css("margin-right", element_value + "px")
            }
            
        }
        if(chon_chu == "3" && chon_con_dau == "1"){
            let element_value = $("#btn-doc-phai").val();
            
            if (string_text_arr.length == 3){
                $("div.hinh-1 > div > div > div > div > div > p.chu-3").css("margin-right", element_value + "px")
            }
            if (string_text_arr.length == 4){
                $("div.hinh-1 > div > div > div > div > p.chu-3").css("margin-right", element_value + "px")
            }
            
        }
        if(chon_chu == "4" && chon_con_dau == "1"){
            let element_value = $("#btn-doc-phai").val();
            if (string_text_arr.length == 4){
                $("div.hinh-1 > div > div > div > div > p.chu-4").css("margin-right", element_value + "px")
            }
            
        }

        //2
        if(chon_chu == "1" && chon_con_dau == "2"){
            let element_value = $("#btn-doc-phai").val();
            if (string_text_arr.length == 4){
                $("div.hinh-2 > div > div > div > div > p.chu-1").css("margin-right", element_value + "px")
            }
            if (string_text_arr.length == 3){
                $("div.hinh-2 > div > div > div > p.chu-1").css("margin-right", element_value + "px")
            }
            if (string_text_arr.length == 2){
                $("div.hinh-2 > div > div > div > p.chu-1").css("margin-right", element_value + "px")
            }
            
        }
        if(chon_chu == "2" && chon_con_dau == "2"){
            let element_value = $("#btn-doc-phai").val();
            if (string_text_arr.length == 4){
                $("div.hinh-2 > div > div > div > div > p.chu-2").css("margin-right", element_value + "px")
            }
            if (string_text_arr.length == 3){
                $("div.hinh-2 > div > div > div > div > div > p.chu-2").css("margin-right", element_value + "px")
            }
            if (string_text_arr.length == 2){
                $("div.hinh-2 > div > div > div > p.chu-2").css("margin-right", element_value + "px")
            }
            
        }
        if(chon_chu == "3" && chon_con_dau == "2"){
            let element_value = $("#btn-doc-phai").val();
            if (string_text_arr.length == 4){
                $("div.hinh-2 > div > div > div > div > p.chu-3").css("margin-right", element_value + "px")
            }
            if (string_text_arr.length == 3){
                $("div.hinh-2 > div > div > div > div > div > p.chu-3").css("margin-right", element_value + "px")
            }
            
        }
        if(chon_chu == "4" && chon_con_dau == "2"){
            let element_value = $("#btn-doc-phai").val();
            if (string_text_arr.length == 4){
                $("div.hinh-2 > div > div > div > div > p.chu-4").css("margin-right", element_value + "px")
            }
            
            
        }

        //3
        if(chon_chu == "1" && chon_con_dau == "3"){
            let element_value = $("#btn-doc-phai").val();
            if (string_text_arr.length == 2){
                $("div.hinh-3 > div > div > div > p.chu-1").css("margin-right", element_value + "px")
            }
            if (string_text_arr.length == 3){
                $("div.hinh-3 > div > div > div > div > div > p.chu-1").css("margin-right", element_value + "px")
            }
            
        }
        if(chon_chu == "2" && chon_con_dau == "3"){
            let element_value = $("#btn-doc-phai").val();
            if (string_text_arr.length == 2){
                $("div.hinh-3 > div > div > div > p.chu-2").css("margin-right", element_value + "px")
            }
            if (string_text_arr.length == 3){
                $("div.hinh-3 > div > div > div > div > div > p.chu-2").css("margin-right", element_value + "px")
            }
            
        }
        if(chon_chu == "3" && chon_con_dau == "3"){
            let element_value = $("#btn-doc-phai").val();
            
            if (string_text_arr.length == 3){
                $("div.hinh-3 > div > div > div > p.chu-3").css("margin-right", element_value + "px")
            }
            
        }

        //4
        if(chon_chu == "1" && chon_con_dau == "4"){
            let element_value = $("#btn-doc-phai").val();
            if (string_text_arr.length == 3){
                $("div.hinh-4 > div > div > div > p.chu-1").css("margin-left", element_value + "px")
            }
            
        }
        if(chon_chu == "2" && chon_con_dau == "4"){
            let element_value = $("#btn-doc-phai").val();
            if (string_text_arr.length == 3){
                $("div.hinh-4 > div > div > div > div > div > p.chu-2").css("margin-left", element_value + "px")
            }
            
        }
        if(chon_chu == "3" && chon_con_dau == "4"){
            let element_value = $("#btn-doc-phai").val();
            
            if (string_text_arr.length == 3){
                $("div.hinh-4 > div > div > div > div > div > p.chu-3").css("margin-left", element_value + "px")
            }
            
        }

        //5
        if(chon_chu == "1" && chon_con_dau == "5"){
            let element_value = $("#btn-doc-phai").val();
            if (string_text_arr.length == 3){
                $("div.hinh-5 > div > div > div > div > p.chu-1").css("margin-left", element_value + "px")
            }
            
        }
        if(chon_chu == "2" && chon_con_dau == "5"){
            let element_value = $("#btn-doc-phai").val();
            if (string_text_arr.length == 3){
                $("div.hinh-5 > div > div > div > div > p.chu-2").css("margin-left", element_value + "px")
            }
            
        }
        if(chon_chu == "3" && chon_con_dau == "5"){
            let element_value = $("#btn-doc-phai").val();
            
            if (string_text_arr.length == 3){
                $("div.hinh-5 > div > div > div > div > p.chu-3").css("margin-left", element_value + "px")
            }
            
        }

        //6
        if(chon_chu == "1" && chon_con_dau == "6"){
            let element_value = $("#btn-doc-phai").val();
            if (string_text_arr.length == 3){
                $("div.hinh-6 > div > div > div > div > p.chu-1").css("margin-left", element_value + "px")
            }
            
        }
        if(chon_chu == "2" && chon_con_dau == "6"){
            let element_value = $("#btn-doc-phai").val();
            if (string_text_arr.length == 3){
                $("div.hinh-6 > div > div > div > div > p.chu-2").css("margin-left", element_value + "px")
            }
            
        }
        if(chon_chu == "3" && chon_con_dau == "6"){
            let element_value = $("#btn-doc-phai").val();
            
            if (string_text_arr.length == 3){
                $("div.hinh-6 > div > div > div > div > p.chu-3").css("margin-left", element_value + "px")
            }
            
        }
        //7
        if(chon_chu == "1" && chon_con_dau == "7"){
            let element_value = $("#btn-doc-phai").val();
            if (string_text_arr.length == 3){
                $("div.hinh-7 > div > div > div > div > p.chu-1").css("margin-left", element_value + "px")
            }
            
        }
        if(chon_chu == "2" && chon_con_dau == "7"){
            let element_value = $("#btn-doc-phai").val();
            if (string_text_arr.length == 3){
                $("div.hinh-7 > div > div > div > div > p.chu-2").css("margin-left", element_value + "px")
            }
            
        }
        if(chon_chu == "3" && chon_con_dau == "7"){
            let element_value = $("#btn-doc-phai").val();
            
            if (string_text_arr.length == 3){
                $("div.hinh-7 > div > div > div > div > p.chu-3").css("margin-left", element_value + "px")
            }
            
        }
        //8
        if(chon_chu == "1" && chon_con_dau == "8"){
            let element_value = $("#btn-doc-phai").val();
            if (string_text_arr.length == 3){
                $("div.hinh-8 > div > div > div > div > p.chu-1").css("margin-left", element_value + "px")
            }
            
        }
        if(chon_chu == "2" && chon_con_dau == "8"){
            let element_value = $("#btn-doc-phai").val();
            if (string_text_arr.length == 3){
                $("div.hinh-8 > div > div > div > div > p.chu-2").css("margin-left", element_value + "px")
            }
            
        }
        if(chon_chu == "3" && chon_con_dau == "8"){
            let element_value = $("#btn-doc-phai").val();
            
            if (string_text_arr.length == 3){
                $("div.hinh-8 > div > div > div > div > p.chu-3").css("margin-left", element_value + "px")
            }
            
        }
    })
    $("#btn-doc-trai").change(function () {
        var chon_chu = $(".chon-chu").val();
        var chon_con_dau = $(".chon-con-dau").val();

        //1
        if(chon_chu == "1" && chon_con_dau == "1"){
            let element_value = $("#btn-doc-trai").val();
            if (string_text_arr.length == 4){
                $("div.hinh-1 > div > div > div > div > p.chu-1").css("margin-top", element_value + "px")
            }
            if (string_text_arr.length == 3){
                $("div.hinh-1 > div > div > div > p.chu-1").css("margin-top", element_value + "px")
            }
            if (string_text_arr.length == 2){
                $("div.hinh-1 > div > div > div > p.chu-1").css("margin-top", element_value + "px")
            }
            
        }
        if(chon_chu == "2" && chon_con_dau == "1"){
            let element_value = $("#btn-doc-trai").val();
            if (string_text_arr.length == 4){
                $("div.hinh-1 > div > div > div > div > p.chu-2").css("margin-top", element_value + "px")
            }
            if (string_text_arr.length == 3){
                $("div.hinh-1 > div > div > div > div > div > p.chu-2").css("margin-top", element_value + "px")
            }
            if (string_text_arr.length == 2){
                $("div.hinh-1 > div > div > div > p.chu-2").css("margin-top", element_value + "px")
            }
            
        }
        if(chon_chu == "3" && chon_con_dau == "1"){
            let element_value = $("#btn-doc-trai").val();
            if (string_text_arr.length == 4){
                $("div.hinh-1 > div > div > div > div > p.chu-3").css("margin-top", element_value + "px")
            }
            if (string_text_arr.length == 3){
                $("div.hinh-1 > div > div > div > div > div > p.chu-3").css("margin-top", element_value + "px")
            }
        }
        if(chon_chu == "4" && chon_con_dau == "1"){
            let element_value = $("#btn-doc-trai").val();
            if (string_text_arr.length == 4){
                $("div.hinh-1 > div > div > div > div > p.chu-4").css("margin-top", element_value + "px")
            }
            
        }

        //2
        if(chon_chu == "1" && chon_con_dau == "2"){
            let element_value = $("#btn-doc-trai").val();
            if (string_text_arr.length == 4){
                $("div.hinh-2 > div > div > div > div > p.chu-1").css("margin-top", element_value + "px")
            }
            if (string_text_arr.length == 3){
                $("div.hinh-2 > div > div > div > p.chu-1").css("margin-top", element_value + "px")
            }
            if (string_text_arr.length == 2){
                $("div.hinh-2 > div > div > div > p.chu-1").css("margin-top", element_value + "px")
            }
            
        }
        if(chon_chu == "2" && chon_con_dau == "2"){
            let element_value = $("#btn-doc-trai").val();
            if (string_text_arr.length == 4){
                $("div.hinh-2 > div > div > div > div > p.chu-2").css("margin-top", element_value + "px")
            }
            if (string_text_arr.length == 3){
                $("div.hinh-2 > div > div > div > div > div > p.chu-2").css("margin-top", element_value + "px")
            }
            if (string_text_arr.length == 2){
                $("div.hinh-2 > div > div > div > p.chu-2").css("margin-top", element_value + "px")
            }
            
        }
        if(chon_chu == "3" && chon_con_dau == "2"){
            let element_value = $("#btn-doc-trai").val();
            if (string_text_arr.length == 4){
                $("div.hinh-2 > div > div > div > div > p.chu-3").css("margin-top", element_value + "px")
            }
            
            if (string_text_arr.length == 3){
                $("div.hinh-2 > div > div > div > div > div > p.chu-3").css("margin-top", element_value + "px")
            }
        }
        if(chon_chu == "4" && chon_con_dau == "2"){
            let element_value = $("#btn-doc-trai").val();
            if (string_text_arr.length == 4){
                $("div.hinh-2 > div > div > div > div > p.chu-4").css("margin-top", element_value + "px")
            }
            
        }

        //3
        if(chon_chu == "1" && chon_con_dau == "3"){
            let element_value = $("#btn-doc-trai").val();
            if (string_text_arr.length == 2){
                $("div.hinh-3 > div > div > div > p.chu-1").css("margin-top", element_value + "px")
            }
            if (string_text_arr.length == 3){
                $("div.hinh-3 > div > div > div > div > div > p.chu-1").css("margin-top", element_value + "px")
            }
            
            
        }
        if(chon_chu == "2" && chon_con_dau == "3"){
            let element_value = $("#btn-doc-trai").val();
            if (string_text_arr.length == 2){
                $("div.hinh-3 > div > div > div > p.chu-2").css("margin-top", element_value + "px")
            }
            if (string_text_arr.length == 3){
                $("div.hinh-3 > div > div > div > div > div > p.chu-2").css("margin-top", element_value + "px")
            }
            
            
        }
        if(chon_chu == "3" && chon_con_dau == "3"){
            let element_value = $("#btn-doc-trai").val();
            
            if (string_text_arr.length == 3){
                $("div.hinh-3 > div > div > div > p.chu-3").css("margin-top", element_value + "px")
            }
            
        }

        //4
        if(chon_chu == "1" && chon_con_dau == "4"){
            let element_value = $("#btn-doc-trai").val();
            if (string_text_arr.length == 3){
                $("div.hinh-4 > div > div > div > p.chu-1").css("margin-top", element_value + "px")
            }
            
        }
        if(chon_chu == "2" && chon_con_dau == "4"){
            let element_value = $("#btn-doc-trai").val();
            if (string_text_arr.length == 3){
                $("div.hinh-4 > div > div > div > div > div > p.chu-2").css("margin-top", element_value + "px")
            }
            
        }
        if(chon_chu == "3" && chon_con_dau == "4"){
            let element_value = $("#btn-doc-trai").val();
            
            if (string_text_arr.length == 3){
                $("div.hinh-4 > div > div > div > div > div > p.chu-3").css("margin-top", element_value + "px")
            }
            
        }


        //5
        if(chon_chu == "1" && chon_con_dau == "5"){
            let element_value = $("#btn-doc-trai").val();
            if (string_text_arr.length == 3){
                $("div.hinh-5 > div > div > div > div > p.chu-1").css("margin-top", element_value + "px")
            }
            
        }
        if(chon_chu == "2" && chon_con_dau == "5"){
            let element_value = $("#btn-doc-trai").val();
            if (string_text_arr.length == 3){
                $("div.hinh-5 > div > div > div > div > p.chu-2").css("margin-top", element_value + "px")
            }
            
        }
        if(chon_chu == "3" && chon_con_dau == "5"){
            let element_value = $("#btn-doc-trai").val();
            
            if (string_text_arr.length == 3){
                console.log(element_value)
                $("div.hinh-5 > div > div > div > div > p.chu-3").css("margin-top", element_value + "px")
            }
            
        }

        //6
        if(chon_chu == "1" && chon_con_dau == "6"){
            let element_value = $("#btn-doc-trai").val();
            if (string_text_arr.length == 3){
                $("div.hinh-6 > div > div > div > div > p.chu-1").css("margin-top", element_value + "px")
            }
            
        }
        if(chon_chu == "2" && chon_con_dau == "6"){
            let element_value = $("#btn-doc-trai").val();
            if (string_text_arr.length == 3){
                $("div.hinh-6 > div > div > div > div > p.chu-2").css("margin-top", element_value + "px")
            }
            
        }
        if(chon_chu == "3" && chon_con_dau == "6"){
            let element_value = $("#btn-doc-trai").val();
            
            if (string_text_arr.length == 3){
                console.log(element_value)
                $("div.hinh-6 > div > div > div > div > p.chu-3").css("margin-top", element_value + "px")
            }
            
        }

        //7
        if(chon_chu == "1" && chon_con_dau == "7"){
            let element_value = $("#btn-doc-trai").val();
            if (string_text_arr.length == 3){
                $("div.hinh-7 > div > div > div > div > p.chu-1").css("margin-top", element_value + "px")
            }
            
        }
        if(chon_chu == "2" && chon_con_dau == "7"){
            let element_value = $("#btn-doc-trai").val();
            if (string_text_arr.length == 3){
                $("div.hinh-7 > div > div > div > div > p.chu-2").css("margin-top", element_value + "px")
            }
            
        }
        if(chon_chu == "3" && chon_con_dau == "7"){
            let element_value = $("#btn-doc-trai").val();
            
            if (string_text_arr.length == 3){
                console.log(element_value)
                $("div.hinh-7 > div > div > div > div > p.chu-3").css("margin-top", element_value + "px")
            }
            
        }
        //8
        if(chon_chu == "1" && chon_con_dau == "8"){
            let element_value = $("#btn-doc-trai").val();
            if (string_text_arr.length == 3){
                $("div.hinh-8 > div > div > div > div > p.chu-1").css("margin-top", element_value + "px")
            }
            
        }
        if(chon_chu == "2" && chon_con_dau == "8"){
            let element_value = $("#btn-doc-trai").val();
            if (string_text_arr.length == 3){
                $("div.hinh-8 > div > div > div > div > p.chu-2").css("margin-top", element_value + "px")
            }
            
        }
        if(chon_chu == "3" && chon_con_dau == "8"){
            let element_value = $("#btn-doc-trai").val();
            
            if (string_text_arr.length == 3){
                console.log(element_value)
                $("div.hinh-8 > div > div > div > div > p.chu-3").css("margin-top", element_value + "px")
            }
            
        }
    })
    // $("#btn-doc-trai").change(function () {
    //     let element_value = $("#btn-doc-trai").val();
    //     $(".hinh-1 > .chu-2").css("margin-left", element_value + "px");
    // });
    
    // $("#btn-doc-phai").change(function () {
    //     if (string_text_arr.length == 4 || string_text_arr.length == 2) {
    //         let element_value = $("#btn-doc-phai").val();
    //         $(".doc-phai").css("margin-right", element_value + "px");
    //     }
    // });

    // $("#btn-doc-trai").change(function () {
    //     if (string_text_arr.length == 4 || string_text_arr.length == 2) {
    //         let element_value = $("#btn-doc-trai").val();
    //         $(".doc-trai").css("margin-left", element_value + "px");
    //     }
    // });

    // $("#btn-ngang-tren").change(function () {
    //     if (string_text_arr.length == 4 || string_text_arr.length == 2) {
    //         let element_value = $("#btn-ngang-tren").val();
    //         $(".ngang-tren").css("margin-top", element_value + "px");
    //     }
    // });

    // $("#btn-ngang-duoi").change(function () {
    //     if (string_text_arr.length == 4 || string_text_arr.length == 2) {
    //         let element_value = $("#btn-ngang-duoi").val();
    //         $(".ngang-duoi").css("margin-top", element_value + "px");
    //     }
    // });
});
