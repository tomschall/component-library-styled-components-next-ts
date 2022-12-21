import React from 'react';
import { IconTypes } from './icons/IconMap';
export interface IButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
    label: string;
    variant?: 'slate' | 'violet' | 'pink';
    size?: 'small' | 'large';
    width?: 'default' | 'large' | 'full';
    type?: 'button' | 'reset' | 'submit';
    disabled?: boolean;
    handleClick?: () => void;
    icon: IconTypes;
}
export declare const Button: React.FC<IButtonProps>;
