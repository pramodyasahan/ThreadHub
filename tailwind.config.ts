import { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
    content: [
        'src/pages/**/*.{js, ts, tsx, jsx, mdx}',
        'src/components/**/*.{js, ts, tsx, jsx, mdx}',
        'src/app/**/*.{js, ts, tsx, jsx, mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js, ts, tsx, jsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    darkMode: 'class',
    plugins: [nextui()],
};
export default config;
