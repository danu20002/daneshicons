import React from 'react';

export const iconData = {
  "id": "ThermoVigorous",
  "name": "ThermoVigorous",
  "category": "QQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.49 21.49 L 7.05 20.47 L 2.51 14.49 L 3.53 7.05 L 9.51 2.51 L 16.95 3.53 L 21.49 9.51 L 20.47 16.95 Z"
      }
    ]
  ]
};

export const ThermoVigorous = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.49 21.49 L 7.05 20.47 L 2.51 14.49 L 3.53 7.05 L 9.51 2.51 L 16.95 3.53 L 21.49 9.51 L 20.47 16.95 Z" />
      {children}
    </svg>
  );
});

export default ThermoVigorous;
