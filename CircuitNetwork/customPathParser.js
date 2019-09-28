class CustomPathParser {

    static getURL(value) {

        let url = { nodes: undefined, edges: undefined };

        switch (value) {
            case '0':
                url.nodes = './files/Nodes/0_nodes.json';
                url.edges = './files/Edges/0_edges.json';
                break;
            case '1':
                url.nodes = './files/Nodes/basement/0_nodes.json';
                url.edges = './files/Edges/basement/0_edges.json';
                break;
            case '2':
                url.nodes = './files/Nodes/first_floor/0_nodes.json';
                url.edges = './files/Edges/first_floor/0_edges.json';
                break;
            case '3':
                url.nodes = './files/Nodes/second_floor/0_nodes.json';
                url.edges = './files/Edges/second_floor/0_edges.json';
                break;
            case '4':
                url.nodes = './files/Nodes/third_floor/0_nodes.json';
                url.edges = './files/Edges/third_floor/0_edges.json';
                break;
            case '5':
                url.nodes = './files/Nodes/fourth_floor/0_nodes.json';
                url.edges = './files/Edges/fourth_floor/0_edges.json';
                break;
            case '6':
                url.nodes = './files/Nodes/fifth_floor/0_nodes.json';
                url.edges = './files/Edges/fifth_floor/0_edges.json';
                break;
            case '7':
                url.nodes = './files/Nodes/penthouse/0_nodes.json';
                url.edges = './files/Edges/penthouse/0_edges.json';
                break;

        }
        return url;
    }

    static getURLNodes(value) {
        let tmp = CustomPathParser.getURL(value);
        return tmp.nodes;
    }

    static getURLEdges(value) {
        let tmp = CustomPathParser.getURL(value);
        return tmp.edges;
    }
}