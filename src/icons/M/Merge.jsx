import React from 'react';

export const iconData = {
  id: "Merge",
  name: "Merge",
  category: "M",
  nodes: [["path",{"d":"m8 6 4-4 4 4"}],["path",{"d":"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"}],["path",{"d":"m20 22-5-5"}]]
};

export const Merge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="m8 6 4-4 4 4" />
      <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
      <path d="m20 22-5-5" />
      {children}
    </svg>
  );
});

export default Merge;
