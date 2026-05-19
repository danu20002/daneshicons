import React from 'react';

export const iconData = {
  "id": "TurbinoExpand",
  "name": "TurbinoExpand",
  "category": "SO",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.02 10.73 L 8.30 20.35 L 12.58 13.44 L 7.36 21.12 L 8.39 20.73 L 20.75 13.60 L 4.96 19.19"
      }
    ],
    [
      "circle",
      {
        "cx": "6.02",
        "cy": "10.73",
        "r": "1.46"
      }
    ],
    [
      "circle",
      {
        "cx": "8.30",
        "cy": "20.35",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "12.58",
        "cy": "13.44",
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "7.36",
        "cy": "21.12",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "8.39",
        "cy": "20.73",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "20.75",
        "cy": "13.60",
        "r": "1.17"
      }
    ],
    [
      "circle",
      {
        "cx": "4.96",
        "cy": "19.19",
        "r": "0.71"
      }
    ]
  ]
};

export const TurbinoExpand = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.02 10.73 L 8.30 20.35 L 12.58 13.44 L 7.36 21.12 L 8.39 20.73 L 20.75 13.60 L 4.96 19.19" />
      <circle cx="6.02" cy="10.73" r="1.46" />
      <circle cx="8.30" cy="20.35" r="0.75" />
      <circle cx="12.58" cy="13.44" r="0.91" />
      <circle cx="7.36" cy="21.12" r="1.38" />
      <circle cx="8.39" cy="20.73" r="0.77" />
      <circle cx="20.75" cy="13.60" r="1.17" />
      <circle cx="4.96" cy="19.19" r="0.71" />
      {children}
    </svg>
  );
});

export default TurbinoExpand;
