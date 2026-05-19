import React from 'react';

export const iconData = {
  "id": "VertigoWrong",
  "name": "VertigoWrong",
  "category": "BR",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.12 12.63 A 6.04 6.45 84 0 1 12.36 5.93"
      }
    ],
    [
      "path",
      {
        "d": "M 2.32 11.01 A 2.25 6.20 133 0 1 6.35 8.38"
      }
    ],
    [
      "path",
      {
        "d": "M 3.32 20.38 Q 8.82 3.34 8.39 17.41"
      }
    ],
    [
      "path",
      {
        "d": "M 21.89 6.21 C 2.83 16.36, 5.45 15.13, 19.94 17.42"
      }
    ]
  ]
};

export const VertigoWrong = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.12 12.63 A 6.04 6.45 84 0 1 12.36 5.93" />
      <path d="M 2.32 11.01 A 2.25 6.20 133 0 1 6.35 8.38" />
      <path d="M 3.32 20.38 Q 8.82 3.34 8.39 17.41" />
      <path d="M 21.89 6.21 C 2.83 16.36, 5.45 15.13, 19.94 17.42" />
      {children}
    </svg>
  );
});

export default VertigoWrong;
