import React from 'react';

export const iconData = {
  "id": "VirtuDoll",
  "name": "VirtuDoll",
  "category": "OJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.46 16.62 L 12.23 21.63 L 3.77 17.02 L 3.54 7.38 L 11.77 2.37 L 20.23 6.98 Z"
      }
    ]
  ]
};

export const VirtuDoll = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.46 16.62 L 12.23 21.63 L 3.77 17.02 L 3.54 7.38 L 11.77 2.37 L 20.23 6.98 Z" />
      {children}
    </svg>
  );
});

export default VirtuDoll;
