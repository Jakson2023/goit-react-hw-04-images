import { Bars } from 'react-loader-spinner';
import '../Loader/Loader.css';
export const Loader = () => {
  return (
    <Bars
      height="80"
      width="80"
      color="rgb(235, 44, 44)"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass="loader"
      visible={true}
    />
  );
};
