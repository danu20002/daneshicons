import React from 'react';

export const iconData = {
  "id": "TrilobPrinciple",
  "name": "TrilobPrinciple",
  "category": "XG",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.38 13.91 L 16.05 15.44 L 15.54 21.94 L 11.04 17.23 L 5.16 20.04 L 6.99 13.78 L 1.62 10.09 L 7.95 8.56 L 8.46 2.06 L 12.96 6.77 L 18.84 3.96 L 17.01 10.22 Z"
      }
    ]
  ]
};

export const TrilobPrinciple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.38 13.91 L 16.05 15.44 L 15.54 21.94 L 11.04 17.23 L 5.16 20.04 L 6.99 13.78 L 1.62 10.09 L 7.95 8.56 L 8.46 2.06 L 12.96 6.77 L 18.84 3.96 L 17.01 10.22 Z" />
      {children}
    </svg>
  );
});

export default TrilobPrinciple;
