import React from 'react';

export const iconData = {
  "id": "UrinoInfra",
  "name": "UrinoInfra",
  "category": "WM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.22 14.55 L 3.63 8.31 L 7.97 3.79 L 14.19 3.12 L 19.38 6.60 L 21.13 12.61 L 18.60 18.33 L 12.98 21.09 L 6.91 19.60 Z"
      }
    ]
  ]
};

export const UrinoInfra = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.22 14.55 L 3.63 8.31 L 7.97 3.79 L 14.19 3.12 L 19.38 6.60 L 21.13 12.61 L 18.60 18.33 L 12.98 21.09 L 6.91 19.60 Z" />
      {children}
    </svg>
  );
});

export default UrinoInfra;
