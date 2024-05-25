"use client"; // Ensure this is a Client Component

import React, { useEffect } from 'react';

const OpenWidgetClient: React.FC = () => {
  useEffect(() => {
    // Set up OpenWidget settings
    (window as any).__ow = (window as any).__ow || {};
    (window as any).__ow.organizationId = "83b4ec32-bd2e-4b04-8743-d2ae7348c386";
    (window as any).__ow.integration_name = "manual_settings";
    (window as any).__ow.product_name = "openwidget";

    // Create and append the script element
    const script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.src = 'https://cdn.openwidget.com/openwidget.js';
    document.head.appendChild(script);

    // Cleanup the script when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <noscript>
      You need to <a href="https://www.openwidget.com/enable-javascript" rel="noopener nofollow">enable JavaScript</a> to use the communication tool powered by <a href="https://www.openwidget.com/" rel="noopener nofollow" target="_blank">OpenWidget</a>
    </noscript>
  );
};

export default OpenWidgetClient;