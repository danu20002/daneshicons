import React from 'react';

export const iconData = {
  "id": "RadiOrder",
  "name": "RadiOrder",
  "category": "QJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.98 20.47 L 11.15 6.49 L 21.20 21.73 L 16.00 2.05"
      }
    ],
    [
      "circle",
      {
        "cx": "11.98",
        "cy": "20.47",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "11.15",
        "cy": "6.49",
        "r": "1.26"
      }
    ],
    [
      "circle",
      {
        "cx": "21.20",
        "cy": "21.73",
        "r": "1.33"
      }
    ],
    [
      "circle",
      {
        "cx": "16.00",
        "cy": "2.05",
        "r": "1.47"
      }
    ]
  ]
};

export const RadiOrder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.98 20.47 L 11.15 6.49 L 21.20 21.73 L 16.00 2.05" />
      <circle cx="11.98" cy="20.47" r="0.58" />
      <circle cx="11.15" cy="6.49" r="1.26" />
      <circle cx="21.20" cy="21.73" r="1.33" />
      <circle cx="16.00" cy="2.05" r="1.47" />
      {children}
    </svg>
  );
});

export default RadiOrder;
