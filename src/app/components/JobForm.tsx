"use client";

import { RadioGroup, TextArea, TextField, Theme } from "@radix-ui/themes";
import { useState } from "react";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";

import "react-country-state-city/dist/react-country-state-city.css";

export default function JobForm() {
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);

  return (
    <Theme>
      <form
        action=""
        className="container mt-6 flex flex-col gap-4"
      >
        <TextField.Root placeholder="Job Title" />
        <div className="grid grid-cols-3 gap-6 *:grow ">
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
          <div className="font-medium">
            Salary (per year)
            <TextField.Root placeholder="Salary">
              <TextField.Slot>
                $
              </TextField.Slot>
            </TextField.Root>
          </div>
        </div>
        <div>
          <div className="font-medium">
            Location
            <div className="flex gap-4 *:grow">
              <CountrySelect
                onChange={(e) => {
                  setCountryid(e.id);
                }}
                placeHolder="Select Country"
              />
              <StateSelect
                countryid={countryid}
                onChange={(e) => {
                  setstateid(e.id);
                }}
                placeHolder="Select State"
              />
              <CitySelect
                countryid={countryid}
                stateid={stateid}
                onChange={(e) => {
                  console.log(e);
                }}
                placeHolder="Select City"
              />
            </div>
          </div>
        </div>
        <TextArea placeholder="Job Description" resize="vertical" />
      </form>
    </Theme>
  );
}