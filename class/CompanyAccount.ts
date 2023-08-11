import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loan: number): void => {
    if(this.getStatus() == true){
    var  newLoan: number = this.getBalance()
    newLoan += loan
    this.setBalance(newLoan)
    console.log(this.getName(), 'pegou um empréstimo de R$: ' + loan)
    console.log('Seu novo Saldo é de', this.getBalance())
    } else{
      console.error('Conta inválida');
     }

  }
}
