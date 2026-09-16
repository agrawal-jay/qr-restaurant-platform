import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import QRCode from "react-qr-code";

function HomePage() {

    const qrUrl = "http://localhost:3000/table/1/5";

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>

            <h1>Restaurant QR Testing</h1>

            <p>Scan this QR code</p>

            <div
                style={{
                    background: "white",
                    padding: "20px",
                    display: "inline-block"
                }}
            >
                <QRCode value={qrUrl} />
            </div>

            <p>
                URL:
                <br />
                {qrUrl}
            </p>

        </div>
    );
}


function TablePage() {

    const { restaurantId, tableNumber } = useParams();

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>

            <h1>QR Code Working ✅</h1>

            <h2>Restaurant ID: {restaurantId}</h2>

            <h2>Table Number: {tableNumber}</h2>

            <p>
                You successfully reached the table page.
            </p>

        </div>
    );
}


function App() {

    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<HomePage />}
                />

                <Route
                    path="/table/:restaurantId/:tableNumber"
                    element={<TablePage />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;