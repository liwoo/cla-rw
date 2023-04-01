export function isScalarImage(image: string): boolean {
    return image.endsWith('.svg') || image.endsWith('.png');
}

export function truncateString(str: string, num: number = 50): string {
    if (str.length <= num) {
        return str
    }
    return str.slice(0, num) + '...'
}