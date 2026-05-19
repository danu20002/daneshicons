import React from 'react';

export const iconData = {
  "id": "VeloceEdition",
  "name": "VeloceEdition",
  "category": "EW",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.06 5.36 L 14.11 4.00 L 19.57 8.66 L 19.33 15.83 L 13.57 20.12 L 6.63 18.29 L 3.73 11.73 Z"
      }
    ]
  ]
};

export const VeloceEdition = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.06 5.36 L 14.11 4.00 L 19.57 8.66 L 19.33 15.83 L 13.57 20.12 L 6.63 18.29 L 3.73 11.73 Z" />
      {children}
    </svg>
  );
});

export default VeloceEdition;
