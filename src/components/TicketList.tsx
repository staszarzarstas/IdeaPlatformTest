import React from "react";
import Ticket from "./Ticket";

interface TicketProps {
    ticket: {
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
        priceFormatted: string; // Добавим новый атрибут priceFormatted
    };
}

interface TicketListProps {
    tickets: TicketProps["ticket"][]; // Массив объектов билетов
}

const TicketList: React.FC<TicketListProps> = ({ tickets }) => {
    return (
        <div className="ticket-list">
            {tickets.map((ticket, index) => (
                <Ticket key={index} ticket={ticket} />
            ))}
        </div>
    );
};

export default TicketList;
