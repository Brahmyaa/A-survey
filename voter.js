class Voter{
    constructor(){}

    getCount(){
        var voterCountRef = database.ref('voterCount');
        voterCountRef.on("value", function(data){
            voterCount = data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            voterCount: count
        })
    }
    update(name){
        var voterIndex = "voter" + voterCount;
        database.ref(voterIndex).set({
            name: name
        })
    }
}