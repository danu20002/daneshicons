import React from 'react';

export const iconData = {
  "id": "TrasfigClause",
  "name": "TrasfigClause",
  "category": "BU",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.77 16.81 L 18.91 15.24 L 20.39 14.92 L 22.12 13.65 L 23.00 15.95 L 21.98 14.49 L 21.47 14.36 L 21.40 15.74 L 18.41 15.16 L 16.81 12.23 L 14.82 11.32 L 15.45 11.91 L 15.06 10.12 L 13.24 10.10 L 14.90 9.03 L 14.84 6.47 L 15.27 6.92 L 14.23 7.69 L 15.96 5.65 L 18.26 3.91 L 16.41 2.68 L 19.08 2.03 L 17.91 1.00 L 17.28 1.00 L 18.92 1.00 L 15.98 2.02 L 18.72 1.09 L 17.08 3.32"
      }
    ],
    [
      "path",
      {
        "d": "M 7.37 18.13 L 10.11 19.88 L 10.13 22.33 L 11.55 23.00 L 9.12 20.68 L 10.52 21.61 L 7.67 19.15 L 10.03 18.88 L 11.38 17.01 L 11.13 14.74 L 11.74 12.76 L 11.20 12.67 L 10.35 12.82 L 11.07 12.56 L 12.94 10.96 L 10.19 11.42 L 10.80 8.75 L 11.82 6.03 L 12.09 7.23 L 11.96 4.34 L 13.01 6.90 L 12.33 6.03 L 15.07 4.49 L 13.68 2.59"
      }
    ]
  ]
};

export const TrasfigClause = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.77 16.81 L 18.91 15.24 L 20.39 14.92 L 22.12 13.65 L 23.00 15.95 L 21.98 14.49 L 21.47 14.36 L 21.40 15.74 L 18.41 15.16 L 16.81 12.23 L 14.82 11.32 L 15.45 11.91 L 15.06 10.12 L 13.24 10.10 L 14.90 9.03 L 14.84 6.47 L 15.27 6.92 L 14.23 7.69 L 15.96 5.65 L 18.26 3.91 L 16.41 2.68 L 19.08 2.03 L 17.91 1.00 L 17.28 1.00 L 18.92 1.00 L 15.98 2.02 L 18.72 1.09 L 17.08 3.32" />
      <path d="M 7.37 18.13 L 10.11 19.88 L 10.13 22.33 L 11.55 23.00 L 9.12 20.68 L 10.52 21.61 L 7.67 19.15 L 10.03 18.88 L 11.38 17.01 L 11.13 14.74 L 11.74 12.76 L 11.20 12.67 L 10.35 12.82 L 11.07 12.56 L 12.94 10.96 L 10.19 11.42 L 10.80 8.75 L 11.82 6.03 L 12.09 7.23 L 11.96 4.34 L 13.01 6.90 L 12.33 6.03 L 15.07 4.49 L 13.68 2.59" />
      {children}
    </svg>
  );
});

export default TrasfigClause;
