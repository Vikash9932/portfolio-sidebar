import { useState, useEffect } from 'react';
import { getProjectsFilter } from '../services/firestore';
import { defaultFilters } from '../constants/projectsFilter';

export const useProjectFilters = () => {
  const [filters, setFilters] = useState<string[]>(defaultFilters);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFilters = async () => {
      setIsLoading(true);
      try {
        const fetchedFilters = await getProjectsFilter();
        setFilters(fetchedFilters);
        setError(null);
      } catch (err) {
        console.error('Failed to load filters:', err);
        setError('Failed to load filters');
        setFilters(defaultFilters);
      } finally {
        setIsLoading(false);
      }
    };

    loadFilters();
  }, []);

  return { filters, isLoading, error };
};
