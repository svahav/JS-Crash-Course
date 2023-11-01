import { LightningElement , track} from 'lwc';
import addTodo from '@salesforce/apex/toDoController.addTodo';

export default class ToDoManager extends LightningElement {

     time;
     greeting;
     @track todos=[];

    connectedCallback(){
this.getTime();
setInterval(()=>{
    this,this.getTime();
    console.log("set interval called");

},1000*60)

    }

    getTime(){
        const date= new Date();
        const hour= date.getHours();
        const min=date.getMinutes();
this.time=`${this.getHour(hour)}:${this.GetDigit(min)} ${this.getMinDay(hour)}`
this.setGreeting(hour);
    }


    setGreeting(hour){
        if(hour<12){
            this.greeting="Good Morning";
        }else if(hour>=12 && hour<17){
            this.greeting="Good Afternoon";
        }else{
            this.greeting= "Good Evening";
    }
}
    //להוציא PM AM
getMinDay(hour){
    return hour >=12 ? "PM" : "AM";
}
    //לפרמט את השעה לפורמט של מספר
    getHour(hour){

        return hour === 0 ? 12 : hour > 12 ? (hour-12) : hour;
    }
//לפרמט את הדקות
     GetDigit(digit){
return digit<10 ? "0"+digit : digit;

     }

     toDoHandler(){
const inputBox=this.template.querySelector("lightning-input");

const todo={
    todoName: inputBox.value,
    done: false
};
         addTodo({payload : JSON.stringify(todo)})
.then(response=> {
    console.log('todo item inserted succesfully');
})
.catch(error=>{
    console.error('erorror in inserting todo item'+ error);
});
//this.todos.push(todo);
inputBox.value="";

     }

     get upcomingTasks(){
        return this.todos && this.todos.length? this.todos.filter(todo=> !todo.done):[];
     }
     get completedTasks(){
        return this.todos && this.todos.length? this.todos.filter(todo=> todo.done):[];
     }
     
}