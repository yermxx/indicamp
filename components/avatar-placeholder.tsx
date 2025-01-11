export default function AvatarPlaceholder({ name }: { name: string }) {
  return (
    <>
      <div className='avatar-placeholder'>{name.substring(0, 2)}</div>
    </>
  );
}
