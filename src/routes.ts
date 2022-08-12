import { Router } from 'express';

import { ValidateToken } from './middlewares/ValidateToken';

import { CreateTokenController } from './modules/CreateToken/CreateTokenController';
import { StockSearchSymbolController } from './modules/StockQuote/StockSearchSymbolController';

import { SearchStockQuote } from './modules/StockQuote/SearchStockQuote';

const createTokenController = new CreateTokenController();
const stockSearchSymbolController = new StockSearchSymbolController();

const searchStockQuote = new SearchStockQuote();

const routes = Router();

routes.post('/create/token', createTokenController.create);
routes.post('/search', ValidateToken, stockSearchSymbolController.symbol);

routes.get(`/stock/:stockName/quote`, ValidateToken, searchStockQuote.handle);

export { routes };
