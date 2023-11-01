import { LightningElement, track } from 'lwc';

export default class PublicMethodParent extends LightningElement {
@track value;
checkboxSelectedHandler(){
    const childComponent=this.template.querySelector('c-public-method-child');
    const returnedMessage=childComponent.selectCheckbox(this.value);
    console.log(returnedMessage);

}
onInputChangeHandler(event){
    this.value= event.target.value;
}


}