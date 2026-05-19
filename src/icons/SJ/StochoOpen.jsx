import React from 'react';

export const iconData = {
  "id": "StochoOpen",
  "name": "StochoOpen",
  "category": "SJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.23 L 2.50 8.07 L 3.00 9.21 L 3.50 9.21 L 4.00 8.07 L 4.50 6.23 L 5.00 4.38 L 5.50 3.24 L 6.00 3.24 L 6.50 4.38 L 7.00 6.23 L 7.50 8.07 L 8.00 9.21 L 8.50 9.21 L 9.00 8.07 L 9.50 6.23 L 10.00 4.38 L 10.50 3.24 L 11.00 3.24 L 11.50 4.38 L 12.00 6.23 L 12.50 8.07 L 13.00 9.21 L 13.50 9.21 L 14.00 8.07 L 14.50 6.23 L 15.00 4.38 L 15.50 3.24 L 16.00 3.24 L 16.50 4.38 L 17.00 6.23 L 17.50 8.07 L 18.00 9.21 L 18.50 9.21 L 19.00 8.07 L 19.50 6.23 L 20.00 4.38 L 20.50 3.24 L 21.00 3.24 L 21.50 4.38 L 22.00 6.23"
      }
    ]
  ]
};

export const StochoOpen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.23 L 2.50 8.07 L 3.00 9.21 L 3.50 9.21 L 4.00 8.07 L 4.50 6.23 L 5.00 4.38 L 5.50 3.24 L 6.00 3.24 L 6.50 4.38 L 7.00 6.23 L 7.50 8.07 L 8.00 9.21 L 8.50 9.21 L 9.00 8.07 L 9.50 6.23 L 10.00 4.38 L 10.50 3.24 L 11.00 3.24 L 11.50 4.38 L 12.00 6.23 L 12.50 8.07 L 13.00 9.21 L 13.50 9.21 L 14.00 8.07 L 14.50 6.23 L 15.00 4.38 L 15.50 3.24 L 16.00 3.24 L 16.50 4.38 L 17.00 6.23 L 17.50 8.07 L 18.00 9.21 L 18.50 9.21 L 19.00 8.07 L 19.50 6.23 L 20.00 4.38 L 20.50 3.24 L 21.00 3.24 L 21.50 4.38 L 22.00 6.23" />
      {children}
    </svg>
  );
});

export default StochoOpen;
