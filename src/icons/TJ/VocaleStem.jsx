import React from 'react';

export const iconData = {
  "id": "VocaleStem",
  "name": "VocaleStem",
  "category": "TJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.63 12.00 a 9.37 9.37 0 1 0 18.75 0 a 9.37 9.37 0 1 0 -18.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.50 6.38 a 7.50 2.2499088940769436 0 1 0 15.00 0 a 7.50 2.2499088940769436 0 1 0 -15.00 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.81 10.13 a 9.19 2.755564379119058 0 1 0 18.37 0 a 9.19 2.755564379119058 0 1 0 -18.37 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.81 13.87 a 9.19 2.755564379119058 0 1 0 18.37 0 a 9.19 2.755564379119058 0 1 0 -18.37 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.50 17.62 a 7.50 2.249908894076943 0 1 0 15.00 0 a 7.50 2.249908894076943 0 1 0 -15.00 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.63 A 2 2 0 0 0 12.00 21.37"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.63 A 2 2 0 0 1 12.00 21.37"
      }
    ]
  ]
};

export const VocaleStem = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.63 12.00 a 9.37 9.37 0 1 0 18.75 0 a 9.37 9.37 0 1 0 -18.75 0" />
      <path d="M 4.50 6.38 a 7.50 2.2499088940769436 0 1 0 15.00 0 a 7.50 2.2499088940769436 0 1 0 -15.00 0" />
      <path d="M 2.81 10.13 a 9.19 2.755564379119058 0 1 0 18.37 0 a 9.19 2.755564379119058 0 1 0 -18.37 0" />
      <path d="M 2.81 13.87 a 9.19 2.755564379119058 0 1 0 18.37 0 a 9.19 2.755564379119058 0 1 0 -18.37 0" />
      <path d="M 4.50 17.62 a 7.50 2.249908894076943 0 1 0 15.00 0 a 7.50 2.249908894076943 0 1 0 -15.00 0" />
      <path d="M 12.00 2.63 A 2 2 0 0 0 12.00 21.37" />
      <path d="M 12.00 2.63 A 2 2 0 0 1 12.00 21.37" />
      {children}
    </svg>
  );
});

export default VocaleStem;
