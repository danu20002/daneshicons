import React from 'react';

export const iconData = {
  "id": "SolenoFade",
  "name": "SolenoFade",
  "category": "LJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.63 6.58 L 20.37 6.58 L 20.37 17.42 L 3.63 17.42 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.63 6.58 L 7.04 3.17 L 23.78 3.17 L 20.37 6.58"
      }
    ],
    [
      "path",
      {
        "d": "M 20.37 6.58 L 23.78 3.17 L 23.78 14.01 L 20.37 17.42"
      }
    ]
  ]
};

export const SolenoFade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.63 6.58 L 20.37 6.58 L 20.37 17.42 L 3.63 17.42 Z" />
      <path d="M 3.63 6.58 L 7.04 3.17 L 23.78 3.17 L 20.37 6.58" />
      <path d="M 20.37 6.58 L 23.78 3.17 L 23.78 14.01 L 20.37 17.42" />
      {children}
    </svg>
  );
});

export default SolenoFade;
