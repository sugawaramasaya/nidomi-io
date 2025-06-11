import IconButton from "./IconButton";
import MenuIcon from '../icons/size40/menu.svg';

export default {
  component: IconButton,
  title: "Components/IconButton",
  tags: ["autodocs"],
};

export const Fab = () => <IconButton icon={<MenuIcon />} variant="fab" />;