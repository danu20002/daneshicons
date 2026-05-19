import React from 'react';

export const iconData = {
  "id": "LeucoFinance",
  "name": "LeucoFinance",
  "category": "EZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.97 12.93 L 8.92 11.05 L 4.25 5.57 L 10.50 9.15 L 11.07 1.97 L 12.95 8.92 L 18.43 4.25 L 14.85 10.50 L 22.03 11.07 L 15.08 12.95 L 19.75 18.43 L 13.50 14.85 L 12.93 22.03 L 11.05 15.08 L 5.57 19.75 L 9.15 13.50 Z"
      }
    ]
  ]
};

export const LeucoFinance = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.97 12.93 L 8.92 11.05 L 4.25 5.57 L 10.50 9.15 L 11.07 1.97 L 12.95 8.92 L 18.43 4.25 L 14.85 10.50 L 22.03 11.07 L 15.08 12.95 L 19.75 18.43 L 13.50 14.85 L 12.93 22.03 L 11.05 15.08 L 5.57 19.75 L 9.15 13.50 Z" />
      {children}
    </svg>
  );
});

export default LeucoFinance;
