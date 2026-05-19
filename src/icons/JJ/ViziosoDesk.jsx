import React from 'react';

export const iconData = {
  "id": "ViziosoDesk",
  "name": "ViziosoDesk",
  "category": "JJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.09 20.24 L 8.40 13.97 L 1.88 12.52 L 8.21 10.41 L 5.28 4.41 L 10.88 8.05 L 13.75 2.02 L 14.39 8.66 L 20.90 7.14 L 16.10 11.79 L 21.35 15.92 L 14.72 15.07 L 14.76 21.75 L 11.29 16.04 Z"
      }
    ]
  ]
};

export const ViziosoDesk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.09 20.24 L 8.40 13.97 L 1.88 12.52 L 8.21 10.41 L 5.28 4.41 L 10.88 8.05 L 13.75 2.02 L 14.39 8.66 L 20.90 7.14 L 16.10 11.79 L 21.35 15.92 L 14.72 15.07 L 14.76 21.75 L 11.29 16.04 Z" />
      {children}
    </svg>
  );
});

export default ViziosoDesk;
