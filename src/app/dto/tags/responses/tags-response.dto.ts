export interface TagsResponseDTO {
    id: number;
    name: string;
    status: 'success' | 'error';
    message: string;
}