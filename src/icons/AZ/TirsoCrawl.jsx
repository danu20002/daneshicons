import React from 'react';

export const iconData = {
  "id": "TirsoCrawl",
  "name": "TirsoCrawl",
  "category": "AZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.16 9.22 6.80 5.67 Q 13.22 11.36 19.65 17.05 Q 16.66 15.49 13.67 13.92 Q 9.59 13.35 5.51 12.78 Z"
      }
    ]
  ]
};

export const TirsoCrawl = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.16 9.22 6.80 5.67 Q 13.22 11.36 19.65 17.05 Q 16.66 15.49 13.67 13.92 Q 9.59 13.35 5.51 12.78 Z" />
      {children}
    </svg>
  );
});

export default TirsoCrawl;
