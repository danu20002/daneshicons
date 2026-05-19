import React from 'react';

export const iconData = {
  "id": "QuarzoFable",
  "name": "QuarzoFable",
  "category": "NZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.83 L 2.50 9.57 L 3.00 11.72 L 3.50 12.81 L 4.00 12.58 L 4.50 11.11 L 5.00 8.70 L 5.50 5.88 L 6.00 3.27 L 6.50 1.43 L 7.00 0.77 L 7.50 1.43 L 8.00 3.27 L 8.50 5.88 L 9.00 8.70 L 9.50 11.11 L 10.00 12.58 L 10.50 12.81 L 11.00 11.72 L 11.50 9.57 L 12.00 6.83 L 12.50 4.08 L 13.00 1.93 L 13.50 0.84 L 14.00 1.07 L 14.50 2.54 L 15.00 4.95 L 15.50 7.77 L 16.00 10.39 L 16.50 12.22 L 17.00 12.88 L 17.50 12.22 L 18.00 10.39 L 18.50 7.77 L 19.00 4.95 L 19.50 2.54 L 20.00 1.07 L 20.50 0.84 L 21.00 1.93 L 21.50 4.08 L 22.00 6.83"
      }
    ]
  ]
};

export const QuarzoFable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.83 L 2.50 9.57 L 3.00 11.72 L 3.50 12.81 L 4.00 12.58 L 4.50 11.11 L 5.00 8.70 L 5.50 5.88 L 6.00 3.27 L 6.50 1.43 L 7.00 0.77 L 7.50 1.43 L 8.00 3.27 L 8.50 5.88 L 9.00 8.70 L 9.50 11.11 L 10.00 12.58 L 10.50 12.81 L 11.00 11.72 L 11.50 9.57 L 12.00 6.83 L 12.50 4.08 L 13.00 1.93 L 13.50 0.84 L 14.00 1.07 L 14.50 2.54 L 15.00 4.95 L 15.50 7.77 L 16.00 10.39 L 16.50 12.22 L 17.00 12.88 L 17.50 12.22 L 18.00 10.39 L 18.50 7.77 L 19.00 4.95 L 19.50 2.54 L 20.00 1.07 L 20.50 0.84 L 21.00 1.93 L 21.50 4.08 L 22.00 6.83" />
      {children}
    </svg>
  );
});

export default QuarzoFable;
