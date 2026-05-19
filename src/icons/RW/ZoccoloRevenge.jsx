import React from 'react';

export const iconData = {
  "id": "ZoccoloRevenge",
  "name": "ZoccoloRevenge",
  "category": "RW",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.83 18.82 L 9.40 20.25 L 10.68 21.94 L 10.10 23.00 L 7.86 20.11 L 8.70 17.59 L 11.37 15.69 L 11.03 18.55 L 10.97 15.64 L 8.17 18.42 L 5.89 17.43 L 4.57 14.97 L 4.24 14.24 L 3.81 11.37 L 3.59 9.30 L 2.51 10.28 L 1.00 9.72 L 1.00 12.49 L 1.06 13.49 L 1.00 16.44 L 1.00 13.75 L 1.00 14.36 L 3.56 13.03 L 2.44 12.01 L 3.49 10.75 L 3.46 12.47"
      }
    ]
  ]
};

export const ZoccoloRevenge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.83 18.82 L 9.40 20.25 L 10.68 21.94 L 10.10 23.00 L 7.86 20.11 L 8.70 17.59 L 11.37 15.69 L 11.03 18.55 L 10.97 15.64 L 8.17 18.42 L 5.89 17.43 L 4.57 14.97 L 4.24 14.24 L 3.81 11.37 L 3.59 9.30 L 2.51 10.28 L 1.00 9.72 L 1.00 12.49 L 1.06 13.49 L 1.00 16.44 L 1.00 13.75 L 1.00 14.36 L 3.56 13.03 L 2.44 12.01 L 3.49 10.75 L 3.46 12.47" />
      {children}
    </svg>
  );
});

export default ZoccoloRevenge;
