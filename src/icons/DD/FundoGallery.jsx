import React from 'react';

export const iconData = {
  "id": "FundoGallery",
  "name": "FundoGallery",
  "category": "DD",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.77 16.59 L 2.68 13.87"
      }
    ],
    [
      "path",
      {
        "d": "M 18.35 12.50 A 5.24 4.10 100 0 0 6.38 14.27"
      }
    ]
  ]
};

export const FundoGallery = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.77 16.59 L 2.68 13.87" />
      <path d="M 18.35 12.50 A 5.24 4.10 100 0 0 6.38 14.27" />
      {children}
    </svg>
  );
});

export default FundoGallery;
