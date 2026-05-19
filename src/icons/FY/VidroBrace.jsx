import React from 'react';

export const iconData = {
  "id": "VidroBrace",
  "name": "VidroBrace",
  "category": "FY",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.58 L 2.50 8.03 L 3.00 9.33 L 3.50 10.37 L 4.00 11.03 L 4.50 11.26 L 5.00 11.03 L 5.50 10.37 L 6.00 9.33 L 6.50 8.03 L 7.00 6.58 L 7.50 5.13 L 8.00 3.83 L 8.50 2.79 L 9.00 2.13 L 9.50 1.90 L 10.00 2.13 L 10.50 2.79 L 11.00 3.83 L 11.50 5.13 L 12.00 6.58 L 12.50 8.03 L 13.00 9.33 L 13.50 10.37 L 14.00 11.03 L 14.50 11.26 L 15.00 11.03 L 15.50 10.37 L 16.00 9.33 L 16.50 8.03 L 17.00 6.58 L 17.50 5.13 L 18.00 3.83 L 18.50 2.79 L 19.00 2.13 L 19.50 1.90 L 20.00 2.13 L 20.50 2.79 L 21.00 3.83 L 21.50 5.13 L 22.00 6.58"
      }
    ]
  ]
};

export const VidroBrace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.58 L 2.50 8.03 L 3.00 9.33 L 3.50 10.37 L 4.00 11.03 L 4.50 11.26 L 5.00 11.03 L 5.50 10.37 L 6.00 9.33 L 6.50 8.03 L 7.00 6.58 L 7.50 5.13 L 8.00 3.83 L 8.50 2.79 L 9.00 2.13 L 9.50 1.90 L 10.00 2.13 L 10.50 2.79 L 11.00 3.83 L 11.50 5.13 L 12.00 6.58 L 12.50 8.03 L 13.00 9.33 L 13.50 10.37 L 14.00 11.03 L 14.50 11.26 L 15.00 11.03 L 15.50 10.37 L 16.00 9.33 L 16.50 8.03 L 17.00 6.58 L 17.50 5.13 L 18.00 3.83 L 18.50 2.79 L 19.00 2.13 L 19.50 1.90 L 20.00 2.13 L 20.50 2.79 L 21.00 3.83 L 21.50 5.13 L 22.00 6.58" />
      {children}
    </svg>
  );
});

export default VidroBrace;
