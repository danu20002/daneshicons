import React from 'react';

export const iconData = {
  "id": "QuadraTumble",
  "name": "QuadraTumble",
  "category": "NN",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.51 12.00 a 9.49 9.49 0 1 0 18.98 0 a 9.49 9.49 0 1 0 -18.98 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.41 6.31 a 7.59 2.27746256031096 0 1 0 15.18 0 a 7.59 2.27746256031096 0 1 0 -15.18 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.70 10.10 a 9.30 2.7893105905272058 0 1 0 18.60 0 a 9.30 2.7893105905272058 0 1 0 -18.60 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.70 13.90 a 9.30 2.7893105905272058 0 1 0 18.60 0 a 9.30 2.7893105905272058 0 1 0 -18.60 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.41 17.69 a 7.59 2.27746256031096 0 1 0 15.18 0 a 7.59 2.27746256031096 0 1 0 -15.18 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.51 A 2 2 0 0 0 12.00 21.49"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.51 A 2 2 0 0 1 12.00 21.49"
      }
    ]
  ]
};

export const QuadraTumble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.51 12.00 a 9.49 9.49 0 1 0 18.98 0 a 9.49 9.49 0 1 0 -18.98 0" />
      <path d="M 4.41 6.31 a 7.59 2.27746256031096 0 1 0 15.18 0 a 7.59 2.27746256031096 0 1 0 -15.18 0" />
      <path d="M 2.70 10.10 a 9.30 2.7893105905272058 0 1 0 18.60 0 a 9.30 2.7893105905272058 0 1 0 -18.60 0" />
      <path d="M 2.70 13.90 a 9.30 2.7893105905272058 0 1 0 18.60 0 a 9.30 2.7893105905272058 0 1 0 -18.60 0" />
      <path d="M 4.41 17.69 a 7.59 2.27746256031096 0 1 0 15.18 0 a 7.59 2.27746256031096 0 1 0 -15.18 0" />
      <path d="M 12.00 2.51 A 2 2 0 0 0 12.00 21.49" />
      <path d="M 12.00 2.51 A 2 2 0 0 1 12.00 21.49" />
      {children}
    </svg>
  );
});

export default QuadraTumble;
