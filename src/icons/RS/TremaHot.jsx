import React from 'react';

export const iconData = {
  "id": "TremaHot",
  "name": "TremaHot",
  "category": "RS",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.49 11.91 L 10.49 11.91"
      }
    ],
    [
      "path",
      {
        "d": "M 14.83 7.27 L 12.83 10.73"
      }
    ],
    [
      "path",
      {
        "d": "M 14.68 16.82 L 12.68 13.35"
      }
    ]
  ]
};

export const TremaHot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.49 11.91 L 10.49 11.91" />
      <path d="M 14.83 7.27 L 12.83 10.73" />
      <path d="M 14.68 16.82 L 12.68 13.35" />
      {children}
    </svg>
  );
});

export default TremaHot;
