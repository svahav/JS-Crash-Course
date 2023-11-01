import { LightningElement } from 'lwc';

export default class VaccineSlotFinder extends LightningElement {
    centers=[];
    dates=[];

connectedCallback(){

}

fetchDataResponse(){
          //const endpoint = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pinCode}&date=${formattedDate}`;
    
}
    get hideSlotMessage(){
        return false;
    }
}