import { SeoData } from "../SeoData";

export interface categoryDto {
  id: number;
  creationDate: string;
  title: string;
  slug: string;
  imageName: string;
  seoData: SeoData;
  childs: ChildCategoryDto[];
}

export interface ChildCategoryDto {
  id: number;
  creationDate: string;
  title: string;
  slug: string;
  seoData: SeoData;
  parentId: number;
  imageName: string;
  childs: SecondaryChildCategoryDto[];
}

export interface SecondaryChildCategoryDto {
  id: number;
  creationDate: string;
  title: string;
  slug: string;
  imageName: string;
  seoData: SeoData;
  parentId: number;
}

