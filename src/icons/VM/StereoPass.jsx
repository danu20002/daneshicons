import React from 'react';

export const iconData = {
  "id": "StereoPass",
  "name": "StereoPass",
  "category": "VM",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.09 19.18 L 9.65 3.37 L 10.96 10.99 L 15.87 16.12 L 10.77 6.37 L 6.82 16.38 L 7.69 2.81 L 8.03 2.25"
      }
    ],
    [
      "circle",
      {
        "cx": "19.09",
        "cy": "19.18",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "9.65",
        "cy": "3.37",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "10.96",
        "cy": "10.99",
        "r": "1.26"
      }
    ],
    [
      "circle",
      {
        "cx": "15.87",
        "cy": "16.12",
        "r": "1.27"
      }
    ],
    [
      "circle",
      {
        "cx": "10.77",
        "cy": "6.37",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "6.82",
        "cy": "16.38",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "7.69",
        "cy": "2.81",
        "r": "1.34"
      }
    ],
    [
      "circle",
      {
        "cx": "8.03",
        "cy": "2.25",
        "r": "0.87"
      }
    ]
  ]
};

export const StereoPass = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.09 19.18 L 9.65 3.37 L 10.96 10.99 L 15.87 16.12 L 10.77 6.37 L 6.82 16.38 L 7.69 2.81 L 8.03 2.25" />
      <circle cx="19.09" cy="19.18" r="0.74" />
      <circle cx="9.65" cy="3.37" r="0.68" />
      <circle cx="10.96" cy="10.99" r="1.26" />
      <circle cx="15.87" cy="16.12" r="1.27" />
      <circle cx="10.77" cy="6.37" r="0.63" />
      <circle cx="6.82" cy="16.38" r="0.74" />
      <circle cx="7.69" cy="2.81" r="1.34" />
      <circle cx="8.03" cy="2.25" r="0.87" />
      {children}
    </svg>
  );
});

export default StereoPass;
