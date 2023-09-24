export type Resources = {
  sys: ResourcesSys;
  total: number;
  skip: number;
  limit: number;
  items: Item[];
  includes: Includes;
}

export type Includes = {
  Asset: Asset[];
}

export type Asset = {
  metadata: Metadata;
  sys: AssetSys;
  fields: AssetFields;
}

export type AssetFields = {
  title: string;
  description: string;
  file: File;
}

export type File = {
  url: string;
  details: Details;
  fileName: string;
  contentType: string;
}

export type Details = {
  size: number;
  image: DetailsImage;
}

export type DetailsImage = {
  width: number;
  height: number;
}

export type Metadata = {
  tags: any[];
}

export type AssetSys = {
  space: ContentTypeClass;
  id: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  environment: ContentTypeClass;
  revision: number;
  locale: string;
  contentType?: ContentTypeClass;
}

export type ContentTypeClass = {
  sys: ImageSys;
}

export type ImageSys = {
  id: string;
  type: string;
  linkType: string;
}

export type Item = {
  metadata: Metadata;
  sys: AssetSys;
  fields: ItemFields;
}

export type ItemFields = {
  name: string;
  image: ContentTypeClass;
  imageAltText: string;
  description: Description;
  url: string;
}

export type Description = {
  data: Data;
  content: DescriptionContent[];
  nodeType: string;
}

export type DescriptionContent = {
  data: Data;
  content: ContentContent[];
  nodeType: string;
}

export type ContentContent = {
  data: Data;
  marks: any[];
  value: string;
  nodeType: string;
}

export type Data = {
}

export type ResourcesSys = {
  type: string;
}

