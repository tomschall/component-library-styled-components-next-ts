import React, { useEffect, useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import tw, { TwStyle } from 'twin.macro';
import {
  HeartFilled,
  HeartOutlined,
  ReplyFilled,
  ReplyOutlined,
} from '../icons/components';

export interface IInteractionButton
  extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  type?: 'like' | 'comment';
  quantity?: number;
  favourite?: boolean;
  fCallBack?: () => void;
}

export const InteractionButton: React.FC<IInteractionButton> = ({
  type,
  quantity,
  favourite,
  fCallBack,
}) => {
  const [label, setLabel] = useState<string>('');
  const [fontColor, setFontColor] = useState('text-slate-500');
  let [count, setCount] = useState<number>(quantity || 0);
  let [isFavourite, setIsFavourite] = useState<boolean>(favourite || false);
  const [hover, setHover] = useState(false);

  const setLabels = useCallback(() => {
    if (type === 'comment') {
      if (count >= 2) {
        setFontColor('hasAction');
        setLabel('Comments');
      } else {
        setLabel('Comment');
      }
    } else if (type === 'like') {
      if (count > 1) {
        setFontColor('hasAction');
        setLabel('Likes');
      } else if (count === 1 && isFavourite === true) {
        setLabel('Liked');
      } else if (
        (count === 0 && !isFavourite) ||
        (count === 1 && !isFavourite)
      ) {
        setLabel('Like');
      }
    }
  }, [type, count, isFavourite]);

  useEffect(() => {
    type === 'like' ? setLabel('Like') : setLabel('Comment');
    setLabels();
  }, [type, count, isFavourite, setLabels]);

  useEffect(() => {
    setCount(quantity || 0);
  }, [quantity]);

  useEffect(() => {
    setIsFavourite(favourite || false);
  }, [favourite]);

  const handleClickLike = () => {
    setIsFavourite(!isFavourite);
    setCount((count) => (isFavourite ? count - 1 : count + 1));
    fCallBack && fCallBack();
  };

  if (type === 'comment') {
    const hoverStyle: TwStyle = tw`fill-violet-500`;
    const defaultStyle: TwStyle = tw`fill-slate-600`;

    return (
      <CommentStyles
        className={fontColor}
        onClick={fCallBack}
        count={count}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {count === 0 ? (
          <ReplyOutlined
            fill={
              count === 0 && !hover
                ? (defaultStyle.fill as string)
                : (hoverStyle.fill as string)
            }
            width="16px"
            height="16px"
          />
        ) : (
          <ReplyFilled
            fill={hoverStyle.fill as string}
            width="16px"
            height="16px"
          />
        )}
        {count === 0 ? false : `${count}`} {label}
      </CommentStyles>
    );
  }

  if (type === 'like') {
    const hoverStyle: TwStyle = tw`fill-pink-500`;
    const defaultStyle: TwStyle = tw`fill-slate-600`;

    return (
      <LikeStyles
        className={fontColor}
        onClick={handleClickLike}
        count={count}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {isFavourite ? (
          <HeartFilled
            fill={hoverStyle.fill as string}
            width="16px"
            height="16px"
          />
        ) : (
          <HeartOutlined
            fill={
              count === 0 && !hover
                ? (defaultStyle.fill as string)
                : (hoverStyle.fill as string)
            }
            width="16px"
            height="16px"
          />
        )}
        {(count === 1 && isFavourite === true) || count === 0 ? '' : count}{' '}
        {label}
      </LikeStyles>
    );
  }

  return null;
};

/**
 * @Button
 * @desc Button styles
 */
interface IButtonStyles {
  count: number;
}

const CommentStyles = styled.button(({ count }: IButtonStyles) => [
  tw`
    font-semibold
    leading-normal
    text-slate-600
    text-sm
    flex
    grow-0
    justify-center
    items-center
    p-12
    rounded-full
    w-auto
    outline-none
    bg-none
    hover:(text-violet-600 bg-violet-50)
    
`,
  count === 0 && tw`text-slate-600 hover:(text-violet-600 bg-violet-50)`,
  css`
    svg {
      margin: 0 8px 0 0;
    }
  `,
]);

const LikeStyles = styled.button(({ count }: IButtonStyles) => [
  tw`
  font-semibold
  leading-normal
  text-pink-600
  text-sm
  flex
  grow-0
  justify-center
  items-center
  p-12
  rounded-full
  w-auto
  outline-none
  bg-none
  hover:(text-pink-900 bg-pink-50)
  `,
  count >= 1 && tw`text-pink-900`,
  count === 0 && tw`text-slate-600 hover:(text-pink-600 bg-pink-50)`,
  css`
    svg {
      margin: 0 8px 0 0;
    }
  `,
]);
