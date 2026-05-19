import React from 'react';

export const iconData = {
  "id": "GenoIndustry",
  "name": "GenoIndustry",
  "category": "C",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.38 9.74 L 6.80 3.60 L 14.26 2.38 L 20.40 6.80 L 21.62 14.26 L 17.20 20.40 L 9.74 21.62 L 3.60 17.20 Z"
      }
    ]
  ]
};

export const GenoIndustry = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.38 9.74 L 6.80 3.60 L 14.26 2.38 L 20.40 6.80 L 21.62 14.26 L 17.20 20.40 L 9.74 21.62 L 3.60 17.20 Z" />
      {children}
    </svg>
  );
});

export default GenoIndustry;
