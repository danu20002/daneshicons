import React from 'react';

export const iconData = {
  "id": "TransStable",
  "name": "TransStable",
  "category": "ZR",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.37 L 2.50 9.45 L 3.00 11.32 L 3.50 12.81 L 4.00 13.76 L 4.50 14.09 L 5.00 13.76 L 5.50 12.81 L 6.00 11.32 L 6.50 9.45 L 7.00 7.37 L 7.50 5.30 L 8.00 3.42 L 8.50 1.94 L 9.00 0.98 L 9.50 0.65 L 10.00 0.98 L 10.50 1.94 L 11.00 3.42 L 11.50 5.30 L 12.00 7.37 L 12.50 9.45 L 13.00 11.32 L 13.50 12.81 L 14.00 13.76 L 14.50 14.09 L 15.00 13.76 L 15.50 12.81 L 16.00 11.32 L 16.50 9.45 L 17.00 7.37 L 17.50 5.30 L 18.00 3.42 L 18.50 1.94 L 19.00 0.98 L 19.50 0.65 L 20.00 0.98 L 20.50 1.94 L 21.00 3.42 L 21.50 5.30 L 22.00 7.37"
      }
    ]
  ]
};

export const TransStable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.37 L 2.50 9.45 L 3.00 11.32 L 3.50 12.81 L 4.00 13.76 L 4.50 14.09 L 5.00 13.76 L 5.50 12.81 L 6.00 11.32 L 6.50 9.45 L 7.00 7.37 L 7.50 5.30 L 8.00 3.42 L 8.50 1.94 L 9.00 0.98 L 9.50 0.65 L 10.00 0.98 L 10.50 1.94 L 11.00 3.42 L 11.50 5.30 L 12.00 7.37 L 12.50 9.45 L 13.00 11.32 L 13.50 12.81 L 14.00 13.76 L 14.50 14.09 L 15.00 13.76 L 15.50 12.81 L 16.00 11.32 L 16.50 9.45 L 17.00 7.37 L 17.50 5.30 L 18.00 3.42 L 18.50 1.94 L 19.00 0.98 L 19.50 0.65 L 20.00 0.98 L 20.50 1.94 L 21.00 3.42 L 21.50 5.30 L 22.00 7.37" />
      {children}
    </svg>
  );
});

export default TransStable;
