import React, { useState } from "react";
import '../assets/styles/Sidebar.css';

interface SidebarProps {
    selectedStops: number | null;
    setSelectedStops: (stops: number | null) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedStops, setSelectedStops }) => {
    const [selectedCurrency, setSelectedCurrency] = useState<string>("RUB");

    const onCurrencyClick = (currency: string) => {
        setSelectedCurrency(currency);
    };

    return (
        <div className="content-sidebar">
            <div className="sidebar">
                <h2>Валюта</h2>
                <div className="currency-buttons">
                    <button
                        className={selectedCurrency === "RUB" ? "active" : ""}
                        onClick={() => onCurrencyClick("RUB")}
                    >
                        RUB
                    </button>
                    <button
                        className={selectedCurrency === "USD" ? "active" : ""}
                        onClick={() => onCurrencyClick("USD")}
                    >
                        USD
                    </button>
                    <button
                        className={selectedCurrency === "EUR" ? "active" : ""}
                        onClick={() => onCurrencyClick("EUR")}
                    >
                        EUR
                    </button>
                </div>

                <h2>Количество пересадок</h2>
                <div className="filters">
                    <input
                        type="checkbox"
                        id="all-stops"
                        checked={selectedStops === null}
                        onChange={() => setSelectedStops(null)}
                    />
                    <label htmlFor="all-stops">Все</label>

                    <input
                        type="checkbox"
                        id="no-stops"
                        value={0}
                        checked={selectedStops === 0}
                        onChange={() => setSelectedStops(0)}
                    />
                    <label htmlFor="no-stops">Без пересадок</label>

                    <input
                        type="checkbox"
                        id="one-stop"
                        value={1}
                        checked={selectedStops === 1}
                        onChange={() => setSelectedStops(1)}
                    />
                    <label htmlFor="one-stop">1 пересадка</label>

                    <input
                        type="checkbox"
                        id="two-stops"
                        value={2}
                        checked={selectedStops === 2}
                        onChange={() => setSelectedStops(2)}
                    />
                    <label htmlFor="two-stops">2 пересадки</label>

                    <input
                        type="checkbox"
                        id="three-stops"
                        value={3}
                        checked={selectedStops === 3}
                        onChange={() => setSelectedStops(3)}
                    />
                    <label htmlFor="three-stops">3 пересадки</label>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
