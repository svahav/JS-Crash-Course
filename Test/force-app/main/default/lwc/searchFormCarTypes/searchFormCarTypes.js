import { LightningElement, track, wire } from 'lwc';
import getCarTypes from '@salesforce/apex/searchFormController.getCarTypes'
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
import {NavigationMixin} from 'lightning/navigation'


export default class SearchFormCarTypes extends NavigationMixin(LightningElement) {
    @track carTypes;
    @wire (getCarTypes)
    wiredCarType({data , error}){
        this.carTypes=[{value: '' , label:'All Types'}]
        if(data){
            data.forEach(element=>{
                const carType={};
                carType.label=element.Name;
                carType.value=element.Id;
                this.carTypes.push(carType);
            });
        }else if(error){
            this.showToast('error', error.body.message, 'error' )

        }
    }

    onchangeCarTypesHandler(event){
        const carTypeId= event.detail.value;

        const carTypeSelectionChange= new CustomEvent('cartypeselect', {detail: carTypeId})
this.dispatchEvent(carTypeSelectionChange);

    }


    createNewCarType(){
this[NavigationMixin.Navigate]({
    type: 'standard_objectPage',
    attributes:{
        objectApiName: 'Car_Type__c',
        action: 'new'
    }
});
    }

    showToast(title, message, variant){
        const evt=new ShowToastEvent({
            title: title,
            messgae: message,
            variant: variant,
        });
        this.dispatchEvent(evt)
    }
}
