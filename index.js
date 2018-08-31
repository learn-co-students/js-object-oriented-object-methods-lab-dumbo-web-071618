function boardMembers(name, homestate, training) {
  this.name = name
  this.homestate = homestate
  this.training = training
  this.veto = function() {
    "No, I must disagree"
    //do i use return/console.log()??
  }
  this.approve = function() {
    "You can do that!"
  }
  this.doCharity = function() {
    "I like to help people."
  }
  this.releasePressStatement = function() {
    "You will see great things from Scuber."
  }
  this.sayHi = function() {
    `Hi, my name is ${name}. I am from ${homestate}, and I was trained in ${training}.`
  }
}
