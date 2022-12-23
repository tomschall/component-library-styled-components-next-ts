import styled from 'styled-components';
import tw, { TwStyle } from 'twin.macro';
import React, { useState } from 'react';
import { Profile, Time, Location, Calendar } from './icons/components';

export interface IIconLinkProps
  extends React.HtmlHTMLAttributes<HTMLLinkElement> {
  label: string;
  type?: 'username' | 'timestamp' | 'location' | 'joined';
  variant?: 'slate' | 'violet';
  href: string;
  handleClick?: () => void;
  link?: React.ElementType<{
    href: string;
    passHref: any;
    legacyBehavior: any;
  }>;
}

export const IconLink: React.FC<IIconLinkProps> = ({
  label,
  type = 'username',
  variant = 'slate',
  href,
  handleClick,
  link: Link,
}) => {
  const [hover, setHover] = useState(false);

  const getIcon = () => {
    switch (type) {
      case 'username':
        const StyledProfile = styled(Profile)(
          ({ variant, hover }: IStyleProps) => [
            tw`w-12 h-12 mr-6 mt-1`,
            IconColor(variant, hover),
          ],
        );
        return <StyledProfile variant={variant} hover={hover} />;
      case 'timestamp':
        const StyledTime = styled(Time)(({ variant, hover }: IStyleProps) => [
          tw`w-12 h-12 mr-6 mt-1`,
          IconColor(variant, hover),
        ]);
        return <StyledTime variant={variant} hover={hover} />;
      case 'location':
        const StyledLocaton = styled(Location)(
          ({ variant, hover }: IStyleProps) => [
            tw`w-12 h-12 mr-6 mt-1`,
            IconColor(variant, hover),
          ],
        );
        return <StyledLocaton variant={variant} hover={hover} />;
      case 'joined':
        const StyledCalendar = styled(Calendar)(
          ({ variant, hover }: IStyleProps) => [
            tw`w-12 h-12 mr-6 mt-1`,
            IconColor(variant, hover),
          ],
        );
        return <StyledCalendar variant={variant} hover={hover} />;
    }
  };

  return Link ? (
    <Link href={href} passHref legacyBehavior>
      <IconLinkDivStyles
        variant={variant}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {getIcon()}
        {label}
      </IconLinkDivStyles>
    </Link>
  ) : (
    <IconLinkStyles
      variant={variant}
      onClick={handleClick}
      target="_new"
      title={label}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      href={href}
    >
      {getIcon()}
      {label}
    </IconLinkStyles>
  );
};

interface IStyleProps {
  variant?: string;
  hover?: boolean;
}

/**
 * @Button
 * @desc Button styles
 */

const defaultStyles = tw`
  flex
  flex-row
  text-xs
  font-semibold
  leading-normal
  cursor-pointer
`;

const IconLinkStyles = styled.a(({ variant }: IStyleProps) => [
  defaultStyles,
  variant === 'slate' && tw`text-slate-400 hover:(text-slate-600)`,
  variant === 'violet' && tw`text-violet-600 hover:(text-violet-900)`,
]);

const IconLinkDivStyles = styled.div(({ variant }: IStyleProps) => [
  defaultStyles,
  variant === 'slate' && tw`text-slate-400 hover:(text-slate-600)`,
  variant === 'violet' && tw`text-violet-600 hover:(text-violet-900)`,
]);

const IconColor = (variant?: string, hover?: boolean) => {
  let hoverColor: TwStyle;
  let defaultColor: TwStyle;

  switch (variant) {
    case 'slate':
      hoverColor = tw`fill-slate-600`;
      defaultColor = tw`fill-slate-400`;
      return hover ? hoverColor : defaultColor;
    case 'violet':
      hoverColor = tw`fill-violet-900`;
      defaultColor = tw`fill-violet-600`;
      return hover ? hoverColor : defaultColor;
  }
  return null;
};
