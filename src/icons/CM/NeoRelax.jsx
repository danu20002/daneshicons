import React from 'react';

export const iconData = {
  "id": "NeoRelax",
  "name": "NeoRelax",
  "category": "CM",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.76 11.70 L 17.58 7.35 L 18.36 4.17 L 4.24 5.04 L 19.59 20.45 L 13.27 4.39 L 13.52 13.82"
      }
    ],
    [
      "circle",
      {
        "cx": "16.76",
        "cy": "11.70",
        "r": "1.41"
      }
    ],
    [
      "circle",
      {
        "cx": "17.58",
        "cy": "7.35",
        "r": "1.47"
      }
    ],
    [
      "circle",
      {
        "cx": "18.36",
        "cy": "4.17",
        "r": "1.24"
      }
    ],
    [
      "circle",
      {
        "cx": "4.24",
        "cy": "5.04",
        "r": "1.18"
      }
    ],
    [
      "circle",
      {
        "cx": "19.59",
        "cy": "20.45",
        "r": "1.50"
      }
    ],
    [
      "circle",
      {
        "cx": "13.27",
        "cy": "4.39",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "13.52",
        "cy": "13.82",
        "r": "0.53"
      }
    ]
  ]
};

export const NeoRelax = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.76 11.70 L 17.58 7.35 L 18.36 4.17 L 4.24 5.04 L 19.59 20.45 L 13.27 4.39 L 13.52 13.82" />
      <circle cx="16.76" cy="11.70" r="1.41" />
      <circle cx="17.58" cy="7.35" r="1.47" />
      <circle cx="18.36" cy="4.17" r="1.24" />
      <circle cx="4.24" cy="5.04" r="1.18" />
      <circle cx="19.59" cy="20.45" r="1.50" />
      <circle cx="13.27" cy="4.39" r="0.63" />
      <circle cx="13.52" cy="13.82" r="0.53" />
      {children}
    </svg>
  );
});

export default NeoRelax;
