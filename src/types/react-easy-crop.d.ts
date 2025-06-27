declare module "react-easy-crop" {
  import { Component } from "react";

  export interface Point {
    x: number;
    y: number;
  }

  export interface Area {
    x: number;
    y: number;
    width: number;
    height: number;
  }

  export interface CropperProps {
    image: string;
    crop: Point;
    zoom: number;
    aspect?: number;
    onCropChange: (location: Point) => void;
    onCropComplete: (croppedArea: Area, croppedAreaPixels: Area) => void;
    onZoomChange: (zoom: number) => void;
    showGrid?: boolean;
    style?: {
      containerStyle?: React.CSSProperties;
      cropAreaStyle?: React.CSSProperties;
      mediaStyle?: React.CSSProperties;
    };
  }

  export default class Cropper extends Component<CropperProps> {}
}
