'use client';
import { useState, useEffect } from 'react';
import { useFilterStore } from '@/stores/useFilterStore';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LuFilter } from 'react-icons/lu';
import { useGetAllResume } from '@/hooks/queries/useResumeService';

export default function ResumeFilter() {
  const { filteredResumes, setFilteredResumes } = useFilterStore();
  const { data } = useGetAllResume();
  console.log('!!!!', data);
  const resume_responses = [
    {
      resume_id: 1,
      applicant_name: '김철수',
      job_category: 'backend',
      years: '0-3',
      language: 'python',
    },
    {
      resume_id: 2,
      applicant_name: '이영희',
      job_category: 'frontend',
      years: '3-7',
      language: 'javascript',
    },
    {
      resume_id: 3,
      applicant_name: '박지민',
      job_category: 'ai',
      years: '7-10',
      language: 'python',
    },
    {
      resume_id: 4,
      applicant_name: '최동훈',
      job_category: 'fullstack',
      years: '3-7',
      language: 'typescript',
    },
    {
      resume_id: 5,
      applicant_name: '정수진',
      job_category: 'backend',
      years: '7-10',
      language: 'java',
    },
    {
      resume_id: 6,
      applicant_name: '한미래',
      job_category: 'frontend',
      years: '0-3',
      language: 'typescript',
    },
    {
      resume_id: 7,
      applicant_name: '송태양',
      job_category: 'backend',
      years: '3-7',
      language: 'kotlin',
    },
    {
      resume_id: 8,
      applicant_name: '강하늘',
      job_category: 'ai',
      years: '7-10',
      language: 'python',
    },
  ];
  const { setSelectedJob, setSelectedExperience, setSelectedLanguage } = useFilterStore();

  // 로컬 상태로 임시 저장
  const [tempJob, setTempJob] = useState<string | null>(null);
  const [tempExperience, setTempExperience] = useState<string | null>(null);
  const [tempLanguage, setTempLanguage] = useState<string | null>(null);

  const jobCategories = [
    { label: 'Frontend', value: 'frontend' },
    { label: 'Backend', value: 'backend' },
    { label: 'AI', value: 'ai' },
    { label: 'Fullstack', value: 'fullstack' },
  ];

  const experiences = [
    { label: 'Junior (0-3 years)', value: '0-3' },
    { label: 'Mid-Level (3-7 years)', value: '3-7' },
    { label: 'Senior (7-10 years)', value: '7-10' },
  ];

  const programmingLanguages = [
    { label: 'Python', value: 'python' },
    { label: 'Java', value: 'java' },
    { label: 'JavaScript', value: 'javascript' },
    { label: 'TypeScript', value: 'typescript' },
    { label: 'Kotlin', value: 'kotlin' },
    { label: 'C++', value: 'c++' },
    { label: 'C', value: 'c' },
  ];

  const FilterDropdown = ({
    label,
    options,
    selectedValue,
    onChange,
  }: {
    label: string;
    options: { label: string; value: string }[];
    selectedValue: string | null;
    onChange: (value: string) => void;
  }) => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-60 justify-between">
            {selectedValue
              ? options.find((option) => option.value === selectedValue)?.label
              : `▿ ${label}`}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
          {options.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => onChange(option.value)}
              className={selectedValue === option.value ? 'font-bold' : ''}>
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  const handleSearch = () => {
    setSelectedJob(tempJob); // zustand에 상태 저장
    setSelectedExperience(tempExperience);
    setSelectedLanguage(tempLanguage);

    const filteredResumes = (data || []).filter((resume) => {
      console.log('::::::');
      console.log('resume.career::::', resume.career);
      console.log('tempExperience::::', tempExperience);
      //console.log('resume.jobCategories[0]', resume.jobCategories[0]);
      //console.log('tempLanguage::::', tempLanguage);

      const matchesJob = tempJob !== null ? resume.jobCategories[0] === tempJob : true;
      const matchesExperience = tempExperience ? resume.career === tempExperience : true;
      const matchesLanguage = tempLanguage ? resume.languages[0] === tempLanguage : true;

      return matchesJob && matchesExperience && matchesLanguage;
    });

    console.log('선택한 필터:', {
      직무: tempJob,
      경력: tempExperience,
      언어: tempLanguage,
    });
    console.log('필터링된 이력서:>>>>', filteredResumes);
    setFilteredResumes(filteredResumes);
  };

  return (
    <div>
      {/* <h3 className="mb-4 text-lg font-semibold">필터링 기준</h3> */}
      <div className="flex space-x-4">
        <Badge className="bg-gray-400">
          <LuFilter />
        </Badge>
        <FilterDropdown
          label="직무 카테고리"
          options={jobCategories}
          selectedValue={tempJob}
          onChange={setTempJob} // 로컬 상태 업데이트
        />
        <FilterDropdown
          label="경력"
          options={experiences}
          selectedValue={tempExperience}
          onChange={setTempExperience} // 로컬 상태 업데이트
        />
        <FilterDropdown
          label="프로그래밍 언어"
          options={programmingLanguages}
          selectedValue={tempLanguage}
          onChange={setTempLanguage} // 로컬 상태 업데이트
        />
        <Button onClick={handleSearch}>검색</Button>
      </div>
    </div>
  );
}
