import { BtnLoadMore, BtnLabel } from './Button.styled';
export const LoadMore = ({ onClick }) => {
  return (
    <BtnLoadMore type="button" onClick={onClick}>
      <BtnLabel>Load More</BtnLabel>
    </BtnLoadMore>
  );
};
