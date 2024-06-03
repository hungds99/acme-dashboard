import { fetchCardData } from '../../lib/data';

type CardData = {
  numberOfInvoices: number;
  numberOfCustomers: number;
  totalPaidInvoices: number;
  totalPendingInvoices: number;
};

export async function GET() {
  const cardData = (await fetchCardData()) as unknown as CardData;
  return Response.json({ ...cardData });
}
