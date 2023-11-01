import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavigationExample extends NavigationMixin(LightningElement) {

    openSFDCFacts(){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes:{
                url:'https://open.spotify.com'
            }
        });
    }

    openAccountHome(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes:{
                objectApiName: 'Account',
                actionName: 'home'
            }
        });
    }

    createNewContact(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            }
        });
    }
}