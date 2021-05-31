import { css } from '@emotion/react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { getingredientRatio } from 'lib/util';

import palette from 'styles/palette';

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

const ingredient = css`
  margin-top: 0.25rem;
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

export default function RecipeItem({ item }) {
  const ingredientRatio = getingredientRatio(item.ingredientList);
  return (
    <div css={container}>
      <div css={title}>
        <span>{item.name}</span>
        <span>{`${item.based} Based`}</span>
      </div>
      <div css={content}>
        <div css={imageContainer}>
          <img src={item.image} alt="item" />
        </div>
        <div css={recipeContainer}>
          <div css={technique}>
            <span>{item.tech}</span>
          </div>
          <div>
            {item.ingredientList.map(({ name, volume, unit }, index) => (
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
