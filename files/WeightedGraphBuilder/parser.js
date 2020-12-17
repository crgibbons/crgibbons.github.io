function parse(str){
    var arr = str.split("\n");
    var out = new Graph();
    var syntax_errors = [];
    for(i = 0; i < arr.length; i++){
        var line = arr[i];
        if(line.startsWith("//")){
            continue;
        }
        if(!(/\S/.test(line))){
            continue;
        }
        var args = line.split(" ")
        if(args[0] == 'v'){
            if(args.length < 3){
                syntax_errors.push("Insufficient argument count on line " + i + " expected 2 arguments to `v`")
                continue;
            }
            if(args.length > 3){
                syntax_errors.push("Extra arguments on line " + i + " expected 2 arguments to `v`")
                continue;
            }
            var name = args[1]
            var weight = parseInt(args[2])
            if(isNaN(weight)){
                syntax_errors.push("Nonnumeric weight given in second argument to `v` on line " + i)
                continue;
            }
            if(!out.addVertex(name, weight)){
                syntax_errors.push("Added redundant vertex on line " + i)
            }
        }
        else if(args[0] == 'e'){
            if(args.length < 3){
                syntax_errors.push("Insufficient argument count on line " + i + " expected 2 arguments to `v`")
                continue;
            }
            if(args.length > 3){
                syntax_errors.push("Extra arguments on line " + i + " expected 2 arguments to `v`")
                continue;
            }
            if(!out.addEdge(args[1], args[2])){
                syntax_errors.push("Added redundant edge on line " + i)
            }
        }
        else{
            syntax_errors.push("Unexpected token on line " + i)
        }
    }
    return {
        graph: out,
        errors: syntax_errors
    }
}