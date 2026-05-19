import React from 'react';

export const iconData = {
  "id": "AudioElf",
  "name": "AudioElf",
  "category": "VM",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.25 4.16 L 13.18 14.58 L 19.40 8.21 L 16.69 11.36 L 14.89 3.88 L 2.72 17.83"
      }
    ],
    [
      "circle",
      {
        "cx": "13.25",
        "cy": "4.16",
        "r": "1.26"
      }
    ],
    [
      "circle",
      {
        "cx": "13.18",
        "cy": "14.58",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "19.40",
        "cy": "8.21",
        "r": "1.28"
      }
    ],
    [
      "circle",
      {
        "cx": "16.69",
        "cy": "11.36",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "14.89",
        "cy": "3.88",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "2.72",
        "cy": "17.83",
        "r": "0.93"
      }
    ]
  ]
};

export const AudioElf = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.25 4.16 L 13.18 14.58 L 19.40 8.21 L 16.69 11.36 L 14.89 3.88 L 2.72 17.83" />
      <circle cx="13.25" cy="4.16" r="1.26" />
      <circle cx="13.18" cy="14.58" r="0.78" />
      <circle cx="19.40" cy="8.21" r="1.28" />
      <circle cx="16.69" cy="11.36" r="0.79" />
      <circle cx="14.89" cy="3.88" r="0.80" />
      <circle cx="2.72" cy="17.83" r="0.93" />
      {children}
    </svg>
  );
});

export default AudioElf;
