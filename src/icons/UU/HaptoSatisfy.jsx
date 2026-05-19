import React from 'react';

export const iconData = {
  "id": "HaptoSatisfy",
  "name": "HaptoSatisfy",
  "category": "UU",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.11 6.07 L 8.61 8.35 L 8.81 6.33 L 9.34 7.66 L 10.10 9.20 L 9.94 7.20 L 7.97 4.47 L 5.24 3.20 L 7.21 1.44 L 10.00 1.00 L 7.56 1.00 L 8.06 1.45 L 7.64 1.00 L 4.78 1.00 L 3.62 1.00 L 5.26 1.00 L 6.55 1.00 L 9.31 1.91 L 11.59 1.00"
      }
    ]
  ]
};

export const HaptoSatisfy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.11 6.07 L 8.61 8.35 L 8.81 6.33 L 9.34 7.66 L 10.10 9.20 L 9.94 7.20 L 7.97 4.47 L 5.24 3.20 L 7.21 1.44 L 10.00 1.00 L 7.56 1.00 L 8.06 1.45 L 7.64 1.00 L 4.78 1.00 L 3.62 1.00 L 5.26 1.00 L 6.55 1.00 L 9.31 1.91 L 11.59 1.00" />
      {children}
    </svg>
  );
});

export default HaptoSatisfy;
