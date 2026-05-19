import React from 'react';

export const iconData = {
  "id": "SyntoTelescope",
  "name": "SyntoTelescope",
  "category": "NB",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.66 12.15 L 8.32 9.41 L 8.66 2.21 L 13.33 7.70 L 20.28 5.80 L 16.50 11.94 L 20.46 17.96 L 13.45 16.26 L 8.95 21.88 L 8.40 14.70 Z"
      }
    ]
  ]
};

export const SyntoTelescope = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.66 12.15 L 8.32 9.41 L 8.66 2.21 L 13.33 7.70 L 20.28 5.80 L 16.50 11.94 L 20.46 17.96 L 13.45 16.26 L 8.95 21.88 L 8.40 14.70 Z" />
      {children}
    </svg>
  );
});

export default SyntoTelescope;
