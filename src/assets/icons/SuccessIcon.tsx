import {Svg, Path, Circle} from 'react-native-svg';

export function SuccessIcon() {
  return (
    <Svg width="33" height="32" viewBox="0 0 33 32" fill="none">
      <Circle cx="16.5" cy="16" r="16" fill="#4ABC86" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.493 11.5895C23.8347 11.9312 23.8347 12.4853 23.493 12.827L15.3264 20.9936C14.9846 21.3353 14.4307 21.3353 14.089 20.9936L9.42229 16.3269C9.08059 15.9852 9.08059 15.4313 9.42229 15.0896C9.764 14.7478 10.318 14.7478 10.6597 15.0896L14.7077 19.1374L22.2557 11.5895C22.5974 11.2478 23.1513 11.2478 23.493 11.5895Z"
        fill="white"
      />
    </Svg>
  );
}
