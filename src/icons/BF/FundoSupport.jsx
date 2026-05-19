import React from 'react';

export const iconData = {
  "id": "FundoSupport",
  "name": "FundoSupport",
  "category": "BF",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.25 20.10 L 6.45 17.91 L 3.90 12.25 L 6.09 6.45 L 11.75 3.90 L 17.55 6.09 L 20.10 11.75 L 17.91 17.55 Z"
      }
    ]
  ]
};

export const FundoSupport = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.25 20.10 L 6.45 17.91 L 3.90 12.25 L 6.09 6.45 L 11.75 3.90 L 17.55 6.09 L 20.10 11.75 L 17.91 17.55 Z" />
      {children}
    </svg>
  );
});

export default FundoSupport;
