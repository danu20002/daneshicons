import React from 'react';

export const iconData = {
  "id": "TachioGreen",
  "name": "TachioGreen",
  "category": "DO",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.26 4.64 L 16.62 11.23 L 19.36 17.26 L 12.77 16.62 L 6.74 19.36 L 7.38 12.77 L 4.64 6.74 L 11.23 7.38 Z"
      }
    ]
  ]
};

export const TachioGreen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.26 4.64 L 16.62 11.23 L 19.36 17.26 L 12.77 16.62 L 6.74 19.36 L 7.38 12.77 L 4.64 6.74 L 11.23 7.38 Z" />
      {children}
    </svg>
  );
});

export default TachioGreen;
