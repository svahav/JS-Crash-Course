import { LightningElement,track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    @track CurrentResult;
    FirstNumber;
    SecondNumber;
    @track ResultHistoryList=[];
    @track checkedResult=false;

NumberHandler(event){
    const inboxName=event.target.name;
    if(inboxName==='מספר ראשון'){
        this.FirstNumber=event.target.value;
    }else if(inboxName==='מספר שני'){
            this.SecondNumber=event.target.value;
        }
    }
    addHandler(){
        const FirstN=parseInt(this.FirstNumber);
        const SecondN=parseInt(this.SecondNumber);
        this.CurrentResult=`התוצאה של ${FirstN} + ${SecondN} היא: ${FirstN+SecondN} `;
        this.ResultHistoryList.push(this.CurrentResult);


    }
    subHandler(){
        const FirstN=parseInt(this.FirstNumber);
        const SecondN=parseInt(this.SecondNumber);
        this.CurrentResult=`התוצאה של ${FirstN} - ${SecondN} היא: ${FirstN-SecondN} `;
        this.ResultHistoryList.push(this.CurrentResult);


    }
    multiplyHandler(){
        const FirstN=parseInt(this.FirstNumber);
        const SecondN=parseInt(this.SecondNumber);
        this.CurrentResult=`התוצאה של ${FirstN} * ${SecondN} היא: ${FirstN*SecondN} `;
        this.ResultHistoryList.push(this.CurrentResult);


    }
    divisionHandler(){
        const FirstN=parseInt(this.FirstNumber);
        const SecondN=parseInt(this.SecondNumber);
        this.CurrentResult=`התוצאה של ${FirstN} / ${SecondN} היא: ${FirstN/SecondN} `;
        this.Resu ltHistoryList.push(this.CurrentResult);


    }
    ShowResultList(event){
        this.checkedResult=event.target.checked;
    }
}