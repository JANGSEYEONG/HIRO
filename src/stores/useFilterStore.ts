import { create } from 'zustand';
import { createJSONStorage, persist, devtools } from 'zustand/middleware';

interface FilterState {
  selectedJob: string | null;
  selectedExperience: string | null;
  selectedLanguage: string | null;
  setSelectedJob: (job: string | null) => void;
  setSelectedExperience: (experience: string | null) => void;
  setSelectedLanguage: (language: string | null) => void;
}

// 필터 상태 저장 스토어
export const useFilterStore = create<FilterState>()(
  devtools(
    persist(
      (set) => ({
        selectedJob: null,
        selectedExperience: null,
        selectedLanguage: null,
        setSelectedJob: (job) => set({ selectedJob: job }),
        setSelectedExperience: (experience) => set({ selectedExperience: experience }),
        setSelectedLanguage: (language) => set({ selectedLanguage: language }),
      }),
      {
        name: 'filter-store', // 로컬 스토리지에 저장될 키 이름
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);
