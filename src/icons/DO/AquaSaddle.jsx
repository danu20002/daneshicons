import React from 'react';

export const iconData = {
  "id": "AquaSaddle",
  "name": "AquaSaddle",
  "category": "DO",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.28 18.80 L 7.12 10.36 L 9.97 1.91 L 15.86 8.60 L 21.75 15.28 L 13.02 17.05 Z"
      }
    ]
  ]
};

export const AquaSaddle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.28 18.80 L 7.12 10.36 L 9.97 1.91 L 15.86 8.60 L 21.75 15.28 L 13.02 17.05 Z" />
      {children}
    </svg>
  );
});

export default AquaSaddle;
