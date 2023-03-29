import React, { useRef, useEffect } from 'react';

export default function Cart({ accessToken }) {
  const ref = useRef(null);

  const renderMicrofrontend = () => {
    window.mountCartMfe(ref.current, accessToken);
  }

  useEffect(() => {
    if (window && document && !document.getElementById('app-cart')) {
      const script = document.createElement('script');
      script.id = 'app-cart';
      script.src = 'http://localhost:8082/main.js';
      script.onload = renderMicrofrontend;
      document.head.appendChild(script);
    } else {
      renderMicrofrontend();
    }
  }, []);

  return (
    <div ref={ref} />
  )
}