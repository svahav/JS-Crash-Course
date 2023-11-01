import { LightningElement, track, wire } from 'lwc';
import {registerListener, unregisterAllListeners} from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class SelectedMeetingRoom extends LightningElement {
    @track selectedMeetingRoom={};
    @wire(CurrentPageReference) pageRef;

    connectedCallback(){
        registerListener('pubsubtileclick',this.onMeetingRoomSelectedHandler, this);
    }

    disconnectedCallback(){
        unregisterAllListeners(this);
    }
    onMeetingRoomSelectedHandler(payload){
        this.selectedMeetingRoom=payload;
    }

}