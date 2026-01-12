import { ReactNode } from 'react';
import { Article, Activity } from '../config/content';

/**
 * User type identifiers for the unified dashboard system
 */
export type UserType = 'student' | 'teacher' | 'guardian' | 'school';

/**
 * Feature configuration for dashboard sidebar
 */
export interface SidebarFeature {
  icon: ReactNode;
  title: string;
  description: string;
}

/**
 * Sidebar configuration for dashboard
 */
export interface SidebarConfig {
  title: string;
  description: string;
  features: SidebarFeature[];
  ctaText: string;
  ctaHref: string;
  contactPhone?: string;
}

/**
 * Complete dashboard configuration for a user type
 */
export interface DashboardConfig {
  title: string;
  subtitle: string;
  sidebarConfig: SidebarConfig;
  showResourcesSection: boolean;
  showActivitiesSection: boolean;
}

/**
 * Content configuration with articles, activities, and free content limits
 */
export interface ContentConfig {
  articles: Article[];
  activities: Activity[];
  freeResourceCount: number;
  freeActivityCount: number;
}

/**
 * Partial content configuration for resources only
 */
export interface ResourcesConfig {
  articles: Article[];
  freeCount: number;
}

/**
 * Partial content configuration for activities only
 */
export interface ActivitiesConfig {
  activities: Activity[];
  freeCount: number;
}
