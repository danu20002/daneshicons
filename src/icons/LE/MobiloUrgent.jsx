import React from 'react';

export const iconData = {
  "id": "MobiloUrgent",
  "name": "MobiloUrgent",
  "category": "LE",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.44 2.22 L 3.14 17.98 L 3.84 7.91 L 11.18 13.45"
      }
    ],
    [
      "path",
      {
        "d": "M 20.48 8.51 L 6.46 5.67 L 14.62 17.56"
      }
    ],
    [
      "path",
      {
        "d": "M 8.03 20.86 C 3.73 2.67, 20.90 21.03, 6.26 18.72"
      }
    ]
  ]
};

export const MobiloUrgent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.44 2.22 L 3.14 17.98 L 3.84 7.91 L 11.18 13.45" />
      <path d="M 20.48 8.51 L 6.46 5.67 L 14.62 17.56" />
      <path d="M 8.03 20.86 C 3.73 2.67, 20.90 21.03, 6.26 18.72" />
      {children}
    </svg>
  );
});

export default MobiloUrgent;
