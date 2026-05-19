import React from 'react';

export const iconData = {
  "id": "VittimaEditor",
  "name": "VittimaEditor",
  "category": "SL",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.38 12.00 Q 15.04 15.04 12.00 21.38"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 21.38 Q 8.96 15.04 2.62 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.62 12.00 Q 8.96 8.96 12.00 2.62"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.62 Q 15.04 8.96 21.38 12.00"
      }
    ]
  ]
};

export const VittimaEditor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.38 12.00 Q 15.04 15.04 12.00 21.38" />
      <path d="M 12.00 21.38 Q 8.96 15.04 2.62 12.00" />
      <path d="M 2.62 12.00 Q 8.96 8.96 12.00 2.62" />
      <path d="M 12.00 2.62 Q 15.04 8.96 21.38 12.00" />
      {children}
    </svg>
  );
});

export default VittimaEditor;
