import { TopCard } from '../../../data/card';
import ClientCardPage from '../../../components/Purchase_Card/card';

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>
}) {
  const cardId = (await params).id
  const Card =
    TopCard.find((card: any) => card.id.toString() === cardId.toString()) || null;

  if (!Card) {
    return <div>Post not found!</div>;
  }

  return <ClientCardPage card={Card} />;
}
