import React from 'react';

export const iconData = {
  "id": "FundoVulture",
  "name": "FundoVulture",
  "category": "U",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.72 16.52 L 3.66 10.05 L 7.48 4.72 L 13.95 3.66 L 19.28 7.48 L 20.34 13.95 L 16.52 19.28 L 10.05 20.34 Z"
      }
    ]
  ]
};

export const FundoVulture = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.72 16.52 L 3.66 10.05 L 7.48 4.72 L 13.95 3.66 L 19.28 7.48 L 20.34 13.95 L 16.52 19.28 L 10.05 20.34 Z" />
      {children}
    </svg>
  );
});

export default FundoVulture;
