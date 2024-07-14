import { RadioGroup, TextArea, TextField, Theme } from '@radix-ui/themes';
import { getUser } from "@workos-inc/authkit-nextjs";
import { WorkOS } from "@workos-inc/node";
import '@radix-ui/themes/styles.css';
import {
  CitySelect,
  CountrySelect,
  StateSelect,
  LanguageSelect,
} from 'react-country-state-city';
import "react-country-state-city/dist/react-country-state-city.css";

type PageProps = {
  params: {
    orgId: string;
  }
};

export default async function NewListingForOrgPage(props: PageProps) {
  const { user } = await getUser();
  const workos = new WorkOS(process.env.WORKOS_API_KEY);
  if (!user) {
    return "Login to use this page";
  }
  const orgId = props.params.orgId;
  const oms = await workos.userManagement.listOrganizationMemberships({ userId: user.id, organizationId: orgId });
  const hasAccess = oms.data.length > 0;

  if (!hasAccess) {
    return "You do not have access to this organization";
  }


  return (
    <Theme>
      <form
        action=""
        className="container mt-6 flex flex-col gap-4"
      >
        <TextField.Root placeholder="Job Title"/>
        <div className="flex gap-4 ">
          <div className="font-medium">
            Remote?
            <RadioGroup.Root defaultValue="hybrid" name="example">
                <RadioGroup.Item value="onsite">On-site</RadioGroup.Item>
                <RadioGroup.Item value="hybrid">Hybrid-Remote</RadioGroup.Item>
                <RadioGroup.Item value="remote">Fully Remote</RadioGroup.Item>
            </RadioGroup.Root>
          </div>
          <div className="font-medium">
            Full-Time?
            <RadioGroup.Root defaultValue="full" name="example">
                <RadioGroup.Item value="project">Project</RadioGroup.Item>
                <RadioGroup.Item value="part">Part-time</RadioGroup.Item>
                <RadioGroup.Item value="full">Full-time</RadioGroup.Item>
            </RadioGroup.Root>
          </div>
          <div>
            Location
          </div>
        </div>
        <TextArea placeholder="Job Description" resize="vertical"/>
      </form>
    </Theme>
  );
}