import React from 'react';

export const iconData = {
  "id": "VolutoPrince",
  "name": "VolutoPrince",
  "category": "UO",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.40 L 2.50 9.42 L 3.00 11.25 L 3.50 12.70 L 4.00 13.63 L 4.50 13.95 L 5.00 13.63 L 5.50 12.70 L 6.00 11.25 L 6.50 9.42 L 7.00 7.40 L 7.50 5.37 L 8.00 3.55 L 8.50 2.10 L 9.00 1.17 L 9.50 0.85 L 10.00 1.17 L 10.50 2.10 L 11.00 3.55 L 11.50 5.37 L 12.00 7.40 L 12.50 9.42 L 13.00 11.25 L 13.50 12.70 L 14.00 13.63 L 14.50 13.95 L 15.00 13.63 L 15.50 12.70 L 16.00 11.25 L 16.50 9.42 L 17.00 7.40 L 17.50 5.37 L 18.00 3.55 L 18.50 2.10 L 19.00 1.17 L 19.50 0.85 L 20.00 1.17 L 20.50 2.10 L 21.00 3.55 L 21.50 5.37 L 22.00 7.40"
      }
    ]
  ]
};

export const VolutoPrince = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.40 L 2.50 9.42 L 3.00 11.25 L 3.50 12.70 L 4.00 13.63 L 4.50 13.95 L 5.00 13.63 L 5.50 12.70 L 6.00 11.25 L 6.50 9.42 L 7.00 7.40 L 7.50 5.37 L 8.00 3.55 L 8.50 2.10 L 9.00 1.17 L 9.50 0.85 L 10.00 1.17 L 10.50 2.10 L 11.00 3.55 L 11.50 5.37 L 12.00 7.40 L 12.50 9.42 L 13.00 11.25 L 13.50 12.70 L 14.00 13.63 L 14.50 13.95 L 15.00 13.63 L 15.50 12.70 L 16.00 11.25 L 16.50 9.42 L 17.00 7.40 L 17.50 5.37 L 18.00 3.55 L 18.50 2.10 L 19.00 1.17 L 19.50 0.85 L 20.00 1.17 L 20.50 2.10 L 21.00 3.55 L 21.50 5.37 L 22.00 7.40" />
      {children}
    </svg>
  );
});

export default VolutoPrince;
