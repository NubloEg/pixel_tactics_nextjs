export function PxToVw({
  px,
  scale = 1,
  view = 1920,
}: {
  px: number;
  scale?: number;
  view?: number;
}) {
  const Vw = ((px * 100) / view) * scale;

  return `${Vw}vw`;
}
