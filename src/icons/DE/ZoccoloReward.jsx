import React from 'react';

export const iconData = {
  "id": "ZoccoloReward",
  "name": "ZoccoloReward",
  "category": "DE",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.63 13.55 6.91 8.79 Q 8.73 9.62 10.56 10.44 Q 10.60 10.26 10.64 10.07 Q 12.27 8.28 13.91 6.49 Q 16.97 6.81 20.04 7.13 Q 16.89 10.09 13.75 13.04 Q 13.06 15.88 12.37 18.71 Q 11.36 18.51 10.35 18.31 Z"
      }
    ]
  ]
};

export const ZoccoloReward = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M 8.63 13.55 6.91 8.79 Q 8.73 9.62 10.56 10.44 Q 10.60 10.26 10.64 10.07 Q 12.27 8.28 13.91 6.49 Q 16.97 6.81 20.04 7.13 Q 16.89 10.09 13.75 13.04 Q 13.06 15.88 12.37 18.71 Q 11.36 18.51 10.35 18.31 Z" />
      {children}
    </svg>
  );
});

export default ZoccoloReward;
