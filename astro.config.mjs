// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://olaren.dev",
    fonts: [
        {
            provider: fontProviders.npm(),
            options: {
                package: "allo-font",
            },
            name: "Allo",
            cssVariable: "--font",
            weights: ["100 900"],
        },
    ],
});
