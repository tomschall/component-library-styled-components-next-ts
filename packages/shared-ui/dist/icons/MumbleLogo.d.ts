/// <reference types="react" />
export interface IMumbleLogoProps extends React.HTMLAttributes<HTMLOrSVGImageElement> {
    title: string;
    href: string;
    variant: 'violet' | 'gradient' | 'white';
    alignment: 'horizontal' | 'vertical';
    iconColor: string | undefined;
    iconWidth?: string | undefined;
    iconHeight?: string | undefined;
    fCallBack?: () => void;
}
export declare const MumbleLogo: React.FC<IMumbleLogoProps>;
