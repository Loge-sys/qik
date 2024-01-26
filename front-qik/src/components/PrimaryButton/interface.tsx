interface PrimaryButtonProps {
    text: string;
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
    disabled: boolean | undefined
  }

 export type { PrimaryButtonProps }