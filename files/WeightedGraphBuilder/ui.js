var graph = new Springy.Graph();
var active_graph;

function updateGraph(){
    if(active_graph === undefined){
        return;
    }
    active_graph.updateSpringy(graph)
    ci_status = $("#CI-status")[0];
    if(active_graph.isCI()){
        ci_status.classList.remove("glyphicon-remove")
        ci_status.classList.add("glyphicon-ok")
    }
    else{
        ci_status.classList.add("glyphicon-remove")
        ci_status.classList.remove("glyphicon-ok")
    }
    nci_status = $("#NCI-status")[0];
    if(active_graph.isNCI()){
        nci_status.classList.remove("glyphicon-remove")
        nci_status.classList.add("glyphicon-ok")
    }
    else{
        nci_status.classList.add("glyphicon-remove")
        nci_status.classList.remove("glyphicon-ok")
    }
    m2_output = $("#m2-output")[0];
    m2_output.value = active_graph.getIdeal();
}

function updateGraphFromEncoding(){
    var text = $("#graph-encoding")[0].value;
    var out = parse(text);
    var syntax_errors = $("#syntax-errors")[0];
    var no_syntax_errors = $("#no-syntax-errors")[0];
    if(out.errors.length > 0){
        no_syntax_errors.classList.add("hidden");
        syntax_errors.classList.remove("hidden");
        syntax_errors.innerHTML = out.errors.join("<br>");
        active_graph = undefined;
    }
    else{
        no_syntax_errors.classList.remove("hidden");
        syntax_errors.classList.add("hidden");
        active_graph = out.graph;
        updateGraph();
    }
}

$(function () {
    canvas = document.getElementById("graph-vis");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    $("#open-output")[0].addEventListener('click', function () {
        button = $("#open-output")[0];
        if(button.classList.contains("glyphicon-download")){
            button.classList.remove("glyphicon-download")
            button.classList.add("glyphicon-upload")
        }
        else{
            button.classList.add("glyphicon-download")
            button.classList.remove("glyphicon-upload")
        }
    });

    $("#update-graph")[0].addEventListener('click', updateGraphFromEncoding);

    var springy = window.springy = $('#graph-vis').springy({
        graph: graph,
        nodeSelected: function(node){
            console.log('Node selected: ' + JSON.stringify(node.data));
        }
    });

    $("#get-m2")[0].addEventListener('click', function(){
        $("#m2-output")[0].select();
        document.execCommand('copy')
    });

    updateGraphFromEncoding();
});

window.onresize = function(){
    canvas = document.getElementById("graph-vis");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};