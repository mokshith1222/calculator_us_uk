import { useState, useEffect } from 'react';

export interface RecentTool {
  slug: string;
  name: string;
  timestamp: number;
}

export function useRecentTools() {
  const [recentTools, setRecentTools] = useState<RecentTool[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('recentTools');
      if (stored) {
        setRecentTools(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Error loading recent tools', e);
    }
  }, []);

  const addRecentTool = (slug: string, name: string) => {
    try {
      const stored = localStorage.getItem('recentTools');
      let tools: RecentTool[] = stored ? JSON.parse(stored) : [];
      
      // Remove if it already exists
      tools = tools.filter(t => t.slug !== slug);
      
      // Add to front
      tools.unshift({ slug, name, timestamp: Date.now() });
      
      // Keep only last 4
      if (tools.length > 4) {
        tools = tools.slice(0, 4);
      }
      
      localStorage.setItem('recentTools', JSON.stringify(tools));
      setRecentTools(tools);
    } catch (e) {
      console.error('Error saving recent tool', e);
    }
  };

  return { recentTools, addRecentTool };
}
