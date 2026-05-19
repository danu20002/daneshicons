import React from 'react';

export const iconData = {
  "id": "StereoEscape",
  "name": "StereoEscape",
  "category": "YK",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.82 9.94 L 21.02 4.04 L 17.51 5.77 L 2.27 9.07 L 11.05 14.90"
      }
    ],
    [
      "circle",
      {
        "cx": "7.82",
        "cy": "9.94",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "21.02",
        "cy": "4.04",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "17.51",
        "cy": "5.77",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "2.27",
        "cy": "9.07",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "11.05",
        "cy": "14.90",
        "r": "1.27"
      }
    ]
  ]
};

export const StereoEscape = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.82 9.94 L 21.02 4.04 L 17.51 5.77 L 2.27 9.07 L 11.05 14.90" />
      <circle cx="7.82" cy="9.94" r="0.78" />
      <circle cx="21.02" cy="4.04" r="1.38" />
      <circle cx="17.51" cy="5.77" r="1.07" />
      <circle cx="2.27" cy="9.07" r="1.02" />
      <circle cx="11.05" cy="14.90" r="1.27" />
      {children}
    </svg>
  );
});

export default StereoEscape;
