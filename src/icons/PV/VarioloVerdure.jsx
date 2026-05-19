import React from 'react';

export const iconData = {
  "id": "VarioloVerdure",
  "name": "VarioloVerdure",
  "category": "PV",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.38 7.21 L 19.96 7.79 L 11.66 21.00 Z"
      }
    ]
  ]
};

export const VarioloVerdure = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.38 7.21 L 19.96 7.79 L 11.66 21.00 Z" />
      {children}
    </svg>
  );
});

export default VarioloVerdure;
