import { LightningElement, wire, track,api } from "lwc";
import getRecords from "@salesforce/apex/GenericObjectManagerApex.getRecords";
import getObjectLabel from "@salesforce/apex/ObjectInfoController.getObjectLabel";
import { getObjectInfo } from 'lightning/uiObjectInfoApi';


export default class AutoCompleteSearch extends LightningElement {
  @track searchKeyword = "";
  @track objectRecords = [];
  @track showResults = false;
  @api objectApiName = "Regulations__c"; // Default object API name, change as needed
  @api fieldApiName= "RequlationNum__c";
  @api numberOfRecords=10;
   objectLabel='';
   objectIcon='';
   @track themeInfo;


  handleSearchChange(event) {
    this.searchKeyword = event.target.value;
  }

@wire(getObjectLabel,{objectApiName: '$objectApiName'})
wiredObjectLabel({ error, data }) {
  if (data) {
      this.objectLabel = data; // Update objectLabel with the retrieved label
  } else if (error) {
      console.error(error);
  }
}

@wire(getObjectInfo, { objectApiName: "$objectApiName" })
handleResult({error, data}) { //T01 -> to fetch icon name for object on run time.
    if(data) {
        let objectInformation = data;    
        console.log('--objectInformation-- object--'+JSON.stringify(objectInformation)+ '--'+this.objectApiName) ;     
       let iconUrl  = objectInformation.themeInfo.iconUrl ;
        let objectIcon = '';

if (iconUrl && iconUrl.trim() !== '') {
const urlList = iconUrl.split('/');
if (urlList.length > 2) {
  const iconSvg = urlList[urlList.length - 1];
  const iconName = iconSvg.substring(0, iconSvg.lastIndexOf('_'));
  this.iconName = `${urlList[urlList.length - 2]}:${iconName}`;
  console.log('--iconName--'+JSON.stringify(iconName));
}
}
    }
  }

  @wire(getRecords, { objectApiName: "$objectApiName", numberOfRecords: 10, searchKeyword: "$searchKeyword", fieldApiName: "$fieldApiName"})
  wiredRecords({ error, data }) {
    if (data) {
      this.objectRecords=data;
      // this.objectRecords = data;
      data.forEach(element => {
        this.objectRecords.push({...element, field: element[this.fieldApiName]})
      });
      console.log("data=>> ", JSON.stringify(this.objectRecords))
      
    } else if (error) {
      console.error(error);
    }
  }
  handleInputFocus(){
    this.showResults=true;
  }

  handleInputBlur(){
    this.showResults = false;

  }
  get show() {
    if (this.showResults && this.objectRecords.length > 0) {
      return true;
    }
    return false;
  }

}
  


