import './Brand.scss';

type BrandProps = {
  theme?:string;
  size?:string;
}

export default function Brand ({ 
  theme = 'black', 
  size = 'rg'
  }: BrandProps) {

  return (
    <div className={`${theme}-brand ${size}`}></div>
  );
};