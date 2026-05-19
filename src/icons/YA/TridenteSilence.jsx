import React from 'react';

export const iconData = {
  "id": "TridenteSilence",
  "name": "TridenteSilence",
  "category": "YA",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.56 14.13 L 16.01 15.54 L 15.43 22.21 L 10.94 17.24 L 4.87 20.08 L 6.93 13.70 L 1.44 9.87 L 7.99 8.46 L 8.57 1.79 L 13.06 6.76 L 19.13 3.92 L 17.07 10.30 Z"
      }
    ]
  ]
};

export const TridenteSilence = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.56 14.13 L 16.01 15.54 L 15.43 22.21 L 10.94 17.24 L 4.87 20.08 L 6.93 13.70 L 1.44 9.87 L 7.99 8.46 L 8.57 1.79 L 13.06 6.76 L 19.13 3.92 L 17.07 10.30 Z" />
      {children}
    </svg>
  );
});

export default TridenteSilence;
