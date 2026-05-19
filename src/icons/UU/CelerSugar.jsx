import React from 'react';

export const iconData = {
  "id": "CelerSugar",
  "name": "CelerSugar",
  "category": "UU",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.80 16.83 L 3.41 14.47 L 5.87 12.89 L 4.21 15.13 L 3.63 16.45 L 3.15 17.99 L 5.66 20.58 L 7.97 20.56 L 10.01 21.04 L 9.44 20.77 L 9.67 23.00 L 10.03 20.24 L 7.78 19.58 L 5.47 20.90 L 6.32 18.30 L 3.33 15.49 L 5.43 15.00 L 8.25 15.67 L 9.38 16.95 L 11.99 17.04 L 11.85 19.33 L 12.81 20.39 L 11.57 23.00 L 11.10 23.00 L 12.03 23.00 L 12.16 23.00"
      }
    ]
  ]
};

export const CelerSugar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.80 16.83 L 3.41 14.47 L 5.87 12.89 L 4.21 15.13 L 3.63 16.45 L 3.15 17.99 L 5.66 20.58 L 7.97 20.56 L 10.01 21.04 L 9.44 20.77 L 9.67 23.00 L 10.03 20.24 L 7.78 19.58 L 5.47 20.90 L 6.32 18.30 L 3.33 15.49 L 5.43 15.00 L 8.25 15.67 L 9.38 16.95 L 11.99 17.04 L 11.85 19.33 L 12.81 20.39 L 11.57 23.00 L 11.10 23.00 L 12.03 23.00 L 12.16 23.00" />
      {children}
    </svg>
  );
});

export default CelerSugar;
