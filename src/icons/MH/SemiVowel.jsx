import React from 'react';

export const iconData = {
  "id": "SemiVowel",
  "name": "SemiVowel",
  "category": "MH",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.81 20.44 L 10.92 17.82 L 3.56 17.81 L 6.18 10.92 L 6.19 3.56 L 13.08 6.18 L 20.44 6.19 L 17.82 13.08 Z"
      }
    ]
  ]
};

export const SemiVowel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.81 20.44 L 10.92 17.82 L 3.56 17.81 L 6.18 10.92 L 6.19 3.56 L 13.08 6.18 L 20.44 6.19 L 17.82 13.08 Z" />
      {children}
    </svg>
  );
});

export default SemiVowel;
