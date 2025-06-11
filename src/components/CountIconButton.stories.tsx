import CountIconButton from "./CountIconButton";
import HeartFilledIcon from '../icons/size40/heart-filled.svg';
import HeartOutlinedIcon from '../icons/size40/heart-outlined.svg';

export default {
  component: CountIconButton,
  title: "Components/CountIconButton",
  tags: ["autodocs"],
};

export const Filled = () => <CountIconButton icon={<HeartFilledIcon />} count={12} />;
export const Inverse = () => <CountIconButton icon={<HeartOutlinedIcon />} count={99} variant="inverse" />;
export const Disabled = () => <CountIconButton icon={<HeartFilledIcon />} count={0} disabled />;
