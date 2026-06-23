"use client";

import { useEffect } from 'react';
import { useRecentTools } from '@/hooks/useRecentTools';

export function RecentToolTracker({ slug, name }: { slug: string, name: string }) {
  const { addRecentTool } = useRecentTools();

  useEffect(() => {
    addRecentTool(slug, name);
  }, [slug, name]);

  return null; // Invisible component
}
