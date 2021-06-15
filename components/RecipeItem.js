import React from 'react';
import { css } from '@emotion/react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Skeleton from '@material-ui/lab/Skeleton';

import { getingredientRatio } from 'lib/util';

import palette from 'styles/palette';
import times from 'lodash/times';

const container = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  background: ${palette.light};
  border-radius: 0.5rem;
  box-shadow: 0px 5px 10px 0px ${palette.gray[3]};
`;

const title = css`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  & > span:last-of-type {
    font-size: 0.75rem;
    color: ${palette.gray[7]};
  }
`;

const content = css`
  display: flex;
  margin-top: 1rem;
`;

const imageContainer = css`
  display: flex;
  width: 100px;
  height: 100px;
`;

const recipeContainer = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100px;
  margin-left: 1rem;
`;

const technique = css`
  & > span {
    font-size: 0.875rem;
  }
`;

const garnish = css`
  margin-top: 0.25rem;
  font-size: 0.875rem;

  & > span {
    color: ${palette.gray[7]};
  }
`;

const ingredient = css`
  margin-top: 0.5rem;
  & + & {
    margin-top: 0.5rem;
  }

  & > div:first-of-type {
    display: flex;
    justify-content: space-between;
  }

  & > div:last-of-type {
    margin-top: 0.25rem;
  }
`;

const progress = (bgColor = palette.gray[4], barColor = palette.gray[6]) => css`
  &.MuiLinearProgress-colorPrimary {
    background-color: ${bgColor};
  }
  .MuiLinearProgress-barColorPrimary {
    background-color: ${barColor};
  }
`;

export default function RecipeItem({ item, isLoading }) {
  const ingredientRatio = getingredientRatio(item.ingredientList);
  return (
    <div css={container}>
      <div css={title}>
        {isLoading ? (
          <>
            <Skeleton variant="text" width={80} animation="wave" />
            <Skeleton variant="text" width={60} animation="wave" />
          </>
        ) : (
          <>
            <span>{item.name}</span>
            <span>{`${item.based} Based`}</span>
          </>
        )}
      </div>
      <div css={content}>
        <div css={imageContainer}>
          {isLoading ? (
            <Skeleton variant="rect" width={100} height={100} animate="wave" />
          ) : (
            <img src={item.image} alt="item" />
          )}
        </div>
        <div css={recipeContainer}>
          <div css={technique}>
            {isLoading ? (
              <Skeleton variant="text" width={40} animation="wave" />
            ) : (
              <span>{item.tech}</span>
            )}
          </div>
          <div css={garnish}>
            {isLoading && (
              <Skeleton variant="text" width={40} animation="wave" />
            )}
            {!isLoading && item.garnish?.length ? (
              <span>{item.garnish}</span>
            ) : (
              <span>No Garnish</span>
            )}
          </div>
          <div>
            {isLoading &&
              times(2, (index) => (
                <div key={index} css={ingredient}>
                  <div>
                    <Skeleton variant="text" width={60} animation="wave" />
                    <Skeleton variant="text" width={20} animation="wave" />
                  </div>
                  <div>
                    <LinearProgress css={progress()} />
                  </div>
                </div>
              ))}
            {!isLoading &&
              item.ingredientList.map(({ name, volume, unit }, index) => (
                <div key={`${name}${volume}${unit}`} css={ingredient}>
                  <div>
                    <span>{name}</span>
                    <span>
                      {volume}
                      {unit}
                    </span>
                  </div>
                  <div>
                    <LinearProgress
                      variant="determinate"
                      value={ingredientRatio[index] * 100}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
