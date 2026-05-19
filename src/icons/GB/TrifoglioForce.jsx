import React from 'react';

export const iconData = {
  "id": "TrifoglioForce",
  "name": "TrifoglioForce",
  "category": "GB",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.02 12.60 Q 13.66 17.05 2.97 4.38"
      }
    ],
    [
      "path",
      {
        "d": "M 5.20 20.97 Q 13.58 21.95 15.72 14.27"
      }
    ],
    [
      "path",
      {
        "d": "M 12.86 12.33 Q 9.13 7.47 12.49 13.99"
      }
    ],
    [
      "path",
      {
        "d": "M 9.26 3.78 L 10.50 18.42"
      }
    ],
    [
      "path",
      {
        "d": "M 12.79 5.51 L 15.06 5.48 L 10.40 12.08"
      }
    ]
  ]
};

export const TrifoglioForce = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.02 12.60 Q 13.66 17.05 2.97 4.38" />
      <path d="M 5.20 20.97 Q 13.58 21.95 15.72 14.27" />
      <path d="M 12.86 12.33 Q 9.13 7.47 12.49 13.99" />
      <path d="M 9.26 3.78 L 10.50 18.42" />
      <path d="M 12.79 5.51 L 15.06 5.48 L 10.40 12.08" />
      {children}
    </svg>
  );
});

export default TrifoglioForce;
