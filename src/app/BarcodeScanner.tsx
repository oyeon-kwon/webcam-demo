"use client";

import { useEffect, useState } from "react";
import { useZxing } from "react-zxing";
import "./BarcodeScanner.css";

export const BarcodeScanner = () => {
  const [result, setResult] = useState("");
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
  });

  useEffect(() => {
    if (result) {
      window.location.href = result;
    }
  }, [result]);

  return (
    <>
      <video ref={ref} className="barcode_wrapper" />
      <p>
        <span>Last result:</span>
        <span>{result}</span>
      </p>
    </>
  );
};
