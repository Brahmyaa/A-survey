class Form{
    constructor(){}
    display(){
        var title = createElement('h2');
        title.html("A Survey to bring a Change");
        title.position(350,0);
        
        var input = createInput("Voter Name");
        var button = createButton("Start");
        var greeting = createElement('h3');
        input.position(380,160);
        button.position(380,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var voterName = input.value();
            voterCount += 1;
            voter.update(voterName);
            voter.updateCount(voterCount);
            greeting.html("Hello " + voterName);
            greeting.position(280,160);
        })
    }
}