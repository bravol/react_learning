function Profile({ image }) {
  return <img src={image} alt="Katherine Johnson" />;
}

export default function Gallery() {
  return (
    <>
      <div>
        <h1>Amazing Scientists</h1>
        <Profile image="https://i.imgur.com/MK3eW3As.jpg" />
        <Profile image="https://i.imgur.com/MK3eW3As.jpg" />
        <Profile image="https://i.imgur.com/MK3eW3As.jpg" />
        <Profile image="https://i.imgur.com/MK3eW3As.jpg" />
      </div>
    </>
  );
}
