

$(document).ready(function () {
    $(document).ready(c(), display());

    $("#add").click(function () {
        var a = JSON.parse(localStorage.getItem("todo2"));
        var input = $("input[name = task]").val();
        
        if (a == null) {
            var z = [];
            z.push(input);
            localStorage.setItem("todo2", JSON.stringify(z));
        } else {
            if (input == "") {
                
                    $("span").css("display", "inline").fadeOut(1500);
               
            } else {
                var d = JSON.parse(localStorage.getItem("todo2"));
                d.push(input);
                localStorage.setItem("todo2", JSON.stringify(d));

            }

        }
        $("input[name = task]").val("");
        c();
        refresh();
    })

    function c() {
        var a = JSON.parse(localStorage.getItem("todo2"));
        if (a == null) {
            $("div:nth-child(2)").html("<b> You Have No Task For Today !!! </b>");
        } else if (a == 0) {
            $("div:nth-child(2)").html("<b>You Have No Task For Today !!!</b>");
        }
        else {
            $("div:nth-child(2)").html("Task You Have : <b>" + a.length + "</b> For Today!!!");
        }

    }

    function display() {
        var a = JSON.parse(localStorage.getItem("todo2"));
        if (a == null) {
        } else {
            $("ul").empty();
            for (let i = a.length - 1; i >= 0; i--) {
                var createLI = $("<li></li>").attr({ "id": "list", "class": "list-group-item" }).text(a[i]);

                var createBtn = $("<a></a>").attr({
                    "href": "#", "class": "close",
                    "value": i, "aria-hidden": "true"
                }).text("x");
                createLI.append(createBtn);
                $("#todo").append(createLI);
            }
        }
    }

    function refresh() {
        $("li").empty();
        display();
        c();
    }

    $('#todo').on('click', 'a', function () {

        var update = JSON.parse(localStorage.getItem("todo2"));
        update.splice(Number($(this).val()), 1);
        console.log(update);
        localStorage.setItem("todo2", JSON.stringify(update));
        refresh();
    });
});