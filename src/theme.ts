interface ThemeInterface{
    name: string;
    pallet: {
        title: string;

        text: string;
        textPlaceholder: string;
        
        background: string;

        primary: string;

        red: string;
        red2: string;
    }
    font: {
        family: string;
    }
}

export type {ThemeInterface}

export const lightTheme : ThemeInterface = {
    name: 'light',
    pallet: {
        title: '#7A7A7A',
        text: '#979797',
        textPlaceholder: '#C4C4C4',

        background: '#F8F9FA',
        primary: '#161616',

        red: "#ef233c",
        red2: "#d90429"
    },
    font: {
        family: 'Inter',
    }
}

export const darkTheme : ThemeInterface = {
    name: 'dark',
    pallet: {
        title: '#F8F9FA',

        text: '#F8F9FA',
        textPlaceholder: '#C4C4C4',

        background: '#161616',
        primary: '#F8F9FA',

        red: "#ef233c",
        red2: "#d90429"
    },
    font: {
        family: 'Inter',
    }
}