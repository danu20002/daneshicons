import React from 'react';

export const iconData = {
  "id": "PaleoNation",
  "name": "PaleoNation",
  "category": "NS",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.61 3.38 L 17.11 4.92 L 20.62 10.61 L 19.08 17.11 L 13.39 20.62 L 6.89 19.08 L 3.38 13.39 L 4.92 6.89 Z"
      }
    ]
  ]
};

export const PaleoNation = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.61 3.38 L 17.11 4.92 L 20.62 10.61 L 19.08 17.11 L 13.39 20.62 L 6.89 19.08 L 3.38 13.39 L 4.92 6.89 Z" />
      {children}
    </svg>
  );
});

export default PaleoNation;
