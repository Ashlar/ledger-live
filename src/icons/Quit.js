// @flow
import React, { PureComponent } from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

type Props = {
  size: number,
  color: string,
};

export default ({ size = 30, color }: Props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 31 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.7727 0.363632C12.6681 0.363632 11.7727 1.25906 11.7727 2.36363V9.54545H13.7727V2.36363L26.7727 2.36363V27.6364L13.7727 27.6364V20.4545H11.7727V27.6364C11.7727 28.7409 12.6681 29.6364 13.7727 29.6364H26.7727C27.8772 29.6364 28.7727 28.7409 28.7727 27.6364V2.36363C28.7727 1.25906 27.8772 0.363632 26.7727 0.363632H13.7727ZM1.0883 14.2929C0.697779 14.6834 0.697779 15.3166 1.0883 15.7071L5.86103 20.4798C6.25155 20.8704 6.88472 20.8704 7.27524 20.4798C7.66577 20.0893 7.66577 19.4561 7.27524 19.0656L4.20962 16H20.2727C20.825 16 21.2727 15.5523 21.2727 15C21.2727 14.4477 20.825 14 20.2727 14H4.20962L7.27524 10.9344C7.66577 10.5439 7.66577 9.91069 7.27524 9.52016C6.88472 9.12964 6.25155 9.12964 5.86103 9.52016L1.0883 14.2929Z"
      fill={color}
    />
  </Svg>
);
