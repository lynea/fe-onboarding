export interface TextContainerProps {
    TextContainerObj: {
        imageUrl?: string;
        title: string;
        paragraphs: paragraph[];
        
    };
}

export interface paragraph {
    title: string;
    body: {
        text?: string;
        codeBlock?: string;
    }
}