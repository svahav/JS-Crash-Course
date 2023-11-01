import { LightningElement, track } from "lwc";
import getAllAccounts from "@salesforce/apex/accountManagerApex.getAccount";
export default class AccountManagerApex extends LightningElement {
  @track numberOfRecords;
  accounts;
  responseRecievedFromAccount() {
    if (this.accounts) {
      return true;
    }
    return false;
  }
  changeNumberOfAccountsHandler(event) {
    this.numberOfRecords = event.target.value;
  }

  showAccountHandler() {
    getAllAccounts({ numberOfRecords: this.numberOfRecords })
      .then((response) => {
        this.accounts = response;
      })
      .catch((error) => {
        console.error("Error In Getting All Accounts", error.body.message);
      });
  }
}
