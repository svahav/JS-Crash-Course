import { LightningElement, api, wire } from 'lwc';
import {fireEvent} from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';


export default class MeetingRoom extends LightningElement {
    @api meetingRoomInfo;
    @wire(CurrentPageReference) pageReference;

    clickHandler(){
        const tileClicked= new CustomEvent('tileclick', {detail: this.meetingRoomInfo,bubbles:true})
        this.dispatchEvent(tileClicked);
        fireEvent(this.pageReference, 'pubsubtileclick', this.meetingRoomInfo);
        
    }

}