import React from 'react';

export const iconData = {
  "id": "VeraceCell",
  "name": "VeraceCell",
  "category": "OZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.28 12.00 a 9.72 9.72 0 1 0 19.44 0 a 9.72 9.72 0 1 0 -19.44 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.22 6.17 a 7.78 2.332781131714582 0 1 0 15.55 0 a 7.78 2.332781131714582 0 1 0 -15.55 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.48 10.06 a 9.52 2.857061727146502 0 1 0 19.05 0 a 9.52 2.857061727146502 0 1 0 -19.05 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.48 13.94 a 9.52 2.857061727146502 0 1 0 19.05 0 a 9.52 2.857061727146502 0 1 0 -19.05 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.22 17.83 a 7.78 2.332781131714582 0 1 0 15.55 0 a 7.78 2.332781131714582 0 1 0 -15.55 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.28 A 2 2 0 0 0 12.00 21.72"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.28 A 2 2 0 0 1 12.00 21.72"
      }
    ]
  ]
};

export const VeraceCell = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.28 12.00 a 9.72 9.72 0 1 0 19.44 0 a 9.72 9.72 0 1 0 -19.44 0" />
      <path d="M 4.22 6.17 a 7.78 2.332781131714582 0 1 0 15.55 0 a 7.78 2.332781131714582 0 1 0 -15.55 0" />
      <path d="M 2.48 10.06 a 9.52 2.857061727146502 0 1 0 19.05 0 a 9.52 2.857061727146502 0 1 0 -19.05 0" />
      <path d="M 2.48 13.94 a 9.52 2.857061727146502 0 1 0 19.05 0 a 9.52 2.857061727146502 0 1 0 -19.05 0" />
      <path d="M 4.22 17.83 a 7.78 2.332781131714582 0 1 0 15.55 0 a 7.78 2.332781131714582 0 1 0 -15.55 0" />
      <path d="M 12.00 2.28 A 2 2 0 0 0 12.00 21.72" />
      <path d="M 12.00 2.28 A 2 2 0 0 1 12.00 21.72" />
      {children}
    </svg>
  );
});

export default VeraceCell;
