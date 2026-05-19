import React from 'react';

export const iconData = {
  "id": "OmniThermal",
  "name": "OmniThermal",
  "category": "PZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.21 13.67 L 14.81 15.91 L 10.33 22.21 L 8.09 14.81 L 1.79 10.33 L 9.19 8.09 L 13.67 1.79 L 15.91 9.19 Z"
      }
    ]
  ]
};

export const OmniThermal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.21 13.67 L 14.81 15.91 L 10.33 22.21 L 8.09 14.81 L 1.79 10.33 L 9.19 8.09 L 13.67 1.79 L 15.91 9.19 Z" />
      {children}
    </svg>
  );
});

export default OmniThermal;
