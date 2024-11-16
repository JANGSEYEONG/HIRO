import { create } from 'zustand';
import { createJSONStorage, persist, devtools } from 'zustand/middleware';

interface FilterState {
  selectedJob: string | null;
  selectedExperience: string | null;
  selectedLanguage: string | null;
  filteredResumes: unknown[]; // 필터링된 이력서 상태
  setSelectedJob: (job: string | null) => void;
  setSelectedExperience: (experience: string | null) => void;
  setSelectedLanguage: (language: string | null) => void;
  setFilteredResumes: (resumes: unknown[]) => void; // 필터링된 이력서를 업데이트하는 함수
}

// 필터 상태 저장 스토어
export const useFilterStore = create<FilterState>()(
  devtools(
    persist(
      (set) => ({
        selectedJob: null,
        selectedExperience: null,
        selectedLanguage: null,
        filteredResumes: [],
        setSelectedJob: (job) => set({ selectedJob: job }),
        setSelectedExperience: (experience) => set({ selectedExperience: experience }),
        setSelectedLanguage: (language) => set({ selectedLanguage: language }),
        setFilteredResumes: (resumes) => set({ filteredResumes: resumes }),
      }),
      {
        name: 'filter-store', // 로컬 스토리지에 저장될 키 이름
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);
