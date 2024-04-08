import style from "./Description.module.css";

export default function Description({ header, text }) {
  return (
    <div>
      <h1 className={style.header}>{header}</h1>
      <p className={style.text}>{text}</p>
    </div>
  );
}
