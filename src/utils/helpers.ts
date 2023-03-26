export function isScalarImage(image: string): boolean {
    return image.endsWith('.svg') || image.endsWith('.png');
}