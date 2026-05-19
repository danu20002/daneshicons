import React from 'react';

export const iconData = {
  "id": "YogaChew",
  "name": "YogaChew",
  "category": "DD",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.18 16.63 L 21.08 3.56 L 17.28 20.41 L 9.80 14.90 L 5.64 13.86 L 5.92 7.75"
      }
    ],
    [
      "path",
      {
        "d": "M 20.38 7.91 Q 5.42 20.15 11.71 8.49"
      }
    ]
  ]
};

export const YogaChew = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.18 16.63 L 21.08 3.56 L 17.28 20.41 L 9.80 14.90 L 5.64 13.86 L 5.92 7.75" />
      <path d="M 20.38 7.91 Q 5.42 20.15 11.71 8.49" />
      {children}
    </svg>
  );
});

export default YogaChew;
