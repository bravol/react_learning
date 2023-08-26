function Cup({ guest }) {
  return (
    <div>
      <h2>Tea cup for guest # {guest}</h2>
    </div>
  );
}

export default function TeaSet() {
  return (
    <div>
      {/* passing props */}
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
      <Cup guest={4} />
    </div>
  );
}
