import React, { useState } from "react";
import TicketList from "./components/TicketList";
import Sidebar from "./components/Sidebar";
import ticketsData from "../tickets.json"; 
import './App.css'
const App: React.FC = () => {
   
    const [tickets] = useState(adaptTickets(ticketsData.tickets));
    const [selectedStops, setSelectedStops] = useState<number | null>(null);

    
    const filteredTickets = tickets.filter((ticket: { stops: number }) =>
        selectedStops === null ? true : ticket.stops === selectedStops
    );

    return (
        <div className="app">
            <Sidebar selectedStops={selectedStops} setSelectedStops={setSelectedStops} />
            <TicketList tickets={filteredTickets} />
        </div>
    );
};


function adaptTickets(tickets: {
    origin: string;
    origin_name: string;
    destination: string;
    destination_name: string;
    departure_date: string;
    departure_time: string;
    arrival_date: string;
    arrival_time: string;
    carrier: string;
    stops: number;
    price: number;
}[]): any[] {
    return tickets.map(ticket => ({
        ...ticket,
        priceFormatted: `${ticket.price} ₽`, // Добавляем форматированную цену
    }));
}

export default App;
