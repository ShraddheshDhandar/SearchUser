
var inp= document.querySelector("input");

var data = [
    {name:" Harsh", src: "https://images.unsplash.com/photo-1752041295563-8320edcc0025?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D "},
    {name:" Hami", src: " https://images.unsplash.com/photo-1752665696094-b733943393d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"},
    {name:" Hema", src: " https://images.unsplash.com/photo-1752312641088-3c7425261a5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},
    {name:" Yu", src: " https://images.unsplash.com/photo-1752147535869-b6988d3efa11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},
    {name:" Cutie", src: " https://images.unsplash.com/photo-1752384876833-b725ae16bfa1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},
    {name: " Shraddu", src: "https://images.unsplash.com/photo-1748443157965-e504a6532648?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMXx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8 "},
    {name:" Virus", src: " https://images.unsplash.com/photo-1752041284232-f92842174668?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},
    {name:" Ashrad", src: " https://images.unsplash.com/photo-1732167372202-30be36e1168e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},
    {name:" Cane", src: " https://images.unsplash.com/photo-1752046462544-9454fa2a13b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"}
];

var pers = "";
data.forEach(function(elem){
    pers += `<div class="person">
                    <div class="img">
                        <img src="${elem.src}" alt="">
                        
                    </div>
                    <h4>${elem.name}</h4>
                </div> `;
})

document.querySelector(".people").innerHTML=pers;

inp.addEventListener("input", function(){
    var matching = data.filter(function(e){
        return e.name.trim().toLowerCase().startsWith(inp.value.trim().toLowerCase());
    });
    var newusers = "";
    matching.forEach(function(elem){
        newusers += `<div class="person">
                        <div class="img">
                            <img src="${elem.src.trim()}" alt="">
                        </div>
                        <h4>${elem.name.trim()}</h4>
                    </div>`;
    });
    document.querySelector(".people").innerHTML = newusers;
});
