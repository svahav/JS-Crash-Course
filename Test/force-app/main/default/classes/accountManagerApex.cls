public with sharing class accountManagerApex {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccount(integer numberOfRecords){

        return [SELECT Id, Name, Phone FROM Account Limit :numberOfRecords ];
    }
}