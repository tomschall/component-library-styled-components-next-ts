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

  const iconColor = () => {
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
  };

  const getIcon = () => {
    const color = iconColor();
    const styles = tw`mr-6 mt-1`;

    switch (type) {
      case 'username':
        return (
          <Profile
            style={styles}
            fill={color?.fill as string}
            width="12px"
            height="12px"
          />
        );
      case 'timestamp':
        return (
          <Time
            style={styles}
            fill={color?.fill as string}
            width="12px"
            height="12px"
          />
        );
      case 'location':
        return (
          <Location
            style={styles}
            fill={color?.fill as string}
            width="12px"
            height="12px"
          />
        );
      case 'joined':
        return (
          <Calendar
            style={styles}
            fill={color?.fill as string}
            width="12px"
            height="12px"
          />
        );
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
