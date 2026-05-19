import React from 'react';

export const iconData = {
  "id": "QuestoLead",
  "name": "QuestoLead",
  "category": "DD",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.34 6.71 Q 4.16 15.53 3.57 9.95"
      }
    ],
    [
      "path",
      {
        "d": "M 20.26 16.14 L 5.68 5.76"
      }
    ]
  ]
};

export const QuestoLead = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.34 6.71 Q 4.16 15.53 3.57 9.95" />
      <path d="M 20.26 16.14 L 5.68 5.76" />
      {children}
    </svg>
  );
});

export default QuestoLead;
