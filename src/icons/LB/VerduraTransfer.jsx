import React from 'react';

export const iconData = {
  "id": "VerduraTransfer",
  "name": "VerduraTransfer",
  "category": "LB",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.54 L 2.50 8.91 L 3.00 9.98 L 3.50 10.52 L 4.00 10.41 L 4.50 9.67 L 5.00 8.47 L 5.50 7.07 L 6.00 5.77 L 6.50 4.85 L 7.00 4.52 L 7.50 4.85 L 8.00 5.77 L 8.50 7.07 L 9.00 8.47 L 9.50 9.67 L 10.00 10.41 L 10.50 10.52 L 11.00 9.98 L 11.50 8.91 L 12.00 7.54 L 12.50 6.17 L 13.00 5.10 L 13.50 4.56 L 14.00 4.67 L 14.50 5.41 L 15.00 6.61 L 15.50 8.01 L 16.00 9.31 L 16.50 10.23 L 17.00 10.56 L 17.50 10.23 L 18.00 9.31 L 18.50 8.01 L 19.00 6.61 L 19.50 5.41 L 20.00 4.67 L 20.50 4.56 L 21.00 5.10 L 21.50 6.17 L 22.00 7.54"
      }
    ]
  ]
};

export const VerduraTransfer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.54 L 2.50 8.91 L 3.00 9.98 L 3.50 10.52 L 4.00 10.41 L 4.50 9.67 L 5.00 8.47 L 5.50 7.07 L 6.00 5.77 L 6.50 4.85 L 7.00 4.52 L 7.50 4.85 L 8.00 5.77 L 8.50 7.07 L 9.00 8.47 L 9.50 9.67 L 10.00 10.41 L 10.50 10.52 L 11.00 9.98 L 11.50 8.91 L 12.00 7.54 L 12.50 6.17 L 13.00 5.10 L 13.50 4.56 L 14.00 4.67 L 14.50 5.41 L 15.00 6.61 L 15.50 8.01 L 16.00 9.31 L 16.50 10.23 L 17.00 10.56 L 17.50 10.23 L 18.00 9.31 L 18.50 8.01 L 19.00 6.61 L 19.50 5.41 L 20.00 4.67 L 20.50 4.56 L 21.00 5.10 L 21.50 6.17 L 22.00 7.54" />
      {children}
    </svg>
  );
});

export default VerduraTransfer;
