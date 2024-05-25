'use server';

import { auth } from '@/lib/auth';
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

export async function getSessionUser() {
  const session = await auth();
  const user = session?.user;
}