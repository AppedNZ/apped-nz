export default function Button({ text = "get a quote", addClass = "", ...props }) {
  return (
    <button {...props} className={`Button ${addClass}`}>
      <span> {text}</span>
    </button>
  );
}
