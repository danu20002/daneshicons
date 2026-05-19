import React from 'react';

export const iconData = {
  "id": "VellutoSource",
  "name": "VellutoSource",
  "category": "LH",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.11 5.20 L 9.93 3.49 L 12.07 1.80 L 9.54 2.16 L 9.59 2.26 L 8.59 1.00 L 5.68 1.59 L 6.93 2.88 L 5.42 4.82 L 6.54 3.69 L 3.57 3.75 L 1.08 1.81 L 1.85 2.63 L 4.50 3.91 L 2.61 3.06 L 1.00 2.68 L 1.42 1.51 L 3.31 4.08 L 6.23 5.84 L 5.15 5.47 L 5.49 7.58 L 3.37 6.78 L 1.92 3.82"
      }
    ]
  ]
};

export const VellutoSource = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.11 5.20 L 9.93 3.49 L 12.07 1.80 L 9.54 2.16 L 9.59 2.26 L 8.59 1.00 L 5.68 1.59 L 6.93 2.88 L 5.42 4.82 L 6.54 3.69 L 3.57 3.75 L 1.08 1.81 L 1.85 2.63 L 4.50 3.91 L 2.61 3.06 L 1.00 2.68 L 1.42 1.51 L 3.31 4.08 L 6.23 5.84 L 5.15 5.47 L 5.49 7.58 L 3.37 6.78 L 1.92 3.82" />
      {children}
    </svg>
  );
});

export default VellutoSource;
