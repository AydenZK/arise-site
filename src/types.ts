import { type ReactNode } from "react";

export interface TestPack {
  title: string;
  description: string;
  questions: number;
  timeLimit: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  category: string;
}

export interface TestPackCardProps {
  testPack: TestPack;
}

export interface CategorySectionProps {
  title: string;
  description: string;
  testPacks: TestPack[];
}

export interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  buttonText: string;
}

export interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export interface LayoutProps {
  children: ReactNode;
}