import React from 'react';

export const iconData = {
  "id": "YogurtMonopoly",
  "name": "YogurtMonopoly",
  "category": "RT",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.80 17.86 L 13.98 20.71 L 20.41 4.97 L 19.09 18.32 L 19.80 8.43 L 4.59 14.45"
      }
    ],
    [
      "path",
      {
        "d": "M 11.80 6.67 L 5.87 14.09"
      }
    ],
    [
      "path",
      {
        "d": "M 10.44 8.96 Q 12.68 14.63 16.42 14.43"
      }
    ]
  ]
};

export const YogurtMonopoly = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.80 17.86 L 13.98 20.71 L 20.41 4.97 L 19.09 18.32 L 19.80 8.43 L 4.59 14.45" />
      <path d="M 11.80 6.67 L 5.87 14.09" />
      <path d="M 10.44 8.96 Q 12.68 14.63 16.42 14.43" />
      {children}
    </svg>
  );
});

export default YogurtMonopoly;
