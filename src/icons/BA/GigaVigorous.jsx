import React from 'react';

export const iconData = {
  "id": "GigaVigorous",
  "name": "GigaVigorous",
  "category": "BA",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.75 12.60 L 10.33 21.60 L 8.15 11.17 L 4.27 4.64 L 17.01 13.02 L 19.03 18.73 L 2.80 14.51 L 9.39 9.25"
      }
    ],
    [
      "circle",
      {
        "cx": "17.75",
        "cy": "12.60",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "10.33",
        "cy": "21.60",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "8.15",
        "cy": "11.17",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "4.27",
        "cy": "4.64",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "17.01",
        "cy": "13.02",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "19.03",
        "cy": "18.73",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "2.80",
        "cy": "14.51",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "9.39",
        "cy": "9.25",
        "r": "0.66"
      }
    ]
  ]
};

export const GigaVigorous = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.75 12.60 L 10.33 21.60 L 8.15 11.17 L 4.27 4.64 L 17.01 13.02 L 19.03 18.73 L 2.80 14.51 L 9.39 9.25" />
      <circle cx="17.75" cy="12.60" r="0.94" />
      <circle cx="10.33" cy="21.60" r="1.49" />
      <circle cx="8.15" cy="11.17" r="0.80" />
      <circle cx="4.27" cy="4.64" r="0.53" />
      <circle cx="17.01" cy="13.02" r="0.73" />
      <circle cx="19.03" cy="18.73" r="0.61" />
      <circle cx="2.80" cy="14.51" r="1.02" />
      <circle cx="9.39" cy="9.25" r="0.66" />
      {children}
    </svg>
  );
});

export default GigaVigorous;
