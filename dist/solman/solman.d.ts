import CreateTicket from './interface/CreateTicket';
export default class Solman {
    constructor();
    createTicket(config: CreateTicket): void;
    updateTicket(id: string): void;
    searchTicket(id: string): void;
}
