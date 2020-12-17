class Graph{
    constructor(){
        this.vertices = [];
        this.edgeDict = {};
        this.vertexDict = {};
        this.edgeList = [];
    }

    addVertex(name, weight){
        if(this.vertexDict[name] !== undefined){
            return false;
        }
        if(weight < 1 || weight == 2){
            return false;
        }
        this.vertices.push({
            name: name,
            weight: weight
        });
        this.vertexDict[name] = {
            name: name,
            weight: weight
        };
        this.edgeDict[name] = [];
        return true;
    }

    addEdge(v1, v2){
        if(v1 == v2){
            return false;
        }
        if(this.edgeDict[v1] === undefined || this.edgeDict[v2] === undefined){
            return false;
        }
        if(this.edgeDict[v1].indexOf(v2) !== -1){
            return false;
        }
        this.edgeDict[v1].push(v2);
        this.edgeDict[v2].push(v1);
        this.edgeList.push([v1,v2]);
        return true;
    }

    invert(v){
        var out = new Graph()
        var self = this;
        this.vertices.forEach(function(item){
            if(item.name !== v){
                out.addVertex(item.name, item.weight)
            }
            else if(item.weight > 1){
                out.addVertex(item.name, item.weight - 1)
            }
        });
        this.edgeList.forEach(function(item){
            if(item[0] === v || item[1] === v){ //If it's connected to the vertex we're inverting, kill it
                return;
            }
            if(self.edgeDict[v].indexOf(item[0]) !== -1){ //If it's connected to an edge connected to the vertex we're
                return;                                   //inverting, also kill it
            }
            if(self.edgeDict[v].indexOf(item[1]) !== -1){
                return;
            }
            out.addEdge(item[0], item[1]);
        });
        return out;
    }

    getValence(v){
        var vweight = this.vertexDict[v].weight;
        var vdict = this.vertexDict;
        var out = 0;
        this.edgeDict[v].forEach(function(item){
            out += vweight * vdict[item].weight;
        })
        return out;
    }

    isCI(){
        var isCI = true;
        var self = this;
        this.vertices.forEach(function(vertex){
            if(self.getValence(vertex.name) > 1){
                isCI = false;
            }
        })
        return isCI;
    }

    isNCI(){
        var isNCI = !this.isCI();
        var self = this;
        this.vertices.forEach(function(vertex){
            var igraph = self.invert(vertex.name);
            if(!igraph.isCI()){
                isNCI = false;
            }
        })
        return isNCI;
    }

    getIdeal(){
        var startindex = 1;
        var vinds = {};
        var vdict = this.vertexDict
        var monomials = [];
        this.vertices.forEach(function(vert){
            vinds[vert.name] = startindex;
            startindex += vert.weight;
            if(vert.weight > 1){
                var m = "";
                for(var i = 0; i < vert.weight; i++){
                    m += "x_" + (vinds[vert.name] + i);
                    if(i < vert.weight - 1){
                        m += "*";
                    }
                }
                monomials.push(m);
            }
        })
        
        this.edgeList.forEach(function (edge) {
            for(var i = 0; i < vdict[edge[0]].weight; i++){
                for(var j = 0; j < vdict[edge[1]].weight; j++){
                    var ind1 = vinds[edge[0]] + i;
                    var ind2 = vinds[edge[1]] + j;
                    monomials.push("x_" + ind1 + "*" + "x_" + ind2);
                }
            }
        })
        var outs = "R = ZZ/8821[x_1 .. x_" + (startindex - 1) +"]; I = ideal(" + monomials.join(",") + ")";
        return outs;
    }

    updateSpringy(sgraph){
        while(sgraph.nodes.length > 0){
            sgraph.removeNode(sgraph.nodes[0])
        }
        var vertexDict = {};
        this.vertices.forEach(function(vertex){
            var name = vertex.name + "(" + vertex.weight + ")";
            var newVert = sgraph.newNode({label: name,
                ondoubleclick:function(arg){
                    active_graph = active_graph.invert(arg);
                    updateGraph();
                },
                cbargs: vertex.name});
            vertexDict[vertex.name] = newVert;
        })
        this.edgeList.forEach(function(item){
           sgraph.newEdge(vertexDict[item[0]], vertexDict[item[1]], {directional: false})
        });
    }
}