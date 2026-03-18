'use client';
import { useEffect, useRef } from 'react';
import { renderAsync } from 'docx-preview';
import { getExampleArticle } from '@/lib/content';

export default function DocViewer({ fileBuffer } : {fileBuffer: String}) {
  const containerRef = useRef(null);

  useEffect(() => {
    async function loadDoc( ){
        const articleContent = (await getExampleArticle("example-article")).body;
        if (articleContent && containerRef.current) {
          renderAsync(new Blob([articleContent]), containerRef.current);
        }
    }
    loadDoc();
  }, []);

  return <div ref={containerRef} className="w-full h-screen" />;
}