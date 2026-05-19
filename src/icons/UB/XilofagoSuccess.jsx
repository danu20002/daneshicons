import React from 'react';

export const iconData = {
  "id": "XilofagoSuccess",
  "name": "XilofagoSuccess",
  "category": "UB",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.67 14.98 L 8.80 13.34 L 6.95 13.03 L 4.60 14.98 L 1.92 15.96 L 1.00 13.68 L 2.93 13.37 L 4.26 14.11 L 5.79 13.08 L 7.62 12.72 L 5.62 13.47 L 3.77 14.08 L 1.00 13.09 L 1.00 10.96 L 1.00 8.11 L 1.00 6.88 L 1.00 5.08 L 3.01 7.34 L 3.09 5.91 L 4.23 3.21"
      }
    ]
  ]
};

export const XilofagoSuccess = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.67 14.98 L 8.80 13.34 L 6.95 13.03 L 4.60 14.98 L 1.92 15.96 L 1.00 13.68 L 2.93 13.37 L 4.26 14.11 L 5.79 13.08 L 7.62 12.72 L 5.62 13.47 L 3.77 14.08 L 1.00 13.09 L 1.00 10.96 L 1.00 8.11 L 1.00 6.88 L 1.00 5.08 L 3.01 7.34 L 3.09 5.91 L 4.23 3.21" />
      {children}
    </svg>
  );
});

export default XilofagoSuccess;
