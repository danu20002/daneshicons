import React from 'react';

export const iconData = {
  "id": "VernileSpider",
  "name": "VernileSpider",
  "category": "UH",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.94 14.79 L 15.39 20.73 L 7.29 20.09 L 2.73 13.36 L 5.16 5.61 L 12.73 2.66 L 19.76 6.75 Z"
      }
    ]
  ]
};

export const VernileSpider = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.94 14.79 L 15.39 20.73 L 7.29 20.09 L 2.73 13.36 L 5.16 5.61 L 12.73 2.66 L 19.76 6.75 Z" />
      {children}
    </svg>
  );
});

export default VernileSpider;
