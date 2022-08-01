// $(document).ready(function(){

        $("#input").keyup(function(e){ 
            var input = $(this).val();
            if (e.keyCode == 13) {      
                if (input != "") {
                    $("ul").append("<li>" + input + '<i class="fa-solid fa-check"></i> <i class="fa-solid fa-trash"></i> </li>');  
                }
                else{
                    alert("please write something to add")
                }   
                $("#input").val("");
            }
        });
        
        $(".fa-plus").click(function(){
            var input = $("#input").val();
            if (input != "") {
                $("ul").append("<li>" + input + '<i class="fa-solid fa-check"></i> <i class="fa-solid fa-trash"></i> </li>');  
            }  
            else{
                alert("please write something to add")
            } 
            $("#input").val("");
        });

        $("ul").on("click",".fa-trash",function(){ 
            // $(this).parent("li").fadeOut(200);
            var nbr =  $("#nbr");
            var lent = $("li").length-1 ;
            nbr.text(lent);
                if (lent == 0) {
                    nbr.text("no");
                    $("#task").text("tasks");
                }
                else if (lent == 1) {
                    $("#task").text("task");
                }
                else{
                    $("#task").text("tasks");   
                }
            $(this).parent("li").fadeOut(500,function(){
                (this).remove();
            });
        });

        $("body").on("click",".clear",function(){  
            var nbr =  $("#nbr");       
            if ($("ul").html() == "") {
                alert("there's nothing to clear")
            }
            else{
                $("li").fadeOut(500,function(){
                    $(this).remove();
                });
            }
            
            nbr.text("no");
        });

   

        $("ul").on("click",".fa-check",function(){
            // var checked = $(".checked").length;
            var congarts = $(".congrats")
            $(this).parent("li").toggleClass("checked");
            var checked = $(".checked").length;
            if (checked == 0) {
                // congarts.css("display","none");
            }
            else{
                congarts.fadeIn(1000);
                congarts.fadeOut(3000);
                congarts.css("display","block");

            }
            congarts.text("Congrats You have finished " +checked +" task")
            if (checked > 1) {
                congarts.text("Congrats You have finished " +checked +" tasks")
            }
        }); 

        $("#input").keyup(function(e){
            var nbr =  $("#nbr");
            var lent = $("li").length ;
            nbr.text(lent);
            if (e.keyCode == 13) {
                if (lent == 1) {
                    $("#task").text("task");
                }
                else{
                    $("#task").text("tasks");
                }
        }
        });

        $(".fa-plus").click(function(){
            var nbr =  $("#nbr");
            var lent = $("li").length ;
            nbr.text(lent);
                if (lent == 1) {
                    $("#task").text("task");
                }
                else{
                    $("#task").text("tasks");
                }
        });
        
// });