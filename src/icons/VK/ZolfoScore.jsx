import React from 'react';

export const iconData = {
  "id": "ZolfoScore",
  "name": "ZolfoScore",
  "category": "VK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.38 16.44 L 19.22 5.45"
      }
    ],
    [
      "path",
      {
        "d": "M 10.68 5.74 L 20.20 10.59 L 6.41 2.77 L 21.97 20.99 L 17.04 6.77 L 14.04 2.36 L 6.29 20.58"
      }
    ]
  ]
};

export const ZolfoScore = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.38 16.44 L 19.22 5.45" />
      <path d="M 10.68 5.74 L 20.20 10.59 L 6.41 2.77 L 21.97 20.99 L 17.04 6.77 L 14.04 2.36 L 6.29 20.58" />
      {children}
    </svg>
  );
});

export default ZolfoScore;
