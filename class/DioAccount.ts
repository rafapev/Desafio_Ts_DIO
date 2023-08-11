export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = false
  
    constructor(name: string, accountNumber: number){
      this.name = name
      this.accountNumber = accountNumber
      this.status = true
    }
  
    getName = (): string => {
      return this.name
    }
  
    deposit = (balance: number): void => {
      if(this.status == true){
        this.balance += balance
        console.log(this.getName(), 'depositou', balance)
        console.log('Seu saldo é de', this.getBalance())
      }
    }
  
    withdraw = (balance: number): void => {
      if(this.status == true){
        if(balance <= this.balance){
        this.balance -= balance
        console.log(this.getName(), 'sacou', balance) 
        console.log('Seu saldo é de', this.getBalance()) 
        } else {
          console.log('Saldo insuficiente para saque')
          console.log('Saldo Atual', this.getBalance())
        }
    } else {
      console.error('Conta Inválida');
      }
    }
  
    getBalance = (): number => {
      return this.balance
    }
  
    setBalance = (balance: number): void => {
       this.balance = balance
    }
  
    getStatus = (): boolean => {
      return this.status
    }
  }
  