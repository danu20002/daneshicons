import React from 'react';

export const iconData = {
  "id": "SarcoTwenty",
  "name": "SarcoTwenty",
  "category": "UM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.18 8.23 C 6.62 13.46, 15.40 13.15, 21.07 16.62"
      }
    ],
    [
      "path",
      {
        "d": "M 5.95 8.38 C 9.46 17.52, 19.94 16.25, 16.31 20.07"
      }
    ],
    [
      "path",
      {
        "d": "M 4.88 3.79 C 9.22 18.83, 5.28 5.55, 19.88 20.56"
      }
    ]
  ]
};

export const SarcoTwenty = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.18 8.23 C 6.62 13.46, 15.40 13.15, 21.07 16.62" />
      <path d="M 5.95 8.38 C 9.46 17.52, 19.94 16.25, 16.31 20.07" />
      <path d="M 4.88 3.79 C 9.22 18.83, 5.28 5.55, 19.88 20.56" />
      {children}
    </svg>
  );
});

export default SarcoTwenty;
