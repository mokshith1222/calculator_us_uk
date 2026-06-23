"use client";

import { useState, useEffect } from 'react';

export interface SavedScenario {
  id: string;
  calculatorSlug: string;
  calculatorName: string;
  dateSaved: string;
  data: Record<string, number>;
}

export function useLocalDatabase() {
  const [scenarios, setScenarios] = useState<SavedScenario[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('fth_scenarios');
      if (stored) {
        setScenarios(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Could not load scenarios", e);
    }
    setIsLoaded(true);
  }, []);

  const saveScenario = (calculatorSlug: string, calculatorName: string, data: Record<string, number>) => {
    const newScenario: SavedScenario = {
      id: crypto.randomUUID(),
      calculatorSlug,
      calculatorName,
      dateSaved: new Date().toISOString(),
      data
    };
    
    const updated = [newScenario, ...scenarios];
    setScenarios(updated);
    localStorage.setItem('fth_scenarios', JSON.stringify(updated));
    return newScenario;
  };

  const deleteScenario = (id: string) => {
    const updated = scenarios.filter(s => s.id !== id);
    setScenarios(updated);
    localStorage.setItem('fth_scenarios', JSON.stringify(updated));
  };

  return { scenarios, saveScenario, deleteScenario, isLoaded };
}
