import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import { Wrap } from './Loader.styled';

export const Loader = () => {
  <Wrap>
    <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{}}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor="#c0efff"
      color="#e15b64"
    />
  </Wrap>;
};

// export default Loader;
