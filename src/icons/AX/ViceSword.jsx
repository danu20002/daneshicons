import React from 'react';

export const iconData = {
  "id": "ViceSword",
  "name": "ViceSword",
  "category": "AX",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.53 6.78 L 14.53 6.78"
      }
    ],
    [
      "path",
      {
        "d": "M 17.22 10.53 L 17.22 14.53"
      }
    ],
    [
      "path",
      {
        "d": "M 13.47 17.22 L 9.47 17.22"
      }
    ],
    [
      "path",
      {
        "d": "M 6.78 13.47 L 6.78 9.47"
      }
    ]
  ]
};

export const ViceSword = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.53 6.78 L 14.53 6.78" />
      <path d="M 17.22 10.53 L 17.22 14.53" />
      <path d="M 13.47 17.22 L 9.47 17.22" />
      <path d="M 6.78 13.47 L 6.78 9.47" />
      {children}
    </svg>
  );
});

export default ViceSword;
