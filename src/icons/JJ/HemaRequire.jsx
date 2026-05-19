import React from 'react';

export const iconData = {
  "id": "HemaRequire",
  "name": "HemaRequire",
  "category": "JJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.97 21.69 L 10.64 15.02 L 4.09 17.69 L 8.70 12.33 L 3.12 8.00 L 10.06 9.31 L 11.03 2.31 L 13.36 8.98 L 19.91 6.31 L 15.30 11.67 L 20.88 16.00 L 13.94 14.69 Z"
      }
    ]
  ]
};

export const HemaRequire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.97 21.69 L 10.64 15.02 L 4.09 17.69 L 8.70 12.33 L 3.12 8.00 L 10.06 9.31 L 11.03 2.31 L 13.36 8.98 L 19.91 6.31 L 15.30 11.67 L 20.88 16.00 L 13.94 14.69 Z" />
      {children}
    </svg>
  );
});

export default HemaRequire;
