import React from 'react';

export const iconData = {
  "id": "GlyphoShuffle",
  "name": "GlyphoShuffle",
  "category": "TF",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.39 11.40 L 17.87 11.47 L 3.80 14.33 L 5.34 3.33 L 14.65 7.22 L 15.98 5.28"
      }
    ],
    [
      "path",
      {
        "d": "M 16.19 16.56 L 17.15 9.81 L 16.37 4.41 L 21.23 12.60 L 3.19 4.35"
      }
    ],
    [
      "path",
      {
        "d": "M 14.99 7.88 A 3.57 5.69 51 0 0 8.74 8.66"
      }
    ]
  ]
};

export const GlyphoShuffle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.39 11.40 L 17.87 11.47 L 3.80 14.33 L 5.34 3.33 L 14.65 7.22 L 15.98 5.28" />
      <path d="M 16.19 16.56 L 17.15 9.81 L 16.37 4.41 L 21.23 12.60 L 3.19 4.35" />
      <path d="M 14.99 7.88 A 3.57 5.69 51 0 0 8.74 8.66" />
      {children}
    </svg>
  );
});

export default GlyphoShuffle;
