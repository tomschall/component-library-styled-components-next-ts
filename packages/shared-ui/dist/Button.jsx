import React from 'react';
import tw, { css, styled } from 'twin.macro';
import { Mumble } from './icons/components';
import { Icons } from './icons/IconMap';
export const Button = ({ label = 'Button Label', variant = 'slate', type = 'button', size = 'small', width = 'default', disabled = false, handleClick, icon = 'mumble', }) => {
    const styles = tw `fill-slate-white`;
    const Icon = React.cloneElement(Object(Icons[icon]), {
        fill: styles.fill,
    });
    return (<>
      <ButtonStyles variant={variant} size={size} width={width} type={type} disabled={disabled} onClick={handleClick}>
        {label}
        {Icon}
      </ButtonStyles>
      <Mumble css={tw `fill-violet-600`} width={100} height={100}/>
    </>);
};
/**
 * @Button
 * @desc Button styles
 */
const buttonFont = tw `
  text-skin-light
  font-semibold
  leading-normal
  whitespace-nowrap
`;
const buttonDefaults = tw `
  flex
  grow-0
  justify-center
  items-center
  p-12
  rounded
  w-auto
  outline-none
`;
const buttonHover = tw `
  hover:(outline-3 outline-offset-0)
`;
const buttonFocus = tw `
  focus:(outline-4 outline-offset-0)
`;
const variantSlate = tw `
  bg-slate-600
  hover:(bg-slate-700 outline-slate-100)
  focus:(outline-slate-200)
  disabled:bg-slate-300
`;
const variantViolet = tw `
  bg-violet-600
  hover:(bg-violet-700 outline-violet-100)
  focus:(outline-violet-200)
  disabled:bg-violet-300
`;
const variantPink = tw `
  bg-gradient-to-r from-pink-500 to-violet-500
  hover:(bg-gradient-to-r-70 outline-violet-100)
  focus:(bg-gradient-to-r-80 outline-violet-200)
  disabled:(bg-gradient-to-r)
`;
const buttonWidth = (width) => [
    width === 'default' ? null : tw `w-full`,
    width === 'large' && tw `w-[184px] h-[40px]`,
];
const buttonSize = (size) => size === 'large' ? tw `py-16 px-24` : null;
const getVariant = (variant) => {
    switch (variant) {
        case 'slate':
            return variantSlate;
        case 'violet':
            return variantViolet;
        case 'pink':
            return variantPink;
        default:
            return variantSlate;
    }
};
const IconMargin = css `
  svg {
    margin-left: 8px;
  }
`;
const ButtonStyles = styled.button(({ variant, width, size }) => [
    buttonFont,
    buttonDefaults,
    buttonHover,
    buttonFocus,
    buttonWidth(width),
    buttonSize(size),
    getVariant(variant),
    IconMargin,
]);
//# sourceMappingURL=Button.jsx.map