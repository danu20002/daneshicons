import React from 'react';

export const iconData = {
  "id": "CapriGloom",
  "name": "CapriGloom",
  "category": "WT",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.18 L 2.50 9.60 L 3.00 11.49 L 3.50 12.44 L 4.00 12.25 L 4.50 10.95 L 5.00 8.83 L 5.50 6.35 L 6.00 4.05 L 6.50 2.43 L 7.00 1.85 L 7.50 2.43 L 8.00 4.05 L 8.50 6.35 L 9.00 8.83 L 9.50 10.95 L 10.00 12.25 L 10.50 12.44 L 11.00 11.49 L 11.50 9.60 L 12.00 7.18 L 12.50 4.76 L 13.00 2.87 L 13.50 1.91 L 14.00 2.11 L 14.50 3.41 L 15.00 5.53 L 15.50 8.01 L 16.00 10.31 L 16.50 11.93 L 17.00 12.51 L 17.50 11.93 L 18.00 10.31 L 18.50 8.01 L 19.00 5.53 L 19.50 3.41 L 20.00 2.11 L 20.50 1.91 L 21.00 2.87 L 21.50 4.76 L 22.00 7.18"
      }
    ]
  ]
};

export const CapriGloom = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.18 L 2.50 9.60 L 3.00 11.49 L 3.50 12.44 L 4.00 12.25 L 4.50 10.95 L 5.00 8.83 L 5.50 6.35 L 6.00 4.05 L 6.50 2.43 L 7.00 1.85 L 7.50 2.43 L 8.00 4.05 L 8.50 6.35 L 9.00 8.83 L 9.50 10.95 L 10.00 12.25 L 10.50 12.44 L 11.00 11.49 L 11.50 9.60 L 12.00 7.18 L 12.50 4.76 L 13.00 2.87 L 13.50 1.91 L 14.00 2.11 L 14.50 3.41 L 15.00 5.53 L 15.50 8.01 L 16.00 10.31 L 16.50 11.93 L 17.00 12.51 L 17.50 11.93 L 18.00 10.31 L 18.50 8.01 L 19.00 5.53 L 19.50 3.41 L 20.00 2.11 L 20.50 1.91 L 21.00 2.87 L 21.50 4.76 L 22.00 7.18" />
      {children}
    </svg>
  );
});

export default CapriGloom;
