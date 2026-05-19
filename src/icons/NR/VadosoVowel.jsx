import React from 'react';

export const iconData = {
  "id": "VadosoVowel",
  "name": "VadosoVowel",
  "category": "NR",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.78 9.60 L 19.20 15.80 L 14.40 19.78 L 8.20 19.20 L 4.22 14.40 L 4.80 8.20 L 9.60 4.22 L 15.80 4.80 Z"
      }
    ]
  ]
};

export const VadosoVowel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.78 9.60 L 19.20 15.80 L 14.40 19.78 L 8.20 19.20 L 4.22 14.40 L 4.80 8.20 L 9.60 4.22 L 15.80 4.80 Z" />
      {children}
    </svg>
  );
});

export default VadosoVowel;
