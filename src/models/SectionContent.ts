export interface SectionContent {
    metadata: Metadata;
    sys:      SectionContentSys;
    fields:   Fields;
}

export interface Fields {
    name:          string;
    contentBlocks: ContentType[];
}

export interface ContentType {
    sys: ContentTypeSys;
}

export interface ContentTypeSys {
    type:     string;
    linkType: string;
    id:       string;
}

export interface Metadata {
    tags: any[];
}

export interface SectionContentSys {
    space:       ContentType;
    id:          string;
    type:        string;
    createdAt:   Date;
    updatedAt:   Date;
    environment: ContentType;
    revision:    number;
    contentType: ContentType;
    locale:      string;
}

