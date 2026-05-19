import React from 'react';

export const iconData = {
  "id": "VertebraOften",
  "name": "VertebraOften",
  "category": "XQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.00 2.41 L 19.47 12.00 L 12.00 21.59 L 4.53 12.00 Z"
      }
    ]
  ]
};

export const VertebraOften = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.00 2.41 L 19.47 12.00 L 12.00 21.59 L 4.53 12.00 Z" />
      {children}
    </svg>
  );
});

export default VertebraOften;
