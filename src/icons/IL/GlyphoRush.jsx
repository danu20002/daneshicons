import React from 'react';

export const iconData = {
  "id": "GlyphoRush",
  "name": "GlyphoRush",
  "category": "IL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.47 5.73 L 20.53 5.73 L 20.53 18.27 L 3.47 18.27 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.47 5.73 L 7.38 1.82 L 24.45 1.82 L 20.53 5.73"
      }
    ],
    [
      "path",
      {
        "d": "M 20.53 5.73 L 24.45 1.82 L 24.45 14.35 L 20.53 18.27"
      }
    ]
  ]
};

export const GlyphoRush = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.47 5.73 L 20.53 5.73 L 20.53 18.27 L 3.47 18.27 Z" />
      <path d="M 3.47 5.73 L 7.38 1.82 L 24.45 1.82 L 20.53 5.73" />
      <path d="M 20.53 5.73 L 24.45 1.82 L 24.45 14.35 L 20.53 18.27" />
      {children}
    </svg>
  );
});

export default GlyphoRush;
