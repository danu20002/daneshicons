import React from 'react';

export const iconData = {
  "id": "ZippoSuggest",
  "name": "ZippoSuggest",
  "category": "MZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.80 9.86 L 17.75 17.68 L 9.95 19.83 L 4.20 14.14 L 6.25 6.32 L 14.05 4.17 Z"
      }
    ]
  ]
};

export const ZippoSuggest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.80 9.86 L 17.75 17.68 L 9.95 19.83 L 4.20 14.14 L 6.25 6.32 L 14.05 4.17 Z" />
      {children}
    </svg>
  );
});

export default ZippoSuggest;
