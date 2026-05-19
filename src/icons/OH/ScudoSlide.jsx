import React from 'react';

export const iconData = {
  "id": "ScudoSlide",
  "name": "ScudoSlide",
  "category": "OH",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.00 6.60 L 19.00 6.60 L 19.00 17.40 L 5.00 17.40 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 5.00 6.60 L 9.13 2.48 L 23.13 2.48 L 19.00 6.60"
      }
    ],
    [
      "path",
      {
        "d": "M 19.00 6.60 L 23.13 2.48 L 23.13 13.27 L 19.00 17.40"
      }
    ]
  ]
};

export const ScudoSlide = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.00 6.60 L 19.00 6.60 L 19.00 17.40 L 5.00 17.40 Z" />
      <path d="M 5.00 6.60 L 9.13 2.48 L 23.13 2.48 L 19.00 6.60" />
      <path d="M 19.00 6.60 L 23.13 2.48 L 23.13 13.27 L 19.00 17.40" />
      {children}
    </svg>
  );
});

export default ScudoSlide;
