import { Router } from 'express';

import { ValidateToken } from './middlewares/ValidateToken';

import { CreateTokenController } from './modules/CreateToken/CreateTokenController';
import { StockSearchSymbolController } from './modules/StockQuote/StockSearchSymbolController';

import { SearchStockQuoteController } from './modules/StockQuote/SearchStockQuoteController';
import { StockHistoryController } from './modules/StockHistory/StockHistoryController';

const createTokenController = new CreateTokenController();
const stockSearchSymbolController = new StockSearchSymbolController();

const searchStockQuoteController = new SearchStockQuoteController();
const stockHistoryController = new StockHistoryController();

const routes = Router();

routes.post('/create/token', createTokenController.create);
routes.post('/search', ValidateToken, stockSearchSymbolController.symbol);

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
