import React from 'react';

export const iconData = {
  "id": "TyphoPluck",
  "name": "TyphoPluck",
  "category": "MG",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.48 20.01 L 4.17 15.02 L 4.75 7.76 L 10.80 3.69 L 17.75 5.88 L 20.37 12.68 L 16.69 18.97 Z"
      }
    ]
  ]
};

export const TyphoPluck = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.48 20.01 L 4.17 15.02 L 4.75 7.76 L 10.80 3.69 L 17.75 5.88 L 20.37 12.68 L 16.69 18.97 Z" />
      {children}
    </svg>
  );
});

export default TyphoPluck;
