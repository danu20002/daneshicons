import React from 'react';

export const iconData = {
  "id": "TrifoglioGift",
  "name": "TrifoglioGift",
  "category": "UD",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.71 5.97 L 20.29 5.97 L 20.29 18.03 L 3.71 18.03 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.71 5.97 L 7.07 2.61 L 23.65 2.61 L 20.29 5.97"
      }
    ],
    [
      "path",
      {
        "d": "M 20.29 5.97 L 23.65 2.61 L 23.65 14.67 L 20.29 18.03"
      }
    ]
  ]
};

export const TrifoglioGift = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.71 5.97 L 20.29 5.97 L 20.29 18.03 L 3.71 18.03 Z" />
      <path d="M 3.71 5.97 L 7.07 2.61 L 23.65 2.61 L 20.29 5.97" />
      <path d="M 20.29 5.97 L 23.65 2.61 L 23.65 14.67 L 20.29 18.03" />
      {children}
    </svg>
  );
});

export default TrifoglioGift;
