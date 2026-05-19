import React from 'react';

export const iconData = {
  "id": "VertebraTogether",
  "name": "VertebraTogether",
  "category": "XW",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.18 6.53 L 13.65 20.09 L 4.17 9.38 Z"
      }
    ]
  ]
};

export const VertebraTogether = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.18 6.53 L 13.65 20.09 L 4.17 9.38 Z" />
      {children}
    </svg>
  );
});

export default VertebraTogether;
