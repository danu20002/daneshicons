import React from 'react';

export const iconData = {
  "id": "AudioString",
  "name": "AudioString",
  "category": "ER",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.10 2.06 L 9.40 18.43 L 5.42 21.07 L 7.35 9.51 L 11.55 6.87 L 20.60 3.18 L 8.07 7.72 L 3.02 8.05"
      }
    ],
    [
      "circle",
      {
        "cx": "19.10",
        "cy": "2.06",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "9.40",
        "cy": "18.43",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "5.42",
        "cy": "21.07",
        "r": "0.50"
      }
    ],
    [
      "circle",
      {
        "cx": "7.35",
        "cy": "9.51",
        "r": "1.41"
      }
    ],
    [
      "circle",
      {
        "cx": "11.55",
        "cy": "6.87",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "20.60",
        "cy": "3.18",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "8.07",
        "cy": "7.72",
        "r": "1.46"
      }
    ],
    [
      "circle",
      {
        "cx": "3.02",
        "cy": "8.05",
        "r": "0.88"
      }
    ]
  ]
};

export const AudioString = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.10 2.06 L 9.40 18.43 L 5.42 21.07 L 7.35 9.51 L 11.55 6.87 L 20.60 3.18 L 8.07 7.72 L 3.02 8.05" />
      <circle cx="19.10" cy="2.06" r="1.49" />
      <circle cx="9.40" cy="18.43" r="0.74" />
      <circle cx="5.42" cy="21.07" r="0.50" />
      <circle cx="7.35" cy="9.51" r="1.41" />
      <circle cx="11.55" cy="6.87" r="0.65" />
      <circle cx="20.60" cy="3.18" r="0.54" />
      <circle cx="8.07" cy="7.72" r="1.46" />
      <circle cx="3.02" cy="8.05" r="0.88" />
      {children}
    </svg>
  );
});

export default AudioString;
