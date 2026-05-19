import React from 'react';

export const iconData = {
  "id": "EmberFuneral",
  "name": "EmberFuneral",
  "category": "TF",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.50 20.84 L 20.91 21.42"
      }
    ],
    [
      "path",
      {
        "d": "M 6.42 2.41 C 18.34 7.32, 15.73 20.56, 2.23 9.72"
      }
    ],
    [
      "path",
      {
        "d": "M 12.75 21.48 C 17.98 18.23, 10.22 8.85, 14.07 15.72"
      }
    ]
  ]
};

export const EmberFuneral = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.50 20.84 L 20.91 21.42" />
      <path d="M 6.42 2.41 C 18.34 7.32, 15.73 20.56, 2.23 9.72" />
      <path d="M 12.75 21.48 C 17.98 18.23, 10.22 8.85, 14.07 15.72" />
      {children}
    </svg>
  );
});

export default EmberFuneral;
