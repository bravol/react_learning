function Item({ name, isPacked }) {
  return (
    <div>
      <li>
        {name}
        {isPacked && "✔"}
      </li>
    </div>
  );
}

//component

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="brian Lumala" />
        <Item isPacked={true} name="Angel Praise" />
        <Item isPacked={false} name="Amanya Gilbert" />
        <Item isPacked={true} name="Lumala Brian Bravol" />
      </ul>
    </section>
  );
}
