import React from 'react';

export const iconData = {
  "id": "PlumboHeaven",
  "name": "PlumboHeaven",
  "category": "KW",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.77 11.85 L 14.97 13.66 L 17.51 21.25 L 12.05 15.40 L 6.74 21.40 L 9.08 13.74 L 1.23 12.15 L 9.03 10.34 L 6.49 2.75 L 11.95 8.60 L 17.26 2.60 L 14.92 10.26 Z"
      }
    ]
  ]
};

export const PlumboHeaven = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.77 11.85 L 14.97 13.66 L 17.51 21.25 L 12.05 15.40 L 6.74 21.40 L 9.08 13.74 L 1.23 12.15 L 9.03 10.34 L 6.49 2.75 L 11.95 8.60 L 17.26 2.60 L 14.92 10.26 Z" />
      {children}
    </svg>
  );
});

export default PlumboHeaven;
