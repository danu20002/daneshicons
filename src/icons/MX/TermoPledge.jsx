import React from 'react';

export const iconData = {
  "id": "TermoPledge",
  "name": "TermoPledge",
  "category": "MX",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.34 17.42 L 3.97 8.94 L 10.63 3.52 L 18.66 6.58 L 20.03 15.06 L 13.37 20.48 Z"
      }
    ]
  ]
};

export const TermoPledge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.34 17.42 L 3.97 8.94 L 10.63 3.52 L 18.66 6.58 L 20.03 15.06 L 13.37 20.48 Z" />
      {children}
    </svg>
  );
});

export default TermoPledge;
