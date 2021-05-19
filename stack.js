class Stack{
    constructor() {
        this.stack = []
}
    
    push(item) {
 		this.stack.push(item)
    }
  
    pop() {
  	    this.stack.pop()
    }
  
    check() {
  	    console.log(this.stack)
    }
}

var stack = new Stack()
stack.push('Milk')
stack.push('Eggs')
stack.check()
stack.pop()
stack.check()
stack.push('Butter')
stack.check()
stack.pop()
stack.check()
stack.pop()
stack.check()