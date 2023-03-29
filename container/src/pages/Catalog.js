import React, { useRef, useEffect } from 'react';

export default function Catalog() {
  const ref = useRef(null);

  const renderMicrofrontend = () => {
    window.mountCatalogMfe(ref.current);
  }

  useEffect(() => {
    if (window && document) {
      const script = document.createElement('script');
      script.id = 'app-catalog';
      script.src = 'http://localhost:8081/main.js';
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