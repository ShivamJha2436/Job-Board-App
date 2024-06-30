"use server";

import { WorkOS } from "@workos-inc/node";

const workos = new WorkOS(process.env.WORKOS_API_KEY);

export async function createCompany(data: FormData){
  await workos.organizations.createOrganization({ name: data.get('newCompanyName') as string });
}