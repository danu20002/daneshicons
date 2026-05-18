import React from 'react';

export const iconData = {
  id: "AlignHorizontalJustifyStart",
  name: "AlignHorizontalJustifyStart",
  category: "A",
  nodes: [["rect",{"width":"6","height":"14","x":"6","y":"5","rx":"2"}],["rect",{"width":"6","height":"10","x":"16","y":"7","rx":"2"}],["path",{"d":"M2 2v20"}]]
};

export const AlignHorizontalJustifyStart = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <rect width="6" height="14" x="6" y="5" rx="2" />
      <rect width="6" height="10" x="16" y="7" rx="2" />
      <path d="M2 2v20" />
      {children}
    </svg>
  );
});

export default AlignHorizontalJustifyStart;
