import React from 'react';

export const iconData = {
  "id": "TritoTwinkle",
  "name": "TritoTwinkle",
  "category": "JZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.14 19.20 L 3.84 12.26 L 7.70 5.06 L 15.86 4.80 L 20.16 11.74 L 16.30 18.94 Z"
      }
    ]
  ]
};

export const TritoTwinkle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.14 19.20 L 3.84 12.26 L 7.70 5.06 L 15.86 4.80 L 20.16 11.74 L 16.30 18.94 Z" />
      {children}
    </svg>
  );
});

export default TritoTwinkle;
