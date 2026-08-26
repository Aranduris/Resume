const fallbackSiteUrl = "https://ritwik-katiyar.rick0502.chatgpt.site";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl;
export const siteRoot = `${siteUrl.replace(/\/$/, "")}/`;

export function getAbsoluteSiteUrl(path: string) {
  return new URL(path.replace(/^\//, ""), siteRoot).toString();
}
