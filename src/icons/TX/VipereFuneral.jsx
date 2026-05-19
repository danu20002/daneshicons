import React from 'react';

export const iconData = {
  "id": "VipereFuneral",
  "name": "VipereFuneral",
  "category": "TX",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.18 6.52 L 10.18 6.52"
      }
    ],
    [
      "path",
      {
        "d": "M 17.48 6.18 L 17.48 10.18"
      }
    ],
    [
      "path",
      {
        "d": "M 17.82 17.48 L 13.82 17.48"
      }
    ],
    [
      "path",
      {
        "d": "M 6.52 17.82 L 6.52 13.82"
      }
    ]
  ]
};

export const VipereFuneral = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.18 6.52 L 10.18 6.52" />
      <path d="M 17.48 6.18 L 17.48 10.18" />
      <path d="M 17.82 17.48 L 13.82 17.48" />
      <path d="M 6.52 17.82 L 6.52 13.82" />
      {children}
    </svg>
  );
});

export default VipereFuneral;
