import React, { Suspense } from "react";
import logo from "./logo.svg";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import { fetchInvoice } from "./InvoiceAPI";

let invoice;
let error;

const invoicePromise = fetchInvoice().then(
  (inv) => {
    invoice = inv;
  },
  (err) => {
    error = err;
  }
);

const InvoiceInfo = () => {
  if (error) {
    throw error;
  }
  if (!invoice) {
    throw invoicePromise;
  }
  return <div>{invoice.date}</div>;
};

function App() {
  return (
    <div className="App">
      <ErrorBoundary fallback={<div>Sorry something went wrong</div>}>
        <Suspense fallback={<div>Loading data...</div>}>
          <InvoiceInfo />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
