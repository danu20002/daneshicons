import React from 'react';

export const iconData = {
  "id": "XilofagoSpeech",
  "name": "XilofagoSpeech",
  "category": "LX",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.69 19.50 A 4.36 4.24 20 0 1 3.32 21.47"
      }
    ],
    [
      "path",
      {
        "d": "M 11.38 17.75 A 2.63 5.42 28 0 0 13.71 17.77"
      }
    ],
    [
      "path",
      {
        "d": "M 13.27 19.54 A 2.58 3.04 136 0 0 18.03 4.42"
      }
    ],
    [
      "path",
      {
        "d": "M 11.82 6.59 A 6.10 5.18 1 0 1 8.02 14.96"
      }
    ]
  ]
};

export const XilofagoSpeech = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.69 19.50 A 4.36 4.24 20 0 1 3.32 21.47" />
      <path d="M 11.38 17.75 A 2.63 5.42 28 0 0 13.71 17.77" />
      <path d="M 13.27 19.54 A 2.58 3.04 136 0 0 18.03 4.42" />
      <path d="M 11.82 6.59 A 6.10 5.18 1 0 1 8.02 14.96" />
      {children}
    </svg>
  );
});

export default XilofagoSpeech;
