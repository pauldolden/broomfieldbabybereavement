import { BLOCKS, TopLevelBlock } from '@contentful/rich-text-types';

export interface TextWithImage {
  metadata: Metadata;
  sys: TextWithImageSys;
  fields: Fields;
}

export interface Fields {
  title: string;
  text: Text;
  image: Image;
  imageAltText: string;
  showButton: boolean;
  buttonText: string;
  buttonLink: string;
}

export interface Image {
  sys: ImageSys;
}

export interface ImageSys {
  type: string;
  linkType: string;
  id: string;
}

export interface Text {
  data: Data;
  content: TopLevelBlock[];
  nodeType: BLOCKS.DOCUMENT;
}

export interface TextContent {
  data: Data;
  content: ContentContent[];
  nodeType: BLOCKS.DOCUMENT;
}

export interface ContentContent {
  data: Data;
  marks: any[];
  value: string;
  nodeType: string;
}

export interface Data {
}

export interface Metadata {
  tags: any[];
}

export interface TextWithImageSys {
  space: Image;
  id: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  environment: Image;
  revision: number;
  contentType: Image;
  locale: string;
}
