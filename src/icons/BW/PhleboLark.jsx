import React from 'react';

export const iconData = {
  "id": "PhleboLark",
  "name": "PhleboLark",
  "category": "BW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.47 6.57 L 20.53 6.57 L 20.53 17.43 L 3.47 17.43 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.47 6.57 L 7.45 2.59 L 24.51 2.59 L 20.53 6.57"
      }
    ],
    [
      "path",
      {
        "d": "M 20.53 6.57 L 24.51 2.59 L 24.51 13.45 L 20.53 17.43"
      }
    ]
  ]
};

export const PhleboLark = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.47 6.57 L 20.53 6.57 L 20.53 17.43 L 3.47 17.43 Z" />
      <path d="M 3.47 6.57 L 7.45 2.59 L 24.51 2.59 L 20.53 6.57" />
      <path d="M 20.53 6.57 L 24.51 2.59 L 24.51 13.45 L 20.53 17.43" />
      {children}
    </svg>
  );
});

export default PhleboLark;
