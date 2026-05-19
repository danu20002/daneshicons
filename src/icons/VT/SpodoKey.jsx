import React from 'react';

export const iconData = {
  "id": "SpodoKey",
  "name": "SpodoKey",
  "category": "VT",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.49 21.45 L 3.05 15.93 L 3.34 7.45 L 10.16 2.40 L 18.36 4.57 L 21.77 12.34 L 17.83 19.85 Z"
      }
    ]
  ]
};

export const SpodoKey = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.49 21.45 L 3.05 15.93 L 3.34 7.45 L 10.16 2.40 L 18.36 4.57 L 21.77 12.34 L 17.83 19.85 Z" />
      {children}
    </svg>
  );
});

export default SpodoKey;
