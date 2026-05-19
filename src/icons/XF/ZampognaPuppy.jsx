import React from 'react';

export const iconData = {
  "id": "ZampognaPuppy",
  "name": "ZampognaPuppy",
  "category": "XF",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.42 16.97 L 13.36 21.68 L 5.28 19.10 L 2.26 11.17 L 6.58 3.87 L 14.98 2.69 L 21.14 8.52 Z"
      }
    ]
  ]
};

export const ZampognaPuppy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.42 16.97 L 13.36 21.68 L 5.28 19.10 L 2.26 11.17 L 6.58 3.87 L 14.98 2.69 L 21.14 8.52 Z" />
      {children}
    </svg>
  );
});

export default ZampognaPuppy;
