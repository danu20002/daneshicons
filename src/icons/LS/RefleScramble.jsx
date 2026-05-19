import React from 'react';

export const iconData = {
  "id": "RefleScramble",
  "name": "RefleScramble",
  "category": "LS",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.16 6.02 C 12.21 7.75, 9.05 16.76, 19.06 15.93"
      }
    ],
    [
      "path",
      {
        "d": "M 4.73 4.73 C 13.22 17.58, 14.86 16.96, 14.82 15.65"
      }
    ],
    [
      "path",
      {
        "d": "M 3.36 6.53 C 16.34 18.93, 8.29 16.88, 15.52 16.58"
      }
    ]
  ]
};

export const RefleScramble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.16 6.02 C 12.21 7.75, 9.05 16.76, 19.06 15.93" />
      <path d="M 4.73 4.73 C 13.22 17.58, 14.86 16.96, 14.82 15.65" />
      <path d="M 3.36 6.53 C 16.34 18.93, 8.29 16.88, 15.52 16.58" />
      {children}
    </svg>
  );
});

export default RefleScramble;
