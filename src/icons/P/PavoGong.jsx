import React from 'react';

export const iconData = {
  "id": "PavoGong",
  "name": "PavoGong",
  "category": "P",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.72 9.29 L 13.64 10.79 L 11.02 8.01 L 13.03 7.61 L 10.38 6.72 L 10.41 4.08 L 9.03 6.06 L 8.12 3.90 L 7.01 6.77 L 7.80 8.10 L 10.34 8.55 L 8.75 7.60 L 8.01 7.94 L 5.34 5.86 L 2.73 3.45 L 4.78 4.63"
      }
    ],
    [
      "path",
      {
        "d": "M 5.58 12.28 L 3.19 13.14 L 3.62 10.52 L 6.53 8.57 L 6.37 9.93 L 7.87 8.12 L 7.68 5.39 L 7.84 5.89 L 5.07 8.61 L 7.36 11.24 L 8.31 8.68 L 7.48 10.03 L 5.76 9.07 L 3.94 10.98 L 6.93 10.72 L 7.90 8.67 L 10.70 10.37 L 8.69 12.42 L 7.43 10.94 L 8.24 10.59 L 6.33 9.98 L 5.99 8.11 L 3.15 6.08"
      }
    ]
  ]
};

export const PavoGong = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.72 9.29 L 13.64 10.79 L 11.02 8.01 L 13.03 7.61 L 10.38 6.72 L 10.41 4.08 L 9.03 6.06 L 8.12 3.90 L 7.01 6.77 L 7.80 8.10 L 10.34 8.55 L 8.75 7.60 L 8.01 7.94 L 5.34 5.86 L 2.73 3.45 L 4.78 4.63" />
      <path d="M 5.58 12.28 L 3.19 13.14 L 3.62 10.52 L 6.53 8.57 L 6.37 9.93 L 7.87 8.12 L 7.68 5.39 L 7.84 5.89 L 5.07 8.61 L 7.36 11.24 L 8.31 8.68 L 7.48 10.03 L 5.76 9.07 L 3.94 10.98 L 6.93 10.72 L 7.90 8.67 L 10.70 10.37 L 8.69 12.42 L 7.43 10.94 L 8.24 10.59 L 6.33 9.98 L 5.99 8.11 L 3.15 6.08" />
      {children}
    </svg>
  );
});

export default PavoGong;
