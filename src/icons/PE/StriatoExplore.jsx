import React from 'react';

export const iconData = {
  "id": "StriatoExplore",
  "name": "StriatoExplore",
  "category": "PE",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.65 21.41 L 2.18 13.80 L 5.53 4.39 L 15.35 2.59 L 21.82 10.20 L 18.47 19.61 Z"
      }
    ]
  ]
};

export const StriatoExplore = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.65 21.41 L 2.18 13.80 L 5.53 4.39 L 15.35 2.59 L 21.82 10.20 L 18.47 19.61 Z" />
      {children}
    </svg>
  );
});

export default StriatoExplore;
