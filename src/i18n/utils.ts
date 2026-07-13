export type Lang = "fr" | "en";

export function hrefForLang(href: string, lang: Lang) {
    return lang === "fr" ? href : "/en" + href;
}
