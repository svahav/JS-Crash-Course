public with sharing class AccountResaultsController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(string searchKeyword) {
        return [SELECT Id, Name FROM Account WHERE Name LIKE :('%' + searchKeyword + '%') LIMIT 10];
    }
}
    