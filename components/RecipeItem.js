import { css } from '@emotion/react';
import LinearProgress from '@material-ui/core/LinearProgress';

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

export default function RecipeItem() {
  return (
    <div css={container}>
      <div css={title}>
        <span>Martini</span>
        <span>Gin Based</span>
      </div>
      <div css={content}>
        <div css={imageContainer}>
          <img src="https://picsum.photos/seed/picsum/200/200" alt="item" />
        </div>
        <div css={recipeContainer}>
          <div css={technique}>
            <span>Stur</span>
          </div>
          <div>
            <div css={ingredient}>
              <div>
                <span>Dry Gin</span>
                <span>2oz</span>
              </div>
              <div>
                <LinearProgress variant="determinate" value={100} />
              </div>
            </div>
            <div css={ingredient}>
              <div>
                <span>Dry Vermouth</span>
                <span>1/3oz</span>
              </div>
              <div>
                <LinearProgress variant="determinate" value={16.7} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
