import React from 'react';

export const iconData = {
  "id": "NoctoKeep",
  "name": "NoctoKeep",
  "category": "FL",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.77 7.78 L 16.13 5.48 L 14.34 6.40 L 12.07 4.11 L 9.79 3.47 L 10.97 3.27 L 9.16 1.93 L 9.87 1.00 L 7.58 3.57 L 10.31 5.63 L 9.74 3.23 L 10.47 1.42 L 10.93 4.06 L 11.78 5.05 L 9.61 7.74 L 9.12 10.37"
      }
    ]
  ]
};

export const NoctoKeep = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.77 7.78 L 16.13 5.48 L 14.34 6.40 L 12.07 4.11 L 9.79 3.47 L 10.97 3.27 L 9.16 1.93 L 9.87 1.00 L 7.58 3.57 L 10.31 5.63 L 9.74 3.23 L 10.47 1.42 L 10.93 4.06 L 11.78 5.05 L 9.61 7.74 L 9.12 10.37" />
      {children}
    </svg>
  );
});

export default NoctoKeep;
