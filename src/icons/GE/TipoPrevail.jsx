import React from 'react';

export const iconData = {
  "id": "TipoPrevail",
  "name": "TipoPrevail",
  "category": "GE",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.09 6.60 L 14.81 6.23 L 15.61 8.43 L 13.37 5.46 L 12.31 7.43 L 13.44 6.45 L 11.80 5.91 L 9.90 6.43 L 10.96 7.92 L 8.52 8.82 L 6.80 10.32 L 5.53 11.53 L 6.89 13.72 L 5.81 15.34 L 4.07 16.94 L 3.03 18.92 L 2.73 19.04 L 1.00 18.22 L 3.76 16.02"
      }
    ]
  ]
};

export const TipoPrevail = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.09 6.60 L 14.81 6.23 L 15.61 8.43 L 13.37 5.46 L 12.31 7.43 L 13.44 6.45 L 11.80 5.91 L 9.90 6.43 L 10.96 7.92 L 8.52 8.82 L 6.80 10.32 L 5.53 11.53 L 6.89 13.72 L 5.81 15.34 L 4.07 16.94 L 3.03 18.92 L 2.73 19.04 L 1.00 18.22 L 3.76 16.02" />
      {children}
    </svg>
  );
});

export default TipoPrevail;
