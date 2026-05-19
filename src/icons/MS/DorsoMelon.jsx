import React from 'react';

export const iconData = {
  "id": "DorsoMelon",
  "name": "DorsoMelon",
  "category": "MS",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.54 4.53 L 18.35 8.73 L 16.98 3.58 L 4.47 11.79"
      }
    ],
    [
      "circle",
      {
        "cx": "13.54",
        "cy": "4.53",
        "r": "1.44"
      }
    ],
    [
      "circle",
      {
        "cx": "18.35",
        "cy": "8.73",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "16.98",
        "cy": "3.58",
        "r": "1.27"
      }
    ],
    [
      "circle",
      {
        "cx": "4.47",
        "cy": "11.79",
        "r": "0.65"
      }
    ]
  ]
};

export const DorsoMelon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.54 4.53 L 18.35 8.73 L 16.98 3.58 L 4.47 11.79" />
      <circle cx="13.54" cy="4.53" r="1.44" />
      <circle cx="18.35" cy="8.73" r="0.60" />
      <circle cx="16.98" cy="3.58" r="1.27" />
      <circle cx="4.47" cy="11.79" r="0.65" />
      {children}
    </svg>
  );
});

export default DorsoMelon;
