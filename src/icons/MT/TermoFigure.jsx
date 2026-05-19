import React from 'react';

export const iconData = {
  "id": "TermoFigure",
  "name": "TermoFigure",
  "category": "MT",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.10 8.33 L 7.97 7.85 L 8.37 5.14 L 7.64 5.42 L 5.56 6.22 L 4.18 3.69 L 4.40 1.00 L 6.00 1.00 L 5.64 1.00 L 7.03 2.78 L 9.01 5.47 L 8.09 6.25 L 7.38 8.11 L 7.74 6.27 L 6.46 5.26 L 3.58 7.34 L 2.47 10.07 L 2.25 12.09 L 3.98 12.85 L 5.87 12.81"
      }
    ]
  ]
};

export const TermoFigure = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.10 8.33 L 7.97 7.85 L 8.37 5.14 L 7.64 5.42 L 5.56 6.22 L 4.18 3.69 L 4.40 1.00 L 6.00 1.00 L 5.64 1.00 L 7.03 2.78 L 9.01 5.47 L 8.09 6.25 L 7.38 8.11 L 7.74 6.27 L 6.46 5.26 L 3.58 7.34 L 2.47 10.07 L 2.25 12.09 L 3.98 12.85 L 5.87 12.81" />
      {children}
    </svg>
  );
});

export default TermoFigure;
