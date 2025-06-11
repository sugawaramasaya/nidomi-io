import IconButton from "./IconButton";
import CloseIcon from '../icons/size40/close.svg';

export default {
  component: IconButton,
  title: "Components/IconButton",
  tags: ["autodocs"],
};

export const Filled = () => <IconButton icon={<CloseIcon />} />;
export const Disabled = () => <IconButton icon={<CloseIcon />} disabled />;
export const Inverse = () => <IconButton icon={<CloseIcon />} variant="inverse" />;
export const InverseDisabled = () => <IconButton icon={<CloseIcon />} variant="inverse" disabled />;