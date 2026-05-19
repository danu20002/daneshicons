import React from 'react';

export const iconData = {
  "id": "XenofiloYarn",
  "name": "XenofiloYarn",
  "category": "UI",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.54 1.47 L 14.24 6.48 L 20.39 5.47 L 17.90 11.18 L 21.85 16.00 L 15.66 16.70 L 13.46 22.53 L 9.76 17.52 L 3.61 18.53 L 6.10 12.82 L 2.15 8.00 L 8.34 7.30 Z"
      }
    ]
  ]
};

export const XenofiloYarn = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.54 1.47 L 14.24 6.48 L 20.39 5.47 L 17.90 11.18 L 21.85 16.00 L 15.66 16.70 L 13.46 22.53 L 9.76 17.52 L 3.61 18.53 L 6.10 12.82 L 2.15 8.00 L 8.34 7.30 Z" />
      {children}
    </svg>
  );
});

export default XenofiloYarn;
