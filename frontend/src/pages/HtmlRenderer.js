import React, { useEffect, useState } from 'react';

const HtmlRenderer = ({ htmlContent, htmlFilePath }) => {
  const [fetchedHtml, setFetchedHtml] = useState('');

  useEffect(() => {
    // Fetch HTML content if htmlFilePath is provided
    const fetchHtmlContent = async () => {
      try {
        const response = await fetch(htmlFilePath);
        if (!response.ok) {
          throw new Error(`Error fetching file: ${response.statusText}`);
        }
        const html = await response.text();
        setFetchedHtml(html);
      } catch (error) {
        console.error('Error fetching HTML:', error);
        setFetchedHtml('<p>Error loading HTML content.</p>');
      }
    };

    if (htmlFilePath) {
      fetchHtmlContent();
    }
  }, [htmlFilePath]);

  // Determine which HTML content to render: fetched or passed as prop
  const contentToRender = htmlFilePath ? fetchedHtml : htmlContent;

  return (
    <div
      dangerouslySetInnerHTML={{ __html: contentToRender }} // Inject HTML safely
    />
  );
};

export default HtmlRenderer;
