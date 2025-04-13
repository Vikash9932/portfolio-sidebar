import { collection, getDocs } from 'firebase/firestore';
import { defaultFilters } from '../constants/projectsFilter';
import { db } from '../config/firebase.config';

export const getProjectsFilter = async () => {
  try {
    const filtersCollection = collection(db, 'projectsFilter');
    const filtersSnapshot = await getDocs(filtersCollection);

    if (filtersSnapshot.empty) {
      console.log('No filters found in Firebase, using default filters');
      return defaultFilters;
    }

    const filterNames = filtersSnapshot.docs.map((doc) => doc.data().name);

    return filterNames;
  } catch (error) {
    console.error('Error fetching project filters:', error);
    return defaultFilters;
  }
};
