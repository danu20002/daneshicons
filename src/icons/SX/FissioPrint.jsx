import React from 'react';

export const iconData = {
  "id": "FissioPrint",
  "name": "FissioPrint",
  "category": "SX",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.27 13.32 L 15.88 15.04 L 15.49 20.69 L 11.30 16.88 L 6.22 19.37 L 7.42 13.84 L 2.73 10.68 L 8.12 8.96 L 8.51 3.31 L 12.70 7.12 L 17.78 4.63 L 16.58 10.16 Z"
      }
    ]
  ]
};

export const FissioPrint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.27 13.32 L 15.88 15.04 L 15.49 20.69 L 11.30 16.88 L 6.22 19.37 L 7.42 13.84 L 2.73 10.68 L 8.12 8.96 L 8.51 3.31 L 12.70 7.12 L 17.78 4.63 L 16.58 10.16 Z" />
      {children}
    </svg>
  );
});

export default FissioPrint;
