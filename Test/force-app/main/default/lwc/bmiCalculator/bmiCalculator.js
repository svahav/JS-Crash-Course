 import { LightningElement, track } from 'lwc';
 import { getBmi } from 'c/bmi';

export default class BmiCalculator extends LightningElement {
    @track Weight;
    @track Height;
    BMIResult;
    
    GetWeight(event){
        this.Weight=parseFloat(event.target.value);
    }

    GetHeight(event){
        this.Height=parseFloat(event.target.value);
    }
    CalculateBMI(){
 this.bmi=getBmi(this.Weight, this.Height)
      
    }

    get BMIValue(){
        if(this.BMIResult===undefined){
            return "";
        }
        return  `Your BMI is: ${this.BMIResult}`;
    }
    
}