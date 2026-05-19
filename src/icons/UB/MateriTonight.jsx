import React from 'react';

export const iconData = {
  "id": "MateriTonight",
  "name": "MateriTonight",
  "category": "UB",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.26 3.21 L 5.78 1.71 L 6.65 3.64 L 5.41 1.50 L 7.91 1.00 L 5.39 1.00 L 3.72 1.00 L 4.18 2.97 L 3.33 2.85 L 4.32 2.29 L 2.74 2.64 L 2.24 1.99 L 2.82 1.00 L 1.00 1.65 L 1.45 1.00 L 4.43 1.00 L 5.33 1.00 L 2.79 3.53 L 2.50 2.04 L 2.53 2.02 L 5.06 3.38 L 7.98 4.03 L 8.44 4.27"
      }
    ]
  ]
};

export const MateriTonight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.26 3.21 L 5.78 1.71 L 6.65 3.64 L 5.41 1.50 L 7.91 1.00 L 5.39 1.00 L 3.72 1.00 L 4.18 2.97 L 3.33 2.85 L 4.32 2.29 L 2.74 2.64 L 2.24 1.99 L 2.82 1.00 L 1.00 1.65 L 1.45 1.00 L 4.43 1.00 L 5.33 1.00 L 2.79 3.53 L 2.50 2.04 L 2.53 2.02 L 5.06 3.38 L 7.98 4.03 L 8.44 4.27" />
      {children}
    </svg>
  );
});

export default MateriTonight;
