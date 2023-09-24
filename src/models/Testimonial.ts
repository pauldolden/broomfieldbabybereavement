export type Testimonial = {
  metadata: Metadata;
  sys: Sys;
  fields: Fields;
}

export type Fields = {
  name: string;
  quote: BorderColour[];
  attribution: string;
  borderColour: BorderColour[];
}

export type BorderColour = {
}

export type Metadata = {
  tags: any[];
}

export type Sys = {
  space: BorderColour[];
  id: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  environment: BorderColour[];
  revision: number;
  contentType: BorderColour[];
  locale: string;
}
