export class StoreService {
    
    get token() { return this._token; }
    set token(tokenValue) { this._token = tokenValue; }
}

// Singleton of StoreService
export const storeService = new StoreService();