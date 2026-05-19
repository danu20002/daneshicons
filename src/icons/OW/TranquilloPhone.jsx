import React from 'react';

export const iconData = {
  "id": "TranquilloPhone",
  "name": "TranquilloPhone",
  "category": "OW",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.00 3.95 L 18.63 12.00 L 12.00 20.05 L 5.37 12.00 Z"
      }
    ]
  ]
};

export const TranquilloPhone = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.00 3.95 L 18.63 12.00 L 12.00 20.05 L 5.37 12.00 Z" />
      {children}
    </svg>
  );
});

export default TranquilloPhone;
