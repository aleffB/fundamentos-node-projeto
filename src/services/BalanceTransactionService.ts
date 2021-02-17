import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request {
  value: number;
  type: 'income' | 'outcome';

}


class BalanceTransactionService{
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }
  public execute({value,type}: Request) {
    // TODO
    if(type === 'income'){
      const income = value;
      const outcome = 0;
      const total =+ income;
      const balanceData = this.transactionsRepository.getBalance({
        income,
        outcome,
        total

    });
    return balanceData;
    }else{
      const income = 0;
      const outcome = value;
      const total =+ outcome;
      const balanceData = this.transactionsRepository.getBalance({
        income,
        outcome,
        total

    });

      return balanceData;
    }



  }



}

export default BalanceTransactionService;
