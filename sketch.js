var backgroundImg, canvas;
var surveyState = 0;
var voterCount;
var database;
var form, voter, survey;

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  survey = new Survey();
  survey.getState();
  survey.start();
}

function draw(){

}