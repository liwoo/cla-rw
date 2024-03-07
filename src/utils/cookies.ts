export function getBannerCookie(bannerId: string) {
  return document.cookie.split(";").find((cookie) => {
    return cookie.includes(`banner-${bannerId}=true`);
  });
}

export function setBannerCookie(bannerId: string) {
  document.cookie = `banner-${bannerId}=true; max-age=2592000; path=/`;
}
