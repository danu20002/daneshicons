import React from 'react';

export const iconData = {
  "id": "SyntoFace",
  "name": "SyntoFace",
  "category": "CV",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.80 22.31 L 9.36 14.38 L 1.51 13.09 L 8.92 10.22 L 7.72 2.36 L 12.74 8.52 L 19.84 4.95 L 15.54 11.63 L 21.13 17.28 L 13.44 15.25 Z"
      }
    ]
  ]
};

export const SyntoFace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.80 22.31 L 9.36 14.38 L 1.51 13.09 L 8.92 10.22 L 7.72 2.36 L 12.74 8.52 L 19.84 4.95 L 15.54 11.63 L 21.13 17.28 L 13.44 15.25 Z" />
      {children}
    </svg>
  );
});

export default SyntoFace;
