import React from 'react';

export const iconData = {
  "id": "PomoEffect",
  "name": "PomoEffect",
  "category": "SO",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.20 4.62 L 7.04 16.32 L 21.04 20.56 L 15.47 18.92 L 19.98 10.20 L 11.98 5.97 L 6.99 13.45 L 14.58 20.18"
      }
    ],
    [
      "circle",
      {
        "cx": "19.20",
        "cy": "4.62",
        "r": "1.45"
      }
    ],
    [
      "circle",
      {
        "cx": "7.04",
        "cy": "16.32",
        "r": "1.36"
      }
    ],
    [
      "circle",
      {
        "cx": "21.04",
        "cy": "20.56",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "15.47",
        "cy": "18.92",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "19.98",
        "cy": "10.20",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "11.98",
        "cy": "5.97",
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "6.99",
        "cy": "13.45",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "14.58",
        "cy": "20.18",
        "r": "0.68"
      }
    ]
  ]
};

export const PomoEffect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.20 4.62 L 7.04 16.32 L 21.04 20.56 L 15.47 18.92 L 19.98 10.20 L 11.98 5.97 L 6.99 13.45 L 14.58 20.18" />
      <circle cx="19.20" cy="4.62" r="1.45" />
      <circle cx="7.04" cy="16.32" r="1.36" />
      <circle cx="21.04" cy="20.56" r="0.83" />
      <circle cx="15.47" cy="18.92" r="0.92" />
      <circle cx="19.98" cy="10.20" r="0.73" />
      <circle cx="11.98" cy="5.97" r="1.05" />
      <circle cx="6.99" cy="13.45" r="0.59" />
      <circle cx="14.58" cy="20.18" r="0.68" />
      {children}
    </svg>
  );
});

export default PomoEffect;
