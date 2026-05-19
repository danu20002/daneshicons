import React from 'react';

export const iconData = {
  "id": "VirileLiana",
  "name": "VirileLiana",
  "category": "UQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.97 10.61 L 10.97 10.61"
      }
    ],
    [
      "path",
      {
        "d": "M 13.39 6.97 L 13.39 10.97"
      }
    ],
    [
      "path",
      {
        "d": "M 17.03 13.39 L 13.03 13.39"
      }
    ],
    [
      "path",
      {
        "d": "M 10.61 17.03 L 10.61 13.03"
      }
    ]
  ]
};

export const VirileLiana = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.97 10.61 L 10.97 10.61" />
      <path d="M 13.39 6.97 L 13.39 10.97" />
      <path d="M 17.03 13.39 L 13.03 13.39" />
      <path d="M 10.61 17.03 L 10.61 13.03" />
      {children}
    </svg>
  );
});

export default VirileLiana;
