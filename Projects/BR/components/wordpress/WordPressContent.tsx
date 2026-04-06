"use client"

import { stripHtmlTags } from "@/lib/wordpress"
import type { WordPressPage, WordPressPost } from "@/lib/wordpress"

interface WordPressContentProps {
  content: WordPressPage | WordPressPost
  className?: string
}

export default function WordPressContent({ content, className = "" }: WordPressContentProps) {
  return (
    <div className={`wordpress-content ${className}`}>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">{stripHtmlTags(content.title.rendered)}</h1>

      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{
          __html: content.content.rendered,
        }}
      />

      <style jsx global>{`
        .wordpress-content .prose {
          color: #374151;
        }
        
        .wordpress-content .prose h1,
        .wordpress-content .prose h2,
        .wordpress-content .prose h3,
        .wordpress-content .prose h4 {
          color: #1f2937;
          font-weight: 700;
        }
        
        .wordpress-content .prose h2 {
          border-bottom: 2px solid #40E0D0;
          padding-bottom: 0.5rem;
          margin-top: 2rem;
        }
        
        .wordpress-content .prose a {
          color: #40E0D0;
          text-decoration: none;
        }
        
        .wordpress-content .prose a:hover {
          color: #9B59B6;
          text-decoration: underline;
        }
        
        .wordpress-content .prose blockquote {
          border-left: 4px solid #40E0D0;
          background: #f0f9ff;
          padding: 1rem;
          margin: 1.5rem 0;
        }
        
        .wordpress-content .prose ul li::marker {
          color: #9B59B6;
        }
        
        .wordpress-content .prose img {
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  )
}
