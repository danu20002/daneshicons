import React from 'react';

export const iconData = {
  "id": "ZampinoRemain",
  "name": "ZampinoRemain",
  "category": "DY",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.76 8.67 L 20.50 13.80 L 8.84 19.05 L 20.77 20.62 L 20.69 21.73 L 6.31 8.34"
      }
    ],
    [
      "circle",
      {
        "cx": "14.76",
        "cy": "8.67",
        "r": "1.14"
      }
    ],
    [
      "circle",
      {
        "cx": "20.50",
        "cy": "13.80",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "8.84",
        "cy": "19.05",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "20.77",
        "cy": "20.62",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "20.69",
        "cy": "21.73",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "6.31",
        "cy": "8.34",
        "r": "1.00"
      }
    ]
  ]
};

export const ZampinoRemain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.76 8.67 L 20.50 13.80 L 8.84 19.05 L 20.77 20.62 L 20.69 21.73 L 6.31 8.34" />
      <circle cx="14.76" cy="8.67" r="1.14" />
      <circle cx="20.50" cy="13.80" r="0.57" />
      <circle cx="8.84" cy="19.05" r="0.82" />
      <circle cx="20.77" cy="20.62" r="1.10" />
      <circle cx="20.69" cy="21.73" r="0.94" />
      <circle cx="6.31" cy="8.34" r="1.00" />
      {children}
    </svg>
  );
});

export default ZampinoRemain;
