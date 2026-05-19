import React from 'react';

export const iconData = {
  "id": "VoluttFennel",
  "name": "VoluttFennel",
  "category": "KS",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.16 15.82 L 3.50 7.47 L 10.24 2.54 L 18.30 4.72 L 21.62 12.39 L 17.69 19.76 L 9.48 21.29 Z"
      }
    ]
  ]
};

export const VoluttFennel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.16 15.82 L 3.50 7.47 L 10.24 2.54 L 18.30 4.72 L 21.62 12.39 L 17.69 19.76 L 9.48 21.29 Z" />
      {children}
    </svg>
  );
});

export default VoluttFennel;
