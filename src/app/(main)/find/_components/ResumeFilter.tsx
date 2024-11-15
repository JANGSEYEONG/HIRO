'use client';

import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LuFilter } from 'react-icons/lu';

export default function ResumeFilter() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

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
          selectedValue={selectedJob}
          onChange={setSelectedJob}
        />
        <FilterDropdown
          label="경력"
          options={experiences}
          selectedValue={selectedExperience}
          onChange={setSelectedExperience}
        />
        <FilterDropdown
          label="프로그래밍 언어"
          options={programmingLanguages}
          selectedValue={selectedLanguage}
          onChange={setSelectedLanguage}
        />
        <Button>검색</Button>
      </div>
    </div>
  );
}
