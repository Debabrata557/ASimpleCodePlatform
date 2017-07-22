function changeContent() {
        $("iframe").contents().find("html").html("<html><head><title></title><styl" +
            "e type='text/css'>"+$("#cssWindow").val()+"</style></head><body>"+$("#htmlWindow").val()+"</body></html>");
        document.getElementById("OutputWindow").contentWindow.eval($("#javaScriptWindow").val());

    }
    $(".toggleButtons").hover(
        function () {
        $(this).addClass("highLighted");

    },function () {
            $(this).removeClass("highLighted");

        }
    )
    $(".toggleButtons").click(function () {
        $(this).toggleClass("active");
        var className="#"+$(this).attr("id")+"Window";
        $(className).toggleClass("hidden");
        var num=4-$(".hidden").length;
        $(".panel").width(((($(window).width()))/num)-10);

    });
    $(".panel").height($(window).height()-$("#upperContainer").height()-10);
    $(".panel").width((($(window).width())/2)-5);
    changeContent();
    $("textarea").on("change keyup paste",function () {
        changeContent();

    })
    $("#Night").click(function () {

       $("textarea").css("background","blue");
       $("textarea").css("color","#EFEF10");



    })
    $("#Dracula").click(function () {

        $("textarea").css("background","black");
        $("textarea").css("color","#a331e0");



    })
    $("#Default").click(function () {
        $("textarea").css("background","white");
        $("textarea").css("color","black");

    })
var suggests = ["head", "hello", "heart", "health", "horizontal"];
$("textarea").asuggest(suggests, {
    'autoComplete': false,
    'cycleOnTab': true
});

