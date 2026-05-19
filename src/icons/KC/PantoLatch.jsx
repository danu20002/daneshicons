import React from 'react';

export const iconData = {
  "id": "PantoLatch",
  "name": "PantoLatch",
  "category": "KC",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.83 2.48 L 12.99 7.67 L 18.09 4.37 L 16.00 10.08 L 21.77 12.01 L 16.00 13.93 L 18.09 19.64 L 12.99 16.33 L 9.82 21.52 L 9.23 15.47 L 3.20 16.23 L 7.56 12.00 L 3.20 7.76 L 9.23 8.53 Z"
      }
    ]
  ]
};

export const PantoLatch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.83 2.48 L 12.99 7.67 L 18.09 4.37 L 16.00 10.08 L 21.77 12.01 L 16.00 13.93 L 18.09 19.64 L 12.99 16.33 L 9.82 21.52 L 9.23 15.47 L 3.20 16.23 L 7.56 12.00 L 3.20 7.76 L 9.23 8.53 Z" />
      {children}
    </svg>
  );
});

export default PantoLatch;
