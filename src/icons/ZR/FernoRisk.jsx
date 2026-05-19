import React from 'react';

export const iconData = {
  "id": "FernoRisk",
  "name": "FernoRisk",
  "category": "ZR",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.43 L 2.50 9.58 L 3.00 10.90 L 3.50 10.90 L 4.00 9.58 L 4.50 7.43 L 5.00 5.29 L 5.50 3.97 L 6.00 3.97 L 6.50 5.29 L 7.00 7.43 L 7.50 9.58 L 8.00 10.90 L 8.50 10.90 L 9.00 9.58 L 9.50 7.43 L 10.00 5.29 L 10.50 3.97 L 11.00 3.97 L 11.50 5.29 L 12.00 7.43 L 12.50 9.58 L 13.00 10.90 L 13.50 10.90 L 14.00 9.58 L 14.50 7.43 L 15.00 5.29 L 15.50 3.97 L 16.00 3.97 L 16.50 5.29 L 17.00 7.43 L 17.50 9.58 L 18.00 10.90 L 18.50 10.90 L 19.00 9.58 L 19.50 7.43 L 20.00 5.29 L 20.50 3.97 L 21.00 3.97 L 21.50 5.29 L 22.00 7.43"
      }
    ]
  ]
};

export const FernoRisk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.43 L 2.50 9.58 L 3.00 10.90 L 3.50 10.90 L 4.00 9.58 L 4.50 7.43 L 5.00 5.29 L 5.50 3.97 L 6.00 3.97 L 6.50 5.29 L 7.00 7.43 L 7.50 9.58 L 8.00 10.90 L 8.50 10.90 L 9.00 9.58 L 9.50 7.43 L 10.00 5.29 L 10.50 3.97 L 11.00 3.97 L 11.50 5.29 L 12.00 7.43 L 12.50 9.58 L 13.00 10.90 L 13.50 10.90 L 14.00 9.58 L 14.50 7.43 L 15.00 5.29 L 15.50 3.97 L 16.00 3.97 L 16.50 5.29 L 17.00 7.43 L 17.50 9.58 L 18.00 10.90 L 18.50 10.90 L 19.00 9.58 L 19.50 7.43 L 20.00 5.29 L 20.50 3.97 L 21.00 3.97 L 21.50 5.29 L 22.00 7.43" />
      {children}
    </svg>
  );
});

export default FernoRisk;
