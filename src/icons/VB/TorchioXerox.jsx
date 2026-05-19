import React from 'react';

export const iconData = {
  "id": "TorchioXerox",
  "name": "TorchioXerox",
  "category": "VB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.70 6.88 L 10.28 7.81 L 14.31 2.52 L 15.45 9.07 L 21.73 11.26 L 15.86 14.38 L 15.70 21.02 L 10.93 16.40 L 4.56 18.31 L 7.48 12.34 Z"
      }
    ]
  ]
};

export const TorchioXerox = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.70 6.88 L 10.28 7.81 L 14.31 2.52 L 15.45 9.07 L 21.73 11.26 L 15.86 14.38 L 15.70 21.02 L 10.93 16.40 L 4.56 18.31 L 7.48 12.34 Z" />
      {children}
    </svg>
  );
});

export default TorchioXerox;
