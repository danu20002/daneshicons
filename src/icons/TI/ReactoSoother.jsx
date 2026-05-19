import React from 'react';

export const iconData = {
  "id": "ReactoSoother",
  "name": "ReactoSoother",
  "category": "TI",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.78 4.78 L 17.87 5.95 L 17.22 7.26 L 16.01 4.72 L 17.39 2.27 L 20.07 1.00 L 21.25 1.00 L 23.00 1.00 L 20.53 1.00 L 19.96 2.18 L 17.06 3.09 L 14.91 5.80 L 13.22 3.18 L 14.14 4.71 L 16.74 5.88 L 19.47 3.97 L 18.11 4.04 L 16.91 1.51 L 19.59 2.09 L 18.81 2.41 L 17.17 3.86 L 16.22 2.65 L 15.30 3.01"
      }
    ]
  ]
};

export const ReactoSoother = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.78 4.78 L 17.87 5.95 L 17.22 7.26 L 16.01 4.72 L 17.39 2.27 L 20.07 1.00 L 21.25 1.00 L 23.00 1.00 L 20.53 1.00 L 19.96 2.18 L 17.06 3.09 L 14.91 5.80 L 13.22 3.18 L 14.14 4.71 L 16.74 5.88 L 19.47 3.97 L 18.11 4.04 L 16.91 1.51 L 19.59 2.09 L 18.81 2.41 L 17.17 3.86 L 16.22 2.65 L 15.30 3.01" />
      {children}
    </svg>
  );
});

export default ReactoSoother;
