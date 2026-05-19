import React from 'react';

export const iconData = {
  "id": "FundoDexter",
  "name": "FundoDexter",
  "category": "VB",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.77 5.00 L 15.94 11.62 L 19.00 17.77 L 12.38 15.94 L 6.23 19.00 L 8.06 12.38 L 5.00 6.23 L 11.62 8.06 Z"
      }
    ]
  ]
};

export const FundoDexter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.77 5.00 L 15.94 11.62 L 19.00 17.77 L 12.38 15.94 L 6.23 19.00 L 8.06 12.38 L 5.00 6.23 L 11.62 8.06 Z" />
      {children}
    </svg>
  );
});

export default FundoDexter;
