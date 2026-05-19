import React from 'react';

export const iconData = {
  "id": "OlivoIndustry",
  "name": "OlivoIndustry",
  "category": "WA",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.60 L 2.50 8.20 L 3.00 9.64 L 3.50 10.78 L 4.00 11.51 L 4.50 11.77 L 5.00 11.51 L 5.50 10.78 L 6.00 9.64 L 6.50 8.20 L 7.00 6.60 L 7.50 5.01 L 8.00 3.57 L 8.50 2.42 L 9.00 1.69 L 9.50 1.44 L 10.00 1.69 L 10.50 2.42 L 11.00 3.57 L 11.50 5.01 L 12.00 6.60 L 12.50 8.20 L 13.00 9.64 L 13.50 10.78 L 14.00 11.51 L 14.50 11.77 L 15.00 11.51 L 15.50 10.78 L 16.00 9.64 L 16.50 8.20 L 17.00 6.60 L 17.50 5.01 L 18.00 3.57 L 18.50 2.42 L 19.00 1.69 L 19.50 1.44 L 20.00 1.69 L 20.50 2.42 L 21.00 3.57 L 21.50 5.01 L 22.00 6.60"
      }
    ]
  ]
};

export const OlivoIndustry = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.60 L 2.50 8.20 L 3.00 9.64 L 3.50 10.78 L 4.00 11.51 L 4.50 11.77 L 5.00 11.51 L 5.50 10.78 L 6.00 9.64 L 6.50 8.20 L 7.00 6.60 L 7.50 5.01 L 8.00 3.57 L 8.50 2.42 L 9.00 1.69 L 9.50 1.44 L 10.00 1.69 L 10.50 2.42 L 11.00 3.57 L 11.50 5.01 L 12.00 6.60 L 12.50 8.20 L 13.00 9.64 L 13.50 10.78 L 14.00 11.51 L 14.50 11.77 L 15.00 11.51 L 15.50 10.78 L 16.00 9.64 L 16.50 8.20 L 17.00 6.60 L 17.50 5.01 L 18.00 3.57 L 18.50 2.42 L 19.00 1.69 L 19.50 1.44 L 20.00 1.69 L 20.50 2.42 L 21.00 3.57 L 21.50 5.01 L 22.00 6.60" />
      {children}
    </svg>
  );
});

export default OlivoIndustry;
