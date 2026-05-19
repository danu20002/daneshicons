import React from 'react';

export const iconData = {
  "id": "YeastKiwi",
  "name": "YeastKiwi",
  "category": "FQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.60 13.29 L 15.68 20.96 L 6.08 19.67 L 2.40 10.71 L 8.32 3.04 L 17.92 4.33 Z"
      }
    ]
  ]
};

export const YeastKiwi = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.60 13.29 L 15.68 20.96 L 6.08 19.67 L 2.40 10.71 L 8.32 3.04 L 17.92 4.33 Z" />
      {children}
    </svg>
  );
});

export default YeastKiwi;
