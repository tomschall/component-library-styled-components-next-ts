import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { MumbleText, MumbleGradient, LogoMumble } from './components';
export const MumbleLogo = ({ title, href, variant, alignment, iconColor, fCallBack, }) => {
    return (<>
      <MumbleLogoStyled title={title} href={href} variant={variant} alignment={alignment} target={'_self'} onClick={fCallBack}>
        <LogoMumble className={iconColor}/>
        {variant === 'violet' && <MumbleText className={iconColor}/>}
        {variant === 'white' && <MumbleText className={iconColor}/>}
        {variant === 'gradient' && <MumbleGradient className={iconColor}/>}
      </MumbleLogoStyled>
    </>);
};
const MumbleLogoStyled = styled.a(({ alignment, variant }) => [
    tw `
    flex
    justify-between
    items-center
    p-0
    cursor-pointer
    w-[200px]
    min-w-[100px]
  `,
    alignment === 'vertical' && tw `flex-col`,
    alignment === 'vertical' &&
        css `
        svg {
          margin-bottom: 16px;
        }
      `,
    alignment === 'horizontal' && tw `flex-row`,
    alignment === 'horizontal' &&
        css `
        svg:first-of-type {
          margin-right: 10%;
        }
      `,
    variant === 'violet' &&
        css `
        &:hover {
          > svg {
            fill: white;
          }
        }
      `,
    variant === 'white' &&
        css `
        > svg {
          fill: white;
        }
      `,
    css `
      svg {
        width: auto;
      }
      svg:first-of-type {
        width: 64px;
        min-width: 10%;
      }
    `,
]);
//# sourceMappingURL=MumbleLogo.jsx.map