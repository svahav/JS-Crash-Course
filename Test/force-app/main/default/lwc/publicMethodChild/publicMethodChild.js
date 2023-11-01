import { LightningElement, track, api } from 'lwc';

export default class PublicMethodChild extends LightningElement {
  @track value=['red']; 
  
  options=[

    {label:'Red Marker' , value: 'Red'},
    {label:'Blue Marker' , value: 'Blue'},
    {label:'Green Marker' , value: 'Green'},
    {label:'Yellow Marker' , value: 'Yellow'},
  ];
  @api
  selectCheckbox(checkboxValue){
    const selectedCheckbox=this.options.find(checkbox=>{
        return checkboxValue===checkbox.value;
    })
    if (selectedCheckbox){
       this.value=selectedCheckbox.value;
       return "Succesfully Checked";
  }
  return "No Checked Found";
  }
}