let options = {
    element: "#granim-canvas",
    states: {
        "default-state": {
           gradients: [
               ["#1488CC","#2B32B2"],
               ["#363795","#1488CC"],
           ],
           transitionSpeed: 1000, 
        }
    }
};
let granimInstance = new Granim(options);