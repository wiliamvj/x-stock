import { Router } from 'express';

import { ValidateToken } from './middlewares/ValidateToken';

import { CreateTokenController } from './modules/CreateToken/CreateTokenController';
import { SearchStockQuoteController } from './modules/StockQuote/SearchStockQuoteController';
import { StockHistoryController } from './modules/StockHistory/StockHistoryController';
import { StockForComparison } from './modules/StockComparison/StockForComparison';
import { CalculateStockGains } from './modules/StockGains/CalculateStockGains';

const createTokenController = new CreateTokenController();

const searchStockQuoteController = new SearchStockQuoteController();
const stockHistoryController = new StockHistoryController();
const stockForComparison = new StockForComparison();
const calculateStockGains = new CalculateStockGains();

const routes = Router();

routes.post('/create/token', createTokenController.create);

routes.get(`/stock/:stockName/quote`, searchStockQuoteController.handle);

routes.get(
  `/stocks/:stockName/history`,
  ValidateToken,
  stockHistoryController.handle
);

routes.get(
  `/stocks/:stockName/compare`,
  ValidateToken,
  stockForComparison.handle
);

routes.get(
  `/stocks/:stockName/gains`,
  ValidateToken,
  calculateStockGains.handle
);

export { routes };
