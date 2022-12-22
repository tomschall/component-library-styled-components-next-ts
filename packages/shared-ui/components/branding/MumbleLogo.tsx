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
  fCallBack?: () => void;
  isNavigation?: boolean;
}

export const MumbleLogo: React.FC<IMumbleLogoProps> = ({
  title,
  href,
  variant,
  alignment,
  fCallBack,
  isNavigation,
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
        hoverColor = tw`fill-violet-900`;
        defaultColor = tw`fill-violet-600`;
        return hover ? hoverColor : defaultColor;
      case 'white':
        hoverColor = tw`fill-slate-white`;
        defaultColor = tw`fill-slate-white`;
        return hover ? hoverColor : defaultColor;
    }
  };

  const TextSvgStyles = () => {
    switch (alignment) {
      case 'horizontal':
        return isNavigation ? (tw`ml-2` as TwStyle) : (tw`ml-24` as TwStyle);
      case 'vertical':
        return isNavigation ? (tw`mt-8` as TwStyle) : (tw`mt-16` as TwStyle);
    }
  };

  return (
    <>
      <MumbleLogoStyledLink
        title={title}
        href={href}
        target={'_self'}
        onClick={fCallBack}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <MumbleLogoStyledDiv alignment={alignment}>
          <LogoMumble
            fill={iconColor().fill as string}
            height={isNavigation ? 40 : 64}
            width={64}
          />
          {variant === 'violet' && (
            <MumbleText
              fill={iconColor().fill as string}
              style={TextSvgStyles() as TwStyle}
              height={isNavigation ? 30 : 48}
              width={isNavigation ? 154 : 246}
            />
          )}
          {variant === 'white' && (
            <MumbleText
              fill={iconColor().fill as string}
              style={TextSvgStyles() as TwStyle}
              height={isNavigation ? 30 : 48}
              width={isNavigation ? 154 : 246}
            />
          )}
          {variant === 'gradient' && (
            <MumbleGradient
              fill={iconColor().fill as string}
              style={TextSvgStyles() as TwStyle}
              height={isNavigation ? 30 : 48}
              width={isNavigation ? 154 : 246}
            />
          )}
        </MumbleLogoStyledDiv>
      </MumbleLogoStyledLink>
    </>
  );
};

interface IMumbleLogoStyled {
  alignment: string;
}

const MumbleLogoStyledLink = styled.a(() => [
  tw`
    cursor-pointer
  `,
]);

const MumbleLogoStyledDiv = styled.div(({ alignment }: IMumbleLogoStyled) => [
  tw`
    flex
    justify-between
    items-center
    p-0
    cursor-pointer
    h-[100%]
  `,
  alignment === 'vertical' && tw`flex-col`,
  alignment === 'horizontal' && tw`flex-row`,
]);
