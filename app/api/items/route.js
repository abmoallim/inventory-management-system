import { db } from '../../utils/firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

export default async function handler(req, res) {
  const { method, body } = req;

  try {
    switch (method) {
      case 'GET':
        const querySnapshot = await getDocs(collection(db, 'inventory'));
        const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log('Fetched items:', items);
        res.status(200).json(items);
        break;
      case 'POST':
        const docRef = await addDoc(collection(db, 'inventory'), body);
        console.log('Added item:', { id: docRef.id, ...body });
        res.status(201).json({ id: docRef.id, ...body });
        break;
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error('Error in API route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
