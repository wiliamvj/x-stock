import { Router } from 'express';

import { ValidateToken } from './middlewares/ValidateToken';

import { CreateTokenController } from './modules/CreateToken/CreateTokenController';

import { SearchStockQuoteController } from './modules/StockQuote/SearchStockQuoteController';
import { StockHistoryController } from './modules/StockHistory/StockHistoryController';

const createTokenController = new CreateTokenController();

const searchStockQuoteController = new SearchStockQuoteController();
const stockHistoryController = new StockHistoryController();

const routes = Router();

routes.post('/create/token', createTokenController.create);

routes.get(
  `/stock/:stockName/quote`,
  ValidateToken,
  searchStockQuoteController.handle
);

routes.get(
  `/stocks/:stockName/history`,
  ValidateToken,
  stockHistoryController.handle
);

export { routes };
