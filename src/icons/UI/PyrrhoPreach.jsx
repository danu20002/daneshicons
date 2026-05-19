import React from 'react';

export const iconData = {
  "id": "PyrrhoPreach",
  "name": "PyrrhoPreach",
  "category": "UI",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.34 11.14 L 16.81 13.79 L 18.49 18.76 L 13.60 16.88 L 10.76 21.29 L 9.18 16.29 L 3.96 16.83 L 6.89 12.47 L 3.21 8.72 L 8.44 8.30 L 9.08 3.09 L 12.68 6.91 L 17.15 4.16 L 16.40 9.36 Z"
      }
    ]
  ]
};

export const PyrrhoPreach = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.34 11.14 L 16.81 13.79 L 18.49 18.76 L 13.60 16.88 L 10.76 21.29 L 9.18 16.29 L 3.96 16.83 L 6.89 12.47 L 3.21 8.72 L 8.44 8.30 L 9.08 3.09 L 12.68 6.91 L 17.15 4.16 L 16.40 9.36 Z" />
      {children}
    </svg>
  );
});

export default PyrrhoPreach;
