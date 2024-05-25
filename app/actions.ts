'use server';

import { deleteUserById } from '@/lib/db';
import { getSpecificEventById } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function deleteUser(userId: number) {
  // Uncomment this to enable deletion
  // await deleteUserById(userId);
  // revalidatePath('/');
}

export async function getEventDetails(userId: number) {
  const result = await getSpecificEventById(userId);
  return result[0];
}
