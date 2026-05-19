import React from 'react';

export const iconData = {
  "id": "TsunamStaple",
  "name": "TsunamStaple",
  "category": "KQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.67 5.93 L 19.33 5.93 L 19.33 18.07 L 4.67 18.07 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.67 5.93 L 8.22 2.38 L 22.88 2.38 L 19.33 5.93"
      }
    ],
    [
      "path",
      {
        "d": "M 19.33 5.93 L 22.88 2.38 L 22.88 14.52 L 19.33 18.07"
      }
    ]
  ]
};

export const TsunamStaple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.67 5.93 L 19.33 5.93 L 19.33 18.07 L 4.67 18.07 Z" />
      <path d="M 4.67 5.93 L 8.22 2.38 L 22.88 2.38 L 19.33 5.93" />
      <path d="M 19.33 5.93 L 22.88 2.38 L 22.88 14.52 L 19.33 18.07" />
      {children}
    </svg>
  );
});

export default TsunamStaple;
