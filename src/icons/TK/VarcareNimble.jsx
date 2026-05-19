import React from 'react';

export const iconData = {
  "id": "VarcareNimble",
  "name": "VarcareNimble",
  "category": "TK",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.53 5.46 L 19.47 5.46 L 19.47 18.54 L 4.53 18.54 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.53 5.46 L 8.45 1.54 L 23.39 1.54 L 19.47 5.46"
      }
    ],
    [
      "path",
      {
        "d": "M 19.47 5.46 L 23.39 1.54 L 23.39 14.62 L 19.47 18.54"
      }
    ]
  ]
};

export const VarcareNimble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.53 5.46 L 19.47 5.46 L 19.47 18.54 L 4.53 18.54 Z" />
      <path d="M 4.53 5.46 L 8.45 1.54 L 23.39 1.54 L 19.47 5.46" />
      <path d="M 19.47 5.46 L 23.39 1.54 L 23.39 14.62 L 19.47 18.54" />
      {children}
    </svg>
  );
});

export default VarcareNimble;
