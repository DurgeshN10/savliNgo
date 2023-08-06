
$(document).ready(function(){
    var filedata =[];
    var listr = "";
    $.getJSON('data.json', function(data) {
        filedata = data;
        // console.log(filedata.length);
        for(i=0;i<filedata.length;i++){
            listr += '<li class="cards_item">'
            listr += '<div class="card">'
            var imgPath = "./images/events/"+ filedata[i].pht;
            listr += '<div class="card_image"><img src='+imgPath+'></div>'
            listr += '<div class="card_content">'
            listr += '<h2 class="card_title">'+filedata[i].name+'</h2>'
            listr += '<p class="card_text">'+filedata[i].desc+'</p>'
            listr += '<button class="btn card_btn" data-par1='+filedata[i].eventid+'>See More</button>'
            listr += '</div>'
            listr += '</div></li>'
        }
        $(".main ul").append(listr);

        $(".card_btn").click(function(event){
            var filedat2;
            var slides = "";
            $(".XXXXX").html("");
            $.getJSON('data2.json', function(data) {
                filedata2 = data;
                var key = event.target.dataset.par1;
               
               $("#mtitle").text(filedata2[key].name);
               $("#desc").text(filedata2[key].desc);
                slides = "";
                slides += '<div class="XXXXX__slider">'
                for(i=0;i<filedata2[key].phts.length;i++){
                    var imgPath = "./images/events/"+ filedata2[key].phts[i];
                    slides += '<a href='+imgPath+' class="XXXXX__slide" data-toggle="lightbox">';
                    slides += '<img src='+imgPath+'></img>';
                }
                slides += '</div>';
        //        console.log(slides);
                $(".XXXXX").append(slides);
                $(".XXXXX__slider").slick();
                $(".XXXXX__slider").slickLightbox({
                    itemSelector: "a",
                    navigateByKeyboard: true
                });
            })
            $('#EventDesc').modal('show');
           
        })
    });
   
})
