import React from 'react';

export const iconData = {
  "id": "ThermoTourist",
  "name": "ThermoTourist",
  "category": "YL",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.30 10.67 L 14.28 9.18 L 13.15 11.65 L 14.08 12.56 L 15.35 15.22 L 14.91 15.20 L 12.21 13.24 L 12.19 13.10 L 13.33 15.12 L 13.87 15.97 L 13.96 15.44 L 15.26 18.36 L 14.14 17.55 L 12.51 19.11 L 13.93 16.95 L 13.95 13.96 L 13.50 16.17 L 11.70 17.32 L 10.75 14.77 L 11.52 16.56 L 10.69 14.47"
      }
    ]
  ]
};

export const ThermoTourist = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.30 10.67 L 14.28 9.18 L 13.15 11.65 L 14.08 12.56 L 15.35 15.22 L 14.91 15.20 L 12.21 13.24 L 12.19 13.10 L 13.33 15.12 L 13.87 15.97 L 13.96 15.44 L 15.26 18.36 L 14.14 17.55 L 12.51 19.11 L 13.93 16.95 L 13.95 13.96 L 13.50 16.17 L 11.70 17.32 L 10.75 14.77 L 11.52 16.56 L 10.69 14.47" />
      {children}
    </svg>
  );
});

export default ThermoTourist;
