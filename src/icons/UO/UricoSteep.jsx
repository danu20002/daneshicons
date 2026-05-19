import React from 'react';

export const iconData = {
  "id": "UricoSteep",
  "name": "UricoSteep",
  "category": "UO",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.41 L 2.50 8.30 L 3.00 10.00 L 3.50 11.36 L 4.00 12.22 L 4.50 12.52 L 5.00 12.22 L 5.50 11.36 L 6.00 10.00 L 6.50 8.30 L 7.00 6.41 L 7.50 4.53 L 8.00 2.82 L 8.50 1.47 L 9.00 0.60 L 9.50 0.30 L 10.00 0.60 L 10.50 1.47 L 11.00 2.82 L 11.50 4.53 L 12.00 6.41 L 12.50 8.30 L 13.00 10.00 L 13.50 11.36 L 14.00 12.22 L 14.50 12.52 L 15.00 12.22 L 15.50 11.36 L 16.00 10.00 L 16.50 8.30 L 17.00 6.41 L 17.50 4.53 L 18.00 2.82 L 18.50 1.47 L 19.00 0.60 L 19.50 0.30 L 20.00 0.60 L 20.50 1.47 L 21.00 2.82 L 21.50 4.53 L 22.00 6.41"
      }
    ]
  ]
};

export const UricoSteep = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.41 L 2.50 8.30 L 3.00 10.00 L 3.50 11.36 L 4.00 12.22 L 4.50 12.52 L 5.00 12.22 L 5.50 11.36 L 6.00 10.00 L 6.50 8.30 L 7.00 6.41 L 7.50 4.53 L 8.00 2.82 L 8.50 1.47 L 9.00 0.60 L 9.50 0.30 L 10.00 0.60 L 10.50 1.47 L 11.00 2.82 L 11.50 4.53 L 12.00 6.41 L 12.50 8.30 L 13.00 10.00 L 13.50 11.36 L 14.00 12.22 L 14.50 12.52 L 15.00 12.22 L 15.50 11.36 L 16.00 10.00 L 16.50 8.30 L 17.00 6.41 L 17.50 4.53 L 18.00 2.82 L 18.50 1.47 L 19.00 0.60 L 19.50 0.30 L 20.00 0.60 L 20.50 1.47 L 21.00 2.82 L 21.50 4.53 L 22.00 6.41" />
      {children}
    </svg>
  );
});

export default UricoSteep;
