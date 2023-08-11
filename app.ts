import { CompanyAccount } from './class/CompanyAccount'
import { NewAccount } from './class/NewAccount'
import { PeopleAccount } from "./class/PeopleAccount"

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(20)
peopleAccount.withdraw(19)
peopleAccount.deposit(20)
peopleAccount.withdraw(10)


const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(20)
companyAccount.getLoan(100)
companyAccount.deposit(30)
companyAccount.getLoan(100)
companyAccount.deposit(50)
companyAccount.getLoan(100)


const newAccount: NewAccount = new NewAccount('Rafael', 30)
newAccount.deposit(40)
newAccount.deposit(40)
newAccount.deposit(40)