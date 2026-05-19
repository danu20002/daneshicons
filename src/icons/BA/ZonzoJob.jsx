import React from 'react';

export const iconData = {
  "id": "ZonzoJob",
  "name": "ZonzoJob",
  "category": "BA",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.93 17.99 L 18.98 6.80 L 3.41 5.27 L 8.49 8.44 L 21.90 5.47 L 3.40 18.49 L 2.45 5.18"
      }
    ],
    [
      "circle",
      {
        "cx": "4.93",
        "cy": "17.99",
        "r": "1.40"
      }
    ],
    [
      "circle",
      {
        "cx": "18.98",
        "cy": "6.80",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "3.41",
        "cy": "5.27",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "8.49",
        "cy": "8.44",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "21.90",
        "cy": "5.47",
        "r": "1.20"
      }
    ],
    [
      "circle",
      {
        "cx": "3.40",
        "cy": "18.49",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "2.45",
        "cy": "5.18",
        "r": "0.77"
      }
    ]
  ]
};

export const ZonzoJob = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.93 17.99 L 18.98 6.80 L 3.41 5.27 L 8.49 8.44 L 21.90 5.47 L 3.40 18.49 L 2.45 5.18" />
      <circle cx="4.93" cy="17.99" r="1.40" />
      <circle cx="18.98" cy="6.80" r="1.00" />
      <circle cx="3.41" cy="5.27" r="0.84" />
      <circle cx="8.49" cy="8.44" r="0.51" />
      <circle cx="21.90" cy="5.47" r="1.20" />
      <circle cx="3.40" cy="18.49" r="0.69" />
      <circle cx="2.45" cy="5.18" r="0.77" />
      {children}
    </svg>
  );
});

export default ZonzoJob;
