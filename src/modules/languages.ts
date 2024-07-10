// In a file like languages.ts
export type Languages = {
    [key: string]: {
    nativeName: string;
};
};

export const lngs: Languages = {
    en: { nativeName: 'English' },
    fr: { nativeName: 'Français' },
    // Add other languages here
};
