import React from 'react';

export const iconData = {
  "id": "MoleculoJupiter",
  "name": "MoleculoJupiter",
  "category": "FY",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.13 L 2.50 7.26 L 3.00 8.28 L 3.50 9.09 L 4.00 9.61 L 4.50 9.79 L 5.00 9.61 L 5.50 9.09 L 6.00 8.28 L 6.50 7.26 L 7.00 6.13 L 7.50 5.00 L 8.00 3.98 L 8.50 3.17 L 9.00 2.65 L 9.50 2.47 L 10.00 2.65 L 10.50 3.17 L 11.00 3.98 L 11.50 5.00 L 12.00 6.13 L 12.50 7.26 L 13.00 8.28 L 13.50 9.09 L 14.00 9.61 L 14.50 9.79 L 15.00 9.61 L 15.50 9.09 L 16.00 8.28 L 16.50 7.26 L 17.00 6.13 L 17.50 5.00 L 18.00 3.98 L 18.50 3.17 L 19.00 2.65 L 19.50 2.47 L 20.00 2.65 L 20.50 3.17 L 21.00 3.98 L 21.50 5.00 L 22.00 6.13"
      }
    ]
  ]
};

export const MoleculoJupiter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.13 L 2.50 7.26 L 3.00 8.28 L 3.50 9.09 L 4.00 9.61 L 4.50 9.79 L 5.00 9.61 L 5.50 9.09 L 6.00 8.28 L 6.50 7.26 L 7.00 6.13 L 7.50 5.00 L 8.00 3.98 L 8.50 3.17 L 9.00 2.65 L 9.50 2.47 L 10.00 2.65 L 10.50 3.17 L 11.00 3.98 L 11.50 5.00 L 12.00 6.13 L 12.50 7.26 L 13.00 8.28 L 13.50 9.09 L 14.00 9.61 L 14.50 9.79 L 15.00 9.61 L 15.50 9.09 L 16.00 8.28 L 16.50 7.26 L 17.00 6.13 L 17.50 5.00 L 18.00 3.98 L 18.50 3.17 L 19.00 2.65 L 19.50 2.47 L 20.00 2.65 L 20.50 3.17 L 21.00 3.98 L 21.50 5.00 L 22.00 6.13" />
      {children}
    </svg>
  );
});

export default MoleculoJupiter;
