export function getBannerCookie(bannerId: string) {
  if (typeof document === "undefined") return;
  return document.cookie.split(";").find((cookie) => {
    return cookie.includes(`banner-${bannerId}=true`);
  });
}

export function setBannerCookie(bannerId: string) {
  if (typeof document === "undefined") return;
  document.cookie = `banner-${bannerId}=true; max-age=2592000; path=/`;
}
