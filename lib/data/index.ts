import { IDataRepository } from './types';
import { StaticDataRepository } from './staticProvider';

// Default to StaticDataRepository for version 1
// In version 2, simply inject SupabaseDataRepository when env var is set
export const dataRepo: IDataRepository = new StaticDataRepository();

export { useTourMode, ModeSwitcher, TourModeProvider } from '@/components/providers/TourModeProvider';
export * from './types';
export * from './mockData';
