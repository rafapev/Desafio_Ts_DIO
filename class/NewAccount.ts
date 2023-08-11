import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount{

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (balance: number): void => {
        if(this.getStatus() == true){
            var newDeposit = this.getBalance()
            newDeposit += (balance + 10)
            console.log(this.getName(), 'depositou', balance)
            this.setBalance(newDeposit)
            console.log('Seu saldo é', this.getBalance())
        }
    }
}