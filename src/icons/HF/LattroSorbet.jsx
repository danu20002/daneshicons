import React from 'react';

export const iconData = {
  "id": "LattroSorbet",
  "name": "LattroSorbet",
  "category": "HF",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.38 4.23 L 15.69 12.61 L 15.54 21.41 L 9.63 14.89 L 2.08 10.36 L 10.68 8.50 Z"
      }
    ]
  ]
};

export const LattroSorbet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.38 4.23 L 15.69 12.61 L 15.54 21.41 L 9.63 14.89 L 2.08 10.36 L 10.68 8.50 Z" />
      {children}
    </svg>
  );
});

export default LattroSorbet;
