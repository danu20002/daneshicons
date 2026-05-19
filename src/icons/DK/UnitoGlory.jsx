import React from 'react';

export const iconData = {
  "id": "UnitoGlory",
  "name": "UnitoGlory",
  "category": "DK",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.49 7.56 L 20.10 17.13 L 11.60 21.58 L 3.51 16.44 L 3.90 6.87 L 12.40 2.42 Z"
      }
    ]
  ]
};

export const UnitoGlory = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.49 7.56 L 20.10 17.13 L 11.60 21.58 L 3.51 16.44 L 3.90 6.87 L 12.40 2.42 Z" />
      {children}
    </svg>
  );
});

export default UnitoGlory;
