import { LightningElement,  track } from 'lwc';

export default class HelloWorld extends LightningElement {
    @track dynamicGreeting

    GreetingChangeHandler(event){
        this.dynamicGreeting=event.target.value;
    }
}