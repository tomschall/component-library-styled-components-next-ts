import { useState } from 'react';
import styled, { css } from 'styled-components';
import tw, { TwStyle } from 'twin.macro';
import { MumbleText, MumbleGradient, LogoMumble } from '../icons/components';

export interface IMumbleLogoProps
  extends React.HTMLAttributes<HTMLOrSVGImageElement> {
  title: string;
  href: string;
  variant: 'violet' | 'gradient' | 'white';
  alignment: 'horizontal' | 'vertical';
  iconWidth?: string | undefined;
  iconHeight?: string | undefined;
  fCallBack?: () => void;
}

export const MumbleLogo: React.FC<IMumbleLogoProps> = ({
  title,
  href,
  variant,
  alignment,
  fCallBack,
}: IMumbleLogoProps) => {
  const [hover, setHover] = useState(false);

  const iconColor = () => {
    let hoverColor: TwStyle;
    let defaultColor: TwStyle;

    switch (variant) {
      case 'violet':
        hoverColor = tw`fill-violet-900`;
        defaultColor = tw`fill-violet-600`;
        return hover ? hoverColor : defaultColor;
      case 'gradient':
        hoverColor = tw`fill-pink-900`;
        defaultColor = tw`fill-pink-600`;
        return hover ? hoverColor : defaultColor;
      case 'white':
        hoverColor = tw`fill-slate-white`;
        defaultColor = tw`fill-slate-white`;
        return hover ? hoverColor : defaultColor;
    }
  };

  const styles = tw`ml-16`;

  const SvgStyles = () => {
    switch (alignment) {
      case 'horizontal':
        return tw`w-[200px] h-[100%] min-w-[100px] mr-[10%] first-of-type:mr-12 first-of-type:w-64 first-of-type:min-w-[10%]` as TwStyle;
      case 'vertical':
        return tw`w-[200px] h-[100%] min-w-[100px] first-of-type:mr-12 first-of-type:w-64 first-of-type:min-w-[10%] mb-16` as TwStyle;
    }
  };

  const TextSvgStyles = () => {
    switch (alignment) {
      case 'horizontal':
        return tw`w-[200px] h-[100%] min-w-[100px] first-of-type:mr-12 first-of-type:w-64 first-of-type:min-w-[10%] ml-16` as TwStyle;
      case 'vertical':
        return tw`w-[200px] h-[100%] min-w-[100px] first-of-type:mr-12 first-of-type:w-64 first-of-type:min-w-[10%] mb-16 ml-16` as TwStyle;
    }
  };

  return (
    <>
      <MumbleLogoStyled
        title={title}
        href={href}
        alignment={alignment}
        target={'_self'}
        onClick={fCallBack}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <LogoMumble fill={iconColor().fill as string} style={SvgStyles()} />
        {variant === 'violet' && (
          <MumbleText
            fill={iconColor().fill as string}
            style={TextSvgStyles() as TwStyle}
          />
        )}
        {variant === 'white' && (
          <MumbleText
            fill={iconColor().fill as string}
            style={TextSvgStyles() as TwStyle}
          />
        )}
        {variant === 'gradient' && (
          <MumbleGradient
            fill={iconColor().fill as string}
            style={TextSvgStyles() as TwStyle}
          />
        )}
      </MumbleLogoStyled>
    </>
  );
};

interface IMumbleLogoStyled {
  alignment: string;
}

const MumbleLogoStyled = styled.a(({ alignment }: IMumbleLogoStyled) => [
  tw`
    flex
    justify-between
    items-center
    p-0
    cursor-pointer
  `,
  alignment === 'vertical' && tw`flex-col`,
  alignment === 'horizontal' && tw`flex-row`,
]);
