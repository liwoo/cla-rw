export function isScalarImage(image: string): boolean {
  return image.endsWith(".svg") || image.endsWith(".png");
}

export function truncateString(str: string, num: number = 50): string {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
}

export function getHumanReadableDate(date: string): string {
  return new Date(date).toDateString();
}

export function pad(number: string, length = 2): string {
  return number.padStart(length, "0");
}

export function removeWhiteSpaces(text: string): string {
  //remove any double or more white space
  return text.replace(/\s{2,}/g, " ");
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}
