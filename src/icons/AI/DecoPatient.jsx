import React from 'react';

export const iconData = {
  "id": "DecoPatient",
  "name": "DecoPatient",
  "category": "AI",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.71 6.21 L 15.11 7.23 L 13.09 7.02 L 12.45 6.44 L 13.71 4.24 L 13.82 3.62 L 12.33 2.89 L 9.69 4.90 L 7.30 3.29 L 6.26 1.00 L 8.27 2.90 L 10.15 3.93 L 9.75 4.48 L 11.45 3.07 L 11.66 1.00 L 13.48 1.00 L 12.29 3.32 L 11.78 2.12 L 14.64 1.00 L 11.79 2.42 L 13.21 1.00 L 14.74 3.93 L 12.76 2.00 L 11.57 2.34 L 9.69 1.79 L 7.89 1.00 L 6.12 2.38"
      }
    ]
  ]
};

export const DecoPatient = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.71 6.21 L 15.11 7.23 L 13.09 7.02 L 12.45 6.44 L 13.71 4.24 L 13.82 3.62 L 12.33 2.89 L 9.69 4.90 L 7.30 3.29 L 6.26 1.00 L 8.27 2.90 L 10.15 3.93 L 9.75 4.48 L 11.45 3.07 L 11.66 1.00 L 13.48 1.00 L 12.29 3.32 L 11.78 2.12 L 14.64 1.00 L 11.79 2.42 L 13.21 1.00 L 14.74 3.93 L 12.76 2.00 L 11.57 2.34 L 9.69 1.79 L 7.89 1.00 L 6.12 2.38" />
      {children}
    </svg>
  );
});

export default DecoPatient;
