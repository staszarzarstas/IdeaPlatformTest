import React from "react";
import "../assets/styles/Ticket.css";
import logo from "../assets/img/logo.png";

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
        priceFormatted: string;
    };
}

// Функция для склонения слова "пересадка"
const getTransferLabel = (stops: number): string => {
    if (stops === 0) return "без пересадок";
    if (stops === 1) return "1 пересадка";
    if (stops >= 2 && stops <= 4) return `${stops} пересадки`;
    return `${stops} пересадок`;
};

const Ticket: React.FC<TicketProps> = ({ ticket }) => {
    return (
        <div className="ticket">
            <div className="ticket-buy">
                <div className="ticket-header">
                    <h1>TURKISH AIRLINES</h1>
                    <img src={logo} alt="Logo" />
                </div>
                <a href="#">Купить за {ticket.price} ₽</a>
            </div>
            <div className="content-tiket">
                <div className="departure-time">
                    <h2>{ticket.departure_time}</h2>
                    <p>
                        {ticket.origin}, {ticket.origin_name}
                    </p>
                    <p className="dep-date">{ticket.departure_date}</p>
                </div>

                <div className="transfer">
                    <span>{getTransferLabel(ticket.stops)}</span>
                    <div className="arrow">
                        <i className="plane-icon">✈</i>
                    </div>
                </div>

                <div className="arrival-time">
                    <h2>{ticket.arrival_time}</h2>
                    <p>
                        {ticket.destination_name}, {ticket.destination}
                    </p>
                    <p>{ticket.arrival_date}</p>
                </div>
            </div>
        </div>
    );
};

export default Ticket;
