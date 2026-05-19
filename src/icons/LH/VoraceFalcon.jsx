import React from 'react';

export const iconData = {
  "id": "VoraceFalcon",
  "name": "VoraceFalcon",
  "category": "LH",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.57 18.53 L 18.14 19.03 L 16.17 20.32 L 18.49 22.21 L 18.08 19.78 L 16.33 19.90 L 16.55 19.14 L 16.46 17.74 L 16.36 18.23 L 19.31 19.69 L 16.99 18.61 L 19.46 17.77 L 21.43 17.36 L 21.02 19.18 L 18.89 20.94 L 18.22 21.10 L 20.08 18.44 L 17.30 18.06 L 15.10 17.91 L 16.81 16.37 L 13.87 16.50 L 12.20 13.84 L 10.80 15.52"
      }
    ]
  ]
};

export const VoraceFalcon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.57 18.53 L 18.14 19.03 L 16.17 20.32 L 18.49 22.21 L 18.08 19.78 L 16.33 19.90 L 16.55 19.14 L 16.46 17.74 L 16.36 18.23 L 19.31 19.69 L 16.99 18.61 L 19.46 17.77 L 21.43 17.36 L 21.02 19.18 L 18.89 20.94 L 18.22 21.10 L 20.08 18.44 L 17.30 18.06 L 15.10 17.91 L 16.81 16.37 L 13.87 16.50 L 12.20 13.84 L 10.80 15.52" />
      {children}
    </svg>
  );
});

export default VoraceFalcon;
