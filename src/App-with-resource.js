import React, { useState, Suspense, useTransition } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { createResource } from "./utils";

const initialResource = createResource();

const InvoiceInfo = () => {
  const [resource, setResource] = useState(initialResource);
  const [startTransition, isPending] = useTransition({
    timeoutMs: 3000,
  });
  const invoice = resource.invoice.read();
  return (
    <div>
      <span>{invoice.date}</span>
      <button onClick={() => startTransition(setResource(createResource()))}>
        {isPending ? "Loading..." : "load"}
      </button>
    </div>
  );
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
