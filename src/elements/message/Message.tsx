import './Message.scss';

type MessageProps = {
  txt: string;
  theme?:string;
  size?:string;
  icon?:string;
}

export default function Message ({ 
  txt, 
  theme = 'gray', 
  size = 'rg', 
  icon 
  }: MessageProps) {

  return (
    <div className={`${theme}-msg ${size}`}>
      {icon && <i className="material-icons">{icon}</i>}
      <span>{ txt }</span>
    </div>
  );
};