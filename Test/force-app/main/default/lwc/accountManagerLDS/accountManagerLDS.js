import { createRecord, getRecord } from 'lightning/uiRecordApi';
import { LightningElement, track, wire } from 'lwc';

const arrayFields=['Account.Name', 'Account.Phone', 'Account.Website' ]

export default class AccountManagerLDS extends LightningElement {
    @track accountNameInput;
    @track accountPhoneInput;
    @track accountWebsiteInput;
    @track recordId;
   

    @wire (getRecord,{recordId: '$recordId', fields: arrayFields})
    accountRecord;
    accountNameHandler(event){
        this.accountNameInput=event.target.value;
    }
    accountPhoneHandler(event){
        this.accountPhoneInput=event.target.value;
    }
    accountWebsiteHandler(event){
        this.accountWebsiteInput=event.target.value;
    }
 
    createNewAccount(){
        const fields={ 'Name': this.accountNameInput, 'Phone': this.accountPhoneInput , 'Website': this.accountWebsiteInput}
        const recordInput={apiName: 'Account' ,fields }
        createRecord(recordInput).then(response => {
            console.log('New Account Created: ' ,response.id)
            this.recordId=response.id;
        }).catch(error=>{
            console.log('error in creating account: ', error.body.message)
        });
    }

        get accountNameRet() {
            if(this.accountRecord.data){
                return this.accountRecord.data.fields.Name.value;
            }
            return undefined;

        }
        get accountPhoneRet() {
            if(this.accountRecord.data){
                return this.accountRecord.data.fields.Phone.value;
            }
            return undefined;
        }
        get accountUrlRet() {
            if(this.accountRecord.data){
                return this.accountRecord.data.fields.Website.value;
            }
            return undefined;
        }

    }

