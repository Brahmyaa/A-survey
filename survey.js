class Survey{
    constructor(){}
    getState(){
        var surveyStateRef = database.ref('surveyState');
        surveyStateRef.on("value", function(data){
            surveyState = data.val();
        })
    }
    update(state){
        database.ref('/').update({
            surveyState: state
        })
    }
    start(){
        if(surveyState === 0){
            form = new Form();
            form.display();
            voter = new Voter();
            voter.getCount();
        }
    }
}