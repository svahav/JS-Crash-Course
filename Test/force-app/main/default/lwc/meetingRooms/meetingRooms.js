import { LightningElement, track } from 'lwc';

export default class MeetingRooms extends LightningElement {
    @track selectedMeetingRoomInfo;
    meetingRoomsInfo = [
        {roomName:'A-01', roomCapacity: '20'},
        {roomName:'A-02', roomCapacity: '30'},
        {roomName:'A-03', roomCapacity: '12'},
        {roomName:'B-01', roomCapacity: '16'},
        {roomName:'B-02', roomCapacity: '5'},
        {roomName:'C-03', roomCapacity: '8'},

    ];

    onTileSelectHandler(event){
        const meetingRoomInfo=event.detail;
        this.selectedMeetingRoomInfo=meetingRoomInfo.roomName;
    }
    constructor(){
     super();
     this.template.addEventListener('tileclick', this.onTileSelectHandler(this));   
    }

}

